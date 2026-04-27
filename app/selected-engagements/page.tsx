import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import CTASection from "@/components/home/CTASection";
import ConfidentialityNote from "@/components/home/ConfidentialityNote";
import HomeSection from "@/components/home/HomeSection";
import SectionHeading from "@/components/home/SectionHeading";
import PageHero from "@/components/marketing/PageHero";
import VisualSlot from "@/components/visuals/VisualSlot";
import {
  selectedEngagements,
  selectedEngagementsLanding,
} from "@/data/selected-engagements";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: selectedEngagementsLanding.metaTitle,
  description: selectedEngagementsLanding.metaDescription,
  openGraph: {
    title: `${selectedEngagementsLanding.title} · Notetech`,
    description: selectedEngagementsLanding.metaDescription,
    type: "website",
  },
};

export default function SelectedEngagementsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Selected Engagements" }]}
        title={selectedEngagementsLanding.title}
        subtitle={selectedEngagementsLanding.headline}
        description={selectedEngagementsLanding.intro}
        tone="beigePattern"
        contentMinHeightClassName="min-h-[18rem] sm:min-h-[21rem] lg:min-h-[24rem]"
        backgroundDecor={
          <div className="absolute -inset-y-[18%] -right-[2%] hidden w-[45%] overflow-hidden [clip-path:polygon(0_32%,100%_0,100%_68%,0_100%)] lg:block">
            <Image
              src="/imagery/companyPage/engagement.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="absolute inset-0 h-full w-full object-cover object-[58%_48%] saturate-[0.92] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(118deg,rgb(8_18_36/0.45)_0%,transparent_50%),linear-gradient(to_top,rgb(8_18_36/0.28)_0%,transparent_42%)]" />
          </div>
        }
      />

      <HomeSection tone="white">
        <ConfidentialityNote>
          Representative summaries only. Client names and selected product details
          remain confidential and can be expanded under NDA where appropriate.
        </ConfidentialityNote>

        <SectionHeading
          eyebrow="Representative programs"
          title="Selected engagement snapshots"
          description="A quick view of the long-term partnerships highlighted in the engagement material, summarized in NDA-safe form."
          spacing="compact"
        />
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {selectedEngagements.map((engagement) => (
            <CaseStudyCard
              key={engagement.slug}
              title={engagement.title}
              summary={engagement.summary}
              stack=""
              stackItems={engagement.stack}
              outcome={engagement.outcome}
              href={`/selected-engagements#${engagement.slug}`}
              linkLabel="Read summary"
              ndaSafe
            />
          ))}
        </div>
      </HomeSection>

      <HomeSection tone="patterned">
        {selectedEngagements.map((engagement) => (
          <section
            key={engagement.slug}
            id={engagement.slug}
            className="border-border-subtle border-t py-12 first:border-t-0 first:pt-0 lg:py-14"
          >
            <SectionHeading
              eyebrow="Engagement summary"
              title={engagement.title}
              description={engagement.summary}
              spacing="compact"
            />
            <div className="grid gap-4">
              {engagement.details.map((detail) => (
                <div
                  key={detail}
                  className="motion-interactive flex gap-3 rounded-[var(--radius-card)] border border-border-subtle bg-surface p-4 text-sm text-ink shadow-card"
                >
                  <span className="text-primary mt-0.5 font-semibold" aria-hidden>
                    —
                  </span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </HomeSection>

      <HomeSection tone="white">
        <div className="surface-card overflow-hidden border-primary/12">
          <VisualSlot
            slot="architecture"
            aspectClassName="h-44 sm:h-56"
            sizes="(max-width: 1024px) 100vw, 1100px"
            showEyebrow={false}
          />
        </div>
      </HomeSection>

      <HomeSection tone="patterned" className="pb-24 lg:pb-28">
        <CTASection
          variant="band"
          title="Discuss relevant engagements under NDA"
          description="If one of these programs is close to your environment, we can share additional context and recommend a delivery model aligned to your roadmap."
          primaryLabel="Schedule a Call"
          primaryHref="/contact"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
          forcePrimaryButtons
        />
      </HomeSection>
    </>
  );
}
