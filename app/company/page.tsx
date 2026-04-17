import CTASection from "@/components/home/CTASection";
import HomeSection from "@/components/home/HomeSection";
import SectionHeading from "@/components/home/SectionHeading";
import LandingLinksCardGrid from "@/components/nav/LandingLinksCardGrid";
import PageHero from "@/components/marketing/PageHero";
import Button from "@/components/ui/Button";
import VisualSlot from "@/components/visuals/VisualSlot";
import { companyLanding } from "@/data/navLandings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: companyLanding.metaTitle,
  description: companyLanding.metaDescription,
  openGraph: {
    title: `${companyLanding.heroTitle} · Notetech`,
    description: companyLanding.metaDescription,
    type: "website",
  },
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Company" }]}
        title={companyLanding.heroTitle}
        subtitle={companyLanding.headline}
        description={companyLanding.intro}
        aside={
          <VisualSlot
            slot="case-studies"
            aspectClassName="aspect-[4/3] sm:aspect-[16/11]"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        }
      >
        <Button href={companyLanding.primaryCtaHref} variant="primary" className="px-6">
          {companyLanding.primaryCtaLabel}
        </Button>
        {companyLanding.secondaryCtaHref && companyLanding.secondaryCtaLabel ? (
          <Button
            href={companyLanding.secondaryCtaHref}
            variant="primary"
            className="px-6"
          >
            {companyLanding.secondaryCtaLabel}
          </Button>
        ) : null}
      </PageHero>

      <HomeSection tone="subtle">
        <SectionHeading
          eyebrow={companyLanding.sectionLabel}
          title={companyLanding.sectionTitle}
          description={companyLanding.sectionIntro}
          spacing="compact"
        />
        <LandingLinksCardGrid links={companyLanding.links} />
      </HomeSection>

      <HomeSection tone="patterned">
        <SectionHeading
          eyebrow={companyLanding.featureLabel}
          title={companyLanding.featureTitle}
          description={companyLanding.featureIntro}
          spacing="compact"
        />
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {companyLanding.features.map((feature) => (
            <div key={feature.title} className="surface-card p-7 lg:p-8">
              <p className="text-label">{companyLanding.featureLabel}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink">{feature.title}</h3>
              <p className="text-body-muted mt-3 text-sm leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection tone="white">
        <div className="surface-card overflow-hidden border-primary/12">
          <VisualSlot
            slot="architecture"
            aspectClassName="h-48 sm:h-60 max-h-[14rem] sm:max-h-[17rem]"
            sizes="(max-width: 1024px) 100vw, 1100px"
            showEyebrow={false}
          />
        </div>
      </HomeSection>

      <HomeSection tone="patterned" className="pb-24 lg:pb-28">
        <CTASection
          variant="band"
          title="Talk with Notetech"
          description="If you are looking for stable engineering capacity, clear governance, and a long-term delivery partner, we are happy to discuss your roadmap."
          primaryLabel="Contact Us"
          primaryHref="/contact"
          secondaryLabel="View Case Studies"
          secondaryHref="/case-studies"
          forcePrimaryButtons
        />
      </HomeSection>
    </>
  );
}
