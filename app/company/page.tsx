import CTASection from "@/components/home/CTASection";
import HomeSection from "@/components/home/HomeSection";
import SectionHeading from "@/components/home/SectionHeading";
import LandingLinksCardGrid from "@/components/nav/LandingLinksCardGrid";
import PageHero from "@/components/marketing/PageHero";
import Button from "@/components/ui/Button";
import { companyLanding } from "@/data/navLandings";
import type { Metadata } from "next";

const companyCircleImageByHref = {
  "/company/about": "/brand/notetech-logo-mark-black-bg.png",
  "/company/awards": "/imagery/awards-trophy.png",
  "/company/leadership": "/imagery/companyPage/leardeship.jpg",
  "/products": "/imagery/companyPage/Prodcut.jpg",
  "/selected-engagements": "/imagery/companyPage/engagement.jpg",
  "/company/careers": "/imagery/companyPage/careers.jpg",
  "/contact": "/imagery/contact-hud.png",
};

const companyCircleImageClassNameByHref = {
  "/company/about": "object-contain p-2 opacity-100 group-hover:scale-[1.04]",
  "/company/awards": "object-cover object-[50%_50%] opacity-100",
  "/company/leadership": "object-cover object-[50%_50%] opacity-100",
  "/products": "object-cover object-[58%_48%] opacity-100",
  "/selected-engagements": "object-cover object-[58%_48%] opacity-100",
  "/company/careers": "object-cover object-[42%_48%] opacity-100",
  "/contact": "object-cover object-[50%_50%] opacity-100",
};

const companyHideCircleOverlayByHref = {
  "/contact": true,
};

const companyCenteredCardContentByHref = {
  "/contact": true,
};

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
        <LandingLinksCardGrid
          links={companyLanding.links}
          circleImageByHref={companyCircleImageByHref}
          circleImageClassNameByHref={companyCircleImageClassNameByHref}
          hideCircleOverlayByHref={companyHideCircleOverlayByHref}
          centeredContentByHref={companyCenteredCardContentByHref}
          variant="beigeInteractive"
        />
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
            <div
              key={feature.title}
              className="rounded-[var(--radius-card)] border border-[#9dc4d0] bg-[#D1EAF0] p-7 shadow-[var(--shadow-card-value)] lg:p-8"
            >
              <p className="text-label text-[#3d6b7a]">{companyLanding.featureLabel}</p>
              <h3 className="mt-3 text-lg font-semibold text-[#0c2338]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#2a4f5c]">{feature.body}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection tone="white" className="!bg-[#f6f2ea] pb-24 lg:pb-28">
        <CTASection
          variant="band"
          bandTone="beige"
          bandImageSrc="/imagery/pexels-wood.jpg"
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
