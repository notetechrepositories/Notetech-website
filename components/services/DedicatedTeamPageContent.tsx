import HomeSection from "@/components/home/HomeSection";
import Button from "@/components/ui/Button";
import type { ServiceDetail } from "@/data/services";

type Props = { service: ServiceDetail };

export default function DedicatedTeamPageContent({ service }: Props) {
  const workingModelText =
    service.workingModel ??
    "You set priorities and requirements; our team designs, builds, tests, and maintains the software while adapting to your tools and standards.";

  return (
    <HomeSection tone="white" className="!bg-[#f8f8f6]">
      <div className="mx-auto border border-border-subtle bg-[#f8f8f6] p-8 shadow-[0_18px_42px_-16px_rgba(11,18,32,0.45)]">

        {/* Intro */}
        <div>
          <p className="text-kicker">{service.title}</p>
          <h2 className="font-display text-3xl tracking-tight text-headline lg:text-[2.5rem] lg:leading-[1.14]">
            {service.headline}
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.75] text-body">
            {service.intro}
          </p>
        </div>

        {/* Best for */}
        <section
          aria-labelledby="dedicated-best-for"
          className="mt-10 border-t border-[#e2e8f0] pt-10 lg:mt-12 lg:pt-12"
        >
            <h3 id="dedicated-best-for" className="sr-only">Best for</h3>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
              <div className="w-full shrink-0 overflow-hidden rounded-xl lg:w-[44%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.imageSrc ?? "/imagery/service-dedicated-team.jpg"}
                  alt={service.imageAlt ?? `${service.title} image`}
                  className="h-[220px] w-full object-cover object-center sm:h-[260px] lg:h-[280px]"
                />
              </div>
              <div className="flex-1">
                <p className="text-kicker">Best for</p>
                <ul className="mt-5 space-y-3">
                  {service.bestFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-[0.46em] block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span className="text-[1.0625rem] leading-[1.72] text-body">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </section>

        {/* What you get */}
        <section
          aria-labelledby="dedicated-what-you-get"
          className="mt-10 border-t border-[#e2e8f0] pt-10 lg:mt-12 lg:pt-12"
        >
            <p className="text-kicker">What you get</p>
            <h3 id="dedicated-what-you-get" className="sr-only">What you get</h3>
            <ul className="mt-5 space-y-3">
              {service.whatYouGet.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-[0.46em] block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  <span className="text-[1.0625rem] leading-[1.72] text-body">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
        </section>

        {/* Working model */}
        <section
          aria-labelledby="dedicated-working-model"
          className="mt-10 rounded-[var(--radius-hero)] border border-border-subtle bg-white p-6 text-center shadow-[0_18px_42px_-16px_rgba(11,18,32,0.45)] lg:mt-12 lg:p-8"
        >
            <p className="text-kicker">Working model</p>
            <h3 id="dedicated-working-model" className="sr-only">Working model</h3>
            <p className="mt-3 text-[1.0625rem] leading-[1.75] text-body">
              {workingModelText}
            </p>
            <div className="mt-6">
              <Button href={service.cta.primaryHref} variant="primary" className="px-7">
                {service.cta.primaryLabel}
              </Button>
            </div>
        </section>

      </div>
    </HomeSection>
  );
}
