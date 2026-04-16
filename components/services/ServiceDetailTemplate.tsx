import CTASection from "@/components/home/CTASection";
import HomeSection from "@/components/home/HomeSection";
import SectionHeading from "@/components/home/SectionHeading";
import PageHero from "@/components/marketing/PageHero";
import VisualSlot from "@/components/visuals/VisualSlot";
import type { ServiceDetail } from "@/data/services";

type ServiceDetailTemplateProps = {
  service: ServiceDetail;
};

export default function ServiceDetailTemplate({
  service,
}: ServiceDetailTemplateProps) {
  const sectionLinks = [
    { href: "#best-for-heading", label: "Best for" },
    { href: "#what-you-get-heading", label: "What you get" },
    ...(service.toolsCapabilities?.length
      ? [{ href: "#tools-heading", label: "Tools & capabilities" }]
      : []),
    { href: "#next-step-heading", label: "Next step" },
  ];

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

      <HomeSection tone="subtle">
        <nav
          aria-label="Service detail sections"
          className="mb-10 flex flex-wrap gap-3 lg:mb-12"
        >
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="motion-interactive rounded-full border border-stone-300/75 bg-[#f7f4ee] px-4 py-2 text-sm font-semibold text-slate-800 hover:border-primary/25 hover:bg-white hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <section
            aria-labelledby="best-for-heading"
            className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start"
          >
            <div className="rounded-[var(--radius-hero)] border border-stone-300/75 bg-[#f7f4ee] p-6 shadow-card lg:p-7">
              <SectionHeading
                title="Best for"
                id="best-for-heading"
                spacing="flush"
              />
              <ul className="grid gap-3">
                {service.bestFor.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-[var(--radius-card)] border border-stone-300/70 bg-white/88 p-4 text-sm leading-relaxed text-slate-800"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div className="space-y-8 lg:col-span-8 lg:space-y-10">
            <section aria-labelledby="what-you-get-heading">
              <div className="rounded-[var(--radius-hero)] border border-stone-300/75 bg-[#f3efe6] p-6 lg:p-8">
                <SectionHeading
                  title="What you get"
                  id="what-you-get-heading"
                  spacing="flush"
                />
                <ul className="grid gap-4">
                  {service.whatYouGet.map((item, i) => (
                    <li
                      key={i}
                      className="motion-interactive flex gap-4 rounded-[var(--radius-card)] border border-stone-300/70 bg-white p-5 shadow-card"
                    >
                      <span
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
                        aria-hidden
                      >
                        {i + 1}
                      </span>
                      <span className="text-body-muted text-sm leading-relaxed sm:text-[0.95rem]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <div className="surface-card overflow-hidden border-primary/12">
              <VisualSlot
                slot="architecture"
                aspectClassName="h-44 sm:h-56"
                sizes="(max-width: 1024px) 100vw, 1100px"
                showEyebrow={false}
              />
            </div>
          </div>
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
            <dl className="grid gap-4 sm:grid-cols-2">
              {service.toolsCapabilities.map((item, i) => (
                <div
                  key={i}
                  className="motion-interactive rounded-[var(--radius-card)] border border-border-subtle bg-surface px-5 py-4 shadow-card"
                >
                  <dt className="sr-only">Capability {i + 1}</dt>
                  <dd className="flex gap-3 text-sm leading-relaxed text-ink">
                    <span className="text-primary font-semibold" aria-hidden>
                      /
                    </span>
                    <span>{item}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <div
          id="next-step-heading"
          className="mt-14 rounded-[var(--radius-hero)] border border-stone-300/75 bg-[#f3efe6] p-8 lg:mt-16 lg:p-10"
        >
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
      </HomeSection>
    </>
  );
}
