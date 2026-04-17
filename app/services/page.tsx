import CTASection from "@/components/home/CTASection";
import PageHero from "@/components/marketing/PageHero";
import HomeSection from "@/components/home/HomeSection";
import SectionHeading from "@/components/home/SectionHeading";
import ServicesCardGrid from "@/components/services/ServicesCardGrid";
import Button from "@/components/ui/Button";
import VisualSlot from "@/components/visuals/VisualSlot";
import { servicesLanding } from "@/data/services";
import { getAllServices } from "@/lib/content/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: servicesLanding.metaTitle,
  description: servicesLanding.metaDescription,
  openGraph: {
    title: `${servicesLanding.heroTitle} · Notetech`,
    description: servicesLanding.metaDescription,
    type: "website",
  },
};

export default function ServicesLandingPage() {
  const services = getAllServices();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title={servicesLanding.heroTitle}
        subtitle={servicesLanding.headline}
        description={servicesLanding.intro}
        aside={
          <VisualSlot
            slot="services"
            aspectClassName="aspect-[4/3] sm:aspect-[16/11]"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        }
      >
        <Button href="/contact" variant="primary" className="px-6">
          Schedule a Call
        </Button>
        <Button href="/case-studies" variant="primary" className="px-6">
          {servicesLanding.secondaryCta.label}
        </Button>
      </PageHero>

      <HomeSection tone="white" className="!bg-[#f6f2ea]">
        <SectionHeading
          eyebrow="Services"
          title="Core offerings"
          subtitle="End-to-end capabilities for product and platform teams - delivered with client-owned IP and disciplined engineering."
          spacing="compact"
        />
        <ServicesCardGrid services={services} />
      </HomeSection>

      <HomeSection tone="white" className="!bg-[#f6f2ea] pb-24 lg:pb-28">
        <CTASection
          variant="band"
          bandTone="dark"
          bandImageSrc="/imagery/cta-circuit.jpg"
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
