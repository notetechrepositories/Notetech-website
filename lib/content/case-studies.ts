import {
  caseStudiesBySlug,
  caseStudySlugs,
  type CaseStudyDetail,
  type CaseStudySlug,
} from "@/data/case-studies";

export function getCaseStudy(slug: string): CaseStudyDetail | undefined {
  if (isCaseStudySlug(slug)) return caseStudiesBySlug[slug];
  return undefined;
}

export function getAllCaseStudies(): CaseStudyDetail[] {
  return caseStudySlugs.map((s) => caseStudiesBySlug[s]);
}

export function isCaseStudySlug(s: string): s is CaseStudySlug {
  return (caseStudySlugs as readonly string[]).includes(s);
}

export function getCaseStudySlugs(): CaseStudySlug[] {
  return [...caseStudySlugs];
}
