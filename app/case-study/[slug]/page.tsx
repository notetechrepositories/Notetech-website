import type { Metadata } from "next";
import { notFound } from "next/navigation";

type CaseStudy = {
  title: string;
  summary: string;
  techStack?: { tech: string }[];
  outcome: string;
  metaTitle?: string;
  metaDescription?: string;
  openGraphImage?: string | { url?: string } | null;
};

function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const res = await fetch(`${getBaseUrl()}/api/case-studies/${slug}`, {
    cache: "no-store",
  });
  if (res.status === 404 || !res.ok) return null;
  const data: unknown = await res.json();
  if (data && typeof data === "object" && "error" in data) return null;
  return data as CaseStudy;
}

function ogImageUrl(cs: CaseStudy): string | undefined {
  const og = cs.openGraphImage;
  if (typeof og === "string") return og;
  if (og && typeof og === "object" && typeof og.url === "string") return og.url;
  return undefined;
}

export async function generateMetadata(
  props: PageProps<"/case-study/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const cs = await getCaseStudy(slug);
  if (!cs) return { title: "Case study" };

  const og = ogImageUrl(cs);

  return {
    title: cs.metaTitle ?? cs.title,
    description: cs.metaDescription ?? cs.summary,
    openGraph: og ? { images: [{ url: og }] } : undefined,
  };
}

export default async function CaseStudyPage(
  props: PageProps<"/case-study/[slug]">,
) {
  const { slug } = await props.params;
  const caseStudy = await getCaseStudy(slug);
  if (!caseStudy) notFound();

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
        {caseStudy.title}
      </h1>
      <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
        {caseStudy.summary}
      </p>

      {caseStudy.techStack && caseStudy.techStack.length > 0 && (
        <>
          <h2 className="mt-8 text-xl font-semibold text-zinc-900 sm:text-2xl">
            Tech stack
          </h2>
          <ul className="mt-3 grid list-inside list-disc gap-1 text-sm text-zinc-700 sm:text-base">
            {caseStudy.techStack.map((item, idx) => (
              <li key={idx}>{item.tech}</li>
            ))}
          </ul>
        </>
      )}

      <h2 className="mt-8 text-xl font-semibold text-zinc-900 sm:text-2xl">
        Outcome
      </h2>
      <p className="mt-3 text-sm leading-7 text-zinc-700 sm:text-base">
        {caseStudy.outcome}
      </p>
    </div>
  );
}
