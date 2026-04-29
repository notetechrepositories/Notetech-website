import HomeSection from "@/components/home/HomeSection";
import PageHero from "@/components/marketing/PageHero";
import HowWeWorkCardsGrid from "@/components/content/HowWeWorkCardsGrid";
import Button from "@/components/ui/Button";
import { technologyPage } from "@/data/technologyPage";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: technologyPage.metaTitle,
  description: technologyPage.metaDescription,
  openGraph: {
    title: `${technologyPage.heroTitle} · Notetech`,
    description: technologyPage.metaDescription,
    type: "website",
  },
};

const PHOTO_CARD_IMAGES = [
  "/imagery/companyPage/engagement.jpg",
  "/imagery/companyPage/leardeship.jpg",
  "/imagery/service-dedicated-team.jpg",
] as const;

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Technology" }]}
        title={technologyPage.heroTitle}
        subtitle={technologyPage.headline}
        description={technologyPage.intro}
        tone="navy"
        contentMinHeightClassName="min-h-[6rem] sm:min-h-[7rem] lg:min-h-[8rem]"
        backgroundDecor={
          <div className="absolute -inset-y-[18%] -right-[2%] hidden w-[45%] overflow-hidden [clip-path:polygon(0_32%,100%_0,100%_68%,0_100%)] lg:block">
            <Image
              src="/imagery/capabilities-banner.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="absolute inset-0 h-full w-full object-cover object-[56%_50%] saturate-[0.92] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(118deg,rgb(8_18_36/0.45)_0%,transparent_50%),linear-gradient(to_top,rgb(8_18_36/0.28)_0%,transparent_42%)]" />
          </div>
        }
      >
        <Button href={technologyPage.primaryCtaHref} variant="primary" className="px-6">
          {technologyPage.primaryCtaLabel}
        </Button>
        {technologyPage.secondaryCtaHref && technologyPage.secondaryCtaLabel ? (
          <Button href={technologyPage.secondaryCtaHref} variant="primary" className="px-6">
            {technologyPage.secondaryCtaLabel}
          </Button>
        ) : null}
      </PageHero>

      <HomeSection tone="white" className="!bg-white py-16 lg:py-20">
        <div className="space-y-8 lg:space-y-10">
          <HowWeWorkCardsGrid sections={technologyPage.sections} images={PHOTO_CARD_IMAGES} />
        </div>
      </HomeSection>

      <HomeSection tone="white" className="!bg-white pb-16 lg:pb-20">
        <div className="rounded-2xl bg-[#f7faff] p-8 text-center shadow-sm ring-1 ring-[#c9d9ee] lg:p-12">
          <h2 className="font-display mb-4 text-2xl font-semibold tracking-tight text-slate-900">
            {technologyPage.finalCtaTitle}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-[0.97rem] leading-relaxed text-slate-600">
            {technologyPage.finalCtaDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={technologyPage.finalPrimaryCtaHref} variant="primary" className="px-6">
              {technologyPage.finalPrimaryCtaLabel}
            </Button>
            <Button href={technologyPage.finalSecondaryCtaHref} variant="primary" className="px-6">
              {technologyPage.finalSecondaryCtaLabel}
            </Button>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            {technologyPage.finalFootnote}
          </p>
        </div>
      </HomeSection>
    </>
  );
}
