"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Button from "@/components/ui/Button";

type FormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

async function submitContactForm(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const payload = {
    fullName: formData.get("fullName"),
    workEmail: formData.get("workEmail"),
    phoneNumber: formData.get("phoneNumber"),
    company: formData.get("company"),
    role: formData.get("role"),
    lookingFor: formData.get("lookingFor"),
    projectSummary: formData.get("projectSummary"),
    timeline: formData.get("timeline"),
    securityRequirements: formData.get("securityRequirements"),
    contactMethod: formData.get("contactMethod"),
    captchaToken: formData.get("captchaToken"),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      return {
        status: "error",
        message:
          data.error ??
          "Something went wrong. Please email us directly at sales@notetech.com.",
      };
    }

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please email us directly at sales@notetech.com.",
    };
  }
}

const LOOKING_FOR_OPTIONS = [
  { value: "", label: "Select an option" },
  { value: "dedicated-team", label: "Dedicated development team" },
  { value: "product-development", label: "Product development" },
  { value: "cloud-aws", label: "Cloud / AWS modernization" },
  { value: "qa-automation", label: "QA / test automation" },
  { value: "support-maintenance", label: "Support & maintenance" },
  { value: "integrations-apis", label: "Integrations & APIs" },
];

const TIMELINE_OPTIONS = [
  { value: "", label: "Select a timeline" },
  { value: "asap", label: "ASAP" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "exploring", label: "Exploring" },
];

const labelClass = "block text-sm font-semibold text-headline mb-1.5";
const inputClass =
  "w-full rounded-[var(--radius-card)] border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-headline placeholder:text-ink-subtle focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/15 transition-[border-color,box-shadow] duration-200";
const optionalBadge = (
  <span className="ml-1.5 text-xs font-normal text-ink-subtle">(optional)</span>
);

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContactForm, {
    status: "idle",
  });

  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  useEffect(() => {
    if (state.status === "error") {
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-[var(--radius-card)] border border-primary/20 bg-badge-soft px-6 py-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <svg
            className="h-5 w-5 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p className="text-base font-semibold text-headline">Request received</p>
          <p className="mt-1 text-sm text-ink-muted">
            Thank you. We typically respond within 1 business day. If you need
            something urgent, email us at{" "}
            <a
              href="mailto:sales@notetech.com"
              className="text-primary underline underline-offset-2"
            >
              sales@notetech.com
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} action={action} noValidate className="space-y-5">
      {/* Row: Full name + Work email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="workEmail" className={labelClass}>
            Work email
          </label>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      {/* Phone number */}
      <div>
        <label htmlFor="phoneNumber" className={labelClass}>
          Phone number {optionalBadge}
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          autoComplete="tel"
          className={inputClass}
          placeholder="+91 98765 43210"
        />
      </div>

      {/* Row: Company + Role */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={inputClass}
            placeholder="Acme Corp"
          />
        </div>
        <div>
          <label htmlFor="role" className={labelClass}>
            Your role {optionalBadge}
          </label>
          <input
            id="role"
            name="role"
            type="text"
            autoComplete="organization-title"
            className={inputClass}
            placeholder="VP Engineering, Product Manager, IT Director"
          />
        </div>
      </div>

      {/* What are you looking for */}
      <div>
        <label htmlFor="lookingFor" className={labelClass}>
          What are you looking for?
        </label>
        <div className="relative">
          <select
            id="lookingFor"
            name="lookingFor"
            required
            defaultValue=""
            className={`${inputClass} appearance-none pr-9`}
          >
            {LOOKING_FOR_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} disabled={o.value === ""}>
                {o.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              className="h-4 w-4 text-ink-subtle"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden
            >
              <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Project summary */}
      <div>
        <label htmlFor="projectSummary" className={labelClass}>
          Project summary
        </label>
        <textarea
          id="projectSummary"
          name="projectSummary"
          rows={4}
          required
          className={`${inputClass} resize-y`}
          placeholder="What are you building? What's the current stack? Any constraints?"
        />
      </div>

      {/* Row: Timeline + Preferred contact method */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline
          </label>
          <div className="relative">
            <select
              id="timeline"
              name="timeline"
              required
              defaultValue=""
              className={`${inputClass} appearance-none pr-9`}
            >
              {TIMELINE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value} disabled={o.value === ""}>
                  {o.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="h-4 w-4 text-ink-subtle"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden
              >
                <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <p className={labelClass}>
            Preferred contact {optionalBadge}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {(
              [
                { value: "email", label: "Email" },
                { value: "phone", label: "Phone / WhatsApp" },
              ] as const
            ).map((opt) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-2 rounded-[var(--radius-card)] border border-border-subtle bg-surface px-3.5 py-2 text-sm font-medium text-ink has-[:checked]:border-primary/40 has-[:checked]:bg-badge-soft has-[:checked]:text-primary transition-colors duration-150"
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={opt.value}
                  className="accent-primary"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Security / IP requirements */}
      <div>
        <label htmlFor="securityRequirements" className={labelClass}>
          Security / IP requirements {optionalBadge}
        </label>
        <input
          id="securityRequirements"
          name="securityRequirements"
          type="text"
          className={inputClass}
          placeholder="NDA, repo access preferences, data restrictions, etc."
        />
      </div>

      {/* Hidden field carries the captcha token into FormData */}
      <input type="hidden" name="captchaToken" value={captchaToken ?? ""} />

      {/* hCaptcha widget */}
      <div className="flex justify-start">
        <HCaptcha
          ref={captchaRef}
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? "10000000-ffff-ffff-ffff-000000000001"}
          onVerify={(token) => setCaptchaToken(token)}
          onExpire={() => setCaptchaToken(null)}
        />
      </div>

      {state.status === "error" && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      <div className="flex flex-col items-center gap-3 pt-1">
        <Button
          type="submit"
          disabled={pending || !captchaToken}
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm"
        >
          {pending ? (
            "Submitting…"
          ) : (
            <>
              Submit Request
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M2 7h10M7 2l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </Button>
        <div className="flex items-center justify-center gap-2 text-center">
          <svg
            className="mt-px h-3.5 w-3.5 shrink-0 text-primary"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden
          >
            <path
              d="M8 1.5l-2.2 3.8h2l-1.2 3.1 3.8-4.2H8.5L10 1.5z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-xs leading-tight text-ink-subtle">
            Typically responding within 1 business day.
          </p>
        </div>
      </div>
    </form>
  );
}
