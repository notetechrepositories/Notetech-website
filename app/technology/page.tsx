import HomeSection from "@/components/home/HomeSection";
import PageHero from "@/components/marketing/PageHero";
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

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Technology" }]}
        title={technologyPage.heroTitle}
        subtitle={technologyPage.headline}
        description={technologyPage.intro}
        tone="navy"
        contentMinHeightClassName="min-h-[18rem] sm:min-h-[21rem] lg:min-h-[24rem]"
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

      <HomeSection tone="white" className="!bg-[#f6f2ea] py-16 lg:py-20">
        <div className="space-y-8 lg:space-y-10">
          {technologyPage.sections.map((section, index) => {
            const imgSrc = "/imagery/companyPage/engagement.jpg";
            const imageLeft = index % 2 === 0;
            return (
              <section
                key={section.id}
                className="overflow-hidden rounded-2xl bg-[#ede7d8] shadow-sm ring-1 ring-stone-300/60"
              >
                <div className={`grid items-stretch lg:grid-cols-2 ${imageLeft ? "" : "lg:[&>*:first-child]:order-last"}`}>
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={imgSrc}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <h2 className="font-display text-2xl tracking-tight text-slate-900 lg:text-3xl">
                      {section.title}
                    </h2>
                    <div className="mb-6 mt-2 h-0.5 w-8 bg-[#46c3e6]" />
                    {section.description && (
                      <div className="mb-6 rounded-xl border-l-2 border-[#8a745c]/70 bg-gradient-to-l from-[#8a745c]/45 via-[#8a745c]/20 to-white/70 px-4 py-3">
                        <p className="whitespace-pre-line text-[0.95rem] leading-relaxed text-slate-700">
                          {section.description}
                        </p>
                      </div>
                    )}
                    {section.subsections?.length ? (
                      <div className="space-y-6">
                        {section.subsections.map((sub, si) => (
                          <div key={si}>
                            {sub.heading ? (
                              <>
                                <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-black">
                                  {sub.heading}
                                </p>
                                <div className="mb-3 h-px bg-[#8a745c]/20" />
                              </>
                            ) : null}
                            <ul className="space-y-2">
                              {sub.bullets.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 rounded-lg bg-white/50 px-3 py-2 text-[0.9rem] leading-relaxed text-slate-700">
                                  <span className="mt-px shrink-0 font-semibold text-[#8a745c]">›</span>
                                  <span className="whitespace-pre-line">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : ((section as { bullets?: string[] }).bullets?.length ?? 0) > 0 ? (
                      <ul className="space-y-2">
                        {(section as { bullets?: string[] }).bullets!.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 rounded-lg bg-white/50 px-3 py-2 text-[0.9rem] leading-relaxed text-slate-700">
                            <span className="mt-px shrink-0 font-semibold text-[#8a745c]">›</span>
                            <span className="whitespace-pre-line">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </HomeSection>

      <HomeSection tone="white" className="!bg-[#f6f2ea] pb-16 lg:pb-20">
        <div className="rounded-2xl bg-[#ede7d8] p-8 text-center shadow-sm ring-1 ring-stone-300/60 lg:p-12">
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
