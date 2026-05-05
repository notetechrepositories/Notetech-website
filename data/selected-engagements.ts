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
    "Representative long-term engagements across ERP, Industrial IoT, enterprise CRM (Lotus/Domino and Edge mobility), and healthcare intelligence. Details are generalized and expanded under NDA where appropriate.",
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
    slug: "edge-enterprise-crm-mobility",
    title: "Edge – Enterprise CRM Mobility Platform",
    summary:
      "Universal enterprise CRM mobility layer: secure field access, offline-first sync, global CRM coverage, acquisition by a tier-one software leader, and multi-year ODC delivery.",
    stack: ["CRM", "Mobile", "Enterprise APIs", "Java", "ODC"],
    outcome:
      "Scaled architecture through a complex product takeover, sustained global releases post-acquisition, and an orderly transition—demonstrating enterprise-grade engineering trust.",
    details: [
      "Edge extends major CRM platforms to mobile with secure real-time access, offline-first synchronization, and workflow continuity for distributed teams.",
      "Following 2012 acquisition of source-code rights by a global enterprise software company, Notetech operated as the ODC for six years before a structured handoff.",
      "The program underscores award-winning mobility innovation, IP discipline, and the ability to partner at the scale expected by the world's largest CRM vendors.",
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
    "/imagery/IOT.jpg",
    "/imagery/mobility.jpg",
    "/imagery/CRM.jpg",
    "/imagery/healthcare.jpg",
  ],
  sections: [
    {
      title: selectedEngagements[0].title,
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
          bullets: [
            "Duration: 2015 – Present (10+ Years)",
            "Region: Canada / North America",
            "Model: Dedicated Offshore Development Team",
            "Focus: ERP Extensions, Integration Platforms, Workflow Automation",
            "Status: Active & Expanding",
          ],
        },
        {
          heading: "Services Delivered",
          headingStyle: "subtitle",
        },
        {
          heading: "Software Product Development",
          bullets: [
            "Feature architecture & module design",
            "Platform scalability improvements",
            "Performance optimization",
            "Enterprise-grade refactoring",
          ],
        },
        {
          heading: "Dedicated Development Team",
          bullets: [
            "Long-term embedded engineering team",
            "Agile sprint execution",
            "Scalable team expansion",
            "Deep product knowledge retention",
          ],
        },
        {
          heading: "Cloud & AWS Modernization",
          bullets: [
            "Cloud-native enhancements",
            "Infrastructure optimization",
            "Secure hosting strategies",
            "DevOps automation pipelines",
          ],
        },
        {
          heading: "QA & Test Automation",
          bullets: [
            "Automated regression testing",
            "Integration testing frameworks",
            "Performance benchmarking",
            "Release validation cycles",
          ],
        },
        {
          heading: "Support & Maintenance",
          bullets: [
            "L2 / L3 enterprise support",
            "Ongoing enhancement backlog",
            "SLA-driven responsiveness",
          ],
        },
        {
          heading: "Integrations & APIs",
          bullets: [
            "ERP system integrations",
            "Financial system connectors",
            "Middleware design",
            "Secure API frameworks",
          ],
        },
        {
          heading: "How We Work",
          headingStyle: "subtitle",
        },
        {
          heading: "Delivery Process",
          bullets: [
            "Agile methodology with enterprise governance",
            "Structured sprint planning",
            "Roadmap-driven execution",
            "Milestone-based releases",
          ],
        },
        {
          heading: "Communication & Reporting",
          bullets: [
            "Weekly engineering updates",
            "Monthly executive summaries",
            "Transparent KPI tracking",
            "Dedicated engagement manager",
          ],
        },
        {
          heading: "Onboarding & Kickoff",
          bullets: [
            "Architecture alignment workshops",
            "Security & compliance briefing",
            "Defined success metrics",
            "Clear escalation matrix",
          ],
        },
        {
          heading: "Technology Landscape",
          headingStyle: "subtitle",
          paragraphs: [
            "The engagement spans modern enterprise technologies including:",
          ],
          bullets: [
            "ERP customization frameworks",
            ".NET enterprise stack",
            "Cloud infrastructure (AWS & hybrid)",
            "REST APIs & middleware services",
            "Secure database systems",
            "CI/CD pipelines & DevOps tooling",
            "Automation frameworks",
          ],
        },
        {
          heading: "Security & IP Governance",
          headingStyle: "subtitle",
          paragraphs: [
            "Enterprise partnerships require disciplined controls.",
            "Notetech operates under:",
          ],
          bullets: [
            "Strict NDAs",
            "Controlled source code access",
            "Role-based security controls",
            "Encrypted environments",
            "Structured IP ownership policies",
            "North American compliance alignment",
          ],
          note: "Confidentiality and IP integrity remain foundational to this long-term relationship.",
        },
        {
          heading: "Business Model",
          headingStyle: "subtitle",
          bullets: [
            "Dedicated Offshore Development Center (ODC)",
            "Long-term product engineering partnership",
            "Managed services structure",
            "Enhancement & modernization roadmap",
            "Pilot engagements prior to scale",
          ],
        },
        {
          heading: "About Notetech",
          headingStyle: "subtitle",
          paragraphs: [
            "Founded in 1998, Notetech is an enterprise-focused software engineering company with 50–75 engineers specializing in:",
          ],
          bullets: [
            "ERP systems",
            "AI-driven enterprise platforms",
            "Cloud modernization",
            "Workflow automation",
            "Dedicated development teams",
          ],
          note: "We help software companies extend, modernize, and scale their products.",
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
    {
      title: "Industrial IoT Intelligence Platform (2015 - Present)",
      description:
        "Client details and product name are withheld due to a signed NDA. Client information will be disclosed prior to formal engagement discussions.",
      subsectionIndicesUnderImage: [2],
      subsections: [
        {
          heading: "Engagement Overview",
          headingStyle: "subtitle",
          paragraphs: [
            "Since 2015, Notetech Software has partnered with a California-based industrial technology company to design, build, and continuously evolve a large-scale Industrial IoT intelligence platform used across multiple enterprise environments.",
            "The platform enables:",
          ],
          bullets: [
            "Real-time sensor data acquisition",
            "Remote equipment monitoring",
            "Predictive analytics",
            "Intelligent alerting systems",
            "Operational performance dashboards",
          ],
          note:
            "This engagement is ongoing (2015-2026+), reflecting a long-term strategic technology partnership.",
          noteWrap: "card",
        },
        {
          heading: "The Business Context",
          headingStyle: "subtitle",
          paragraphs: [
            "Our client required a scalable, secure, enterprise-grade platform to:",
          ],
          bullets: [
            "Monitor industrial assets in real time",
            "Reduce downtime through predictive maintenance",
            "Deliver centralized visibility across distributed infrastructure",
            "Support rapid product innovation cycles",
            "Scale to thousands of deployments",
          ],
          note:
            "The system needed to be cloud-ready, analytics-driven, and built with strong IP protection standards.",
          noteWrap: "card",
        },
        {
          heading: "Selected Engagement Snapshot",
          headingStyle: "subtitle",
          bullets: [
            "Industry: Industrial IoT",
            "Engagement Duration: 2015 - Present",
            "Model: Dedicated Offshore Development Center",
            "Region: US (California-based company)",
            "Scope: Product engineering, cloud, QA, support",
            "Status: Ongoing strategic partnership",
          ],
        },
        {
          heading: "Our Role",
          headingStyle: "subtitle",
          paragraphs: [
            "Notetech provided a Dedicated Development Team (ODC Model) operating as an extended engineering arm of the client.",
            "We worked closely with leadership, product management, and field teams to ensure production-grade delivery.",
          ],
        },
        {
          heading: "Core Contributions",
          headingStyle: "subtitle",
          bullets: [
            "End-to-end software product development",
            "Architecture design & platform engineering",
            "Dashboard & visualization systems",
            "Cloud deployment & modernization",
            "QA & test automation",
            "Ongoing support & performance optimization",
            "Integration APIs for enterprise systems",
            "Security hardening & IP compliance",
          ],
        },
        {
          heading: "How We Work",
          headingStyle: "subtitle",
          paragraphs: ["Dedicated Development Team Model"],
          bullets: [
            "Long-term embedded engineering team",
            "Transparent sprint planning & reporting",
            "Direct collaboration with US leadership",
            "Agile product iteration cycles",
            "Structured communication cadence",
          ],
        },
        {
          heading: "Engagement Models Used",
          headingStyle: "subtitle",
          bullets: [
            "Offshore Development Center (ODC)",
            "Milestone-based delivery for modules",
            "Support & maintenance retainers",
            "Feature-driven roadmap expansion",
          ],
        },
        {
          heading: "Technology Stack",
          headingStyle: "subtitle",
          paragraphs: [
            "While specific architecture details are confidential, the platform includes:",
          ],
          bullets: [
            "Scalable backend architecture",
            "Industrial data ingestion pipelines",
            "Real-time analytics engines",
            "Cloud deployment infrastructure",
            "Secure API frameworks",
            "Advanced reporting & visualization layers",
          ],
          note:
            "We also supported modernization efforts including Cloud & AWS optimization and performance scaling.",
          noteWrap: "card",
        },
        {
          heading: "Security & IP Protection",
          headingStyle: "subtitle",
          paragraphs: ["This engagement required strict compliance standards:"],
          bullets: [
            "NDA-governed development process",
            "Isolated development environments",
            "Secure code repositories",
            "Controlled access management",
            "IP ownership fully retained by the client",
            "Secure communication & reporting channels",
          ],
          note: "Notetech operates with enterprise-grade confidentiality protocols.",
          noteWrap: "card",
        },
        {
          heading: "Delivery Process",
          headingStyle: "subtitle",
          bullets: [
            "Onboarding & Kickoff",
            "Architecture & roadmap planning",
            "Agile sprint execution",
            "QA & automated regression testing",
            "Deployment & cloud optimization",
            "Continuous improvement & long-term support",
          ],
        },
        {
          heading: "Business Impact",
          headingStyle: "subtitle",
          paragraphs: ["The platform enabled the client to:"],
          bullets: [
            "Commercialize an enterprise IoT monitoring product",
            "Scale across multiple industry deployments",
            "Improve asset uptime and operational efficiency",
            "Expand feature capabilities year after year",
            "Maintain product leadership in its category",
          ],
          note:
            "The longevity of this engagement reflects sustained product-market relevance and engineering excellence.",
          noteWrap: "card",
        },
        {
          heading: "Why This Engagement Matters",
          headingStyle: "subtitle",
          paragraphs: ["This project demonstrates Notetech's capability in:"],
          bullets: [
            "Software Product Development",
            "Enterprise IoT Platforms",
            "Long-Term ODC Partnerships",
            "Cloud Modernization",
            "QA & Test Automation",
            "Secure IP-sensitive development",
            "AI Workflow Automation readiness",
          ],
          note:
            "It stands alongside other major outsourcing projects delivered by Notetech across CRM systems, enterprise automation, and AI-driven platforms.",
          noteWrap: "card",
        },
        {
          heading: "About Notetech Software",
          headingStyle: "subtitle",
          paragraphs: [
            "Founded in 1998, Notetech Software is a product engineering and long-term outsourcing partner for global technology companies.",
            "We specialize in:",
          ],
          bullets: [
            "Software product development",
            "Enterprise modernization",
            "AI-enabled systems",
            "Cloud & AWS transformation",
            "Dedicated development teams",
          ],
        },
      ],
    },
    {
      title: "Enterprise CRM Platform & Mobility Engineering",
      description: "(Client identity confidential under NDA)",
      subsectionIndicesUnderImage: [2],
      subsections: [
        {
          heading: "Confidentiality Notice",
          headingStyle: "subtitle",
          paragraphs: [
            "Due to active Non-Disclosure Agreements, we are unable to publicly disclose the original client name or product branding.",
            "Full details are shared during formal engagement discussions.",
          ],
        },
        {
          heading: "Engagement Overview",
          headingStyle: "subtitle",
          paragraphs: [
            "From 2001 to 2017, Notetech Software partnered with a U.S.-based enterprise software company to design, build, and scale a fully customizable enterprise CRM platform built on Lotus Notes / Domino.",
            "The platform supported enterprise-grade deployments and later evolved into a strategic mobility solution extending CRM systems to mobile devices.",
          ],
        },
        {
          heading: "Selected Engagement Snapshot",
          headingStyle: "subtitle",
          bullets: [
            "Platform: Enterprise CRM on Lotus Notes / Domino; mobility extension layer",
            "Engagement: 2001 – 2017; post-acquisition engineering retention",
            "Industry: Enterprise CRM & mobility",
            "Model: Dedicated Offshore Development Center",
            "Milestone: 2011 source-code acquisition by major U.S. CRM vendor",
          ],
        },
        {
          heading: "Enterprise CRM Platform (Lotus Notes / Domino)",
          headingStyle: "subtitle",
          paragraphs: ["Before SaaS CRM platforms became dominant, this system delivered:"],
          bullets: [
            "Workflow-driven CRM automation",
            "Secure document-level database architecture",
            "Role-based access control",
            "Offline replication capability",
            "Enterprise approval routing",
            "Fully customizable form-driven CRM logic",
          ],
          note:
            "It served workflow-intensive organizations requiring security, flexibility, and deep process customization.",
          noteWrap: "card",
        },
        {
          heading: "CRM Mobility Innovation (2007)",
          headingStyle: "subtitle",
          paragraphs: [
            "In 2007, Notetech engineered a mobility extension layer enabling enterprise CRM systems to operate securely on mobile devices.",
          ],
        },
        {
          heading: "The Mobility Platform Enabled",
          headingStyle: "subtitle",
          bullets: [
            "Secure mobile CRM access",
            "Field-force synchronization",
            "Offline + sync capability",
            "Real-time operational visibility",
            "Workflow continuity across devices",
          ],
        },
        {
          heading: "Designed to Extend Any Major CRM",
          headingStyle: "subtitle",
          paragraphs: [
            "The architecture supported integration with leading enterprise CRM platforms, including:",
          ],
          bullets: [
            "Salesforce",
            "Microsoft Dynamics CRM",
            "Oracle CRM",
            "SAP CRM",
            "NetSuite CRM",
          ],
          note:
            "This positioned the solution ahead of the enterprise mobility curve during the early mobile transformation era.",
          noteWrap: "card",
        },
        {
          heading: "Strategic Milestone: Source Code Acquisition (2011)",
          headingStyle: "subtitle",
          paragraphs: [
            "In 2011, the source code rights of the mobility platform were acquired by a California-based global CRM software company with multi-hundred-million-dollar annual revenues. At the time, this company ranked among the leading CRM vendors in North America.",
            "Following the acquisition:",
          ],
          bullets: [
            "Notetech was retained as the official engineering partner.",
            "We operated as a dedicated Offshore Development Center (ODC).",
            "We continued development, enhancement, and maintenance for several years post-acquisition.",
          ],
          note:
            "Being selected and retained after a source code acquisition by a global CRM vendor demonstrates enterprise-grade architecture quality, mature IP governance, long-term engineering trust, and global delivery capability.",
          noteWrap: "card",
        },
        {
          heading: "Industry Context & Credibility",
          headingStyle: "subtitle",
          paragraphs: [
            "During the rapid expansion of global CRM ecosystems, this platform operated at comparable enterprise complexity — supporting distributed teams, workflow-heavy environments, and secure deployments.",
            "Retention by a U.S.-based CRM company of significant revenue scale reinforces our ability to:",
          ],
          bullets: [
            "Engineer enterprise-ready platforms",
            "Manage long-term product lifecycles",
            "Operate within strict IP and security frameworks",
            "Sustain engineering continuity through acquisition transitions",
          ],
          note:
            "Few firms demonstrate product lifecycle ownership from original architecture through acquisition and multi-year post-acquisition development.",
          noteWrap: "card",
        },
        {
          heading: "Awards & Recognition",
          headingStyle: "subtitle",
          paragraphs: [
            "The CRM and mobility ecosystem received multiple industry awards during its lifecycle.",
          ],
          note: "(See \"Awards & Recognition\" section.)",
        },
        {
          heading: "Engagement Model",
          headingStyle: "subtitle",
          bullets: [
            "Dedicated Offshore Development Center",
            "Long-term Product Engineering",
            "Secure Code Transition",
            "Enterprise SLA Governance",
            "Multi-year Support & Maintenance",
          ],
        },
        {
          heading: "Technology Footprint",
          headingStyle: "subtitle",
          bullets: [
            "IBM Lotus Notes / Domino",
            "NSF Database Architecture",
            "Workflow Automation Engines",
            "CRM Mobility Integration Layer",
            "Enterprise Security & Access Controls",
          ],
        },
        {
          heading: "Security & IP Governance",
          headingStyle: "subtitle",
          bullets: [
            "NDA-protected development",
            "Secure code repositories",
            "Controlled engineering environments",
            "Enterprise audit compliance",
            "Clean IP transition processes",
          ],
        },
        {
          heading: "What This Engagement Demonstrates",
          headingStyle: "subtitle",
          bullets: [
            "16+ years of enterprise CRM engineering continuity",
            "Early enterprise mobility innovation",
            "Successful source code acquisition by a U.S. CRM leader",
            "Multi-year post-acquisition engineering retention",
            "Proven ability to operate at global enterprise scale",
          ],
        },
      ],
    },
    {
      title: "Edge – Enterprise CRM Mobility Platform",
      description: "Extending Enterprise CRM Systems to Mobile. At Global Scale.",
      subsectionIndicesUnderImage: [2],
      subsections: [
        {
          heading: "Overview",
          headingStyle: "subtitle",
          wrap: "card",
          paragraphs: [
            "Edge is an award-winning enterprise CRM mobility platform developed by Notetech Software for a New Jersey-based enterprise technology company (identity confidential under NDA).",
            "The product is owned by a US-based company and has been successfully deployed across thousands of enterprises globally.",
            "Edge was built to solve a fundamental enterprise problem: How do you extend complex, enterprise-grade CRM systems to mobile devices securely and at scale?",
          ],
        },
        {
          heading: "The Context",
          headingStyle: "subtitle",
          paragraphs: ["When the engagement began:"],
          bullets: [
            "The product had initially been assigned to a Russian software company",
            "Notetech did not yet have a dedicated mobile or Java team",
            "The client required enterprise-scale execution",
            "The architecture had to support global CRM platforms",
          ],
          note:
            "Despite these constraints, Notetech architected, built, and scaled the product into a globally recognized CRM mobility solution.",
          noteWrap: "card",
        },
        {
          heading: "Selected Engagement Snapshot",
          headingStyle: "subtitle",
          bullets: [
            "Platform: Edge",
            "Industry: Enterprise CRM Mobility",
            "Region: US product owner; global enterprise deployments",
            "Model: Dedicated Offshore Development Center (ODC)",
            "Scope: Product engineering, mobility architecture, global support",
            "Status: Multi-year strategic engagement with acquisition milestone",
          ],
        },
        {
          heading: "What Edge Does",
          headingStyle: "subtitle",
          paragraphs: ["Edge acts as a universal mobility layer that extends any CRM platform to mobile devices. It enables:"],
          bullets: [
            "Secure real-time CRM access from the field",
            "Offline-first mobile architecture with intelligent synchronization",
            "Enterprise workflow execution on mobile",
            "Scalable integration with complex CRM systems",
            "Secure data exchange between CRM and mobile endpoints",
          ],
        },
        {
          heading: "Supported CRM Platforms",
          headingStyle: "subtitle",
          paragraphs: ["Edge can extend virtually any CRM to mobile, including:"],
          bullets: [
            "Salesforce",
            "Microsoft Dynamics CRM",
            "Oracle CRM",
            "SAP CRM",
            "SugarCRM",
            "NetSuite CRM",
          ],
          note:
            "This made it one of the earliest truly cross-platform enterprise CRM mobility frameworks.",
          noteWrap: "card",
        },
        {
          heading: "Awards & Recognition",
          headingStyle: "subtitle",
          paragraphs: [
            "The product has won multiple industry awards for:",
          ],
          bullets: [
            "Enterprise mobility innovation",
            "CRM architecture excellence",
            "Global customer impact",
          ],
          note: "(See \"Awards & Recognition\" page for full listing.)",
        },
        {
          heading: "Strategic Milestone",
          headingStyle: "subtitle",
          paragraphs: [
            "In 2012, the then second largest global enterprise software company acquired source code rights from the US product owner to accelerate its enterprise mobile CRM strategy.",
            "Following the acquisition:",
          ],
          bullets: [
            "Notetech operated as the Offshore Development Center (ODC)",
            "Continued development & maintenance for 6 years",
            "Delivered enterprise-grade releases at global scale",
            "Eventually transitioned operations to the acquirer's internal development facility",
          ],
          note: "This engagement demonstrates long-term engineering trust at global enterprise level.",
          noteWrap: "card",
        },
        {
          heading: "Timeline",
          headingStyle: "subtitle",
          bullets: [
            "2004 - Product architecture & development scaled by Notetech",
            "2012 - Strategic acquisition of source code rights by global enterprise software leader",
            "2012-2018 - 6-year Offshore Development Center engagement",
            "Post-2018 - Transition to internal global development center",
          ],
        },
        {
          heading: "Credibility Positioning",
          headingStyle: "subtitle",
          paragraphs: [
            "Edge operated at the scale and architectural maturity expected by the world's largest enterprise CRM providers.",
            "Its acquisition and long-term ODC engagement reflect:",
          ],
          bullets: [
            "Enterprise-grade code quality",
            "Security & IP discipline",
            "Global delivery maturity",
            "Ability to work with top-tier global software companies",
          ],
          note:
            "Few offshore engineering firms have successfully delivered products that later became foundational to enterprise CRM mobility strategies at global scale.",
          noteWrap: "card",
        },
        {
          heading: "Security & IP",
          headingStyle: "subtitle",
          bullets: [
            "NDA signed with US product owner",
            "Full IP respect and confidentiality maintained",
            "Client and product identity disclosed only during qualified engagements",
            "Enterprise security compliance maintained throughout lifecycle",
          ],
        },
        {
          heading: "How We Work",
          headingStyle: "subtitle",
          paragraphs: ["For this engagement, Notetech operated as:"],
          bullets: [
            "Dedicated development team",
            "Long-term ODC partner",
            "Architecture & product engineering partner",
            "Maintenance & enterprise support provider",
          ],
        },
        {
          heading: "Technology",
          headingStyle: "subtitle",
          bullets: [
            "Enterprise CRM integrations",
            "Secure mobile frameworks",
            "Cross-platform mobile architecture",
            "Scalable enterprise APIs",
            "Large-scale data synchronization models",
          ],
        },
        {
          heading: "Engagement Model",
          headingStyle: "subtitle",
          bullets: [
            "Dedicated Development Team",
            "Long-Term Offshore Development Center",
            "Product Engineering Model",
            "Enterprise Support & Maintenance",
          ],
        },
        {
          heading: "Why This Matters",
          headingStyle: "subtitle",
          paragraphs: ["This project reflects Notetech's ability to:"],
          bullets: [
            "Take over complex product situations",
            "Build global enterprise-grade software",
            "Deliver award-winning solutions",
            "Support acquisition-level due diligence",
            "Sustain multi-year global engineering partnerships",
          ],
        },
        {
          heading: "NDA Disclosure Note",
          headingStyle: "subtitle",
          paragraphs: [
            "Due to signed Non-Disclosure Agreements, client name and original product branding are not disclosed publicly.",
            "Client details can be shared prior to qualified engagements.",
          ],
        },
      ],
    },
    {
      title: "Enterprise Healthcare Market Intelligence Platform",
      description:
        "(Client name & product name withheld under NDA - details shared before engagement)",
      subsectionIndicesUnderImage: [2],
      subsections: [
        {
          heading: "Engagement Overview",
          headingStyle: "subtitle",
          paragraphs: [
            "From 2016 to 2021, Notetech Software partnered with a leading US-based healthcare market intelligence company to build and scale a next-generation Market Access & Commercial Intelligence Platform for the pharmaceutical industry.",
            "Due to NDA commitments, we do not publicly disclose the client or product name. However, this enterprise SaaS platform is widely adopted across the U.S. life sciences ecosystem and supports major pharmaceutical manufacturers with critical payer intelligence, reimbursement data, and commercialization insights.",
            "The product is designed to answer mission-critical questions such as:",
          ],
          bullets: [
            "Is our drug covered?",
            "Under what restrictions?",
            "How do we compare to competitors?",
            "Where are the access barriers?",
            "How should we optimize launch and contracting strategy?",
          ],
          note:
            "Our team was deeply involved in SureSense product development, contributing to architecture, engineering, platform scalability, and long-term product evolution.",
          noteWrap: "card",
        },
        {
          heading: "Business Context",
          headingStyle: "subtitle",
          paragraphs: [
            "The client operates in the highly regulated U.S. healthcare ecosystem, providing:",
          ],
          bullets: [
            "Formulary & coverage intelligence",
            "Medical policy & criteria tracking",
            "Reimbursement visibility",
            "Competitive benchmarking",
            "Launch readiness modeling",
            "API-based data distribution",
          ],
          note:
            "The platform serves Market Access Teams, Commercial Strategy Leaders, HEOR & Analytics Teams, Sales & Field Operations, and Enterprise BI & Data Teams. It functions as a cloud-based SaaS + Data-as-a-Service (DaaS) platform with API integrations into enterprise systems like CRM and BI tools.",
          noteWrap: "card",
        },
        {
          heading: "Selected Engagement Snapshot",
          headingStyle: "subtitle",
          bullets: [
            "Duration: 2016 - 2021",
            "Region: United States",
            "Model: Dedicated Offshore Development Center (ODC)",
            "Domain: Healthcare Market Access & Commercial Intelligence",
            "Status: Completed with smooth structured transition",
          ],
        },
        {
          heading: "Our Role (2016 - 2021)",
          headingStyle: "subtitle",
          paragraphs: [
            "Notetech operated as a dedicated offshore engineering partner, delivering:",
          ],
          bullets: [
            "1) Product Engineering - Core platform development, data ingestion & normalization pipelines, analytics dashboards, enterprise-grade reporting, API layer development",
            "2) Healthcare Data Architecture - Payer coverage data modeling, restriction logic (PA, step therapy, quantity limits), historical coverage tracking, policy criteria structuring, large-scale dataset optimization",
            "3) SaaS Platform Scalability - Multi-tenant architecture, secure user role management, enterprise-grade authentication, high-availability cloud deployment",
            "4) Data-as-a-Service Enablement - API integrations, enterprise data feeds, custom exports, BI system connectivity",
          ],
        },
        {
          heading: "Technology Landscape",
          headingStyle: "subtitle",
          bullets: [
            "Enterprise-grade backend architecture",
            "Cloud-native SaaS infrastructure",
            "REST APIs & data services",
            "Advanced database design",
            "Secure data governance framework",
            "Performance-optimized large dataset handling",
          ],
          note:
            "The platform was designed for high regulatory sensitivity and enterprise security compliance.",
          noteWrap: "card",
        },
        {
          heading: "Security & IP Protection",
          headingStyle: "subtitle",
          paragraphs: [
            "Operating in the healthcare domain required:",
          ],
          bullets: [
            "Strict data governance",
            "Controlled access mechanisms",
            "Audit logging",
            "Role-based permission frameworks",
            "Secure data storage & transmission",
          ],
          note:
            "We worked under formal NDA agreements and IP protection structures. All intellectual property remains owned by the client.",
          noteWrap: "card",
        },
        {
          heading: "Engagement Model",
          headingStyle: "subtitle",
          bullets: [
            "Dedicated Offshore Development Center (ODC)",
            "Long-term product partnership",
            "Agile development cycles",
            "Continuous feature enhancement",
            "Ongoing support & maintenance",
          ],
          note:
            "In 2021, the client transitioned development to their own newly established India-based facility after successfully scaling their internal capability. The transition was smooth and structured, reflecting a mature long-term partnership.",
          noteWrap: "card",
        },
        {
          heading: "Impact Delivered",
          headingStyle: "subtitle",
          bullets: [
            "Enterprise-scale SaaS platform",
            "Trusted by major U.S. pharmaceutical organizations",
            "High-performance healthcare data engine",
            "API-enabled enterprise integrations",
            "Multi-year sustained engineering collaboration",
          ],
        },
        {
          heading: "Why This Engagement Matters",
          headingStyle: "subtitle",
          paragraphs: [
            "For Western healthcare and SaaS companies evaluating offshore product engineering partnerships, this project demonstrates:",
          ],
          bullets: [
            "Ability to handle complex, regulated industries",
            "Long-term IP-sensitive engagement experience",
            "Enterprise SaaS architecture capability",
            "Data-intensive product development expertise",
            "Smooth transition capability when clients internalize operations",
          ],
          note:
            "If you would like detailed client references, architecture discussions, or technical walkthroughs, we are happy to share additional information under mutual NDA.",
          noteWrap: "card",
        },
      ],
    },
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
