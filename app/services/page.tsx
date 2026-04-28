import CTASection from "@/components/home/CTASection";
import PageHero from "@/components/marketing/PageHero";
import HomeSection from "@/components/home/HomeSection";
import SectionHeading from "@/components/home/SectionHeading";
import ServicesCardGrid from "@/components/services/ServicesCardGrid";
import Button from "@/components/ui/Button";
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
        contentMinHeightClassName="min-h-[14rem] sm:min-h-[16rem] lg:min-h-[18rem]"
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
        <Button href="/contact" variant="primary" className="px-6">
          Schedule a Call
        </Button>
        <Button href="/case-studies" variant="primary" className="px-6">
          {servicesLanding.secondaryCta.label}
        </Button>
      </PageHero>

      <HomeSection tone="white" className="!bg-[#f6f2ea]">
        <SectionHeading
         eyebrow="services"
          title="How clients engage with us"
          spacing="compact"
        />
        <section className="mb-12">
          <div className="w-full space-y-4">
            <details
              open
              className="group overflow-hidden rounded-xl border border-stone-300/70 bg-[#f3ede1]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 sm:p-6">
                <h5 className="font-display text-[1.3rem] font-semibold tracking-tight text-[#111827] sm:text-[1.45rem]">
                  Client-owned IP and source code
                </h5>
                <span
                  aria-hidden
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-stone-400/70 text-[#111827] transition-transform duration-200 group-open:rotate-180"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 8L10 13L15 8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-5 text-[0.98rem] leading-relaxed text-[#1f2937] sm:px-6 sm:pb-6">
                Clients own the product and source code we build (as defined in the
                contract/SOW). We prefer working in client-controlled repositories and
                follow access boundaries aligned to the client environment.
              </p>
            </details>

            <details className="group overflow-hidden rounded-xl border border-stone-300/70 bg-[#f3ede1]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 sm:p-6">
                <h5 className="font-display text-[1.3rem] font-semibold tracking-tight text-[#111827] sm:text-[1.45rem]">
                  Long-term delivery, with a transition option
                </h5>
                <span
                  aria-hidden
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-stone-400/70 text-[#111827] transition-transform duration-200 group-open:rotate-180"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 8L10 13L15 8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-5 text-[0.98rem] leading-relaxed text-[#1f2937] sm:px-6 sm:pb-6">
                We support products over the long term-including maintenance and
                continuous enhancements. If required, we support a structured transition
                so your team can move development in-house and operate independently.
              </p>
            </details>
          </div>
        </section>
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
