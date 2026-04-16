import CaseStudyDetailTemplate from "@/components/case-studies/CaseStudyDetailTemplate";
import { getCaseStudy, getCaseStudySlugs } from "@/lib/content/case-studies";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study" };

  return {
    title: study.metaTitle ?? study.title,
    description: study.metaDescription ?? study.summary,
    openGraph: {
      title: `${study.title} · Notetech`,
      description: study.metaDescription ?? study.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage(props: Props) {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return <CaseStudyDetailTemplate study={study} />;
}
