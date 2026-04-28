import DocPageTemplate from "@/components/content/DocPageTemplate";
import type { DocPageData } from "@/components/content/DocPageTemplate";
import type { Metadata } from "next";

const securityIpPage: DocPageData = {
  title: "Security & IP",
  metaDescription:
    "Clear IP ownership, client-controlled repositories, disciplined engineering practices, and NDA-friendly collaboration.",
  headline: "IP ownership and confidentiality",
  intro: "",
  parentLabel: "How We Work",
  parentHref: "/how-we-work",
  visualSlot: "technology",
  heroImageSrc:
    "/imagery/3d-abstract-background-with-flowing-particles-cyber-dots-network-connections.jpg",
  sectionImages: [
    "/imagery/service/3d-abstract-background-with-flowing-particles-cyber-dots-network-connections.jpg",
    "/imagery/service/smooth-wave-patterns-flow-abstract-elegance-generated-by-ai.jpg",
    "/imagery/3d-render-abstract-tech-background-with-flowing-cyber-lines.jpg",
    "/imagery/service/smooth-wave-patterns-flow-abstract-elegance-generated-by-ai.jpg",
    "/imagery/service/3d-abstract-background-with-flowing-particles-cyber-dots-network-connections.jpg",
  ],
  sections: [
    {
      title: "IP ownership and confidentiality",
      subsections: [
        {
          heading: "Clear IP ownership",
          bullets: [
            "Client ownership of deliverables is clearly defined in the contract/SOW.",
            "We support NDAs and clear IP clauses to avoid ambiguity.",
          ],
        },
        {
          heading: "Confidentiality by default",
          bullets: [
            "Project access is limited to assigned team members.",
            "Client materials are treated as confidential and shared only on a need-to-know basis.",
          ],
        },
      ],
    },
    {
      title: "Repository and access control",
      subsections: [
        {
          heading: "Client-controlled repositories preferred",
          bullets: [
            "We prefer working in repositories owned by the client (GitHub/GitLab/Azure DevOps).",
            "This ensures your organization controls access, permissions, and history.",
          ],
        },
        {
          heading: "Access is role-based and minimal",
          bullets: [
            "Access is granted only to team members who need it for delivery.",
            "Access is updated when team members change.",
          ],
        },
        {
          heading: "Traceable change history",
          bullets: [
            "Work is tracked through your preferred system (Jira/Linear/ClickUp).",
            "Code changes follow standard review workflows for visibility and accountability.",
          ],
        },
      ],
    },
    {
      title: "Secure development practices",
      subsections: [
        {
          heading: "Engineering standards",
          bullets: [
            "Code review for all changes",
            "Automated testing approach (unit/integration/E2E as appropriate)",
            "CI checks before merge/release (where applicable)",
            "\"Definition of Done\" so each task is consistently reviewed, tested, and ready to ship",
          ],
        },
        {
          heading: "Dependency and code hygiene",
          bullets: [
            "Use widely adopted libraries and proven patterns.",
            "Keep code maintainable and avoid unnecessary complexity.",
          ],
        },
      ],
    },
    {
      title: "Data handling",
      subsections: [
        {
          heading: "Controlled use of data",
          bullets: [
            "We follow the client's rules for production access and sensitive data.",
            "Wherever possible, we use sanitized/masked data for testing.",
          ],
        },
        {
          heading: "Secret handling basics",
          bullets: [
            "Credentials and secrets are not stored in source code.",
            "Secrets are handled using secure methods aligned with the client's environment.",
          ],
        },
      ],
    },
    {
      title: "Delivery reliability and continuity (reduces risk)",
      subsections: [
        {
          heading: "Stability and continuity",
          bullets: [
            "Low attrition approach and stable team assignment",
            "Documentation for key flows and decisions",
            "Backup resource planning to avoid single points of failure",
          ],
        },
        {
          heading: "Transparent delivery",
          bullets: [
            "Shared tracker and clear ownership",
            "Regular progress reviews and written status updates",
            "Escalation path for urgent issues",
          ],
        },
      ],
    },
    {
      title: "What you can expect from us",
      bullets: [
        "A clear working model and shared tracking",
        "Client-controlled repositories and access boundaries",
        "Disciplined engineering practices for quality and maintainability",
        "Willingness to share additional details under NDA where needed",
      ],
    },
    {
      title: "FAQs",
      bullets: [
        "Do you sign NDAs?\nYes. We can sign your NDA or provide ours.",
        "Who owns the code?\nOwnership is defined clearly in the contract/SOW. Client-controlled repositories are preferred.",
        "Can you work in our GitHub/GitLab/Azure DevOps?\nYes - this is the standard approach.",
        "Can you share a security summary?\nYes. We can share a concise security summary, and provide deeper details under NDA if required.",
      ],
    },
  ],
  cta: {
    title: "Ready to start?",
    description:
      "Tell us what you're building and your security expectations. We'll recommend a delivery approach that fits your environment.",
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
