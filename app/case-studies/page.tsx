import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import ConfidentialityNote from "@/components/home/ConfidentialityNote";
import PageHero from "@/components/marketing/PageHero";
import Container from "@/components/ui/Container";
import VisualSlot from "@/components/visuals/VisualSlot";
import { caseStudiesListingIntro } from "@/data/case-studies";
import { getAllCaseStudies } from "@/lib/content/case-studies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: caseStudiesListingIntro.title,
  description: caseStudiesListingIntro.intro,
  openGraph: {
    title: `${caseStudiesListingIntro.title} · Notetech`,
    description: caseStudiesListingIntro.intro,
    type: "website",
  },
};

export default function CaseStudiesListingPage() {
  const studies = getAllCaseStudies();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case studies" }]}
        title={caseStudiesListingIntro.title}
        subtitle={caseStudiesListingIntro.headline}
        description={caseStudiesListingIntro.intro}
        aside={
          <VisualSlot
            slot="case-studies"
            aspectClassName="aspect-[4/3] sm:aspect-[16/11]"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        }
      />

      <Container className="pb-section pt-6">
        <ConfidentialityNote>
          Representative summaries only. Many references are shared under NDA with
          qualified prospects.
        </ConfidentialityNote>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {studies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              title={study.title}
              summary={study.summary}
              stack=""
              stackItems={study.stack}
              outcome={study.outcome}
              href={`/case-studies/${study.slug}`}
              ndaSafe={study.ndaSafe}
            />
          ))}
        </div>
        <div className="surface-card mt-10 overflow-hidden border-primary/12">
          <VisualSlot
            slot="architecture"
            aspectClassName="h-44 sm:h-56"
            sizes="(max-width: 1024px) 100vw, 1100px"
            showEyebrow={false}
          />
        </div>
      </Container>
    </>
  );
}
