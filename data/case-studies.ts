/**
 * Case studies — featured + listing mock content (NDA-safe, generalized).
 * Payload: `case-studies` collection; `featured` boolean; rich text for body fields.
 */

export type CaseStudyDetail = {
  slug: string;
  title: string;
  summary: string;
  /** For detail page and cards */
  stack: string[];
  outcome: string;
  /** Longer narrative for detail template */
  context: string;
  /** How we approached the work (generalized) */
  approach: string;
  metaTitle?: string;
  metaDescription?: string;
  /** Always true for mock — drives disclosure UI */
  ndaSafe: true;
  /** Short card teaser for listing (optional override) */
  listingTeaser?: string;
  featured?: boolean;
};

export const caseStudySlugs = [
  "mobile-erp-extension",
  "platform-modernization-cloud",
  "integration-api-platform",
] as const;

export type CaseStudySlug = (typeof caseStudySlugs)[number];

export const caseStudiesListingIntro = {
  title: "Case studies",
  headline: "Representative engagements",
  intro:
    "Outcomes and identifiers are generalized to respect confidentiality. Many of our most meaningful references are available under NDA.",
} as const;

export const caseStudiesBySlug: Record<CaseStudySlug, CaseStudyDetail> = {
  "mobile-erp-extension": {
    slug: "mobile-erp-extension",
    title: "Mobile ERP extension for a US client",
    summary:
      "Built a mobile platform extending ERP workflows to field teams with secure access and reliable syncing.",
    stack: [".NET/C#", "APIs", "Mobile", "SQL Server"],
    outcome:
      "Improved field productivity and operational visibility while keeping access controlled and auditable.",
    context:
      "A product organization needed field teams to execute core ERP-driven workflows without being tethered to desktop-only experiences. The engagement focused on secure connectivity, offline-tolerant patterns where applicable, and pragmatic integration with existing enterprise systems—without exposing unnecessary surface area.",
    approach:
      "We partnered with client stakeholders to define workflow slices that could ship incrementally, implemented APIs aligned to existing security constraints, and emphasized reliability in sync and authentication paths. Delivery included disciplined testing around integration points that historically caused production issues.",
    ndaSafe: true,
    featured: true,
    metaTitle: "Case study: Mobile ERP extension",
    metaDescription:
      "Mobile platform extending ERP workflows—secure access, reliable syncing, and measurable field productivity gains.",
  },

  "platform-modernization-cloud": {
    slug: "platform-modernization-cloud",
    title: "Modernization and cloud readiness for a business-critical platform",
    summary:
      "Modernized a legacy system and introduced a phased plan for cloud migration and reliability improvements.",
    stack: [".NET", "Angular", "AWS", "SQL Server"],
    outcome:
      "Faster releases and more stable production operations through phased modernization and safer change practices.",
    context:
      "A business-critical platform had accumulated technical debt that slowed releases and increased operational anxiety. The objective was not a headline rewrite—it was to make change safer, reduce surprise failures, and create a credible sequence of steps toward cloud readiness.",
    approach:
      "We stabilized the highest-risk areas first, tightened release mechanics, and sequenced modernization work into phases aligned to business capacity. AWS-oriented patterns were introduced where they reduced risk and operational load, while avoiding unnecessary big-bang migrations.",
    ndaSafe: true,
    featured: true,
    metaTitle: "Case study: Platform modernization",
    metaDescription:
      "Phased modernization for a business-critical platform—improved reliability and a practical path toward cloud readiness.",
  },

  "integration-api-platform": {
    slug: "integration-api-platform",
    title: "Integration platform for multi-system workflows",
    summary:
      "Delivered secure APIs and integrations to connect core systems with monitoring and failure-handling.",
    stack: ["REST APIs", "AWS", "PostgreSQL/MySQL"],
    outcome:
      "Reduced manual work and improved data consistency across teams that depended on timely, accurate exchanges.",
    context:
      "Multiple teams depended on workflows that were partially manual and partially brittle scripts. The initiative focused on production-grade integrations: explicit failure behavior, monitoring, and data validation at boundaries—so exceptions became visible instead of silently degrading downstream processes.",
    approach:
      "We modeled integration contracts around realistic failure modes, implemented observability aligned to support workflows, and validated data mappings with stakeholders who understood edge cases. The outcome was not just connectivity—it was operational confidence.",
    ndaSafe: true,
    featured: true,
    metaTitle: "Case study: Integration & API platform",
    metaDescription:
      "Secure APIs and integrations with monitoring and failure-handling—less manual work, more consistent data.",
  },
};
