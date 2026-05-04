import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getPool } from "@/lib/db";

export const runtime = "nodejs";
/** Avoid static analysis / build issues for this route */
export const dynamic = "force-dynamic";

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return null;
  return new Resend(key);
}

/**
 * Demo / design preview: no DB, email, captcha, or rate limits.
 * Amplify: set `CONTACT_BACKEND_DISABLED=true` (server) and/or `NEXT_PUBLIC_CONTACT_DEMO=true` (client + server).
 */
function isContactBackendDisabled(): boolean {
  const flag = (v: string | undefined) => v === "1" || v?.toLowerCase() === "true";
  return (
    flag(process.env.CONTACT_BACKEND_DISABLED) || flag(process.env.NEXT_PUBLIC_CONTACT_DEMO)
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function str(v: unknown, max: number): string | null {
  if (v == null) return null;
  const s = String(v).trim();
  return s ? s.slice(0, max) : null;
}

function requireStr(v: unknown, max: number): string | null {
  return str(v, max);
}

async function verifyHCaptcha(token: string): Promise<boolean> {
  const secret = process.env.HCAPTCHA_SECRET;
  if (!secret) {
    console.warn("HCAPTCHA_SECRET not set — skipping captcha verification");
    return true;
  }
  const res = await fetch("https://api.hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

/**
 * Returns true if the IP is under the rate limit (max 5 submissions per hour).
 * Uses the contact_rate_limits Postgres table so it works across serverless instances.
 */
async function checkRateLimit(ip: string): Promise<boolean> {
  const pool = getPool();
  // Truncate to the current hour window
  const windowStart = new Date();
  windowStart.setMinutes(0, 0, 0);

  const result = await pool.query<{ hit_count: number }>(
    `INSERT INTO contact_rate_limits (ip, window_start, hit_count)
     VALUES ($1, $2, 1)
     ON CONFLICT (ip, window_start)
     DO UPDATE SET hit_count = contact_rate_limits.hit_count + 1
     RETURNING hit_count`,
    [ip, windowStart.toISOString()],
  );

  const hits = result.rows[0]?.hit_count ?? 1;
  return hits <= 5;
}

function buildEmailHtml(fields: {
  fullName: string;
  workEmail: string;
  phoneNumber: string | null;
  company: string | null;
  role: string | null;
  lookingFor: string | null;
  projectSummary: string | null;
  timeline: string | null;
  securityRequirements: string | null;
  contactMethod: string | null;
}): string {
  const row = (label: string, value: string | null) =>
    value
      ? `<tr>
           <td style="padding:6px 12px;font-weight:600;white-space:nowrap;color:#555;vertical-align:top;">${label}</td>
           <td style="padding:6px 12px;color:#111;">${value.replace(/\n/g, "<br>")}</td>
         </tr>`
      : "";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:sans-serif;font-size:14px;color:#222;margin:0;padding:24px;">
  <h2 style="margin:0 0 16px;font-size:18px;">New contact lead from notetech.com</h2>
  <table cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;max-width:600px;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
    ${row("Name", fields.fullName)}
    ${row("Work email", fields.workEmail)}
    ${row("Phone", fields.phoneNumber)}
    ${row("Company", fields.company)}
    ${row("Role", fields.role)}
    ${row("Looking for", fields.lookingFor)}
    ${row("Timeline", fields.timeline)}
    ${row("Contact method", fields.contactMethod)}
    ${row("Security / IP", fields.securityRequirements)}
    ${row("Project summary", fields.projectSummary)}
  </table>
  <p style="margin-top:20px;font-size:12px;color:#999;">Submitted via the notetech.com contact form.</p>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------

export async function POST(req: Request) {
  // 1. Parse body
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // 2. Validate required fields
  const fullName = requireStr(body.fullName, 200);
  const workEmail = requireStr(body.workEmail, 320);
  const company = str(body.company, 200);
  const lookingFor = str(body.lookingFor, 120);
  const projectSummary = str(body.projectSummary, 8000);
  const timeline = str(body.timeline, 80);

  if (!fullName || !workEmail) {
    return NextResponse.json(
      { error: "fullName and workEmail are required" },
      { status: 400 },
    );
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail);
  if (!emailValid) {
    return NextResponse.json({ error: "Invalid work email" }, { status: 400 });
  }

  if (!company || !lookingFor || !projectSummary || !timeline) {
    return NextResponse.json(
      { error: "company, lookingFor, projectSummary, and timeline are required" },
      { status: 400 },
    );
  }

  const fields = {
    fullName,
    workEmail,
    phoneNumber: str(body.phoneNumber, 80),
    company,
    role: str(body.role, 120),
    lookingFor,
    projectSummary,
    timeline,
    securityRequirements: str(body.securityRequirements, 2000),
    contactMethod: str(body.contactMethod, 80),
  };

  if (isContactBackendDisabled()) {
    console.info("contact: CONTACT_BACKEND_DISABLED — skipping captcha, DB, email");
    return NextResponse.json({ ok: true, demo: true }, { status: 201 });
  }

  // 3. hCaptcha verification
  const captchaToken = str(body.captchaToken, 2000);
  if (!captchaToken) {
    return NextResponse.json(
      { error: "Please complete the CAPTCHA" },
      { status: 400 },
    );
  }
  const captchaOk = await verifyHCaptcha(captchaToken);
  if (!captchaOk) {
    return NextResponse.json(
      { error: "CAPTCHA verification failed. Please try again." },
      { status: 400 },
    );
  }

  // 4. Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  let withinLimit = true;
  try {
    withinLimit = await checkRateLimit(ip);
  } catch (e) {
    console.error("Rate limit check failed:", e);
    // Fail open — don't block a real lead if the rate-limit table errors
  }

  if (!withinLimit) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 },
    );
  }

  // 5. Insert into Postgres
  try {
    const pool = getPool();
    await pool.query(
      `INSERT INTO contact_leads (
        full_name, work_email, phone_number, company, role,
        looking_for, project_summary, timeline, security_requirements, contact_method
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [
        fields.fullName,
        fields.workEmail,
        fields.phoneNumber,
        fields.company,
        fields.role,
        fields.lookingFor,
        fields.projectSummary,
        fields.timeline,
        fields.securityRequirements,
        fields.contactMethod,
      ],
    );
  } catch (e) {
    console.error("contact_leads insert failed:", e);
    return NextResponse.json(
      { error: "Failed to save your request. Please try again." },
      { status: 500 },
    );
  }

  // 6. Send email to sales
  const resend = getResend();
  if (resend) {
    try {
      await resend.emails.send({
        from: "noreply@notetech.com",
        to: "sales@notetech.com",
        subject: `New lead: ${fields.fullName} from ${fields.company ?? "unknown"}`,
        html: buildEmailHtml(fields),
        replyTo: fields.workEmail,
      });
    } catch (e) {
      // Email failure must not surface as a user error — lead is already saved
      console.error("Resend email failed:", e);
    }
  } else {
    console.warn("RESEND_API_KEY not set — skipping notification email (lead saved in DB)");
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
