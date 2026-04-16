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
    headline: "Choose the model that fits your scope, timeline, and change profile",
    intro:
      "We offer flexible engagement models designed for predictable delivery and long-term ownership. We recommend the best fit based on your scope clarity, timeline, and how you prefer to manage change.",
    parentLabel: "How We Work",
    parentHref: "/how-we-work",
    visualSlot: "services",
    sections: [
      {
        title: "Core engagement options",
        cards: [
          {
            title: "Dedicated Development Team",
            body: "Best for ongoing product development and long-term roadmaps. You get a stable team aligned to your product goals, sprint-based execution, shared tracking, and written progress updates while you retain control of priorities.",
          },
          {
            title: "Time & Materials",
            body: "Best for evolving scope, discovery-heavy work, or fast iteration. Work is prioritized in a backlog, delivered in sprints with clear visibility, and allowed to evolve as requirements change through learning and feedback.",
          },
          {
            title: "Fixed Scope",
            body: "Best for well-defined requirements and clear acceptance criteria. Scope, milestones, and deliverables are agreed upfront, with changes handled through a controlled change process.",
          },
          {
            title: "Support & Maintenance",
            body: "Best for production systems requiring long-term reliability. This model supports structured triage, fixes, incremental improvements, optional SLA-style coverage, and release-readiness support.",
          },
        ],
        columns: 2,
      },
      {
        title: "How we usually start",
        bullets: [
          "We often begin with a fixed-scope milestone so new clients can validate delivery quality and working style before scaling.",
          "Once expectations are aligned, teams commonly move into a Time & Materials or Dedicated Development Team model for ongoing roadmap execution.",
          "The goal is to choose the lowest-risk entry point without blocking a long-term delivery relationship if the fit is right.",
        ],
      },
      {
        title: "Team flexibility and IP ownership",
        bullets: [
          "If a resource is not the right fit, clients can request a replacement without lengthy discussion.",
          "We handle structured knowledge transfer to reduce disruption and keep progress moving during transitions.",
          "Clients typically own the product IP and source code as defined in the contract or SOW.",
          "Client-controlled repositories are preferred, and transition support is available if development later moves in-house.",
        ],
      },
    ],
    cta: {
      title: "Discuss the right engagement model",
      description:
        "Tell us about your scope, timeline, and how much change you expect, and we will recommend a practical starting model.",
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
    headline: "Transparent delivery so stakeholders know what is done, next, and blocked",
    intro:
      "We run delivery with transparency and clear ownership so stakeholders always know what is done, what is next, and what needs a decision.",
    parentLabel: "How We Work",
    parentHref: "/how-we-work",
    visualSlot: "quality",
    sections: [
      {
        title: "From discovery to long-term improvement",
        cards: [
          {
            title: "Step 1: Discovery",
            body: "We align on goals, constraints, success metrics, users, workflows, timelines, dependencies, and security and IP expectations.",
          },
          {
            title: "Step 2: Plan",
            body: "We provide a recommended engagement model, team plan, milestones, timeline, and a view of delivery risks with mitigations.",
          },
          {
            title: "Step 3: Kickoff",
            body: "We set up repositories and access, environments, build and deploy workflows, shared tracking, reporting format, and the initial backlog.",
          },
          {
            title: "Step 4: Build and Deliver",
            body: "We execute in 1-2 week cycles, implement features and fixes, maintain code quality through reviews and testing, and prepare releases using your release process.",
          },
          {
            title: "Step 5: Stabilize and Improve",
            body: "As systems grow, we strengthen performance, reliability, automation, maintainability, documentation, and handover readiness.",
          },
        ],
        columns: 2,
      },
      {
        title: "What this process is designed to protect",
        bullets: [
          "Milestone visibility and clearer decision points for business and engineering stakeholders.",
          "A structured way to reduce release risk without slowing roadmap progress unnecessarily.",
          "Delivery continuity as systems scale and teams become more dependent on shared context and maintainability.",
        ],
      },
    ],
    cta: {
      title: "Talk to delivery leads",
      description:
        "If you want a delivery model with clearer ownership and fewer surprises, we can walk you through how we would structure your work.",
      primaryLabel: "Schedule a Call",
      primaryHref: "/contact",
      secondaryLabel: "View services",
      secondaryHref: "/services",
    },
  },
  "communication-reporting": {
    title: "Communication & Reporting",
    metaDescription:
      "Communication practices that reduce delivery risk with shared tracking, written updates, and clear escalation paths.",
    headline: "Clear communication reduces delivery risk",
    intro:
      "We work in your tools and keep progress visible through shared tracking and written updates so decisions stay clear and blockers are surfaced early.",
    parentLabel: "How We Work",
    parentHref: "/how-we-work",
    visualSlot: "technology",
    sections: [
      {
        title: "What you can expect",
        bullets: [
          "Agreed overlap hours for your timezone.",
          "A shared tracker such as Jira, Linear, or ClickUp with clear owners.",
          "Written progress updates covering what is done, what is next, and current risks or blockers.",
          "Regular progress reviews, live or async depending on the engagement.",
          "A clear escalation path for urgent issues.",
        ],
      },
      {
        title: "Working in your environment",
        bullets: [
          "We adapt to your Git workflow and branching strategy.",
          "We work within your review and approval process.",
          "Release governance and documentation expectations follow your operating model.",
        ],
      },
      {
        title: "Stakeholder visibility",
        bullets: [
          "Milestone progress is visible without requiring constant ad hoc follow-up.",
          "Risks, dependencies, and release readiness are surfaced early enough to act on them.",
          "Product and engineering stakeholders get the level of detail they need to make decisions without unnecessary noise.",
        ],
      },
    ],
    cta: {
      title: "Set a communication rhythm that fits your team",
      description:
        "We can align reporting, overlap hours, and escalation practices to your workflow and stakeholder expectations.",
      primaryLabel: "Schedule a Call",
      primaryHref: "/contact",
    },
  },
  "onboarding-kickoff": {
    title: "Onboarding & Kickoff",
    metaDescription:
      "A structured onboarding checklist for access, tooling, expectations, and first-sprint readiness.",
    headline: "A clean kickoff prevents delays later",
    intro:
      "We follow a structured onboarding checklist to align access, tooling, and expectations from day one, so delivery starts cleanly instead of losing momentum to avoidable setup issues.",
    parentLabel: "How We Work",
    parentHref: "/how-we-work",
    visualSlot: "services",
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
        title: "Technical setup and first sprint goals",
        bullets: [
          "Local setup and build steps.",
          "CI/CD expectations where applicable.",
          "Logging, monitoring, integration endpoints, and test accounts where needed.",
          "Aligned backlog and scope for the first sprint.",
          "An initial working increment plus confirmation of the communication rhythm and reporting format.",
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
    headline: "Transparent pricing aligned to delivery outcomes",
    intro:
      "Final pricing depends on scope clarity, required seniority, and delivery risk. We keep assumptions explicit so pricing conversations support planning instead of creating surprises later.",
    parentLabel: "How We Work",
    parentHref: "/how-we-work",
    visualSlot: "technology",
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
          "Clarification that clients typically own the product and source code as defined in the contract or SOW.",
        ],
      },
    ],
    cta: {
      title: "Request a proposal",
      description:
        "Share your current scope and constraints, and we will outline a practical delivery model with clear assumptions.",
      primaryLabel: "Request a Proposal",
      primaryHref: "/contact",
      secondaryLabel: "Schedule a Call",
      secondaryHref: "/contact",
    },
  },
  "pilot-engagements": {
    title: "Pilot Engagements",
    metaDescription:
      "A 2-4 week pilot model for validating fit, speed, communication, and technical approach before scaling.",
    headline: "A low-risk way to validate fit before committing to a longer engagement",
    intro:
      "A pilot is a practical way to evaluate collaboration, delivery quality, and technical fit before scaling into a broader roadmap relationship.",
    parentLabel: "How We Work",
    parentHref: "/how-we-work",
    visualSlot: "case-studies",
    sections: [
      {
        title: "When a pilot is useful",
        bullets: [
          "Scope is unclear or still evolving.",
          "You want to evaluate delivery quality and responsiveness.",
          "You want to validate collaboration inside your own tools and processes.",
          "You want to confirm a technical approach before committing to a larger investment.",
        ],
      },
      {
        title: "Typical pilot format",
        bullets: [
          "A limited scope with clear success criteria.",
          "Delivery in your repository and tracker where possible.",
          "A working increment by the end of the pilot.",
          "A recommendation for next steps, including team shape and roadmap implications.",
        ],
      },
      {
        title: "Outcomes of a successful pilot",
        bullets: [
          "A validated collaboration model.",
          "A confirmed delivery cadence.",
          "A clearer roadmap and better estimation quality.",
          "A grounded decision to scale, continue, or transition.",
        ],
      },
    ],
    cta: {
      title: "Discuss a pilot",
      description:
        "If you want a lower-risk way to validate fit before scaling, we can outline a pilot structure and success criteria.",
      primaryLabel: "Schedule a Call",
      primaryHref: "/contact",
      secondaryLabel: "Contact Us",
      secondaryHref: "/contact",
    },
  },
};
