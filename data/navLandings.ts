export type LandingLink = {
  title: string;
  href: string;
  description: string;
};

export type LandingFeature = {
  title: string;
  body: string;
};

export type LandingPageContent = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  headline: string;
  intro: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  sectionLabel: string;
  sectionTitle: string;
  sectionIntro: string;
  links: LandingLink[];
  featureLabel: string;
  featureTitle: string;
  featureIntro: string;
  features: LandingFeature[];
};

export const howWeWorkLanding: LandingPageContent = {
  metaTitle: "How We Work",
  metaDescription:
    "Predictable delivery, clear ownership, and IP-safe collaboration from kickoff through long-term roadmap execution.",
  heroTitle: "How We Work",
  headline: "Predictable delivery. Clear ownership. IP-safe by default.",
  intro:
    "We help software product companies and enterprise IT teams build and maintain software with a working model designed to reduce risk: transparent tracking, disciplined engineering practices, and clear IP ownership.",
  primaryCtaLabel: "Schedule a Call",
  primaryCtaHref: "/contact",
  secondaryCtaLabel: "View case studies",
  secondaryCtaHref: "/case-studies",
  sectionLabel: "Working model",
  sectionTitle: "Explore our working model",
  sectionIntro:
    "Many clients begin with a fixed-scope milestone to validate delivery quality and collaboration, then move into an ongoing model aligned to roadmap execution.",
  links: [
    {
      title: "Engagement Models",
      href: "/how-we-work/engagement-models",
      description:
        "Choose the model that fits your scope and timeline, from dedicated teams to milestone-based starts.",
    },
    {
      title: "Delivery Process",
      href: "/how-we-work/delivery-process",
      description:
        "A step-by-step view from discovery and planning through sprint delivery and ongoing improvement.",
    },
    {
      title: "Communication & Reporting",
      href: "/how-we-work/communication-reporting",
      description:
        "How we keep work visible, decisions clear, and risks surfaced early in your tools and workflow.",
    },
    {
      title: "Onboarding & Kickoff",
      href: "/how-we-work/onboarding-kickoff",
      description:
        "A structured checklist for access, environments, expectations, and first-sprint success.",
    },
    {
      title: "Pricing Approach",
      href: "/how-we-work/pricing-approach",
      description:
        "Transparent pricing shaped by scope clarity, delivery risk, and the team mix your work needs.",
    },
    {
      title: "Pilot Engagements",
      href: "/how-we-work/pilot-engagements",
      description:
        "A 2-4 week pilot option to validate fit, communication, and delivery speed before scaling.",
    },
    {
      title: "Security & IP",
      href: "/security-ip/ip-ownership-nda",
      description:
        "How IP ownership, access boundaries, NDAs, and disciplined engineering practices reduce delivery risk.",
    },
    {
      title: "Technology",
      href: "/technology",
      description:
        "How we adapt to your stack, cloud patterns, release model, and engineering standards without forcing a one-size-fits-all toolchain.",
    },
  ],
  featureLabel: "What to expect",
  featureTitle: "A delivery model built to reduce risk",
  featureIntro:
    "We emphasize practical operating discipline so stakeholders know what is done, what is next, and what needs a decision.",
  features: [
    {
      title: "Clear engagement model",
      body:
        "We align the working model to your scope clarity, timeline, and delivery preferences rather than forcing a one-size-fits-all approach.",
    },
    {
      title: "Structured delivery process",
      body:
        "Discovery, planning, kickoff, sprint delivery, and stabilization all follow a visible process with milestones and risk control.",
    },
    {
      title: "Communication that stays usable",
      body:
        "Shared tracking, written updates, and a clear escalation path keep engineering and business stakeholders aligned without noise.",
    },
  ],
};

export const companyLanding: LandingPageContent = {
  metaTitle: "Company",
  metaDescription:
    "Enterprise-grade delivery for software products since 1998, with stable engineering capacity, disciplined execution, and an IP-safe working model.",
  heroTitle: "Company",
  headline: "Enterprise-grade delivery for software products since 1998",
  intro:
    "Notetech Software is a software engineering partner for software product companies and enterprise IT organizations across the USA, Canada, and Europe. We help teams deliver and modernize business-critical systems with stable engineering capacity, disciplined execution, and an IP-safe working model.",
  primaryCtaLabel: "Contact us",
  primaryCtaHref: "/contact",
  secondaryCtaLabel: "View case studies",
  secondaryCtaHref: "/case-studies",
  sectionLabel: "Company overview",
  sectionTitle: "What clients come to Notetech for",
  sectionIntro:
    "We provide engineering teams and delivery capability across product engineering, cloud modernization, QA, support, and integration work for organizations that value predictable delivery and long-term maintainability.",
  links: [
    {
      title: "About Notetech",
      href: "/company/about",
      description:
        "Who we are, where we operate, and how our delivery model supports long-term software ownership and modernization.",
    },
    {
      title: "Leadership / Core Team",
      href: "/company/leadership",
      description:
        "Experienced, hands-on leadership focused on delivery governance, engineering quality, and client communication.",
    },
    {
      title: "Awards & Recognition",
      href: "/company/awards",
      description:
        "Industry recognition and notable outcomes connected to client products developed with Notetech.",
    },
    {
      title: "Selected Engagements",
      href: "/company/selected-engagements",
      description:
        "Representative long-term engineering partnerships across ERP, Industrial IoT, CRM mobility, and healthcare intelligence.",
    },
    {
      title: "Products",
      href: "/products",
      description:
        "Examples of the product and platform work we support across web, API, cloud, and internal systems.",
    },
    {
      title: "Careers",
      href: "/company/careers",
      description:
        "How we think about stable teams, low attrition, engineering quality, and long-term client alignment.",
    },
    {
      title: "Contact",
      href: "/contact",
      description:
        "Tell us what you are building and your timeline, and we will recommend a delivery approach that fits.",
    },
  ],
  featureLabel: "Why organizations choose Notetech",
  featureTitle: "Stable capacity, predictable delivery, clear ownership",
  featureIntro:
    "The `About Notetech` document emphasizes continuity, governance, confidentiality, and engineering rigor as the reasons organizations choose to work with us.",
  features: [
    {
      title: "Stable teams, low attrition",
      body:
        "Continuity protects domain knowledge and reduces operational risk. Our teams are structured to retain context and maintain momentum over time.",
    },
    {
      title: "Predictable delivery and governance",
      body:
        "We operate with clear ownership, shared tracking, and regular progress reporting so stakeholders know what is delivered, what is next, and what needs a decision.",
    },
    {
      title: "IP-safe by default",
      body:
        "We prefer client-controlled repositories and align access boundaries to your environment. IP ownership is defined clearly in the contract or SOW, and confidentiality is standard practice.",
    },
    {
      title: "Engineering discipline",
      body:
        "Code reviews, testing discipline, and maintainable architecture are built into delivery to support reliability, scalability, and long-term ownership.",
    },
  ],
};

export const resourcesLanding: LandingPageContent = {
  metaTitle: "Resources",
  metaDescription:
    "Insights, practical guides, and FAQs for software product leaders and enterprise delivery teams.",
  heroTitle: "Resources",
  headline: "Useful material for product, platform, and delivery decisions",
  intro:
    "We publish practical content to help teams think through delivery models, engineering quality, modernization, and long-term maintainability.",
  primaryCtaLabel: "View services",
  primaryCtaHref: "/services",
  secondaryCtaLabel: "Contact us",
  secondaryCtaHref: "/contact",
  sectionLabel: "Resource library",
  sectionTitle: "Browse resources",
  sectionIntro:
    "Start with the content type that best matches your current question, whether you need thought leadership, practical guidance, or quick answers.",
  links: [
    {
      title: "Blog / Insights",
      href: "/blog",
      description:
        "Articles and commentary on engineering delivery, modernization, product execution, and operational quality.",
    },
    {
      title: "Guides",
      href: "/resources/guides",
      description:
        "More structured, decision-support content for teams planning delivery models, migrations, or platform improvements.",
    },
    {
      title: "FAQs",
      href: "/resources/faqs",
      description:
        "Direct answers to common questions about engagement models, delivery process, IP ownership, and collaboration.",
    },
  ],
  featureLabel: "What this content is for",
  featureTitle: "Content that helps teams make lower-risk decisions",
  featureIntro:
    "The goal is not volume. It is to make common delivery and engineering questions easier to assess before they become expensive decisions.",
  features: [
    {
      title: "Decision support",
      body:
        "Use our resources to compare options, clarify tradeoffs, and frame discussions with engineering and business stakeholders.",
    },
    {
      title: "Practical guidance",
      body:
        "We focus on concrete delivery realities such as scope clarity, release risk, quality gates, and handover readiness.",
    },
    {
      title: "Aligned to services",
      body:
        "Resources connect back to the same delivery themes present across our services and case studies, so the site feels coherent end to end.",
    },
  ],
};
