import CTASection from "@/components/home/CTASection";
import HomeSection from "@/components/home/HomeSection";
import SectionHeading from "@/components/home/SectionHeading";
import LandingLinksCardGrid from "@/components/nav/LandingLinksCardGrid";
import PageHero from "@/components/marketing/PageHero";
import Button from "@/components/ui/Button";
import VisualSlot from "@/components/visuals/VisualSlot";
import { howWeWorkLanding } from "@/data/navLandings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: howWeWorkLanding.metaTitle,
  description: howWeWorkLanding.metaDescription,
  openGraph: {
    title: `${howWeWorkLanding.heroTitle} · Notetech`,
    description: howWeWorkLanding.metaDescription,
    type: "website",
  },
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "How We Work" }]}
        title={howWeWorkLanding.heroTitle}
        subtitle={howWeWorkLanding.headline}
        description={howWeWorkLanding.intro}
        aside={
          <VisualSlot
            slot="services"
            aspectClassName="aspect-[4/3] sm:aspect-[16/11]"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        }
      >
        <Button href={howWeWorkLanding.primaryCtaHref} variant="primary" className="px-6">
          {howWeWorkLanding.primaryCtaLabel}
        </Button>
        {howWeWorkLanding.secondaryCtaHref && howWeWorkLanding.secondaryCtaLabel ? (
          <Button
            href={howWeWorkLanding.secondaryCtaHref}
            variant="ghostOnDark"
            className="px-6"
          >
            {howWeWorkLanding.secondaryCtaLabel}
          </Button>
        ) : null}
      </PageHero>

      <HomeSection tone="subtle">
        <SectionHeading
          eyebrow={howWeWorkLanding.sectionLabel}
          title={howWeWorkLanding.sectionTitle}
          description={howWeWorkLanding.sectionIntro}
          spacing="compact"
        />
        <LandingLinksCardGrid links={howWeWorkLanding.links} />
      </HomeSection>

      <HomeSection tone="patterned">
        <SectionHeading
          eyebrow={howWeWorkLanding.featureLabel}
          title={howWeWorkLanding.featureTitle}
          description={howWeWorkLanding.featureIntro}
          spacing="compact"
        />
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {howWeWorkLanding.features.map((feature) => (
            <div key={feature.title} className="surface-card p-7 lg:p-8">
              <p className="text-label">{howWeWorkLanding.featureLabel}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink">{feature.title}</h3>
              <p className="text-body-muted mt-3 text-sm leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection tone="white">
        <div className="surface-card overflow-hidden border-primary/12">
          <VisualSlot
            slot="quality"
            aspectClassName="h-48 sm:h-60 max-h-[14rem] sm:max-h-[17rem]"
            sizes="(max-width: 1024px) 100vw, 1100px"
            showEyebrow={false}
          />
        </div>
      </HomeSection>

      <HomeSection tone="patterned" className="pb-24 lg:pb-28">
        <CTASection
          variant="band"
          title="Ready to start?"
          description="Tell us what you are building and your timeline. We will recommend the lowest-risk path and a team model aligned to your roadmap."
          primaryLabel="Schedule a Call"
          primaryHref="/contact"
          secondaryLabel="View Case Studies"
          secondaryHref="/case-studies"
          forcePrimaryButtons
        />
      </HomeSection>
    </>
  );
}
