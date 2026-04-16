import type { DocPageData } from "@/components/content/DocPageTemplate";

export const COMPANY_SLUGS = ["about", "leadership", "awards", "careers"] as const;

export type CompanySlug = (typeof COMPANY_SLUGS)[number];

export const companyPages: Record<CompanySlug, DocPageData> = {
  about: {
    title: "About Notetech",
    metaDescription:
      "Enterprise-grade delivery for software products since 1998, serving software product companies and enterprise IT teams across the USA, Canada, and Europe.",
    headline: "Enterprise-grade delivery for software products since 1998",
    intro:
      "Notetech Software is a software engineering partner for software product companies and enterprise IT organizations across the USA, Canada, and Europe. We help teams deliver and modernize business-critical systems with stable engineering capacity, disciplined execution, and an IP-safe working model.",
    parentLabel: "Company",
    parentHref: "/company",
    visualSlot: "case-studies",
    sections: [
      {
        title: "Company snapshot",
        bullets: [
          "Founded in 1998.",
          "Team size of roughly 50-75 engineers.",
          "Client regions across the USA, Canada, and Europe.",
          "Engagements centered on product engineering and internal platforms.",
        ],
      },
      {
        title: "What we deliver",
        bullets: [
          "Dedicated development teams.",
          "Product engineering across web, API, and cloud layers.",
          "Cloud and AWS modernization.",
          "QA and test automation.",
          "Support and maintenance for production systems.",
          "Integrations and API platforms.",
        ],
      },
      {
        title: "Why organizations choose Notetech",
        cards: [
          {
            title: "Stable teams, low attrition",
            body: "Continuity protects domain knowledge and reduces operational risk. Our teams are structured to retain context and maintain momentum over time.",
          },
          {
            title: "Predictable delivery and governance",
            body: "We operate with clear ownership, shared tracking, and regular progress reporting so stakeholders know what is delivered, what is next, and what needs a decision.",
          },
          {
            title: "IP-safe by default",
            body: "We prefer client-controlled repositories and align access boundaries to your environment. IP ownership is defined clearly in the contract or SOW, and confidentiality is standard practice.",
          },
          {
            title: "Engineering discipline",
            body: "Code reviews, testing discipline, and maintainable architecture are built into delivery to support reliability, scalability, and long-term ownership.",
          },
        ],
        columns: 2,
      },
      {
        title: "How engagements usually start",
        bullets: [
          "Discovery around goals, constraints, security expectations, and success metrics.",
          "A proposal with team plan, milestones, timeline, and delivery governance.",
          "Kickoff covering repositories, access, environments, and tools.",
          "Delivery in 1-2 week sprints with transparent tracking and progress reporting.",
        ],
      },
    ],
    cta: {
      title: "Start the conversation",
      description:
        "Tell us what you are building and your timeline, and we will recommend a delivery model aligned to your roadmap.",
      primaryLabel: "Schedule a Call",
      primaryHref: "/contact",
      secondaryLabel: "View Case Studies",
      secondaryHref: "/case-studies",
    },
  },
  leadership: {
    title: "Leadership / Core Team",
    metaDescription:
      "Experienced, hands-on leadership focused on delivery governance, engineering quality, and client communication.",
    headline: "Experienced, hands-on leadership focused on delivery",
    intro:
      "At Notetech Software, leadership is directly involved in delivery governance, engineering quality, and client communication. We run stable teams with clear ownership so product roadmaps move forward predictably and responsibly.",
    parentLabel: "Company",
    parentHref: "/company",
    visualSlot: "technology",
    sections: [
      {
        title: "What leadership is accountable for",
        cards: [
          {
            title: "Delivery governance",
            body: "Roadmap alignment, milestone planning, delivery predictability, risk identification, early mitigation, and clear ownership with escalation paths.",
          },
          {
            title: "Engineering standards",
            body: "Code review discipline, testing and release readiness practices, and architecture decisions aligned to scalability and long-term ownership.",
          },
          {
            title: "Client collaboration",
            body: "Transparent communication, progress reporting, stakeholder alignment, decision support, and onboarding that fits the client's tools and standards.",
          },
          {
            title: "Continuity",
            body: "Stable teams, knowledge retention, documentation expectations, and backup planning to reduce single points of failure.",
          },
        ],
        columns: 2,
      },
      {
        title: "Core team model",
        bullets: [
          "Technical leadership covering architecture and standards.",
          "Engineering execution led by senior developers.",
          "Quality ownership through QA and testing discipline.",
          "Optional cloud and DevOps support when the engagement requires it.",
          "Alignment to your toolchain and processes while maintaining consistent engineering standards.",
        ],
      },
      {
        title: "What clients can expect",
        bullets: [
          "Direct involvement in delivery quality, not just high-level oversight.",
          "Clear governance and communication rhythms that support multi-quarter roadmaps.",
          "A leadership model built to support stable teams rather than churn-heavy staffing.",
        ],
      },
    ],
    cta: {
      title: "Talk with a delivery-focused team",
      description:
        "If you are looking for stable engineering capacity with clear governance and predictable delivery, we are happy to discuss your roadmap.",
      primaryLabel: "Schedule a Call",
      primaryHref: "/contact",
      secondaryLabel: "Contact Us",
      secondaryHref: "/contact",
    },
  },
  awards: {
    title: "Awards & Recognition",
    metaDescription:
      "Industry recognition and notable outcomes connected to client products developed with Notetech.",
    headline: "Recognition earned through long-term product delivery",
    intro:
      "Over the years, client products developed with Notetech have received industry recognition, including award and finalist acknowledgements within the IBM Lotus and PartnerWorld ecosystem. Additional detail can be shared under NDA where appropriate.",
    parentLabel: "Company",
    parentHref: "/company",
    visualSlot: "case-studies",
    sections: [
      {
        title: "Recognition themes from our track record",
        bullets: [
          "Industry recognition connected to enterprise CRM and mobility platforms developed with Notetech.",
          "Award and finalist recognition within the IBM Lotus and PartnerWorld ecosystem.",
          "Long-term retention after strategic IP and source-code transitions, reinforcing engineering trust.",
        ],
      },
      {
        title: "Notable outcomes",
        cards: [
          {
            title: "Source code acquisition milestone",
            body: "Source code developed by Notetech for a U.S. client was later acquired by a California-based global CRM software company, which then retained Notetech as its engineering partner for continued development and maintenance.",
          },
          {
            title: "Enterprise-scale continuity",
            body: "Multiple engagements in CRM, ERP, Industrial IoT, and healthcare intelligence demonstrate multi-year engineering continuity under strong security and IP constraints.",
          },
          {
            title: "Recognition beyond marketing claims",
            body: "The strongest signal in the document is not trophy language alone but sustained retention, product evolution, and trust through complex delivery cycles and platform transitions.",
          },
        ],
        columns: 3,
      },
    ],
    cta: {
      title: "Ask for the deeper context under NDA",
      description:
        "We can share additional background on selected recognitions and client outcomes during formal engagement discussions.",
      primaryLabel: "Schedule a Call",
      primaryHref: "/contact",
      secondaryLabel: "View Case Studies",
      secondaryHref: "/case-studies",
    },
  },
  careers: {
    title: "Careers",
    metaDescription:
      "Join a long-term engineering environment focused on stable teams, disciplined delivery, and product ownership.",
    headline: "A delivery culture built on continuity and engineering discipline",
    intro:
      "The company material emphasizes stable teams, low attrition, predictable delivery, and long-term ownership. That is the environment we want to keep building: one where engineers retain context, work responsibly, and represent clients well over time.",
    parentLabel: "Company",
    parentHref: "/company",
    visualSlot: "services",
    sections: [
      {
        title: "What kind of environment we are building",
        bullets: [
          "Stable teams that retain product and domain knowledge over time.",
          "A working model that values engineering discipline, communication quality, and long-term maintainability.",
          "Client-facing delivery where clear ownership and predictable execution matter.",
        ],
      },
      {
        title: "What matters here",
        bullets: [
          "Code review discipline and maintainable implementation choices.",
          "Comfort working within client tools, standards, and governance models.",
          "A professional approach to communication, progress reporting, and continuity planning.",
          "Willingness to work on business-critical systems where quality and reliability matter.",
        ],
      },
    ],
    cta: {
      title: "Interested in working with us?",
      description:
        "If you value long-term product engineering, stable teams, and disciplined delivery, reach out and we can point you to the right next step.",
      primaryLabel: "Contact Us",
      primaryHref: "/contact",
    },
  },
};

export const productsPage: DocPageData = {
  title: "Products",
  metaDescription:
    "Representative product and platform categories delivered by Notetech across ERP, IoT, CRM mobility, healthcare intelligence, and workflow systems.",
  headline: "Representative product and platform work across complex domains",
  intro:
    "The company document highlights a range of product and platform categories Notetech has helped build, extend, and modernize across multi-year engagements. Many client and product names remain confidential, but the work itself shows the breadth of delivery capability.",
  parentLabel: "Company",
  parentHref: "/company",
  visualSlot: "case-studies",
  sections: [
    {
      title: "Representative product categories",
      cards: [
        {
          title: "ERP and cloud platform engineering",
          body: "Long-term work spanning ERP product engineering, integration platforms, workflow automation, cloud modernization, multi-entity financial tooling, and managed support.",
        },
        {
          title: "Industrial IoT intelligence platforms",
          body: "Enterprise IoT systems for real-time sensor data, remote monitoring, predictive analytics, alerting, dashboards, and large-scale deployments.",
        },
        {
          title: "Enterprise CRM mobility",
          body: "CRM and mobility platforms extending enterprise systems securely to mobile devices with offline sync, field-force enablement, and operational visibility.",
        },
        {
          title: "Healthcare market intelligence SaaS",
          body: "Cloud-based market access and commercial intelligence platforms with payer data modeling, API layers, analytics dashboards, and enterprise-grade reporting.",
        },
      ],
      columns: 2,
    },
    {
      title: "What these examples show",
      bullets: [
        "Capability across product engineering, enterprise modernization, QA, integrations, and long-term support.",
        "Experience with IP-sensitive delivery and NDA-governed environments.",
        "Ability to sustain engineering continuity across multi-year product lifecycles and platform transitions.",
      ],
    },
  ],
  cta: {
    title: "Discuss the kind of product work you need",
    description:
      "If your roadmap spans product engineering, modernization, or platform scaling, we can talk through what a practical delivery model would look like.",
    primaryLabel: "Schedule a Call",
    primaryHref: "/contact",
    secondaryLabel: "View Case Studies",
    secondaryHref: "/case-studies",
  },
};

export function getCompanyPage(slug: string): DocPageData | undefined {
  return companyPages[slug as CompanySlug];
}
