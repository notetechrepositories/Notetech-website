import { scheduleCallHref, voiceFirstUrl } from "@/data/site";

export type NavLeaf = {
  label: string;
  href: string;
  external?: boolean;
  badge?: string;
};

export type NavNode = {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavLeaf[];
};

/** Primary header navigation — source: Notetech website IA document. */
export const mainNavigation: NavNode[] = [
  {
    label: "Services",
    children: [
      {
        label: "Dedicated Development Teams",
        href: "/services/dedicated-development-teams",
      },
      {
        label: "Software Product Development",
        href: "/services/software-product-development",
      },
      {
        label: "Cloud & AWS Modernization",
        href: "/services/cloud-aws-modernization",
      },
      {
        label: "QA & Test Automation",
        href: "/services/qa-test-automation",
      },
      {
        label: "Support & Maintenance",
        href: "/services/support-maintenance",
      },
      {
        label: "Integrations & APIs",
        href: "/services/integrations-apis",
      },
      {
        label: "AI Workflow Automation",
        href: "/services/ai-workflow-automation",
        badge: "Launching June 2026",
      },
    ],
  },
  {
    label: "Case Studies",
    children: [
      { label: "All Case Studies", href: "/case-studies" },
      { label: "By Industry", href: "/case-studies/by-industry" },
      { label: "By Capability", href: "/case-studies/by-capability" },
      { label: "Major Work Highlights", href: "/case-studies/highlights" },
    ],
  },
  {
    label: "How We Work",
    children: [
      { label: "Engagement Models", href: "/how-we-work/engagement-models" },
      { label: "Delivery Process", href: "/how-we-work/delivery-process" },
      {
        label: "Communication & Reporting",
        href: "/how-we-work/communication-reporting",
      },
      { label: "Onboarding & Kickoff", href: "/how-we-work/onboarding-kickoff" },
      { label: "Pricing Approach", href: "/how-we-work/pricing-approach" },
      { label: "Pilot Engagements", href: "/how-we-work/pilot-engagements" },
      { label: "Security & IP", href: "/security-ip/ip-ownership-nda" },
      { label: "Technology", href: "/technology" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Notetech", href: "/company/about" },
      { label: "Leadership / Core Team", href: "/company/leadership" },
      { label: "Awards & Recognition", href: "/company/awards" },
      { label: "Products", href: "/products" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Blog / Insights", href: "/blog" },
      { label: "Guides", href: "/resources/guides" },
      { label: "FAQs", href: "/resources/faqs" },
    ],
  },
];

export const headerCta = {
  label: "Schedule a Call",
  href: scheduleCallHref,
} as const;

export const headerUtilityExternal = {
  label: "VoiceFirst",
  href: voiceFirstUrl,
  external: true,
} as const;
