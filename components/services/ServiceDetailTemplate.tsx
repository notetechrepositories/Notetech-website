import HomeSection from "@/components/home/HomeSection";
import PageHero from "@/components/marketing/PageHero";
import Button from "@/components/ui/Button";
import type { ServiceDetail } from "@/data/services";
import Image from "next/image";

type ServiceDetailTemplateProps = {
  service: ServiceDetail;
};

export default function ServiceDetailTemplate({
  service,
}: ServiceDetailTemplateProps) {
  const isDedicatedDevelopmentTeams =
    service.slug === "dedicated-development-teams";
  const isCloudAwsModernization = service.slug === "cloud-aws-modernization";
  const isQaTestAutomation = service.slug === "qa-test-automation";
  const isSupportMaintenance = service.slug === "support-maintenance";
  const isAiWorkflowAutomation = service.slug === "ai-workflow-automation";
  const showWorkingModel =
    service.slug !== "software-product-development" &&
    service.slug !== "integrations-apis" &&
    service.slug !== "ai-workflow-automation";
  const moveCtaBelowWorkingModel = service.slug === "dedicated-development-teams";
  const imgBestFor = isDedicatedDevelopmentTeams
    ? "/imagery/service-dedicated-team.jpg"
    : "/imagery/companyPage/engagement.jpg";
  const imgWhatYouGet = "/imagery/companyPage/engagement.jpg";
  const imgWorkingModel = "/imagery/companyPage/engagement.jpg";

  const bestForTitle = isAiWorkflowAutomation ? "Intended focus areas" : "Best for";
  const whatYouGetTitle = isAiWorkflowAutomation
    ? "Example use cases (to be finalized)"
    : "What you get";

  const sectionLinks = [
    { href: "#best-for-heading", label: bestForTitle },
    { href: "#what-you-get-heading", label: whatYouGetTitle },
  ];
  if (showWorkingModel) {
    sectionLinks.push({
      href: "#working-model-heading",
      label: isCloudAwsModernization
        ? "AWS capabilities"
        : isQaTestAutomation
          ? "Tools"
          : isSupportMaintenance
            ? "Long-term support"
          : "Working model",
    });
  }
  const workingModelText =
    service.workingModel ??
    "You set priorities and requirements; our team designs, builds, tests, and maintains the software while adapting to your tools and standards.";
  const workingModelTitle = isCloudAwsModernization
    ? "AWS capabilities (examples)"
    : isQaTestAutomation
      ? "Tools (as applicable)"
      : isSupportMaintenance
        ? "Long-term support"
        : "Working model";
  const workingModelPrimaryLine = isCloudAwsModernization
    ? "EC2, RDS, S3, CloudFront, Lambda (based on need)"
    : isQaTestAutomation
      ? service.toolsCapabilities?.[0] ?? "Playwright / Cypress / Selenium"
      : isSupportMaintenance
        ? "We have supported certain products for up to 17 years."
        : workingModelText;

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
        tone="navy"
        contentMinHeightClassName="min-h-[18rem] sm:min-h-[21rem] lg:min-h-[24rem]"
        backgroundDecor={
          (
            <div className="absolute -inset-y-[18%] -right-[2%] hidden w-[45%] overflow-hidden [clip-path:polygon(0_32%,100%_0,100%_68%,0_100%)] lg:block">
              <Image
                src="/imagery/capabilities-banner.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="absolute inset-0 h-full w-full object-cover object-[56%_50%] saturate-[0.92] contrast-[1.04]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgb(8_18_36/0.45)_0%,transparent_50%),linear-gradient(to_top,rgb(8_18_36/0.28)_0%,transparent_42%)]" />
            </div>
          )
        }
      />

      {isDedicatedDevelopmentTeams ? (
        <HomeSection tone="white" className="!bg-[#f8f6f1] pt-24 pb-16 lg:pt-28 lg:pb-20">
          <div className="rounded-2xl bg-[#f2ede3] p-6 shadow-sm ring-1 ring-stone-300/60 sm:p-8 lg:p-10">
            <div className="mb-8 text-center lg:mb-10">
              <p className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#7C8796]">
                Dedicated Team Model
              </p>
              <h2 className="font-display text-3xl tracking-tight text-[#0A1C37] lg:text-4xl">
                Delivery operating model
              </h2>
              <div className="mx-auto mt-3 h-0.5 w-16 bg-gradient-to-r from-[#46c3e6] to-[#081a35]" />
            </div>

            {/* ── Mobile stacked cards ── */}
            <div className="space-y-4 lg:hidden">

              {/* Card A — Best for */}
              <section className="premium-card-surface card-reveal card-reveal-1 group relative overflow-hidden border border-stone-300/70 bg-[#e9e2d5] shadow-[0_12px_28px_rgba(8,26,53,0.08)] ring-1 ring-white/40 transition-[transform,box-shadow,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#4f76a8] hover:bg-[#4f76a8] hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]">
                <div className="px-6 pb-0 pt-7">
                  <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#a7b4c0] transition-colors duration-300 group-hover:text-[#e2e8ee]">01</p>
                  <h3 className="font-display text-[1.28rem] font-bold leading-snug tracking-tight text-[#0A1C37] transition-colors duration-300 group-hover:text-white">
                    {bestForTitle}
                  </h3>
                  <div className="mt-2 h-px w-8 bg-[#a7b4c0] transition-colors duration-300 group-hover:bg-[#e2e8ee]" />
                </div>
                <div className="relative max-h-[7.5rem] overflow-hidden px-6 pb-6 pt-4 transition-[max-height] duration-500 ease-in-out group-hover:max-h-[60rem]">
                  <ul className="space-y-2.5">
                    {service.bestFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-[0.93rem] leading-relaxed text-[#3F4A5A] transition-colors duration-300 group-hover:text-slate-100">
                        <span className="mt-px shrink-0 font-semibold text-[#8a745c] transition-colors duration-300 group-hover:text-[#e2e8ee]">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#e9e2d5] to-transparent transition-opacity duration-300 group-hover:opacity-0" aria-hidden />
                </div>
              </section>

              <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-[#081a35] shadow-[0_24px_48px_rgb(8_26_53/0.22)]">
                <Image
                  src={imgBestFor}
                  alt={service.imageAlt ?? `${service.title} visual`}
                  fill
                  sizes="256px"
                  className="object-cover object-center"
                />
              </div>

              {/* Card B — What you get */}
              <section className="premium-card-surface card-reveal card-reveal-2 group relative overflow-hidden border border-stone-300/70 bg-[#e9e2d5] shadow-[0_12px_28px_rgba(8,26,53,0.08)] ring-1 ring-white/40 transition-[transform,box-shadow,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#4f76a8] hover:bg-[#4f76a8] hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]">
                <div className="px-6 pb-0 pt-7">
                  <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#a7b4c0] transition-colors duration-300 group-hover:text-[#e2e8ee]">02</p>
                  <h3 className="font-display text-[1.28rem] font-bold leading-snug tracking-tight text-[#0A1C37] transition-colors duration-300 group-hover:text-white">
                    {whatYouGetTitle}
                  </h3>
                  <div className="mt-2 h-px w-8 bg-[#a7b4c0] transition-colors duration-300 group-hover:bg-[#e2e8ee]" />
                </div>
                <div className="relative max-h-[7.5rem] overflow-hidden px-6 pb-6 pt-4 transition-[max-height] duration-500 ease-in-out group-hover:max-h-[60rem]">
                  <ul className="space-y-2.5">
                    {service.whatYouGet.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[0.93rem] leading-relaxed text-[#3F4A5A] transition-colors duration-300 group-hover:text-slate-100">
                        <span className="mt-px shrink-0 font-semibold text-[#8a745c] transition-colors duration-300 group-hover:text-[#e2e8ee]">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#e9e2d5] to-transparent transition-opacity duration-300 group-hover:opacity-0" aria-hidden />
                </div>
              </section>

              {/* Card C — Working model */}
              <section className="premium-card-surface card-reveal card-reveal-3 group relative overflow-hidden border border-stone-300/70 bg-[#e9e2d5] shadow-[0_12px_28px_rgba(8,26,53,0.08)] ring-1 ring-white/40 transition-[transform,box-shadow,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#4f76a8] hover:bg-[#4f76a8] hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]">
                <div className="px-6 pb-0 pt-7">
                  <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#a7b4c0] transition-colors duration-300 group-hover:text-[#e2e8ee]">03</p>
                  <h3 className="font-display text-[1.28rem] font-bold leading-snug tracking-tight text-[#0A1C37] transition-colors duration-300 group-hover:text-white">
                    {workingModelTitle}
                  </h3>
                  <div className="mt-2 h-px w-8 bg-[#a7b4c0] transition-colors duration-300 group-hover:bg-[#e2e8ee]" />
                </div>
                <div className="relative max-h-[7.5rem] overflow-hidden px-6 pb-6 pt-4 transition-[max-height] duration-500 ease-in-out group-hover:max-h-[60rem]">
                  <p className="text-[0.93rem] leading-relaxed text-[#3F4A5A] transition-colors duration-300 group-hover:text-slate-100">
                    {workingModelPrimaryLine}
                  </p>
                  {!isCloudAwsModernization &&
                  !isQaTestAutomation &&
                  !isSupportMaintenance &&
                  service.toolsCapabilities?.length ? (
                    <div className="mt-5 border-t border-stone-200 pt-4">
                      <h4 className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#7C8796]">
                        Tools & capabilities
                      </h4>
                      <ul className="space-y-2">
                        {service.toolsCapabilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-[0.92rem] leading-relaxed text-[#3F4A5A] transition-colors duration-300 group-hover:text-slate-100">
                            <span className="mt-px shrink-0 font-semibold text-[#8a745c] transition-colors duration-300 group-hover:text-[#e2e8ee]">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#e9e2d5] to-transparent transition-opacity duration-300 group-hover:opacity-0" aria-hidden />
                </div>
              </section>
            </div>

            <div className="diagram-layout relative hidden lg:block">
              <div className="relative z-10 grid min-h-[37rem] grid-cols-3 grid-rows-[auto_auto] gap-x-5 gap-y-6 xl:gap-x-6">

                {/* Card 1 — Best for (top center) */}
                <section className="premium-card-surface card-top card-reveal card-reveal-1 group relative z-10 col-start-2 row-start-1 overflow-hidden border border-stone-300/70 bg-[#e9e2d5] shadow-[0_12px_28px_rgba(8,26,53,0.08)] ring-1 ring-white/40 transition-[transform,box-shadow,background-color,border-color] duration-300 hover:z-30 hover:-translate-y-1 hover:border-[#4f76a8] hover:bg-[#4f76a8] hover:shadow-[0_16px_38px_rgba(0,0,0,0.12)]">
                  <div className="px-8 pb-0 pt-8">
                    <p className="mb-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#a7b4c0] transition-colors duration-300 group-hover:text-[#e2e8ee]">01</p>
                    <h3 className="font-display text-[1.48rem] font-bold leading-snug tracking-tight text-[#0A1C37] transition-colors duration-300 group-hover:text-white">
                      {bestForTitle}
                    </h3>
                    <div className="mt-2.5 h-px w-10 bg-[#a7b4c0] transition-colors duration-300 group-hover:bg-[#e2e8ee]" />
                  </div>
                  <div className="relative max-h-[8.5rem] overflow-hidden px-8 pb-8 pt-5 transition-[max-height] duration-500 ease-in-out group-hover:max-h-[60rem]">
                    <ul className="space-y-2.5">
                      {service.bestFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-[0.94rem] leading-relaxed text-[#3F4A5A] transition-colors duration-300 group-hover:text-slate-100">
                          <span className="mt-px shrink-0 font-semibold text-[#8a745c] transition-colors duration-300 group-hover:text-[#e2e8ee]">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#e9e2d5] to-transparent transition-opacity duration-300 group-hover:opacity-0" aria-hidden />
                  </div>
                </section>

                {/* Card 2 — Working model (bottom left) */}
                <section className="premium-card-surface card-reveal card-reveal-2 group relative z-10 col-start-1 row-start-2 mt-10 overflow-hidden border border-stone-300/70 bg-[#e9e2d5] shadow-[0_12px_28px_rgba(8,26,53,0.08)] ring-1 ring-white/40 transition-[transform,box-shadow,background-color,border-color] duration-300 hover:z-30 hover:-translate-y-1 hover:border-[#4f76a8] hover:bg-[#4f76a8] hover:shadow-[0_16px_38px_rgba(0,0,0,0.12)]">
                  <div className="px-8 pb-0 pt-8">
                    <p className="mb-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#a7b4c0] transition-colors duration-300 group-hover:text-[#e2e8ee]">02</p>
                    <h3 className="font-display text-[1.48rem] font-bold leading-snug tracking-tight text-[#0A1C37] transition-colors duration-300 group-hover:text-white">
                      {workingModelTitle}
                    </h3>
                    <div className="mt-2.5 h-px w-10 bg-[#a7b4c0] transition-colors duration-300 group-hover:bg-[#e2e8ee]" />
                  </div>
                  <div className="relative max-h-[8.5rem] overflow-hidden px-8 pb-8 pt-5 transition-[max-height] duration-500 ease-in-out group-hover:max-h-[60rem]">
                    <p className="text-[0.94rem] leading-relaxed text-[#3F4A5A] transition-colors duration-300 group-hover:text-slate-100">
                      {workingModelPrimaryLine}
                    </p>
                    {!isCloudAwsModernization &&
                    !isQaTestAutomation &&
                    !isSupportMaintenance &&
                    service.toolsCapabilities?.length ? (
                      <div className="mt-5 border-t border-stone-200 pt-4">
                        <h4 className="mb-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#7C8796]">
                          Tools & capabilities
                        </h4>
                        <ul className="space-y-2">
                          {service.toolsCapabilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-[0.93rem] leading-relaxed text-[#3F4A5A] transition-colors duration-300 group-hover:text-slate-100">
                              <span className="mt-px shrink-0 font-semibold text-[#8a745c] transition-colors duration-300 group-hover:text-[#e2e8ee]">›</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#e9e2d5] to-transparent transition-opacity duration-300 group-hover:opacity-0" aria-hidden />
                  </div>
                </section>

                {/* Card 3 — What you get (bottom right) */}
                <section className="premium-card-surface card-reveal card-reveal-3 group relative z-10 col-start-3 row-start-2 mt-10 overflow-hidden border border-stone-300/70 bg-[#e9e2d5] shadow-[0_12px_28px_rgba(8,26,53,0.08)] ring-1 ring-white/40 transition-[transform,box-shadow,background-color,border-color] duration-300 hover:z-30 hover:-translate-y-1 hover:border-[#4f76a8] hover:bg-[#4f76a8] hover:shadow-[0_16px_38px_rgba(0,0,0,0.12)]">
                  <div className="px-8 pb-0 pt-8">
                    <p className="mb-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#a7b4c0] transition-colors duration-300 group-hover:text-[#e2e8ee]">03</p>
                    <h3 className="font-display text-[1.48rem] font-bold leading-snug tracking-tight text-[#0A1C37] transition-colors duration-300 group-hover:text-white">
                      {whatYouGetTitle}
                    </h3>
                    <div className="mt-2.5 h-px w-10 bg-[#a7b4c0] transition-colors duration-300 group-hover:bg-[#e2e8ee]" />
                  </div>
                  <div className="relative max-h-[8.5rem] overflow-hidden px-8 pb-8 pt-5 transition-[max-height] duration-500 ease-in-out group-hover:max-h-[60rem]">
                    <ul className="space-y-2.5">
                      {service.whatYouGet.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[0.94rem] leading-relaxed text-[#3F4A5A] transition-colors duration-300 group-hover:text-slate-100">
                          <span className="mt-px shrink-0 font-semibold text-[#8a745c] transition-colors duration-300 group-hover:text-[#e2e8ee]">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#e9e2d5] to-transparent transition-opacity duration-300 group-hover:opacity-0" aria-hidden />
                  </div>
                </section>
              </div>

              <div className="center-glow pointer-events-none absolute left-1/2 top-[74%] z-20 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(70,195,230,0.2)_0%,rgba(70,195,230,0)_66%)] transition-[top] duration-300 ease-out" />
              <div className="center-image absolute left-1/2 top-[74%] z-20 h-72 w-72 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[5px] border-[#081a35] shadow-[0_26px_56px_rgb(8_26_53/0.26)] transition-[top] duration-300 ease-out">
                <Image
                  src={imgBestFor}
                  alt={service.imageAlt ?? `${service.title} visual`}
                  fill
                  sizes="288px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <style>{`
              .diagram-layout:has(.card-top:hover) .center-image,
              .diagram-layout:has(.card-top:hover) .center-glow {
                top: 80%;
              }

              .premium-card-surface {
                isolation: isolate;
              }

              .premium-card-surface::before {
                content: "";
                position: absolute;
                inset: 0;
                z-index: 0;
                pointer-events: none;
                opacity: 0.58;
                background-image:
                  radial-gradient(circle at 15% 15%, rgba(70, 195, 230, 0.18), transparent 42%),
                  radial-gradient(circle at 85% 85%, rgba(8, 26, 53, 0.14), transparent 46%);
                transition: opacity 280ms ease;
              }

              .premium-card-surface::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                height: 1px;
                z-index: 0;
                pointer-events: none;
                background: linear-gradient(
                  90deg,
                  transparent,
                  rgba(70, 195, 230, 0.45),
                  transparent
                );
                transition: opacity 280ms ease;
              }

              .premium-card-surface:hover::before,
              .premium-card-surface:hover::after {
                opacity: 0;
              }

              .premium-card-surface > * {
                position: relative;
                z-index: 1;
              }
            `}</style>

          </div>
          <section className="relative mt-10 overflow-hidden rounded-2xl border border-stone-300/60 bg-[#10233f] p-6 text-center shadow-[0_18px_40px_rgba(8,26,53,0.16)] ring-1 ring-white/20 lg:mt-12 lg:p-8">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/imagery/smooth-wave-patterns-flow-abstract-elegance-generated-by-ai.jpg')" }}
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(8,26,53,0.78),rgba(8,26,53,0.52)_55%,rgba(70,195,230,0.22))]" aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#46c3e6]/70 to-transparent" aria-hidden />
            <div className="relative z-10">
              <p className="mx-auto max-w-4xl font-display text-[1.2rem] leading-snug tracking-tight text-white sm:text-[1.35rem]">
                Dedicated team, transparent reporting, and maintainable delivery aligned to your roadmap.
              </p>
              <div className="mt-5">
                <Button href={service.cta.primaryHref} variant="primary" className="px-6">
                  {service.cta.primaryLabel}
                </Button>
              </div>
            </div>
          </section>
        </HomeSection>
      ) : null}

      {!isDedicatedDevelopmentTeams ? (
      <HomeSection tone="white" className="!bg-[#f6f2ea] py-16 lg:py-20">
        <div className="space-y-8 lg:space-y-10">

          {/* Card 1: Best for — image LEFT, items RIGHT */}
          <section
            id="best-for-heading"
            aria-labelledby="best-for-title"
            className="scroll-mt-24 overflow-hidden rounded-2xl bg-[#ede7d8] shadow-sm ring-1 ring-stone-300/60"
          >
            <div className="grid items-stretch lg:grid-cols-2">
              {/* Left: image — fixed aspect on mobile, stretches to match content on desktop */}
              {imgBestFor ? (
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src={imgBestFor}
                    alt={service.imageAlt ?? `${service.title} visual`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              ) : null}
              {/* Right: heading + items */}
              <div className="p-8 lg:p-12">
                <h2
                  id="best-for-title"
                  className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
                >
                  {bestForTitle}
                </h2>
                <div className="mb-7 mt-2.5 h-0.5 w-10 bg-[#46c3e6]" />
                <ul className="space-y-3">
                  {service.bestFor.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[0.97rem] leading-relaxed text-slate-700"
                    >
                      <span className="mt-px shrink-0 font-semibold text-[#8a745c]">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Card 2: What you get — items LEFT, image RIGHT */}
          <section
            id="what-you-get-heading"
            aria-labelledby="what-you-get-title"
            className="scroll-mt-24 overflow-hidden rounded-2xl bg-[#ede7d8] shadow-sm ring-1 ring-stone-300/60"
          >
            <div className="grid items-stretch lg:grid-cols-2">
              {/* Left: heading + items */}
              <div className="p-8 lg:p-12">
                <h2
                  id="what-you-get-title"
                  className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
                >
                  {whatYouGetTitle}
                </h2>
                <div className="mb-7 mt-2.5 h-0.5 w-10 bg-[#46c3e6]" />
                <ul className="space-y-3">
                  {service.whatYouGet.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[0.97rem] leading-relaxed text-slate-700"
                    >
                      <span className="mt-px shrink-0 font-semibold text-[#8a745c]">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right: image — stretches to match content height */}
              {imgWhatYouGet ? (
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src={imgWhatYouGet}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              ) : null}
            </div>
          </section>

          {showWorkingModel ? (
            /* Card 3: Working model — image LEFT, text + tools RIGHT */
            <section
              id="working-model-heading"
              aria-labelledby="working-model-title"
              className="scroll-mt-24 overflow-hidden rounded-2xl bg-[#ede7d8] shadow-sm ring-1 ring-stone-300/60"
            >
              <div className="grid items-stretch lg:grid-cols-2">
                {/* Left: image — stretches to match content height */}
                {imgWorkingModel ? (
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={imgWorkingModel}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                ) : null}
                {/* Right: heading + text + tools + CTA */}
                <div className="overflow-y-auto p-8 lg:p-12">
                  <h2
                    id="working-model-title"
                    className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
                  >
                  {isCloudAwsModernization
                    ? "AWS capabilities (examples)"
                    : isQaTestAutomation
                      ? "Tools (as applicable)"
                      : isSupportMaintenance
                        ? "Long-term support"
                      : "Working model"}
                  </h2>
                  <div className="mb-7 mt-2.5 h-0.5 w-10 bg-[#46c3e6]" />
                  <p className="text-[1.03rem] leading-relaxed text-slate-700">
                  {isCloudAwsModernization
                    ? "EC2, RDS, S3, CloudFront, Lambda (based on need)"
                    : isQaTestAutomation
                      ? service.toolsCapabilities?.[0] ?? "Playwright / Cypress / Selenium"
                    : isSupportMaintenance
                      ? "We have supported certain products for up to 17 years."
                    : workingModelText}
                  </p>
                {!isCloudAwsModernization &&
                !isQaTestAutomation &&
                !isSupportMaintenance &&
                service.toolsCapabilities?.length ? (
                    <div id="tools-heading" className="scroll-mt-24 mt-8 border-t border-stone-300/70 pt-6">
                      <h3 className="mb-4 text-[0.72rem] font-semibold tracking-[0.14em] text-[#081a35] uppercase">
                        Tools & capabilities
                      </h3>
                      <dl className="space-y-2.5">
                        {service.toolsCapabilities.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 text-[0.97rem] leading-relaxed text-slate-700"
                          >
                            <span className="mt-1 shrink-0 font-bold text-[#46c3e6]" aria-hidden>
                              /
                            </span>
                            <dt className="sr-only">Capability {i + 1}</dt>
                            <dd>{item}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ) : null}
                  {!moveCtaBelowWorkingModel ? (
                    <div className="mt-8">
                    <Button href={service.cta.primaryHref} variant="primary" className="px-6">
                      {service.cta.primaryLabel}
                      </Button>
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          ) : null}

          {showWorkingModel && moveCtaBelowWorkingModel ? (
            <section className="scroll-mt-24 rounded-2xl bg-[#ede7d8] p-8 text-center shadow-sm ring-1 ring-stone-300/60 lg:p-12">
              <Button href="/contact" variant="primary" className="px-6">
                Schedule a Call
              </Button>
            </section>
          ) : null}

          {!showWorkingModel ? (
            <section className="scroll-mt-24 rounded-2xl bg-[#ede7d8] p-8 text-center shadow-sm ring-1 ring-stone-300/60 lg:p-12">
              <Button href={service.cta.primaryHref} variant="primary" className="px-6">
                {service.cta.primaryLabel}
              </Button>
            </section>
          ) : null}

        </div>
      </HomeSection>
      ) : null}
    </>
  );
}
