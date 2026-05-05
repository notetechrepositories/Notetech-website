import DeliveryProcessTemplate from "@/components/content/DeliveryProcessTemplate";
import type { DocPageData } from "@/components/content/DocPageTemplate";
import { technologyPage } from "@/data/technologyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: technologyPage.metaTitle,
  description: technologyPage.metaDescription,
  openGraph: {
    title: `${technologyPage.heroTitle} · Notetech`,
    description: technologyPage.metaDescription,
    type: "website",
  },
};

const SECTION_IMAGES = [
  "/imagery/companyPage/engagement.jpg",
  "/imagery/companyPage/leardeship.jpg",
  "/imagery/service-dedicated-team.jpg",
] as const;

const technologyDocPage: DocPageData = {
  title: technologyPage.heroTitle,
  metaTitle: technologyPage.metaTitle,
  metaDescription: technologyPage.metaDescription,
  headline: technologyPage.headline,
  intro: technologyPage.intro,
  parentLabel: "Home",
  parentHref: "/",
  visualSlot: "technology",
  sectionImages: [...SECTION_IMAGES],
  sections: technologyPage.sections.map((section) => {
    const bullets = "bullets" in section ? section.bullets : undefined;
    return {
      title: section.title,
      description: section.description,
      bullets: Array.isArray(bullets) ? bullets : undefined,
      subsections: section.subsections?.map((sub) => ({
        heading: sub.heading,
        bullets: [...sub.bullets],
      })),
    };
  }),
  cta: {
    title: technologyPage.finalCtaTitle,
    description: `${technologyPage.finalCtaDescription} ${technologyPage.finalFootnote}`,
    primaryLabel: technologyPage.finalPrimaryCtaLabel,
    primaryHref: technologyPage.finalPrimaryCtaHref,
    secondaryLabel: technologyPage.finalSecondaryCtaLabel,
    secondaryHref: technologyPage.finalSecondaryCtaHref,
  },
};

export default function TechnologyPage() {
  return <DeliveryProcessTemplate page={technologyDocPage} />;
}
