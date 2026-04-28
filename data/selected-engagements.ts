import type { DocPageData } from "@/components/content/DocPageTemplate";

export type SelectedEngagement = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  outcome: string;
  details: string[];
};

export const selectedEngagementsLanding = {
  metaTitle: "Selected Engagements",
  metaDescription:
    "Representative long-term engagements across ERP, Industrial IoT, CRM mobility, and healthcare intelligence. Details are generalized and expanded under NDA where appropriate.",
  title: "Selected Engagements",
  headline: "Representative long-term product engineering partnerships",
  intro:
    "These engagements reflect the kind of work Notetech is built for: multi-year partnerships, business-critical systems, disciplined delivery, and IP-sensitive collaboration. Some client details remain confidential and can be shared during qualified discussions.",
} as const;

export const selectedEngagements: SelectedEngagement[] = [
  {
    slug: "erp-cloud-platform",
    title: "Enterprise ERP & Cloud Platform Engineering Partner",
    summary:
      "Long-term engineering partnership spanning ERP extensions, integration platforms, workflow automation, cloud modernization, and managed support for a North American client.",
    stack: [".NET", "AWS", "REST APIs", "ERP", "CI/CD"],
    outcome:
      "10+ years of active collaboration demonstrating product-level engineering depth, structured offshore governance, and scalable long-term delivery.",
    details: [
      "Since 2015, Notetech has supported a Canada-based ERP and digital transformation company across ERP product engineering, integration platform development, workflow automation systems, cloud modernization, and multi-entity financial tooling.",
      "The engagement combined software product development, dedicated development team support, QA and test automation, support and maintenance, and integrations and APIs under a single long-term roadmap.",
      "The program used agile delivery with enterprise governance, structured sprint planning, KPI visibility, and dedicated engagement management.",
      "Security and IP controls included strict NDAs, controlled source-code access, role-based security controls, encrypted environments, and structured IP ownership policies.",
    ],
  },
  {
    slug: "industrial-iot-platform",
    title: "Industrial IoT Intelligence Platform",
    summary:
      "A large-scale Industrial IoT platform for remote monitoring, predictive analytics, dashboards, and cloud-ready product evolution across enterprise environments.",
    stack: ["IoT", "Cloud", "APIs", "Analytics", "QA Automation"],
    outcome:
      "Enabled commercialization of an enterprise IoT monitoring product, improved uptime visibility, and sustained feature growth across a multi-year strategic partnership.",
    details: [
      "Since 2015, Notetech has worked with a California-based industrial technology company to design, build, and continuously evolve a large-scale Industrial IoT intelligence platform.",
      "The platform supports real-time sensor data acquisition, remote equipment monitoring, predictive analytics, intelligent alerts, and operational dashboards.",
      "Notetech acted as a dedicated development team and product engineering partner, covering architecture, visualization systems, cloud modernization, ongoing support, and integration APIs.",
      "The engagement required NDA-governed development, isolated environments, secure repositories, controlled access management, and IP ownership retained by the client.",
    ],
  },
  {
    slug: "crm-mobility-engineering",
    title: "Enterprise CRM Platform & Mobility Engineering",
    summary:
      "Multi-year CRM platform and mobility engineering work spanning enterprise workflow automation, secure mobile access, and post-acquisition continuity for a U.S. software company.",
    stack: ["Lotus Notes/Domino", "CRM", "Mobile", "Enterprise Security"],
    outcome:
      "Successful source-code acquisition by a major CRM company followed by continued multi-year engineering retention, demonstrating enterprise-grade architecture quality and IP discipline.",
    details: [
      "From 2001 to 2017, Notetech partnered with a U.S.-based enterprise software company on a customizable CRM platform that later evolved into a strategic mobility layer for enterprise CRM systems.",
      "The product supported workflow-driven CRM automation, secure document-level architecture, role-based access control, offline replication, and secure mobile CRM access.",
      "In 2011, source-code rights for the mobility platform were acquired by a California-based global CRM software company, which retained Notetech as the engineering partner for further development and maintenance.",
      "This engagement demonstrates long-term product lifecycle ownership, security and IP discipline, and the ability to support acquisition-level transitions without losing delivery continuity.",
    ],
  },
  {
    slug: "healthcare-intelligence-platform",
    title: "Enterprise Healthcare Market Intelligence Platform",
    summary:
      "Dedicated offshore product engineering for a healthcare intelligence SaaS platform used across the U.S. life sciences ecosystem for market access and reimbursement analysis.",
    stack: ["SaaS", "Healthcare Data", "APIs", "Cloud", "Data Architecture"],
    outcome:
      "Delivered enterprise-scale SaaS capabilities, API-enabled data distribution, and smooth long-term transition support in a regulated domain.",
    details: [
      "From 2016 to 2021, Notetech worked with a U.S.-based healthcare market intelligence company to build and scale a commercial intelligence platform for the pharmaceutical industry.",
      "The product addressed formulary and coverage intelligence, reimbursement visibility, competitive benchmarking, launch readiness modeling, and API-based enterprise data distribution.",
      "Notetech contributed across core platform development, healthcare data architecture, multi-tenant SaaS scalability, enterprise authentication, data services, and BI connectivity.",
      "The program operated under formal NDA and IP structures, strict data governance, audit logging, controlled permissions, and secure data storage expectations appropriate for a regulated industry.",
    ],
  },
];

export const selectedEngagementsDocPage: DocPageData = {
  title: selectedEngagementsLanding.title,
  metaTitle: selectedEngagementsLanding.metaTitle,
  metaDescription: selectedEngagementsLanding.metaDescription,
  headline: selectedEngagementsLanding.headline,
  intro: selectedEngagementsLanding.intro,
  contentHeading: "Selected engagement snapshots",
  parentLabel: "Company",
  parentHref: "/company",
  visualSlot: "case-studies",
  heroImageSrc: "/imagery/companyPage/engagement.jpg",
  sectionImages: [
    "/imagery/service/3d-abstract-background-with-flowing-particles-cyber-dots-network-connections.jpg",
    "/imagery/service/smooth-wave-patterns-flow-abstract-elegance-generated-by-ai.jpg",
    "/imagery/3d-render-abstract-tech-background-with-flowing-cyber-lines.jpg",
  ],
  sections: selectedEngagements.map((engagement) => ({
    title: engagement.title,
    description: engagement.summary,
    subsections: [
      {
        heading: "Stack",
        bullets: engagement.stack,
      },
      {
        heading: "Engagement details",
        bullets: engagement.details,
        note: `Outcome: ${engagement.outcome}`,
      },
    ],
  })),
  cta: {
    title: "Discuss relevant engagements under NDA",
    description:
      "Representative summaries only. Client names and selected product details remain confidential and can be expanded under NDA where appropriate.",
    primaryLabel: "Schedule a Call",
    primaryHref: "/contact",
    secondaryLabel: "Contact Us",
    secondaryHref: "/contact",
  },
};
