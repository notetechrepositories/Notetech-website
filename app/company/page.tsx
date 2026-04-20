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
        contentMinHeightClassName="min-h-[18rem] sm:min-h-[21rem] lg:min-h-[24rem]"
        backgroundDecor={
          <div className="absolute -inset-y-[18%] -right-[2%] hidden w-[45%] overflow-hidden [clip-path:polygon(0_32%,100%_0,100%_68%,0_100%)] lg:block">
            <img
              src="/imagery/capabilities-banner.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[56%_50%] saturate-[0.92] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(118deg,rgb(8_18_36/0.45)_0%,transparent_50%),linear-gradient(to_top,rgb(8_18_36/0.28)_0%,transparent_42%)]" />
          </div>
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

      <HomeSection tone="white" className="!bg-[#f6f2ea]">
        <SectionHeading
          eyebrow={companyLanding.sectionLabel}
          title={companyLanding.sectionTitle}
          description={companyLanding.sectionIntro}
          spacing="compact"
        />
        <LandingLinksCardGrid links={companyLanding.links} variant="beigeInteractive" />
      </HomeSection>

      <HomeSection tone="white" className="!bg-[#f6f2ea]">
        <SectionHeading
          eyebrow={companyLanding.featureLabel}
          title={companyLanding.featureTitle}
          description={companyLanding.featureIntro}
          spacing="compact"
        />
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {companyLanding.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[var(--radius-card)] border border-[#d3caba] bg-[#e5dfd3] p-7 shadow-[var(--shadow-card-value)] lg:p-8"
            >
              <p className="text-label">{companyLanding.featureLabel}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink">{feature.title}</h3>
              <p className="text-body-muted mt-3 text-sm leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection tone="white" className="!bg-[#f6f2ea]">
        <div className="overflow-hidden rounded-[var(--radius-card)] border border-[#d3caba] bg-[#e5dfd3] shadow-[var(--shadow-card-value)]">
          <VisualSlot
            slot="architecture"
            aspectClassName="h-48 sm:h-60 max-h-[14rem] sm:max-h-[17rem]"
            sizes="(max-width: 1024px) 100vw, 1100px"
            showEyebrow={false}
          />
        </div>
      </HomeSection>

      <HomeSection tone="white" className="!bg-[#f6f2ea] pb-24 lg:pb-28">
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
