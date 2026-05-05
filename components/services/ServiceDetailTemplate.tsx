import PageHero from "@/components/marketing/PageHero";
import type { ServiceDetail } from "@/data/services";
import Image from "next/image";
import DedicatedTeamPageContent from "@/components/services/DedicatedTeamPageContent";

type ServiceDetailTemplateProps = {
  service: ServiceDetail;
};

export default function ServiceDetailTemplate({
  service,
}: ServiceDetailTemplateProps) {
  const isDedicatedDevelopmentTeams =
    service.slug === "dedicated-development-teams";
  const isSoftwareProductDevelopment =
    service.slug === "software-product-development";
  const isCloudAwsModernization = service.slug === "cloud-aws-modernization";
  const isQaTestAutomation = service.slug === "qa-test-automation";
  const isSupportMaintenance = service.slug === "support-maintenance";
  const isAiWorkflowAutomation = service.slug === "ai-workflow-automation";
  const isIntegrationsApis = service.slug === "integrations-apis";
  const isTargetedServiceForDedicatedUi =
    isSoftwareProductDevelopment ||
    isCloudAwsModernization ||
    isQaTestAutomation ||
    isSupportMaintenance ||
    isIntegrationsApis ||
    isAiWorkflowAutomation;
  const showWorkingModel =
    service.slug !== "software-product-development" &&
    service.slug !== "integrations-apis" &&
    service.slug !== "ai-workflow-automation";

  const bestForTitle = isAiWorkflowAutomation ? "Intended focus areas" : "Best for";
  const whatYouGetTitle = isAiWorkflowAutomation
    ? "Example use cases (to be finalized)"
    : "What you get";

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
  const showEngagementCtaBand =
    !showWorkingModel &&
    (isSoftwareProductDevelopment ||
      isIntegrationsApis ||
      isAiWorkflowAutomation);
  const targetedHeroTitleBySlug: Partial<
    Record<ServiceDetail["slug"], { top: string; bottom: string }>
  > = {
    "software-product-development": {
      top: "Software Product",
      bottom: "Development",
    },
    "cloud-aws-modernization": {
      top: "Cloud & AWS",
      bottom: "Modernization",
    },
    "qa-test-automation": {
      top: "QA & Test",
      bottom: "Automation",
    },
    "support-maintenance": {
      top: "Support &",
      bottom: "Maintenance",
    },
    "integrations-apis": {
      top: "Integrations &",
      bottom: "APIs",
    },
    "ai-workflow-automation": {
      top: "AI Workflow",
      bottom: "Automation",
    },
  };
  const targetedHeroTitle = targetedHeroTitleBySlug[service.slug];

  const pageHero = (
    <PageHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: service.title },
      ]}
      title={service.title}
      titleSlot={
        isDedicatedDevelopmentTeams ? (
          <h1 className="text-display-sm max-w-4xl leading-[1.03] text-white">
            <span className="block">Dedicated</span>
            <span className="block text-[#5f84b0]">Development Teams</span>
          </h1>
        ) : isTargetedServiceForDedicatedUi ? (
          <h1 className="text-display-sm max-w-4xl leading-[1.03] text-white">
            <span className="block">{targetedHeroTitle?.top ?? service.title}</span>
            <span className="block text-[#5f84b0]">
              {targetedHeroTitle?.bottom ?? ""}
            </span>
          </h1>
        ) : undefined
      }
      subtitle={undefined}
      description={undefined}
      badge={service.badge}
      tone="navy"
      contentMinHeightClassName="min-h-[6rem] sm:min-h-[7rem] lg:min-h-[8rem]"
      backgroundDecor={
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
      }
    />
  );

  return (
    <>
      {pageHero}
      <DedicatedTeamPageContent
        service={service}
        richLayout
        bestForTitle={isDedicatedDevelopmentTeams ? "Best for" : bestForTitle}
        whatYouGetTitle={
          isDedicatedDevelopmentTeams ? "What you get" : whatYouGetTitle
        }
        showWorkingModel={showWorkingModel}
        workingModelTitle={workingModelTitle}
        workingModelPrimaryLine={workingModelPrimaryLine}
        showToolsCapabilities={
          showWorkingModel &&
          !isCloudAwsModernization &&
          !isQaTestAutomation &&
          !isSupportMaintenance
        }
        ctaVariant={showEngagementCtaBand ? "engagement" : "default"}
        ctaTitle={showEngagementCtaBand ? service.cta.title : undefined}
        ctaDescription={
          showEngagementCtaBand ? service.cta.body : undefined
        }
      />
    </>
  );
}
