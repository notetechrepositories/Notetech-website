export type TechnologySubsection = {
  heading: string;
  bullets: string[];
};

export type TechnologySection = {
  id: string;
  title: string;
  description?: string;
  bullets?: string[];
  subsections?: TechnologySubsection[];
};

export const technologyPage = {
  metaTitle: "Technology",
  metaDescription:
    "Practical technology choices based on your requirements, delivery speed, and long-term maintainability.",
  heroTitle: "Technology",
  headline: "Practical technology choices for long-term maintainability",
  intro:
    "We select technology based on your requirements, existing systems, delivery speed, and long-term maintainability-not trends. If you already have an established stack, we adapt to your standards and work inside your toolchain.",
  primaryCtaLabel: "Schedule a Call",
  primaryCtaHref: "/contact",
  secondaryCtaLabel: "View Case Studies",
  secondaryCtaHref: "/case-studies",
  sections: [
    {
      id: "flexibility",
      title: "Technology flexibility (client-driven)",
      subsections: [
        {
          heading: "We work in your preferred stack",
          bullets: [
            "If you have a preferred technology stack or architecture direction, we align to it and follow your engineering standards.",
          ],
        },
        {
          heading: "Need a different stack?",
          bullets: [
            "If your roadmap requires technologies outside our current team mix, we can staff and scale accordingly. Our focus is to build a long-term delivery team that stays stable and retains product knowledge over time.",
          ],
        },
        {
          heading: "Built for continuity",
          bullets: [
            "Our delivery model is designed for long-term team stability and low attrition, so you do not keep re-training new people and losing context.",
          ],
        },
      ],
    },
    {
      id: "what-we-work-with",
      title: "What we work with",
      description:
        "(Representative technologies-final choices depend on your product and constraints.)",
      subsections: [
        {
          heading: "Backend",
          bullets: [".NET / C#", "Node.js", "REST APIs (GraphQL when required)"],
        },
        {
          heading: "Frontend",
          bullets: ["Angular", "React", "TypeScript / JavaScript", "HTML/CSS"],
        },
        {
          heading: "Mobile",
          bullets: ["iOS / Android (native)", "Flutter / React Native"],
        },
        {
          heading: "Databases",
          bullets: ["SQL Server", "PostgreSQL", "MySQL"],
        },
        {
          heading: "Cloud & DevOps",
          bullets: [
            "AWS (EC2, RDS, S3, CloudFront, Lambda)",
            "Docker",
            "CI/CD (GitHub Actions / GitLab CI / Azure DevOps)",
          ],
        },
        {
          heading: "Quality & Testing",
          bullets: [
            "Automated testing (unit / integration / E2E)",
            "Playwright / Cypress / Selenium",
            "Performance testing (when required)",
          ],
        },
        {
          heading: "Observability & Security (aligned to your environment)",
          bullets: [
            "Logging & monitoring (CloudWatch / ELK / Grafana)",
            "Role-based access (RBAC), audit logs",
            "Secure handling of credentials and secrets aligned to the client environment",
          ],
        },
      ],
    },
    {
      id: "engineering-principles",
      title: "How we apply technology (engineering principles)",
      subsections: [
        {
          heading: "Build for maintainability",
          bullets: [
            "Readable code, clear structure, and consistent patterns-so your organization can own the product long-term.",
          ],
        },
        {
          heading: "Design for change",
          bullets: [
            "Modular design and clean interfaces to reduce the cost of future changes.",
          ],
        },
        {
          heading: "Reliability as a feature",
          bullets: [
            "Monitoring, sensible error handling, and release readiness practices are part of delivery-not an afterthought.",
          ],
        },
        {
          heading: "Quality built-in",
          bullets: [
            "Code reviews and automated testing where it provides the most leverage, especially on critical workflows.",
          ],
        },
      ],
    },
    {
      id: "working-with-stack",
      title: "Working with your stack",
      subsections: [
        {
          heading: "If you have:",
          bullets: [
            "established architecture and standards",
            "preferred tools and workflows",
            "deployment and release governance",
            "we work within them and align to your expectations.",
          ],
        },
      ],
    },
  ] satisfies TechnologySection[],
  finalCtaTitle: "Talk to us",
  finalCtaDescription:
    "Share your product goals, stack preferences, and timeline. We'll recommend a practical approach and propose a team model aligned to your roadmap.",
  finalPrimaryCtaLabel: "Schedule a Call",
  finalPrimaryCtaHref: "/contact",
  finalSecondaryCtaLabel: "Contact Us",
  finalSecondaryCtaHref: "/contact",
  finalFootnote: "Response within 1 business day.",
} as const;
