// app/api/case-studies/[slug]/route.ts

import { NextResponse } from "next/server";
import { getPayloadClient } from "@/lib/payload";

export const runtime = "nodejs";

export async function GET(
  _req: Request,
  context: RouteContext<"/api/case-studies/[slug]">,
) {
  try {
    const { slug } = await context.params;
    const payload = await getPayloadClient();

    const result = await payload.find({
      collection: "case-studies",
      where: { slug: { equals: slug } },
      limit: 1,
    });

    const doc = result.docs[0];
    if (doc) return NextResponse.json(doc);
    return NextResponse.json({ error: "Case study not found" }, { status: 404 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}