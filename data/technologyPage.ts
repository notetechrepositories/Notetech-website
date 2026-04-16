/**
 * Technology landing — enterprise stack positioning (IA-friendly, CMS-ready later).
 */
export const technologyPage = {
  metaTitle: "Technology",
  metaDescription:
    "How Notetech aligns engineering to your stack: .NET, cloud, front-end, data, and quality practices—without dictating a one-size-fits-all toolchain.",
  heroTitle: "Technology that fits your environment",
  headline: "Disciplined engineering across modern product and enterprise stacks",
  intro:
    "We staff squads against your standards: languages, cloud patterns, repo structure, and release model. The goal is predictable delivery and IP-safe collaboration—not a forced technology religion.",
  pillars: [
    {
      id: "platform",
      title: "Platforms & cloud",
      body:
        "Cloud-native and lift-and-shift patterns on AWS and common enterprise runtimes, with an emphasis on operability, observability, and controlled change.",
    },
    {
      id: "apps",
      title: "Applications & APIs",
      body:
        "Service boundaries, integration layers, and API design aligned to your product roadmap—documented, testable, and maintainable.",
    },
    {
      id: "quality",
      title: "Quality & delivery",
      body:
        "Automated testing, CI discipline, and release hygiene that match your risk profile—from regulated environments to fast-moving product teams.",
    },
  ],
} as const;
