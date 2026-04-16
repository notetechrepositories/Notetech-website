import { techImagery } from "@/data/techImagery";

export type VisualSlotId =
  | "home-hero"
  | "services"
  | "case-studies"
  | "technology"
  | "cta"
  | "architecture"
  | "quality";

type VisualSlotConfig = {
  src: string;
  alt: string;
  eyebrow: string;
  tags: string[];
  objectPosition?: string;
};

export const visualSlots: Record<VisualSlotId, VisualSlotConfig> = {
  "home-hero": {
    src: techImagery.hero.src,
    alt: "Modern business district skyline communicating scale, trust, and enterprise delivery",
    eyebrow: "Delivery systems",
    tags: ["Cloud infrastructure", "Product teams"],
    objectPosition: "50% 52%",
  },
  services: {
    src: techImagery.services.src,
    alt: "Modern engineering workspace with network and compute systems",
    eyebrow: "Service execution",
    tags: ["Architecture", "Integration", "Support"],
    objectPosition: "50% 36%",
  },
  "case-studies": {
    src: techImagery.caseStudies.src,
    alt: "Abstract connected systems pattern for enterprise platforms",
    eyebrow: "Representative programs",
    tags: ["Modernization", "Reliability", "Scale"],
    objectPosition: "50% 34%",
  },
  technology: {
    src: techImagery.technology.src,
    alt: "Enterprise analytics and observability display",
    eyebrow: "Technology alignment",
    tags: [".NET / C#", "AWS", "APIs"],
    objectPosition: "50% 44%",
  },
  cta: {
    src: techImagery.cta.src,
    alt: "Abstract circuit texture for call to action background",
    eyebrow: "Start collaboration",
    tags: ["Roadmap fit", "Security-aware"],
    objectPosition: "50% 55%",
  },
  architecture: {
    src: techImagery.caseStudies.src,
    alt: "System architecture style abstract network visualization",
    eyebrow: "Architecture patterns",
    tags: ["Bounded services", "Data flows"],
    objectPosition: "50% 40%",
  },
  quality: {
    src: techImagery.technologyFooter.src,
    alt: "Operational reliability and quality engineering environment",
    eyebrow: "Quality engineering",
    tags: ["Testing", "CI discipline"],
    objectPosition: "50% 42%",
  },
};
