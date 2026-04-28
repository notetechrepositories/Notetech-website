import CTASection from "@/components/home/CTASection";
import HomeSection from "@/components/home/HomeSection";
import SectionHeading from "@/components/home/SectionHeading";
import LandingLinksCardGrid from "@/components/nav/LandingLinksCardGrid";
import PageHero from "@/components/marketing/PageHero";
import Button from "@/components/ui/Button";
import { howWeWorkLanding } from "@/data/navLandings";
import type { Metadata } from "next";

const howWeWorkCircleImageByHref = {
  "/how-we-work/engagement-models": "/imagery/2623597.jpg",
  "/how-we-work/delivery-process": "/imagery/5415251564243.jpg",
  "/how-we-work/communication-reporting":
    "/imagery/3d-render-abstract-tech-background-with-flowing-cyber-lines.jpg",
  "/how-we-work/onboarding-kickoff": "/imagery/13868.jpg",
  "/how-we-work/pricing-approach": "/imagery/79003071435657.jpg",
  "/how-we-work/pilot-engagements": "/imagery/9191566793009.jpg",
  "/security-ip/ip-ownership-nda":
    "/imagery/3d-abstract-background-with-flowing-particles-cyber-dots-network-connections.jpg",
  "/technology": "/imagery/smooth-wave-patterns-flow-abstract-elegance-generated-by-ai.jpg",
};

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
        contentMinHeightClassName="min-h-[14rem] sm:min-h-[16rem] lg:min-h-[18rem]"
        backgroundDecor={
          <div className="absolute -inset-y-[18%] -right-[2%] hidden w-[45%] overflow-hidden [clip-path:polygon(0_32%,100%_0,100%_68%,0_100%)] lg:block">
            <img
              src="/imagery/capabilities-banner.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[34%_50%] saturate-[0.92] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(118deg,rgb(8_18_36/0.45)_0%,transparent_50%),linear-gradient(to_top,rgb(8_18_36/0.28)_0%,transparent_42%)]" />
          </div>
        }
      >
        <Button href={howWeWorkLanding.primaryCtaHref} variant="primary" className="px-6">
          {howWeWorkLanding.primaryCtaLabel}
        </Button>
        {howWeWorkLanding.secondaryCtaHref && howWeWorkLanding.secondaryCtaLabel ? (
          <Button
            href={howWeWorkLanding.secondaryCtaHref}
            variant="primary"
            className="px-6"
          >
            {howWeWorkLanding.secondaryCtaLabel}
          </Button>
        ) : null}
      </PageHero>

      <HomeSection tone="white" className="!bg-[#f6f2ea]">
        <SectionHeading
          eyebrow={howWeWorkLanding.sectionLabel}
          title={howWeWorkLanding.sectionTitle}
          description={howWeWorkLanding.sectionIntro}
          spacing="compact"
        />
        <LandingLinksCardGrid
          links={howWeWorkLanding.links}
          circleImageByHref={howWeWorkCircleImageByHref}
          variant="beigeInteractive"
        />
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
            <div
              key={feature.title}
              className="rounded-[var(--radius-card)] border border-[#9dc4d0] bg-[#D1EAF0] p-7 shadow-[var(--shadow-card-value)] lg:p-8"
            >
              <p className="text-label text-[#3d6b7a]">{howWeWorkLanding.featureLabel}</p>
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
