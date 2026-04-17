import CTASection from "@/components/home/CTASection";
import HomeSection from "@/components/home/HomeSection";
import SectionHeading from "@/components/home/SectionHeading";
import LandingLinksCardGrid from "@/components/nav/LandingLinksCardGrid";
import PageHero from "@/components/marketing/PageHero";
import Button from "@/components/ui/Button";
import VisualSlot from "@/components/visuals/VisualSlot";
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
            <div key={feature.title} className="surface-card p-7 lg:p-8">
              <p className="text-label">{howWeWorkLanding.featureLabel}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink">{feature.title}</h3>
              <p className="text-body-muted mt-3 text-sm leading-relaxed">{feature.body}</p>
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
