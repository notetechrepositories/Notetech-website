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
  headline: "",
  intro: "",
} as const;

export const selectedEngagements: SelectedEngagement[] = [
  {
    slug: "erp-cloud-platform",
    title: "Enterprise ERP & Cloud Platform Engineering Partner",
    summary:
      "Long-term dedicated team partnership (2015–present) with a Canada-based global ERP and digital transformation company—product engineering, integrations, workflow automation, and cloud modernization under NDA.",
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
  parentLabel: "Company",
  parentHref: "/company",
  visualSlot: "case-studies",
  sectionImages: [
    "/imagery/ERP.jpg",
    "/imagery/technology-analytics.jpg",
    "/imagery/service-product-development.jpg",
    "/imagery/audience-enterprise-it.jpg",
  ],
  sections: [
    {
      title: "Enterprise ERP & Cloud Platform Engineering Partner",
      description: "(Client Confidential – Details Shared Prior to Engagement)",
      subsectionIndicesUnderImage: [2],
      subsections: [
        {
          heading: "Overview",
          headingStyle: "subtitle",
          paragraphs: [
            "Since 2015 (ongoing through 2026), Notetech has been the long-term engineering partner for a Canada-based global ERP and digital transformation company serving mid-market and enterprise customers across North America.",
            "Engagements are covered by signed NDAs: we do not publish the client name or commercial product branding here. Appropriate detail can be shared with you before formal discussions.",
          ],
        },
        {
          heading: "This engagement spans:",
          bullets: [
            "ERP product engineering",
            "Integration platform development",
            "Workflow automation systems",
            "Cloud modernization",
            "Multi-entity financial tooling",
            "Ongoing enhancement & managed support",
          ],
          note: "The relationship continues as a strategic, multi-year partnership.",
          noteWrap: "card",
        },
        {
          heading: "Engagement Snapshot",
          headingStyle: "subtitle",
          wrap: "card",
          bullets: [
            "Duration: 2015 – Present (10+ Years)",
            "Region: Canada / North America",
            "Model: Dedicated Offshore Development Team",
            "Focus: ERP Extensions, Integration Platforms, Workflow Automation",
            "Status: Active & Expanding",
          ],
        },
        {
          heading: "Product Engineering Contributions",
          headingStyle: "subtitle",
          paragraphsWidth: "full",
          paragraphs: [
            "Our Notetech engineering team has contributed to the development, enhancement, and support of multiple enterprise software products including:",
          ],
          bulletsStructured: [
            {
              icon: "layers",
              title: "Industry-Specific ERP Platform",
              description:
                "All-in-one ERP solution tailored for specialized manufacturing & distribution sectors.",
            },
            {
              icon: "integration",
              title: "Cloud Integration Platform",
              description:
                "A modern integration layer connecting ERP systems with third-party applications, enabling secure data flow and real-time synchronization.",
            },
            {
              icon: "portal",
              title: "Experience & Portal Platform",
              description:
                "A digital experience layer that allows organizations to publish portals, manage customer interactions, and extend ERP functionality outward.",
            },
            {
              icon: "ledger",
              title: "Multi-Entity Financial Management Tool",
              description:
                "Advanced intercompany accounting and consolidated reporting framework built on enterprise ERP systems.",
            },
            {
              icon: "automation",
              title: "Document & Workflow Automation Platform",
              description:
                "Automation engine for purchasing workflows, sales order processing, expense management, and operational document routing.",
            },
          ],
          note: "These platforms are deployed across North American enterprises and support complex business environments.",
          noteWrap: "card",
        },
        {
          heading: "Why This Engagement Matters",
          headingStyle: "subtitle",
          bullets: [
            "Long-term enterprise trust",
            "Product-level engineering capability",
            "ERP & integration domain depth",
            "Cultural alignment with Western companies",
            "Structured offshore governance",
            "Scalable engineering partnership",
            "Notetech is not a short-term vendor.",
            "We are a long-term product engineering partner.",
          ],
        },
      ],
    },
    ...selectedEngagements.slice(1).map((engagement) => ({
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
  ],
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
