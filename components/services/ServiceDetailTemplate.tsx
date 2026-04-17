import CTASection from "@/components/home/CTASection";
import HomeSection from "@/components/home/HomeSection";
import PageHero from "@/components/marketing/PageHero";
import Button from "@/components/ui/Button";
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
    { href: "#working-model-heading", label: "Working model" },
    { href: "#next-step-heading", label: "Next step" },
  ];
  const workingModelText =
    service.workingModel ??
    "You set priorities and requirements; our team designs, builds, tests, and maintains the software while adapting to your tools and standards.";

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
          className="mb-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-stone-300/70 pb-5 lg:mb-16"
        >
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="motion-interactive text-[0.78rem] font-semibold tracking-[0.08em] text-slate-600 uppercase hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="space-y-18 lg:space-y-24">
          <section
            id="best-for-heading"
            aria-labelledby="best-for-title"
            className="grid gap-8 border-b border-stone-300/70 pb-14 lg:grid-cols-12 lg:gap-14 lg:pb-16"
          >
            <div className="lg:col-span-5">
              <h2
                id="best-for-title"
                className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl"
              >
                Best for
              </h2>
            </div>
            <ul className="space-y-6 lg:col-span-7 lg:pt-2">
              {service.bestFor.map((item, i) => (
                <li
                  key={i}
                  className="border-b border-stone-300/70 pb-5 text-[1.04rem] leading-relaxed text-slate-700 last:border-b-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section
            id="what-you-get-heading"
            aria-labelledby="what-you-get-title"
            className="grid gap-8 lg:grid-cols-12 lg:gap-14"
          >
            <div className="lg:col-span-5">
              <h2
                id="what-you-get-title"
                className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl"
              >
                What you get
              </h2>
            </div>
            <ul className="divide-y divide-stone-300/70 border-y border-stone-300/70 lg:col-span-7 lg:mt-1">
              {service.whatYouGet.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-4 text-[1.01rem] leading-relaxed text-slate-700 sm:py-5"
                >
                  <span className="mt-0.5 inline-flex min-w-[2rem] text-[0.74rem] font-semibold tracking-[0.08em] text-slate-500 uppercase">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section
            id="working-model-heading"
            aria-labelledby="working-model-title"
            className="grid items-start gap-10 border-t border-stone-300/70 pt-14 lg:grid-cols-12 lg:gap-14 lg:pt-16"
          >
            <div className="lg:col-span-5">
              <h2
                id="working-model-title"
                className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl"
              >
                Working model
              </h2>
              <p className="mt-6 max-w-md text-[1.03rem] leading-relaxed text-slate-700">
                {workingModelText}
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" className="px-6">
                  Schedule a Call
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="group overflow-hidden bg-[#e9e2d5]">
                <VisualSlot
                  slot="architecture"
                  aspectClassName="aspect-[16/10]"
                  sizes="(max-width: 1024px) 100vw, 760px"
                  showEyebrow={false}
                />
              </div>
            </div>
          </section>

          {service.toolsCapabilities?.length ? (
            <section id="tools-heading" className="border-t border-stone-300/70 pt-14 lg:pt-16">
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-5">
                  <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
                    Tools & capabilities
                  </h2>
                  <p className="mt-5 max-w-md text-[1.01rem] leading-relaxed text-slate-700">
                    Aligned to your standards and environment-not a one-size-fits-all stack mandate.
                  </p>
                </div>
                <dl className="divide-y divide-stone-300/70 border-y border-stone-300/70 lg:col-span-7">
                  {service.toolsCapabilities.map((item, i) => (
                    <div key={i} className="py-4 sm:py-5">
                      <dt className="sr-only">Capability {i + 1}</dt>
                      <dd className="flex gap-3 text-[1rem] leading-relaxed text-ink">
                        <span className="font-semibold text-primary" aria-hidden>
                          /
                        </span>
                        <span>{item}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          ) : null}
        </div>

        <div
          id="next-step-heading"
          className="mt-16 border-t border-stone-300/80 pt-10 lg:mt-20 lg:pt-12"
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
