import CTASection from "@/components/home/CTASection";
import HomeSection from "@/components/home/HomeSection";
import SectionHeading from "@/components/home/SectionHeading";
import LandingLinksCardGrid from "@/components/nav/LandingLinksCardGrid";
import PageHero from "@/components/marketing/PageHero";
import Button from "@/components/ui/Button";
import VisualSlot from "@/components/visuals/VisualSlot";
import { resourcesLanding } from "@/data/navLandings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: resourcesLanding.metaTitle,
  description: resourcesLanding.metaDescription,
  openGraph: {
    title: `${resourcesLanding.heroTitle} · Notetech`,
    description: resourcesLanding.metaDescription,
    type: "website",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        title={resourcesLanding.heroTitle}
        subtitle={resourcesLanding.headline}
        description={resourcesLanding.intro}
        aside={
          <VisualSlot
            slot="technology"
            aspectClassName="aspect-[4/3] sm:aspect-[16/11]"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        }
      >
        <Button href={resourcesLanding.primaryCtaHref} variant="primary" className="px-6">
          {resourcesLanding.primaryCtaLabel}
        </Button>
        {resourcesLanding.secondaryCtaHref && resourcesLanding.secondaryCtaLabel ? (
          <Button
            href={resourcesLanding.secondaryCtaHref}
            variant="ghostOnDark"
            className="px-6"
          >
            {resourcesLanding.secondaryCtaLabel}
          </Button>
        ) : null}
      </PageHero>

      <HomeSection tone="subtle">
        <SectionHeading
          eyebrow={resourcesLanding.sectionLabel}
          title={resourcesLanding.sectionTitle}
          description={resourcesLanding.sectionIntro}
          spacing="compact"
        />
        <LandingLinksCardGrid links={resourcesLanding.links} />
      </HomeSection>

      <HomeSection tone="patterned">
        <SectionHeading
          eyebrow={resourcesLanding.featureLabel}
          title={resourcesLanding.featureTitle}
          description={resourcesLanding.featureIntro}
          spacing="compact"
        />
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {resourcesLanding.features.map((feature) => (
            <div key={feature.title} className="surface-card p-7 lg:p-8">
              <p className="text-label">{resourcesLanding.featureLabel}</p>
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
          title="Need something specific?"
          description="If you are looking for a practical resource, a relevant case study, or help evaluating your next delivery decision, we can point you in the right direction."
          primaryLabel="View Services"
          primaryHref="/services"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
          forcePrimaryButtons
        />
      </HomeSection>
    </>
  );
}
