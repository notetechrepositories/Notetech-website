import {
  SERVICE_SLUGS,
  type ServiceDetail,
  type ServiceSlug,
  servicesBySlug,
} from "@/data/services";

export function getService(slug: string): ServiceDetail | undefined {
  if (isServiceSlug(slug)) return servicesBySlug[slug];
  return undefined;
}

export function getAllServices(): ServiceDetail[] {
  return SERVICE_SLUGS.map((s) => servicesBySlug[s]);
}

export function isServiceSlug(s: string): s is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(s);
}

export function getServiceSlugs(): ServiceSlug[] {
  return [...SERVICE_SLUGS];
}
