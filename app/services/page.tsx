import PageHero from "@/components/marketing/PageHero";
import ServiceCard from "@/components/home/ServiceCard";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
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

function excerpt(text: string, max = 150): string {
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max).trim()}…`;
}

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
        <Button href="/case-studies" variant="ghost" className="px-6">
          {servicesLanding.secondaryCta.label}
        </Button>
      </PageHero>

      <Container className="py-section">
        <h2 className="text-label">Core offerings</h2>
        <p className="text-lead text-ink mt-3 max-w-3xl">
          End-to-end capabilities for product and platform teams—delivered with
          client-owned IP and disciplined engineering.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              href={`/services/${s.slug}`}
              description={excerpt(s.intro)}
              badge={s.badge}
            />
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="surface-card overflow-hidden border-primary/12">
            <VisualSlot
              slot="architecture"
              aspectClassName="aspect-[16/9]"
              sizes="(max-width: 1024px) 100vw, 540px"
              showEyebrow={false}
            />
          </div>
          <div className="surface-card overflow-hidden border-primary/12">
            <VisualSlot
              slot="quality"
              aspectClassName="aspect-[16/9]"
              sizes="(max-width: 1024px) 100vw, 540px"
              showEyebrow={false}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
