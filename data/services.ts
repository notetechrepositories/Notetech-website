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

export type ServiceDetail = {
  slug: ServiceSlug;
  /** Navigation / card title */
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Large page headline (often differs from H1 in doc — we use one strong line) */
  headline: string;
  intro: string;
  bestFor: string[];
  whatYouGet: string[];
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
    imageSrc: "/imagery/service-dedicated-team.jpg",
    imageAlt: "Software development team collaborating around project deliverables",
    headline: "Stable engineering capacity aligned to your roadmap",
    intro:
      "Build a dedicated team that operates as an extension of your organization—clear ownership, transparent tracking, and maintainable delivery.",
    bestFor: [
      "Continuous product development and roadmap execution",
      "Enterprise platforms needing reliable capacity",
      "Long-running programs where knowledge retention matters",
    ],
    whatYouGet: [
      "Dedicated engineers (lead + senior developers + QA; DevOps as needed)",
      "Delivery in 1–2 week cycles with shared tracking",
      "Written progress updates and clear escalation path",
      "Engineering discipline: code reviews, testing, maintainability",
      "Continuity planning to reduce single points of failure",
    ],
    workingModel:
      "You set priorities and requirements; our team designs, builds, tests, and maintains the software while adapting to your tools and standards.",
    cta: {
      title: "Schedule a Call",
      primaryLabel: "Schedule a Call",
      primaryHref: "/contact",
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
    headline: "From MVP to enterprise-grade releases",
    intro:
      "We design, build, and evolve software products and internal platforms with a focus on reliability, scalability, and long-term ownership. You set priorities and requirements; our team designs, builds, tests, and maintains the software while adapting to your tools and standards.",
    bestFor: [
      "New module builds and greenfield MVPs that must grow into maintainable products",
      "Continuous roadmap execution—features, refactoring, and hardening in one rhythm",
      "Platforms where release quality and upgrade risk must be actively managed",
      "Teams that need architecture judgment without handing off control of IP",
    ],
    whatYouGet: [
      "End-to-end delivery support from design through implementation and release",
      "Quality practices integrated into delivery: reviews, testing, and release discipline",
      "Roadmap execution that balances speed with maintainability and operability",
      "Documentation and handover-friendly structure so knowledge does not live in one person",
      "Collaboration with your product and engineering stakeholders on priorities and tradeoffs",
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
    imageSrc: "/imagery/service/aws.jpg",
    imageAlt: "Cloud infrastructure and hardware environment for modernization services",
    headline: "Pragmatic modernization with a path to the cloud",
    intro:
      "We help teams modernize business-critical systems without pretending migrations are instant. Our approach favors phased change, reduced release risk, and operational clarity—so you improve reliability now while moving toward cloud-ready architectures when it makes sense.",
    bestFor: [
      "Legacy systems that must stay stable while you plan or execute migration",
      "Teams targeting AWS or hybrid patterns with limited appetite for big-bang cutovers",
      "Products where security, access boundaries, and environment parity matter",
      "Leaders who need a partner that can work inside existing operational constraints",
    ],
    whatYouGet: [
      "Modernization plans that sequence risk: stabilize, decouple, migrate where justified",
      "AWS-aligned patterns where appropriate—accounts, networking, and services used responsibly",
      "Release improvements to make change safer and more predictable",
      "Collaboration with your operations and security stakeholders on boundaries and access",
      "Engineering support that protects business continuity during technical transition",
    ],
    toolsCapabilities: [
      "AWS building blocks (compute, storage, networking) as your standards allow",
      ".NET and common enterprise stacks on cloud or hybrid topologies",
      "Automation for deploy and verification where it reduces operational risk",
    ],
    cta: {
      title: "Plan the next step in your modernization",
      body: "Share your constraints—we’ll help you sequence work for stability and clarity.",
      primaryLabel: "Schedule a Call",
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
    headline: "Predictable quality gates for product releases",
    intro:
      "We help teams build verification discipline that matches product risk—without turning quality into paperwork. That means practical test strategy, automation where it earns its keep, and feedback loops that support faster, safer releases.",
    bestFor: [
      "Products needing predictable quality gates before customer-facing releases",
      "Teams scaling release frequency without surrendering basic safety nets",
      "Organizations catching regressions late and paying in production instability",
      "Platforms where integrations and data flows multiply test surface area",
    ],
    whatYouGet: [
      "Test planning tied to risk: what must never break vs. what can be lighter-touch",
      "Automation that supports regression and release confidence—not vanity metrics",
      "Integration with your pipelines and environments as you define them",
      "Clear defect workflows and communication so issues are visible early",
      "Maintainability: tests and fixtures structured so teams can extend them over time",
    ],
    toolsCapabilities: [
      "Common test automation frameworks appropriate to your stack",
      "API and UI testing patterns where they reduce manual drag",
      "Support for performance or smoke suites where justified by critical paths",
    ],
    cta: {
      title: "Strengthen your release confidence",
      body: "Tell us your release cadence and pain points—we’ll propose a sensible QA model.",
      primaryLabel: "Schedule a Call",
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
    headline: "Long-term reliability for production systems",
    intro:
      "We provide structured support and maintenance—bug fixes, enhancements, and operational improvements—so your product stays stable and continues to evolve. We’re built for multi-year ownership, not one-off break-fix cycles that quietly accumulate risk.",
    bestFor: [
      "Production systems requiring ongoing stability and measured change",
      "Teams that need a steady maintenance lane alongside feature work",
      "Products with compliance, audit, or operational expectations on changes",
      "Organizations that value continuity over constantly re-learning the codebase",
    ],
    whatYouGet: [
      "Prioritized intake for defects, small enhancements, and operational fixes",
      "Release management aligned to your risk tolerance and customer commitments",
      "Communication practices that keep stakeholders informed without overload",
      "Engineering hygiene: root-cause thinking, regression awareness, and documentation updates",
      "Transition support if you later move maintenance in-house",
    ],
    toolsCapabilities: [
      "Support tiers and SLAs shaped to your criticality (defined in agreement)",
      "Alignment to your change-control and deployment windows",
    ],
    cta: {
      title: "Talk about your support needs",
      body: "Share production criticality and pain points—we’ll propose a sustainable model.",
      primaryLabel: "Schedule a Call",
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
    headline: "Secure, reliable integrations built for production",
    intro:
      "We design and deliver APIs and integrations that handle failures, scale cleanly, and keep data consistent. Production integration work is never “just connect the endpoints”—it’s operational behavior under load, auth boundaries, retries, and monitoring.",
    bestFor: [
      "Products that must connect to CRMs, ERPs, messaging, or internal systems",
      "Teams building API layers for partners or internal consumers",
      "Workflows where bad data or partial failures create downstream chaos",
      "Platforms expanding to new regions or tenants with stricter isolation needs",
    ],
    whatYouGet: [
      "API design with versioning, error models, and practical consumer ergonomics",
      "Resilience patterns: timeouts, retries where safe, idempotency where needed",
      "Observability hooks: logging and metrics that make incidents diagnosable",
      "Security-minded defaults aligned to your environment and review process",
      "Documentation that helps internal teams and partners integrate without guessing",
    ],
    toolsCapabilities: [
      "REST and service-oriented patterns common in enterprise stacks",
      "AWS and hybrid hosting for integration components when required",
      "Data mapping and validation discipline across system boundaries",
    ],
    cta: {
      title: "Design integrations that survive production",
      body: "Describe the systems and failure modes you worry about—we’ll map a pragmatic approach.",
      primaryLabel: "Schedule a Call",
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
    headline: "Assistants and workflow automation—with guardrails",
    intro:
      "We help organizations adopt AI-assisted workflows where access boundaries, audit expectations, and data handling matter. This is not “drop in a model and hope”—it’s grounded automation tied to your systems, roles, and risk posture.",
    bestFor: [
      "Internal knowledge assistants with role-appropriate access to documentation",
      "Teams experimenting with AI workflow automation without bypassing governance",
      "Organizations connecting models to internal tools under explicit boundaries",
    ],
    whatYouGet: [
      "Workflow design that starts from permissions—not from model novelty",
      "Engineering support to connect assistants to vetted data sources and tools",
      "Practical evaluation patterns: what “good enough” means for your use case",
      "Operational thinking: monitoring, fallbacks, and human-in-the-loop when needed",
    ],
    toolsCapabilities: [
      "Patterns for retrieval and grounding aligned to your content stores (as permitted)",
      "Integration with existing auth and SSO models where applicable",
      "Email and connector workflows where appropriate to your roadmap",
    ],
    cta: {
      title: "Explore AI workflow automation (coming soon)",
      body: "We’re launching publicly in June 2026. If you’d like an early conversation, reach out and we’ll connect you to the right team.",
      primaryLabel: "Schedule a Call",
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
