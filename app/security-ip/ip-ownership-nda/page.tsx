import DocPageTemplate from "@/components/content/DocPageTemplate";
import type { DocPageData } from "@/components/content/DocPageTemplate";
import type { Metadata } from "next";

const securityIpPage: DocPageData = {
  title: "Security & IP",
  metaDescription:
    "Clear IP ownership, client-controlled repositories, disciplined engineering practices, and NDA-friendly collaboration.",
  headline: "Security and IP protection come standard",
  intro:
    "When you work with Notetech, your source code, data, and intellectual property remain under your control. Our delivery process is designed to reduce risk with clear access boundaries, disciplined engineering practices, and transparent tracking.",
  parentLabel: "How We Work",
  parentHref: "/how-we-work",
  visualSlot: "technology",
  sections: [
    {
      title: "IP ownership and confidentiality",
      bullets: [
        "Client ownership of deliverables is clearly defined in the contract or SOW.",
        "We support NDAs and clear IP clauses to avoid ambiguity.",
        "Project access is limited to assigned team members on a need-to-know basis.",
        "Client materials are treated as confidential by default.",
      ],
    },
    {
      title: "Repository and access control",
      bullets: [
        "Client-controlled repositories are preferred across GitHub, GitLab, or Azure DevOps.",
        "Access is role-based, minimal, and updated when team membership changes.",
        "Work is tracked in your preferred system for traceable delivery history.",
        "Code changes follow standard review workflows for visibility and accountability.",
      ],
    },
    {
      title: "Secure development practices",
      bullets: [
        "Code review for all changes.",
        "Automated testing approaches aligned to unit, integration, and end-to-end needs.",
        "CI checks before merge or release where applicable.",
        "A usable definition of done so work is reviewed, tested, and ready to ship consistently.",
        "Maintainable code and proven libraries instead of unnecessary complexity.",
      ],
    },
    {
      title: "Data handling and continuity",
      bullets: [
        "Production access and sensitive data handling follow the client's rules.",
        "Sanitized or masked data is used for testing wherever possible.",
        "Credentials and secrets are not stored in source code.",
        "Stable team assignment, documentation, and backup planning reduce single points of failure.",
      ],
    },
    {
      title: "FAQs",
      bullets: [
        "Do you sign NDAs? Yes. We can sign yours or provide ours.",
        "Who owns the code? Ownership is defined clearly in the contract or SOW, and client-controlled repositories are preferred.",
        "Can you work in our GitHub, GitLab, or Azure DevOps? Yes. That is the standard approach.",
        "Can you share a security summary? Yes. We can share a concise summary and provide deeper details under NDA if required.",
      ],
    },
  ],
  cta: {
    title: "Talk through your security expectations",
    description:
      "Tell us what you are building and the level of security detail you need, and we will recommend a delivery approach that fits your environment.",
    primaryLabel: "Book a Call",
    primaryHref: "/contact",
    secondaryLabel: "Contact Us",
    secondaryHref: "/contact",
  },
};

export const metadata: Metadata = {
  title: securityIpPage.metaTitle ?? securityIpPage.title,
  description: securityIpPage.metaDescription,
  openGraph: {
    title: `${securityIpPage.title} · Notetech`,
    description: securityIpPage.metaDescription,
    type: "article",
  },
};

export default function SecurityIpPage() {
  return <DocPageTemplate page={securityIpPage} />;
}
