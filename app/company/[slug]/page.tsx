import DocPageTemplate from "@/components/content/DocPageTemplate";
import { COMPANY_SLUGS, companyPages } from "@/data/companyPages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return COMPANY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const page = companyPages[slug as keyof typeof companyPages];
  if (!page) return { title: "Company" };

  return {
    title: page.metaTitle ?? page.title,
    description: page.metaDescription,
    openGraph: {
      title: `${page.title} · Notetech`,
      description: page.metaDescription,
      type: "article",
    },
  };
}

export default async function CompanyDetailPage(props: Props) {
  const { slug } = await props.params;
  const page = companyPages[slug as keyof typeof companyPages];
  if (!page) notFound();

  return <DocPageTemplate page={page} />;
}
