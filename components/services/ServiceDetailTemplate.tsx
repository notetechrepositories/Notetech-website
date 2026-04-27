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
  const isCloudAwsModernization = service.slug === "cloud-aws-modernization";
  const isQaTestAutomation = service.slug === "qa-test-automation";
  const isSupportMaintenance = service.slug === "support-maintenance";
  const isAiWorkflowAutomation = service.slug === "ai-workflow-automation";
  const showWorkingModel =
    service.slug !== "software-product-development" &&
    service.slug !== "integrations-apis" &&
    service.slug !== "ai-workflow-automation";
  const moveCtaBelowWorkingModel = service.slug === "dedicated-development-teams";
  const imgBestFor = service.sectionImages?.[0] ?? service.imageSrc;
  const imgWhatYouGet = service.sectionImages?.[1] ?? service.imageSrc;
  const imgWorkingModel = service.sectionImages?.[2] ?? service.imageSrc;

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
        tone="beigePattern"
        contentMinHeightClassName="min-h-[18rem] sm:min-h-[21rem] lg:min-h-[24rem]"
        backgroundDecor={
          service.imageSrc ? (
            <div className="absolute -inset-y-[18%] -right-[2%] hidden w-[45%] overflow-hidden [clip-path:polygon(0_32%,100%_0,100%_68%,0_100%)] lg:block">
              <Image
                src={service.imageSrc}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="absolute inset-0 h-full w-full object-cover object-[56%_50%] saturate-[0.92] contrast-[1.04]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgb(8_18_36/0.45)_0%,transparent_50%),linear-gradient(to_top,rgb(8_18_36/0.28)_0%,transparent_42%)]" />
            </div>
          ) : undefined
        }
      />

      {/* ── All content sections on beige background with card boxes ── */}
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
                      <span className="mt-0.5 shrink-0 text-[0.68rem] font-bold tracking-[0.12em] text-[#081a35]">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
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
                      <span className="mt-0.5 inline-flex min-h-[1.5rem] min-w-[1.5rem] shrink-0 items-center justify-center rounded bg-[#081a35] text-[0.65rem] font-bold text-white">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
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
    </>
  );
}
