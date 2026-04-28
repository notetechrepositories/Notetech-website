import type { DocPageData } from "@/components/content/DocPageTemplate";

export const HOW_WE_WORK_SLUGS = [
  "engagement-models",
  "delivery-process",
  "communication-reporting",
  "onboarding-kickoff",
  "pricing-approach",
  "pilot-engagements",
] as const;

export type HowWeWorkSlug = (typeof HOW_WE_WORK_SLUGS)[number];

export const howWeWorkPages: Record<HowWeWorkSlug, DocPageData> = {
  "engagement-models": {
    title: "Engagement Models",
    metaDescription:
      "Flexible engagement models for predictable delivery and long-term ownership, from dedicated teams to milestone-based starts.",
    headline: "We offer flexible engagement models designed for predictable delivery and long-term ownership. We’ll recommend the best fit based on your scope clarity, timeline, and how you prefer to manage change.",
    intro:
      "",
    parentLabel: "How We Work",
    parentHref: "/how-we-work",
    visualSlot: "services",
    heroImageSrc: "/imagery/2623597.jpg",
    sectionImages: [
      "/imagery/service/3d-abstract-background-with-flowing-particles-cyber-dots-network-connections.jpg",
      "/imagery/service/smooth-wave-patterns-flow-abstract-elegance-generated-by-ai.jpg",
      "/imagery/3d-render-abstract-tech-background-with-flowing-cyber-lines.jpg",
    ],
    sections: [
      {
        title: "Dedicated Development Team",
        description: "Best for: ongoing product development and long-term roadmaps",
        subsections: [
          {
            heading: "How it works:",
            bullets: [
              "A stable team aligned to your product goals",
              "Sprint-based execution (typically 1–2 weeks)",
              "Shared tracking and written progress updates",
              "You control priorities; we execute with engineering ownership",
            ],
            note: "Good when you need: continuity, capacity, and predictable execution.",
          },
        ],
      },
      {
        title: "Time & Materials",
        description: "Best for: evolving scope, discovery-heavy work, or fast iteration",
        subsections: [
          {
            heading: "How it works:",
            bullets: [
              "Work is prioritized in a backlog",
              "Delivery happens in sprints with clear visibility",
              "Scope can evolve based on learnings and feedback",
            ],
            note: "Good when: requirements change as you learn.",
          },
        ],
      },
      {
        title: "Fixed Scope (Milestone-based)",
        description: "Best for: well-defined requirements and clear acceptance criteria",
        subsections: [
          {
            heading: "How it works:",
            bullets: [
              "Scope and deliverables are agreed upfront",
              "Milestones and acceptance criteria are defined clearly",
              "Changes are handled through a controlled change process",
            ],
          },
          {
            heading: "How we typically use this model:",
            note: "We often start with a fixed-scope milestone engagement to help new clients validate our delivery quality and working style. Once expectations are aligned, teams typically move to a Time & Materials or Dedicated Development Team model for ongoing roadmap execution.",
          },
        ],
      },
      {
        title: "Support & Maintenance",
        description: "Best for: production systems requiring long-term reliability",
        subsections: [
          {
            heading: "How it works:",
            bullets: [
              "Structured triage, fixes, improvements",
              "Optional SLA-style coverage",
              "Release readiness and operational stability support",
            ],
          },
        ],
      },
      {
        title: "Team flexibility & replacement policy",
        bullets: [
          "We want clients to feel fully in control of their delivery team.",
          "If a resource is not the right fit (skills, communication, performance, or team alignment), you can request a replacement.",
          "We will act quickly and professionally—no lengthy discussions required.",
          "We ensure structured knowledge transfer to reduce disruption and keep progress moving.",
          "Replacement may require a short transition period to ensure continuity and handover.",
        ],
      },
      {
        title: "Client-owned IP (standard)",
        description: "Across all models:",
        bullets: [
          "Clients typically own the product IP and source code (defined in contract/SOW).",
          "Client-controlled repositories preferred.",
          "Transition support available if you bring development in-house.",
        ],
      },
    ],
    cta: {
      title: "",
      primaryLabel: "Schedule a Call",
      primaryHref: "/contact",
      secondaryLabel: "Request a Proposal",
      secondaryHref: "/contact",
    },
  },
  "delivery-process": {
    title: "Delivery Process",
    metaDescription:
      "A transparent delivery process from discovery through sprint execution and stabilization, designed for clear ownership and predictable progress.",
    headline: "We run delivery with transparency and clear ownership—so stakeholders always know what is done, what is next, and what needs a decision.",
    intro: "",
    parentLabel: "How We Work",
    parentHref: "/how-we-work",
    visualSlot: "quality",
    heroImageSrc: "/imagery/5415251564243.jpg",
    sectionImages: [
      "/imagery/service/smooth-wave-patterns-flow-abstract-elegance-generated-by-ai.jpg",
      "/imagery/3d-render-abstract-tech-background-with-flowing-cyber-lines.jpg",
    ],
    sections: [
      {
        title: "Step 1 — Discovery",
        description: "We align on:",
        bullets: [
          "goals, constraints, success metrics",
          "users and workflows",
          "timelines and dependencies",
          "security and IP expectations",
        ],
      },
      {
        title: "Step 2 — Plan",
        description: "We provide:",
        bullets: [
          "recommended engagement model",
          "team plan (roles and responsibilities)",
          "milestones and timeline",
          "delivery risks and mitigations",
        ],
      },
      {
        title: "Step 3 — Kickoff",
        description: "We set up:",
        bullets: [
          "repositories and access",
          "environments and build/deploy process",
          "shared tracker and reporting format",
          "initial backlog and sprint plan",
        ],
      },
      {
        title: "Step 4 — Build and deliver",
        description: "We execute in 1–2 week cycles:",
        bullets: [
          "implement features and fixes",
          "maintain code quality via reviews/testing",
          "keep progress visible through tracking and updates",
          "prepare releases based on your release process",
        ],
      },
      {
        title: "Step 5 — Stabilize and improve",
        description: "As systems grow, we strengthen:",
        bullets: [
          "performance and reliability",
          "automation and maintainability",
          "documentation and handover readiness",
        ],
      },
    ],
    cta: {
      title: "",
      primaryLabel: "Talk to Delivery Leads",
      primaryHref: "/contact",
    },
  },
  "communication-reporting": {
    title: "Communication & Reporting",
    metaDescription:
      "Communication practices that reduce delivery risk with shared tracking, written updates, and clear escalation paths.",
    headline: "Clear communication reduces delivery risk. We work in your tools and keep progress visible through shared tracking and written updates.",
    intro:
      "",
    parentLabel: "How We Work",
    parentHref: "/how-we-work",
    visualSlot: "technology",
    heroImageSrc:
      "/imagery/3d-render-abstract-tech-background-with-flowing-cyber-lines.jpg",
    sectionImages: [
      "/imagery/service/3d-abstract-background-with-flowing-particles-cyber-dots-network-connections.jpg",
      "/imagery/service/smooth-wave-patterns-flow-abstract-elegance-generated-by-ai.jpg",
      "/imagery/3d-render-abstract-tech-background-with-flowing-cyber-lines.jpg",
    ],
    sections: [
      {
        title: "What you can expect",
        bullets: [
          "agreed overlap hours for your timezone",
          "shared tracker (Jira/Linear/ClickUp) with clear owners",
          "written progress updates (what's done, what's next, risks/blockers)",
          "regular progress reviews (live or async)",
          "clear escalation path for urgent issues",
        ],
      },
      {
        title: "Working in your environment",
        description: "We adapt to your:",
        bullets: [
          "Git workflow and branching strategy",
          "review and approval process",
          "release governance",
          "documentation expectations",
        ],
      },
      {
        title: "Stakeholder visibility",
        description: "We support product and engineering stakeholders with:",
        bullets: [
          "milestone progress",
          "risk visibility",
          "dependency tracking",
          "release readiness status",
        ],
      },
    ],
    cta: {
      title: "",
      primaryLabel: "Schedule a Call",
      primaryHref: "/contact",
    },
  },
  "onboarding-kickoff": {
    title: "Onboarding & Kickoff",
    metaDescription:
      "A structured onboarding checklist for access, tooling, expectations, and first-sprint readiness.",
    headline: "A clean kickoff prevents delays later. We follow a structured onboarding checklist to align access, tooling, and expectations from day one.",
    intro:
      "",
    contentHeading: "Kickoff checklist",
    parentLabel: "How We Work",
    parentHref: "/how-we-work",
    visualSlot: "services",
    heroImageSrc: "/imagery/13868.jpg",
    sectionImages: [
      "/imagery/3d-render-abstract-tech-background-with-flowing-cyber-lines.jpg",
      "/imagery/service/smooth-wave-patterns-flow-abstract-elegance-generated-by-ai.jpg",
      "/imagery/service/3d-abstract-background-with-flowing-particles-cyber-dots-network-connections.jpg",
    ],
    sections: [
      {
        title: "Access and tooling",
        bullets: [
          "Repositories, ideally client-controlled.",
          "Tracker and communication channels.",
          "Relevant environments such as dev, staging, and prod where applicable.",
          "Credentials and permissions aligned to least-privilege access.",
        ],
      },
      {
        title: "Project alignment",
        bullets: [
          "Product goals and roadmap priorities.",
          "Definition of done and quality expectations.",
          "Release process and approvals.",
          "Escalation points and decision makers.",
        ],
      },
      {
        title: "Technical setup",
        bullets: [
          "Local setup and build steps.",
          "CI/CD expectations where applicable.",
          "Logging and monitoring expectations where applicable.",
          "Integration endpoints and test accounts.",
        ],
      },
      {
        title: "First sprint goals",
        bullets: [
          "align backlog and scope",
          "deliver initial working increment",
          "confirm communication rhythm and reporting format",
        ],
      },
    ],
    cta: {
      title: "Start an engagement cleanly",
      description:
        "If you want fast progress without a messy kickoff, we can structure onboarding around your tools, standards, and release expectations.",
      primaryLabel: "Schedule a Call",
      primaryHref: "/contact",
    },
  },
  "pricing-approach": {
    title: "Pricing Approach",
    metaDescription:
      "Transparent pricing aligned to delivery outcomes, with scope, risk, and team mix made explicit upfront.",
    headline: "We keep pricing transparent and aligned to delivery outcomes. Final pricing depends on scope clarity, required seniority, and delivery risk.",
    intro: "",
    parentLabel: "How We Work",
    parentHref: "/how-we-work",
    visualSlot: "technology",
    heroImageSrc: "/imagery/79003071435657.jpg",
    sectionImages: [
      "/imagery/service/smooth-wave-patterns-flow-abstract-elegance-generated-by-ai.jpg",
      "/imagery/service/3d-abstract-background-with-flowing-particles-cyber-dots-network-connections.jpg",
      "/imagery/3d-render-abstract-tech-background-with-flowing-cyber-lines.jpg",
    ],
    sections: [
      {
        title: "What pricing is based on",
        bullets: [
          "Scope and technical complexity.",
          "Integrations and external dependencies.",
          "Timeline expectations.",
          "Required seniority mix such as lead, senior, QA, and DevOps support.",
          "Production criticality and support expectations.",
        ],
      },
      {
        title: "How estimation works",
        bullets: [
          "Where possible, we estimate by milestones and deliverables.",
          "For evolving scopes, we use backlog-based planning.",
          "Risks and assumptions are documented upfront rather than discovered late.",
        ],
      },
      {
        title: "What you receive",
        bullets: [
          "A recommended engagement model.",
          "A team plan and timeline.",
          "A milestone breakdown or backlog plan.",
          "Clear inclusions and exclusions.",
        ],
      },
    ],
    cta: {
      title: "Request a proposal",
      description:
        "Clients typically own the product and source code (as defined in contract/SOW). We can support long-term, and we can also support transition if you move development in-house.",
      primaryLabel: "Request a Proposal",
      primaryHref: "/contact"
    },
  },
  "pilot-engagements": {
    title: "Pilot Engagements",
    metaDescription:
      "A 2-4 week pilot model for validating fit, speed, communication, and technical approach before scaling.",
    headline: "A pilot is a low-risk way to validate fit, speed, and communication before committing to a longer engagement",
    intro:"",
    parentLabel: "How We Work",
    parentHref: "/how-we-work",
    visualSlot: "case-studies",
    heroImageSrc: "/imagery/9191566793009.jpg",
    sectionImages: [
      "/imagery/3d-render-abstract-tech-background-with-flowing-cyber-lines.jpg",
      "/imagery/service/3d-abstract-background-with-flowing-particles-cyber-dots-network-connections.jpg",
      "/imagery/service/smooth-wave-patterns-flow-abstract-elegance-generated-by-ai.jpg",
    ],
    sections: [
      {
        title: "When a pilot is useful",
        bullets: [
          "scope is unclear or evolving",
          "you want to evaluate delivery quality and responsiveness",
          "you want to validate collaboration in your tools and process",
          "you want to confirm technical approach before scaling",
        ],
      },
      {
        title: "Typical pilot format (2–4 weeks)",
        bullets: [
          "limited scope and clear success criteria",
          "delivery in your repo and tracker (preferred)",
          "working increment delivered by end of pilot",
          "recommendation for next steps (team plan + roadmap)",
        ],
      },
      {
        title: "Outcomes of a successful pilot",
        bullets: [
          "validated collaboration model",
          "confirmed delivery cadence",
          "clearer roadmap and estimation",
          "decision to scale, continue, or transition",
        ],
      },
    ],
    cta: {
      title: "",
      primaryLabel: "Discuss a Pilot",
      primaryHref: "/contact",
    },
  },
};
