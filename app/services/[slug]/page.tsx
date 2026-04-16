import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { getService, getServiceSlugs } from "@/lib/content/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return { title: "Service" };

  return {
    title: service.metaTitle ?? service.title,
    description: service.metaDescription ?? service.intro,
    openGraph: {
      title: `${service.title} · Notetech`,
      description: service.metaDescription ?? service.intro,
      type: "article",
    },
  };
}

export default async function ServiceDetailPage(props: Props) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
