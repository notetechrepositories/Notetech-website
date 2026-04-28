import HomeSection from "@/components/home/HomeSection";
import PageHero from "@/components/marketing/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
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
  const isIntegrationsApis = service.slug === "integrations-apis";
  const isSoftwareProductDevelopment = service.slug === "software-product-development";
  const showWorkingModel =
    service.slug !== "software-product-development" &&
    service.slug !== "integrations-apis" &&
    service.slug !== "ai-workflow-automation";
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
  const pairedCardsMinHeightClass = (
    isSoftwareProductDevelopment ||
    isQaTestAutomation ||
    isCloudAwsModernization ||
    isSupportMaintenance ||
    isIntegrationsApis ||
    isAiWorkflowAutomation
  )
    ? "min-h-[23rem] lg:min-h-[30rem]"
    : "min-h-[28rem] lg:min-h-[36rem]";

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        title={service.title}
        subtitle={undefined}
        description={undefined}
        badge={service.badge}
        children={
          isDedicatedDevelopmentTeams ? (
            undefined
          ) : undefined
        }
        tone="navy"
        contentMinHeightClassName={
          "min-h-[6rem] sm:min-h-[7rem] lg:min-h-[8rem]"
        }
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

      <HomeSection tone="white" className="!bg-white pt-2 pb-8 lg:pt-3 lg:pb-10">
          <div className="space-y-4 lg:space-y-6">
            <div>             
              <h2 className="mt-2 font-display text-3xl tracking-tight text-[#0A1C37] lg:text-4xl">
                {service.headline}
              </h2>
              <p className="mt-2 max-w-3xl text-[0.96rem] leading-relaxed text-[#4b596d]">
                {service.intro}
              </p>
            </div>
            <section className="grid gap-4 lg:grid-cols-12">
              <ScrollReveal direction="left" delayMs={0} className="h-full lg:col-span-5">
                <aside className={`flex h-full flex-col overflow-hidden rounded-2xl border border-[#1d4c84] bg-[#123560] p-6 shadow-[0_14px_30px_rgba(8,26,53,0.24)] ring-1 ring-[#5f8fc8]/30 lg:p-8 ${pairedCardsMinHeightClass}`}>
                <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border border-[#5f8fc8]/40">
                  <Image
                    src={imgBestFor}
                    alt={service.imageAlt ?? `${service.title} visual`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
                <h3 className="mt-2 font-display text-2xl tracking-tight text-white">
                  {bestForTitle}
                </h3>
                <div className="mt-3 h-px w-10 bg-[#78a9de]" />
                <ul className="mt-5 space-y-3">
                  {service.bestFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[0.96rem] leading-relaxed text-[#d8e6f5]">
                      <span className="mt-px shrink-0 font-semibold text-[#9cc3ef]">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                </aside>
              </ScrollReveal>

              <div className={`flex flex-col gap-4 lg:col-span-7 ${pairedCardsMinHeightClass}`}>
                <ScrollReveal direction="right" delayMs={340} className="flex-1">
                  <section id="what-you-get-heading" aria-labelledby="what-you-get-title" className="h-full overflow-hidden rounded-2xl border border-[#1d4c84] bg-[#123560] p-6 shadow-[0_14px_30px_rgba(8,26,53,0.24)] ring-1 ring-[#5f8fc8]/30 lg:p-8">
                  <h3 id="what-you-get-title" className="mt-2 font-display text-2xl tracking-tight text-white">
                    {whatYouGetTitle}
                  </h3>
                  <div className="mt-3 h-px w-10 bg-[#78a9de]" />
                  <ul className="mt-5 space-y-3">
                    {service.whatYouGet.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-[#d8e6f5]">
                        <span className="mt-px shrink-0 font-semibold text-[#9cc3ef]">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  </section>
                </ScrollReveal>

                {showWorkingModel ? (
                <ScrollReveal direction="right" delayMs={700} className="flex-1">
                  <section id="working-model-heading" aria-labelledby="working-model-title" className="h-full overflow-hidden rounded-2xl border border-[#1d4c84] bg-[#123560] p-6 shadow-[0_14px_30px_rgba(8,26,53,0.24)] ring-1 ring-[#5f8fc8]/30 lg:p-8">
                  <h3 id="working-model-title" className="mt-2 font-display text-2xl tracking-tight text-white">
                    {workingModelTitle}
                  </h3>
                  <div className="mt-3 h-px w-10 bg-[#78a9de]" />
                  <p className="mt-5 text-[0.95rem] leading-relaxed text-[#d8e6f5]">
                    {workingModelPrimaryLine}
                  </p>
                  {!isCloudAwsModernization &&
                  !isQaTestAutomation &&
                  !isSupportMaintenance &&
                  service.toolsCapabilities?.length ? (
                    <div className="mt-5 border-t border-stone-200/30 pt-4">
                      <h4 className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#a8c4e2]">
                        Tools & capabilities
                      </h4>
                      <ul className="space-y-2.5">
                        {service.toolsCapabilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-[0.93rem] leading-relaxed text-[#d8e6f5]">
                            <span className="mt-px shrink-0 font-semibold text-[#9cc3ef]">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <div className="mt-6">
                    <Button href={service.cta.primaryHref} variant="primary" className="px-6">
                      {service.cta.primaryLabel}
                    </Button>
                  </div>
                  </section>
                </ScrollReveal>
                ) : (
                <ScrollReveal direction="right" delayMs={700} className="flex-1">
                  <section className="h-full overflow-hidden rounded-2xl border border-[#1d4c84] bg-[#123560] p-6 shadow-[0_14px_30px_rgba(8,26,53,0.24)] ring-1 ring-[#5f8fc8]/30 lg:p-8">
                    <h3 className="mt-2 font-display text-2xl tracking-tight text-white">
                      Ready to discuss your roadmap?
                    </h3>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-[#d8e6f5]">
                      We can shape the right engagement model around your goals, timeline, and internal team setup.
                    </p>
                    <div className="mt-6">
                      <Button href={service.cta.primaryHref} variant="primary" className="px-6">
                        {service.cta.primaryLabel}
                      </Button>
                    </div>
                  </section>
                </ScrollReveal>
                )}
              </div>
            </section>
          </div>
      </HomeSection>
    </>
  );
}
