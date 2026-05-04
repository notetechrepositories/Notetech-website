/**
 * Services content — mirrors Notetech website IA / service pages.
 * Payload: map to `services` collection with slug, rich text blocks, and relation arrays.
 */

export const SERVICE_SLUGS = [
  "dedicated-development-teams",
  "software-product-development",
  "cloud-aws-modernization",
  "qa-test-automation",
  "support-maintenance",
  "integrations-apis",
  "ai-workflow-automation",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export type ServiceCta = {
  title: string;
  body?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export type RichItem = {
  icon: string;
  title: string;
  description: string;
};

export type ServiceDetail = {
  slug: ServiceSlug;
  /** Navigation / card title */
  title: string;
  /** Kicker shown in the intro section. Falls back to `title` when absent. */
  introKicker?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Per-section images: [bestFor, whatYouGet, workingModel]. Falls back to imageSrc. */
  sectionImages?: [string?, string?, string?];
  /** Large page headline (often differs from H1 in doc — we use one strong line) */
  headline: string;
  /** Optional two-line split for the headline, used in rich layout. */
  headlineLines?: [string, string];
  intro: string;
  bestFor: string[];
  /** Rich version of bestFor with icon, title and description per item. */
  bestForRich?: RichItem[];
  whatYouGet: string[];
  /** Rich version of whatYouGet with icon, title and description per item. */
  whatYouGetRich?: RichItem[];
  workingModel?: string;
  toolsCapabilities?: string[];
  cta: ServiceCta;
  /** Optional launch / status badge (e.g. AI) */
  badge?: string;
  metaTitle?: string;
  metaDescription?: string;
};

export const servicesLanding = {
  metaTitle: "Services",
  metaDescription:
    "Engineering services for software products and enterprise platforms—dedicated teams, product development, cloud modernization, QA, integrations, and long-term support.",
  heroTitle: "Services",
  headline:
    "Engineering services for software products and enterprise platforms",
  intro:
    "We provide software engineers for development and long-term maintenance. Clients typically own the product IP and source code, while we deliver implementation, enhancements, and support aligned to your roadmap.",
  secondaryCta: {
    label: "View case studies",
    href: "/case-studies",
  },
} as const;

export const servicesBySlug: Record<ServiceSlug, ServiceDetail> = {
  "dedicated-development-teams": {
    slug: "dedicated-development-teams",
    title: "Dedicated Development Teams",
    introKicker: "The Engineering Advantage",
    imageSrc: "/imagery/service-dedicated-team.jpg",
    imageAlt: "Software development team collaborating around project deliverables",
    sectionImages: [
      "/imagery/service/3d-abstract-background-with-flowing-particles-cyber-dots-network-connections.jpg",
      "/imagery/service/smooth-wave-patterns-flow-abstract-elegance-generated-by-ai.jpg",
      "/imagery/3d-render-abstract-tech-background-with-flowing-cyber-lines.jpg",
    ],
    headline: "Stable engineering capacity aligned to your roadmap",
    headlineLines: ["Stable engineering capacity", "aligned to your roadmap"],
    intro:
      "Build a dedicated team that operates as an extension of your organization—clear ownership, transparent tracking, and maintainable delivery.",
    bestFor: [
      "Continuous product development and roadmap execution",
      "Enterprise platforms needing reliable capacity",
      "Long-running programs where knowledge retention matters",
    ],
    bestForRich: [
      {
        icon: "refresh",
        title: "Continuous product development",
        description:
          "Ideal for ongoing feature releases and iterative improvement cycles where context retention is critical.",
      },
      {
        icon: "building",
        title: "Enterprise platforms",
        description:
          "Robust engineering for complex internal systems that require long-term stability and high security standards.",
      },
      {
        icon: "calendar",
        title: "Long-running programs",
        description:
          "Partnerships focused on multi-year technical roadmaps requiring dedicated domain expertise and scaling.",
      },
    ],
    whatYouGet: [
      "Dedicated engineers (lead + senior developers + QA; DevOps as needed)",
      "Delivery in 1–2 week cycles with shared tracking",
      "Written progress updates and clear escalation path",
      "Engineering discipline: code reviews, testing, maintainability",
      "Continuity planning to reduce single points of failure",
    ],
    whatYouGetRich: [
      {
        icon: "users",
        title: "Dedicated engineers",
        description:
          "A hand-picked team that works exclusively for you, becoming a natural extension of your organization.",
      },
      {
        icon: "clock",
        title: "1-2 week cycles",
        description:
          "Fast-paced delivery with regular demos and retrospectives to ensure constant alignment and velocity.",
      },
      {
        icon: "file-text",
        title: "Written progress updates",
        description:
          "Transparent documentation of every sprint, featuring detailed technical decisions and roadmap progress.",
      },
      {
        icon: "medal",
        title: "Engineering discipline",
        description:
          "Rigorous standards for code quality, automated testing, and CI/CD pipelines as part of the team's DNA.",
      },
      {
        icon: "shield",
        title: "Continuity planning",
        description:
          "Proactive management of team health and knowledge transfer to ensure zero disruption to your workflow.",
      },
    ],
    workingModel:
      "You set priorities and requirements; our team designs, builds, tests, and maintains the software while adapting to your tools and standards.",
    cta: {
      title: "Schedule a Call",
      primaryLabel: "Schedule a Call",
      primaryHref: "/contact",
      secondaryLabel: "Download Brochure",
      secondaryHref: "/brochure",
    },
    metaTitle: "Dedicated Development Teams",
    metaDescription:
      "Stable dedicated engineering teams for software products and enterprise platforms—predictable delivery, client-owned IP, and transparent reporting.",
  },

  "software-product-development": {
    slug: "software-product-development",
    title: "Software Product Development",
    imageSrc: "/imagery/service/CODE_PC.jpg",
    imageAlt: "Engineers planning and building software product features",
    sectionImages: [
      "/imagery/79003071435657.jpg",
      "/imagery/9191566793009.jpg",
      "/imagery/5415251564243.jpg",
    ],
    headline: "From MVP to enterprise-grade releases",
    intro:
      "We design, build, and evolve software products and internal platforms with a focus on reliability, scalability, and long-term ownership.",
    bestFor: [
      "MVP builds and new product modules",
      "Major features and platform extensions",
      "Refactoring/rebuilds for performance and stability",
    ],
    whatYouGet: [
      "Architecture and delivery plan aligned to business goals",
      "Web/API development and integration-ready implementation",
      "Release readiness support (rollout planning and operational basics)",
      "Documentation and knowledge transfer as needed",
    ],
    toolsCapabilities: [
      ".NET/C#, web and API layers",
      "Angular / React front ends where applicable",
      "SQL Server and common data persistence patterns",
      "CI/CD patterns aligned to your environment",
    ],
    cta: {
      title: "Discuss your product",
      body: "Tell us what you’re shipping next and what “done” means for your users.",
      primaryLabel: "Schedule a Call",
      primaryHref: "/contact",
      secondaryLabel: "Explore dedicated teams",
      secondaryHref: "/services/dedicated-development-teams",
    },
    metaTitle: "Software Product Development",
    metaDescription:
      "Product engineering from MVP through enterprise releases—reliable delivery, scalable architecture, and client-owned IP.",
  },

  "cloud-aws-modernization": {
    slug: "cloud-aws-modernization",
    title: "Cloud & AWS Modernization",
    introKicker: "Cloud Engineering",
    imageSrc: "/imagery/service/aws.jpg",
    imageAlt: "Cloud infrastructure and hardware environment for modernization services",
    sectionImages: [
      "/imagery/13868.jpg",
      "/imagery/1541.jpg",
      "/imagery/2623597.jpg",
    ],
    headline: " Modernize safely—without disrupting operations",
    intro:
      "We modernize legacy systems and prepare platforms for cloud deployment with phased delivery and controlled risk.",
    bestFor: [
      "Legacy applications that are hard to scale or change",
      "AWS migration and cloud readiness",
      "Reliability and performance improvements",
    ],
    bestForRich: [
      {
        icon: "building",
        title: "Legacy systems modernization",
        description:
          "Best suited for platforms that are difficult to scale, costly to maintain, or fragile during change.",
      },
      {
        icon: "refresh",
        title: "Cloud migration readiness",
        description:
          "Structured planning and phased execution for teams moving workloads and services into AWS safely.",
      },
      {
        icon: "shield",
        title: "Reliability-focused upgrades",
        description:
          "Improve stability, observability, and performance without disrupting day-to-day operations.",
      },
    ],
    whatYouGet: [
      "Assessment + phased modernization plan",
      "Migration approach with rollback strategy",
      "CI/CD improvements (where applicable)",
      "Monitoring and alerting aligned to your environment",
      "Cost-aware architecture decisions",
    ],
    whatYouGetRich: [
      {
        icon: "file-text",
        title: "Assessment and phased roadmap",
        description:
          "A clear modernization plan with prioritized milestones based on technical risk and business impact.",
      },
      {
        icon: "calendar",
        title: "Migration with rollback strategy",
        description:
          "Execution sequencing that includes rollback options, minimizing service risk during each transition phase.",
      },
      {
        icon: "clock",
        title: "CI/CD and release flow improvements",
        description:
          "Practical automation improvements aligned to your existing tooling, governance, and release cadence.",
      },
      {
        icon: "medal",
        title: "Monitoring and alerting alignment",
        description:
          "Operational visibility designed around your environment so teams can detect and resolve issues faster.",
      },
      {
        icon: "users",
        title: "Cost-aware architecture decisions",
        description:
          "Modernization choices that balance reliability, performance, and long-term cloud operating cost.",
      },
    ],
    toolsCapabilities: [
      "EC2, RDS, S3, CloudFront, Lambda (based on need)",
    ],
    cta: {
      title: "Plan the next step in your modernization",
      body: "Share your constraints—we’ll help you sequence work for stability and clarity.",
      primaryLabel: "Request an assessment",
      primaryHref: "/contact",
    },
    metaTitle: "Cloud & AWS Modernization",
    metaDescription:
      "Phased modernization and AWS readiness for business-critical platforms—reduce risk, improve reliability, and move toward cloud pragmatically.",
  },

  "qa-test-automation": {
    slug: "qa-test-automation",
    title: "QA & Test Automation",
    imageSrc: "/imagery/service/qa_test.jpg",
    imageAlt: "Quality engineer validating software quality and automated test outcomes",
    sectionImages: [
      "/imagery/new 3d 5.jpg",
      "/imagery/new 3d 2.jpg",
      "/imagery/new 3d 1.jpg",
    ],
    headline: "Release with confidence",
    intro:
      "We strengthen quality through test strategy and automation—reducing regressions and improving release readiness.",
    bestFor: [
      "Teams experiencing regressions and release risk",
      "Integration-heavy systems with complex workflows",
      "Products needing predictable quality gates",
    ],
    whatYouGet: [
      "Test strategy (unit / integration / E2E as appropriate)",
      "Automated regression suite setup and maintenance",
      "CI integration for quality checks",
      "Performance testing support when required",
    ],
    toolsCapabilities: [
      "Playwright / Cypress / Selenium",
    ],
    cta: {
      title: "Improve QA",
      body: "Tell us where quality gaps are creating risk, and we will recommend a practical QA approach.",
      primaryLabel: "Improve QA",
      primaryHref: "/contact",
    },
    metaTitle: "QA & Test Automation",
    metaDescription:
      "QA strategy and test automation for software products—practical gates, automation where it pays off, and clearer release confidence.",
  },

  "support-maintenance": {
    slug: "support-maintenance",
    title: "Support & Maintenance",
    imageSrc: "/imagery/service/support_hand.jpg",
    imageAlt: "Operations team coordinating support and maintenance workflows",
    sectionImages: [
      "/imagery/new 3d 6.jpg",
      "/imagery/new 3d 3.jpg",
      "/imagery/new 3d 4.jpg",
    ],
    headline: "Long-term reliability for production systems",
    intro:
      "We provide structured support and maintenance—bug fixes, enhancements, and operational improvements—so your product stays stable and continues to evolve.",
    bestFor: [
      "Production systems requiring ongoing stability",
      "Roadmap + maintenance handled by one team",
      "Teams seeking continuity and long-term ownership",
    ],
    whatYouGet: [
      "Issue triage and resolution workflow",
      "Bug fixes, enhancements, and maintenance releases",
      "Root-cause analysis for major incidents (as needed)",
      "Reliability improvements aligned to your environment",
      "Optional SLA-style support structure",
    ],
    toolsCapabilities: [
      "Support tiers and SLAs shaped to your criticality (defined in agreement)",
      "Alignment to your change-control and deployment windows",
    ],
    cta: {
      title: "Talk about your support needs",
      body: "Share production criticality and pain points—we’ll propose a sustainable model.",
      primaryLabel: "Talk support options",
      primaryHref: "/contact",
    },
    metaTitle: "Support & Maintenance",
    metaDescription:
      "Structured software support and maintenance—stability, enhancements, and multi-year continuity for production products.",
  },

  "integrations-apis": {
    slug: "integrations-apis",
    title: "Integrations & APIs",
    imageSrc: "/imagery/service/code.jpg",
    imageAlt: "Developer integrating software systems and APIs across platforms",
    sectionImages: [
      "/imagery/new 3d 8.jpg",
      "/imagery/new 3d 9.jpg",
    ],
    headline: "Secure, reliable integrations built for production",
    intro:
      "We design and deliver APIs and integrations that handle failures, scale cleanly, and keep data consistent.",
    bestFor: [
      "Connecting systems (ERP, CRM, internal services, payments, etc.)",
      "Building API layers for products and internal teams",
      "Synchronization and workflow orchestration"
    ],
    whatYouGet: [
      "API design (security, versioning, documentation)",
      "Reliability patterns (retries/idempotency where needed)",
      "Monitoring for failures and latency",
      "Integration testing and operational handover",
        ],
    toolsCapabilities: [
      "REST and service-oriented patterns common in enterprise stacks",
      "AWS and hybrid hosting for integration components when required",
      "Data mapping and validation discipline across system boundaries",
    ],
    cta: {
      title: "Design integrations that survive production",
      body: "Describe the systems and failure modes you worry about—we’ll map a pragmatic approach.",
      primaryLabel: "Plan an integration",
      primaryHref: "/contact",
    },
    metaTitle: "Integrations & APIs",
    metaDescription:
      "APIs and integrations engineered for production—security, resilience, observability, and consistent data across systems.",
  },

  "ai-workflow-automation": {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    imageSrc: "/imagery/service/AI.jpg",
    imageAlt: "Enterprise software team exploring AI-assisted workflow automation",
    sectionImages: [
      "/imagery/new 3d 7.jpg",
      "/imagery/AI 1.jpg",
    ],
    headline: "Coming June 2026: practical agentic automation with controls",
    intro:
      "Starting June 2026, we plan to expand into agentic AI workflows focused on operational automation—built with guardrails such as approval steps, auditability, and access controls.",
    bestFor: [
      "Workflow automation with human approvals",
      "Operational assistants with permission controls",
      "Automation to reduce repetitive operational effort",
    ],
    whatYouGet: [
      "Support triage and routing workflows",
      "QA acceleration workflows",
      "Operational runbooks and guided incident response",
      "Knowledge assistants for internal documentation (with access boundaries)",
    ],
    toolsCapabilities: [
      "Patterns for retrieval and grounding aligned to your content stores (as permitted)",
      "Integration with existing auth and SSO models where applicable",
      "Email and connector workflows where appropriate to your roadmap",
    ],
    cta: {
      title: "Explore AI workflow automation (coming soon)",
      body: "We’re launching publicly in June 2026. If you’d like an early conversation, reach out and we’ll connect you to the right team.",
      primaryLabel: "Discuss an AI pilot",
      primaryHref: "/contact",
      secondaryLabel: "View services overview",
      secondaryHref: "/services",
    },
    badge: "Launching June 2026",
    metaTitle: "AI Workflow Automation",
    metaDescription:
      "AI workflow automation and internal assistants with guardrails, access boundaries, and engineering rigor—launching June 2026.",
  },
};
