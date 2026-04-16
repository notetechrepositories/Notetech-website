import DocPageTemplate from "@/components/content/DocPageTemplate";
import {
  HOW_WE_WORK_SLUGS,
  howWeWorkPages,
} from "@/data/howWeWorkPages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return HOW_WE_WORK_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const page = howWeWorkPages[slug as keyof typeof howWeWorkPages];
  if (!page) return { title: "How We Work" };

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

export default async function HowWeWorkDetailPage(props: Props) {
  const { slug } = await props.params;
  const page = howWeWorkPages[slug as keyof typeof howWeWorkPages];
  if (!page) notFound();

  return <DocPageTemplate page={page} />;
}
