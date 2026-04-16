import CTASection from "@/components/home/CTASection";
import SectionHeading from "@/components/home/SectionHeading";
import PageHero from "@/components/marketing/PageHero";
import Container from "@/components/ui/Container";
import VisualSlot from "@/components/visuals/VisualSlot";
import type { ServiceDetail } from "@/data/services";

type ServiceDetailTemplateProps = {
  service: ServiceDetail;
};

export default function ServiceDetailTemplate({
  service,
}: ServiceDetailTemplateProps) {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        title={service.title}
        subtitle={service.headline}
        description={service.intro}
        badge={service.badge}
        aside={
          <VisualSlot
            slot="services"
            aspectClassName="aspect-[4/3] sm:aspect-[16/11]"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        }
      />

      <Container className="py-section">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <section aria-labelledby="best-for-heading">
            <SectionHeading
              title="Best for"
              id="best-for-heading"
              spacing="flush"
            />
            <ul className="grid gap-3 sm:grid-cols-1">
              {service.bestFor.map((item, i) => (
                <li
                  key={i}
                  className="motion-interactive flex gap-3 rounded-[var(--radius-card)] border border-border-subtle bg-surface p-4 text-sm text-ink shadow-card"
                >
                  <span className="text-primary mt-0.5 font-semibold" aria-hidden>
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="what-you-get-heading">
            <SectionHeading
              title="What you get"
              id="what-you-get-heading"
              spacing="flush"
            />
            <ul className="space-y-3">
              {service.whatYouGet.map((item, i) => (
                <li
                  key={i}
                  className="text-body-muted flex gap-3 text-sm leading-relaxed"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {service.toolsCapabilities?.length ? (
          <section
            className="mt-14 lg:mt-16"
            aria-labelledby="tools-heading"
          >
            <SectionHeading
              title="Tools & capabilities"
              id="tools-heading"
              description="Aligned to your standards and environment—not a one-size-fits-all stack mandate."
              spacing="compact"
            />
            <dl className="grid gap-3 sm:grid-cols-2">
              {service.toolsCapabilities.map((item, i) => (
                <div
                  key={i}
                  className="motion-interactive rounded-[var(--radius-card)] border border-border-subtle bg-surface-muted px-4 py-3 shadow-card"
                >
                  <dt className="sr-only">Capability {i + 1}</dt>
                  <dd className="text-sm text-ink">{item}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}
        <div className="surface-card mt-14 overflow-hidden border-primary/12 lg:mt-16">
          <VisualSlot
            slot="architecture"
            aspectClassName="h-44 sm:h-56"
            sizes="(max-width: 1024px) 100vw, 1100px"
            showEyebrow={false}
          />
        </div>

        <div className="mt-14 rounded-[var(--radius-hero)] border border-border-subtle bg-surface-muted p-8 lg:p-10">
          <CTASection
            variant="inline"
            title={service.cta.title}
            description={service.cta.body}
            primaryLabel={service.cta.primaryLabel}
            primaryHref={service.cta.primaryHref}
            secondaryLabel={service.cta.secondaryLabel}
            secondaryHref={service.cta.secondaryHref}
          />
        </div>
      </Container>
    </>
  );
}
