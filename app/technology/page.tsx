import HomeSection from "@/components/home/HomeSection";
import PageHero from "@/components/marketing/PageHero";
import SectionHeading from "@/components/home/SectionHeading";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import VisualSlot from "@/components/visuals/VisualSlot";
import { technologyPage } from "@/data/technologyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: technologyPage.metaTitle,
  description: technologyPage.metaDescription,
  openGraph: {
    title: `${technologyPage.heroTitle} · Notetech`,
    description: technologyPage.metaDescription,
    type: "website",
  },
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Technology" }]}
        title={technologyPage.heroTitle}
        subtitle={technologyPage.headline}
        description={technologyPage.intro}
        aside={
          <VisualSlot
            slot="technology"
            aspectClassName="aspect-[4/3] sm:aspect-[16/11]"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        }
      >
        <Button href="/contact" variant="primary" className="px-6">
          Schedule a Call
        </Button>
        <Button href="/services" variant="ghostOnDark" className="px-6">
          View services
        </Button>
      </PageHero>

      <HomeSection id="technology-pillars">
        <SectionHeading
          title="How we align technically"
          description="A structured view of the capabilities most teams ask us to reinforce—always adapted to your existing architecture."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {technologyPage.pillars.map((p) => (
            <div
              key={p.id}
              className="surface-card motion-interactive p-7 lg:p-8"
            >
              <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
              <p className="text-body-muted mt-3 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <Container className="pb-section">
        <div className="surface-card overflow-hidden border-primary/12">
          <VisualSlot
            slot="quality"
            aspectClassName="h-48 sm:h-60 max-h-[14rem] sm:max-h-[17rem]"
            sizes="(max-width: 1024px) 100vw, 1100px"
            showEyebrow={false}
          />
        </div>
        <p className="text-ink-subtle mt-4 text-center text-xs">
          Illustrative only—engagements follow your standards and security posture.
        </p>
      </Container>
    </>
  );
}
