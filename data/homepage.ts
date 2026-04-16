/**
 * Homepage content — mirrors Notetech website IA document.
 * Shape is CMS-friendly: keyed objects and arrays map cleanly to Payload collections later.
 */

import { voiceFirstUrl } from "@/data/site";

export type TrustChip = {
  id: string;
  label: string;
};

export type HomeServiceCard = {
  id: string;
  title: string;
  href: string;
  /** Optional short line for cards; document lists titles only */
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type HomeCaseStudyCard = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  stack: string;
  outcome?: string;
  /** When true, UI de-emphasizes client-specific claims */
  ndaSafePresentation?: boolean;
};

export type CtaPair = {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export const homeHero = {
  headline:
    "Dedicated development teams for software products that need predictable delivery.",
  subhead:
    "Founded in 1998, Notetech Software supports software product companies and enterprise IT teams with stable delivery, clear ownership, and an IP-safe working model.",
    backgroundImage: "imagery\hero-enterprise-city.jpg",
  ctas: {
    primaryLabel: "Schedule a Call",
    primaryHref: "/contact",
    secondaryLabel: "View Case Studies",
    secondaryHref: "/case-studies",
  } satisfies CtaPair,
};

/** Structured proof for hero panel (executive scan). */
export type HeroProofLine = {
  id: string;
  headline: string;
  supporting: string;
};

export const homeHeroProofPanel: HeroProofLine[] = [
  {
    id: "founded",
    headline: "Founded in 1998",
    supporting: "Decades of delivery discipline for product and enterprise engineering.",
  },
  {
    id: "support",
    headline: "Long-term support",
    supporting: "Roadmap-aligned evolution, maintenance, and clear ownership of outcomes.",
  },
  {
    id: "teams",
    headline: "Stable teams",
    supporting: "Dedicated squads with low attrition—continuity you can plan around.",
  },
];

export const homeTrustChips: TrustChip[] = [
  { id: "founded", label: "Founded 1998" },
  { id: "team-size", label: "50–75 engineers" },
  { id: "attrition", label: "Low attrition, stable teams" },
  { id: "ip", label: "Client-owned IP & source code" },
  { id: "repos", label: "Client-controlled repos preferred" },
];

export const homeWhatWeDo = {
  sectionId: "what-we-do" as const,
  title: "What we do",
  intro:
    "We provide software engineers for development and long-term maintenance of software products and internal platforms—aligned to your roadmap and standards.",
  coreServicesLabel: "Core services",
  services: [
    {
      id: "dedicated-teams",
      title: "Dedicated Development Teams",
      href: "/services/dedicated-development-teams",
      imageSrc: "/imagery/service-dedicated-team.jpg",
      imageAlt: "Software development team collaborating around project deliverables",
    },
    {
      id: "product-dev",
      title: "Software Product Development",
      href: "/services/software-product-development",
      imageSrc: "/imagery/service-product-development.jpg",
      imageAlt: "Engineers planning and building software product features",
    },
    {
      id: "cloud",
      title: "Cloud & AWS Modernization",
      href: "/services/cloud-aws-modernization",
      imageSrc: "/imagery/service-cloud-modernization.jpg",
      imageAlt: "Cloud infrastructure and hardware environment for modernization services",
    },
    {
      id: "qa",
      title: "QA & Test Automation",
      href: "/services/qa-test-automation",
      imageSrc: "/imagery/service-qa-automation.jpg",
      imageAlt: "Quality engineer validating software quality and automated test outcomes",
    },
    {
      id: "support",
      title: "Support & Maintenance",
      href: "/services/support-maintenance",
      imageSrc: "/imagery/service-support-maintenance.jpg",
      imageAlt: "Operations team coordinating support and maintenance workflows",
    },
    {
      id: "integrations",
      title: "Integrations & APIs",
      href: "/services/integrations-apis",
      imageSrc: "/imagery/service-integrations-api.jpg",
      imageAlt: "Developer integrating software systems and APIs across platforms",
    },
  ] as HomeServiceCard[],
  cta: {
    label: "Explore Services",
    href: "/services",
  },
};

export const homeWhoWeWorkWith = {
  sectionId: "who-we-work-with" as const,
  title: "Who we work with",
  audiences: [
    {
      id: "product-cos",
      title: "Software product companies",
      description: "Building and scaling products",
      imageSrc: "/imagery/audience-product-companies.jpg",
      imageAlt: "Software product teams collaborating on roadmap and delivery",
    },
    {
      id: "enterprise-it",
      title: "Enterprise IT departments",
      description: "Delivering business-critical systems",
      imageSrc: "/imagery/audience-enterprise-it.jpg",
      imageAlt: "Enterprise business district representing large-scale IT operations",
    },
  ],
  regions: "USA • Canada • Europe",
};

export const homeWhyNotetech = {
  sectionId: "why-notetech" as const,
  title: "Why Notetech",
  points: [
    {
      id: "long-term",
      text: "Built for long-term delivery",
      imageSrc: "/imagery/why-long-term-delivery.jpg",
      imageAlt: "Enterprise planning and delivery roadmap visual",
    },
    {
      id: "stable-teams",
      text: "Stable teams and continuity planning",
      imageSrc: "/imagery/why-stable-teams.jpg",
      imageAlt: "Collaborative engineering team in an ongoing delivery setting",
    },
    {
      id: "tracking",
      text: "Transparent tracking and progress reporting",
      imageSrc: "/imagery/why-transparent-tracking.jpg",
      imageAlt: "Project metrics and progress dashboard representation",
    },
    {
      id: "discipline",
      text: "Engineering discipline: code reviews, testing, maintainability",
      imageSrc: "/imagery/why-engineering-discipline.jpg",
      imageAlt: "Software engineering workstation representing quality and discipline",
    },
    {
      id: "ip-safe",
      text: "IP-safe delivery aligned to client expectations",
      imageSrc: "/imagery/why-ip-safe-delivery.jpg",
      imageAlt: "Secure software delivery environment for IP-safe execution",
    },
  ],
  cta: { label: "How We Work", href: "/how-we-work/engagement-models" },
};

export const homeBusinessModelIp = {
  sectionId: "business-model-ip" as const,
  title: "Business model & IP",
  subtitle: "Quick view",
  pillars: [
    {
      id: "client-ip",
      title: "Client-owned IP",
      body: "Clients own the product and source code (defined in the SOW/contract).",
    },
    {
      id: "dedicated",
      title: "Dedicated engineers",
      body: "We provide engineers for build and ongoing maintenance aligned to your roadmap.",
    },
    {
      id: "transition",
      title: "Transition-ready",
      body: "If you move development in-house, we support structured handover.",
    },
  ],
  cta: { label: "Security & IP", href: "/security-ip/ip-ownership-nda" },
};

export const homeNotableOutcome = {
  sectionId: "notable-outcome" as const,
  title: "Notable outcome",
  badge: "Under NDA" as const,
  body:
    "Source code developed by Notetech for a US client was later acquired by a global enterprise software company to accelerate a mobile ERP initiative. Additional details available under NDA.",
};

export const homeFeaturedCaseStudies: HomeCaseStudyCard[] = [
  {
    id: "cs-1",
    slug: "mobile-erp-extension",
    title: "Mobile ERP extension (US client)",
    summary:
      "Built a mobile platform extending ERP workflows with secure access and reliable syncing.",
    stack: ".NET/C# • APIs • Mobile • SQL Server",
    outcome: "Improved field productivity and operational visibility.",
    ndaSafePresentation: true,
  },
  {
    id: "cs-2",
    slug: "platform-modernization-cloud",
    title: "Platform modernization and cloud readiness",
    summary:
      "Modernized a business-critical system and improved release reliability with phased upgrades.",
    stack: ".NET • Angular • AWS • SQL Server",
    outcome: "Faster releases and more stable production operations.",
    ndaSafePresentation: true,
  },
  {
    id: "cs-3",
    slug: "integration-api-platform",
    title: "Integration and API platform",
    summary:
      "Delivered secure integrations and APIs with monitoring and failure-handling.",
    stack: "REST APIs • AWS • PostgreSQL/MySQL",
    outcome: "Reduced manual work and improved data consistency.",
    ndaSafePresentation: true,
  },
];

export const homeCaseStudiesSection = {
  sectionId: "case-studies" as const,
  title: "Case studies",
  subtitle: "Featured",
  viewAllLabel: "View All Case Studies",
  viewAllHref: "/case-studies",
  confidentialityNote:
    "Some project details and client references can be shared under NDA, subject to confidentiality.",
};

export const homeAwards = {
  sectionId: "awards" as const,
  title: "Awards highlight",
  headline: "Award-winning client products",
  body:
    "Client products developed with Notetech have received multiple IBM PartnerWorld® Beacon Awards and IBM Lotus Awards (Winners + Finalists), including recognitions at Lotusphere Showcase and Lotus Advisor.",
  cta: { label: "View Awards & Recognition", href: "/company/awards" },
  confidentialityNote:
    "Some project details and client references can be shared under NDA, subject to confidentiality.",
};

export const homeTechnologyTeaser = {
  sectionId: "technology" as const,
  title: "Technology",
  subtitle: "Teaser",
  headline: "Technology that fits your environment",
  body: "We work across modern product stacks (including .NET/C#, Angular/React, AWS, SQL and open-source databases, and test automation). If you prefer a specific stack, we align to it and staff accordingly.",
  cta: { label: "Technology", href: "/technology" },
};

export const homeProductHighlight = {
  sectionId: "products" as const,
  title: "Products",
  productName: "VoiceFirst",
  description:
    "Operations & issue-tracking platform for multi-location teams.",
  ctaLabel: "Visit VoiceFirst website",
  ctaHref: voiceFirstUrl,
};

export const homeFinalCta = {
  sectionId: "cta" as const,
  title: "Tell us what you're building",
  body: "Share your goals and timeline—we'll propose a team model aligned to your product roadmap.",
  ctas: {
    primaryLabel: "Schedule a Call",
    primaryHref: "/contact",
    secondaryLabel: "Contact Us",
    secondaryHref: "/contact",
  } satisfies CtaPair,
  responseNote: "Response within 1 business day.",
};
