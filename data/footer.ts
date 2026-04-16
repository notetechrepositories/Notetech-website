import { voiceFirstUrl } from "@/data/site";

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

/** Footer columns — source: Notetech website IA document. */
export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      {
        label: "Dedicated Teams",
        href: "/services/dedicated-development-teams",
      },
      {
        label: "Product Development",
        href: "/services/software-product-development",
      },
      {
        label: "Cloud & AWS",
        href: "/services/cloud-aws-modernization",
      },
      {
        label: "QA & Automation",
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
    ],
  },
  {
    title: "Proof",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Awards & Recognition", href: "/company/awards" },
    ],
  },
  {
    title: "Process & Trust",
    links: [
      { label: "How We Work", href: "/how-we-work/engagement-models" },
      { label: "Security & IP", href: "/security-ip/ip-ownership-nda" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "VoiceFirst", href: voiceFirstUrl, external: true },
      { label: "Products Overview", href: "/products" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms of Use", href: "/legal/terms-of-use" },
    ],
  },
];

export const footerNote =
  "Some project details and client references can be shared under NDA, subject to confidentiality.";
