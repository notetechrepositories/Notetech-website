import HomeSection from "@/components/home/HomeSection";
import PageHero from "@/components/marketing/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import type { DocPageData } from "@/components/content/DocPageTemplate";
import Image from "next/image";

const PHOTO_CARD_IMAGES = [
  "/imagery/companyPage/engagement.jpg",
  "/imagery/companyPage/leardeship.jpg",
  "/imagery/service-dedicated-team.jpg",
] as const;

type DeliveryProcessTemplateProps = {
  page: DocPageData;
};

export default function DeliveryProcessTemplate({
  page,
}: DeliveryProcessTemplateProps) {
  return (
    <>
      {/* Hero — identical to DocPageTemplate */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: page.parentLabel, href: page.parentHref },
          { label: page.title },
        ]}
        title={page.title}
        subtitle={page.headline}
        description={page.intro}
        tone="navy"
        contentMinHeightClassName="min-h-[6rem] sm:min-h-[7rem] lg:min-h-[8rem]"
        backgroundDecor={
          <div className="absolute -inset-y-[18%] -right-[2%] hidden w-[45%] overflow-hidden [clip-path:polygon(0_32%,100%_0,100%_68%,0_100%)] lg:block">
            <Image
              src="/imagery/capabilities-banner.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className={`absolute inset-0 h-full w-full object-cover ${
                page.heroImageObjectPosition ?? "object-[56%_50%]"
              } saturate-[0.92] contrast-[1.04]`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(118deg,rgb(8_18_36/0.45)_0%,transparent_50%),linear-gradient(to_top,rgb(8_18_36/0.28)_0%,transparent_42%)]" />
          </div>
        }
      />

      {/* Nav cards — 3+2 grid */}
      <HomeSection tone="white" className="!bg-white py-8 lg:py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {page.sections.map((section, index) => {
            const sectionImages = page.sectionImages ?? [];
            const imgSrc =
              sectionImages.length > 0
                ? sectionImages[index % sectionImages.length]
                : PHOTO_CARD_IMAGES[index % PHOTO_CARD_IMAGES.length];
            return (
              <a
                key={section.title}
                href={`#step-${index + 1}`}
                className="group block overflow-hidden rounded-2xl border border-[#355b86] bg-[#123560] shadow-[0_10px_24px_rgba(16,33,51,0.28)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(16,33,51,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9ab4d4]/45"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[#d8e2ee]">
                  <Image
                    src={imgSrc}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b1f36]/55 to-transparent" />
                </div>
                <div className="flex items-center justify-between bg-[#123560] px-5 py-3.5">
                  <h2 className="text-[1.05rem] font-semibold tracking-tight text-white lg:text-[1.1rem]">
                    {section.title}
                  </h2>
                  <span
                    className="ml-3 shrink-0 text-[#78a9de] transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </HomeSection>

      {/* Content sections — one per step */}
      {page.sections.map((section, index) => {
        const isPatternedSection = index % 2 === 0;
        const sectionImages = page.sectionImages ?? [];
        const imgSrc =
          sectionImages.length > 0
            ? sectionImages[index % sectionImages.length]
            : PHOTO_CARD_IMAGES[index % PHOTO_CARD_IMAGES.length];

        return (
          <HomeSection
            key={section.title}
            id={`step-${index + 1}`}
            tone={index % 2 === 0 ? "patterned" : "white"}
            className={
              isPatternedSection
                ? "scroll-mt-48 lg:scroll-mt-60"
                : "scroll-mt-36 lg:scroll-mt-48"
            }
          >
            <section className="grid gap-4 lg:grid-cols-12">
              <ScrollReveal
                direction="left"
                delayMs={180}
                className="h-full lg:col-span-5"
              >
                <aside className="flex h-full min-h-[20rem] flex-col overflow-hidden rounded-2xl border border-[#1d4c84] bg-[#123560] p-6 shadow-[0_14px_30px_rgba(8,26,53,0.24)] ring-1 ring-[#5f8fc8]/30 lg:min-h-[24rem] lg:p-8">
                  <h3 className="font-display text-2xl tracking-tight text-white">
                    {section.title}
                  </h3>
                  <div className="mt-3 h-px w-10 bg-[#78a9de]" />
                  <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border border-[#5f8fc8]/40">
                    <Image
                      src={imgSrc}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>
                </aside>
              </ScrollReveal>

              <div className="flex flex-col gap-4 lg:col-span-7">
                <ScrollReveal
                  direction="right"
                  delayMs={180}
                  className="flex-1"
                >
                  <section className="h-full overflow-hidden rounded-2xl border border-[#1d4c84] bg-[#123560] p-6 shadow-[0_14px_30px_rgba(8,26,53,0.24)] ring-1 ring-[#5f8fc8]/30 lg:p-8">
                    {section.description ? (
                      <>
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#d7e8fb]">
                          {section.description}
                        </p>
                        <div className="mt-3 h-px w-10 bg-[#78a9de]" />
                      </>
                    ) : null}
                    {section.bullets?.length ? (
                      <ul
                        className={`space-y-3 ${section.description ? "mt-5" : ""}`}
                      >
                        {section.bullets.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-[1rem] leading-relaxed text-[#eef5ff]"
                          >
                            <span className="mt-px shrink-0 font-semibold text-[#c4ddfb]">
                              ›
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                </ScrollReveal>
              </div>
            </section>
          </HomeSection>
        );
      })}

      {/* CTA — same image-backed style as engagement-models */}
      <HomeSection tone="white" className="!bg-white -mt-10 pb-12 lg:-mt-12 lg:pb-16">
        <section className="relative overflow-hidden rounded-2xl p-6 text-center shadow-[0_20px_45px_rgba(8,21,40,0.42)] ring-1 ring-[#6e93bb]/50 lg:p-8">
          <Image
            src="/imagery/companyPage/engagement.jpg"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,22,42,0.82)_0%,rgba(11,35,64,0.72)_55%,rgba(6,18,36,0.86)_100%)]" />
          {page.cta.title ? (
            <h2 className="relative z-10 mb-4 font-display text-2xl font-semibold tracking-tight text-white">
              {page.cta.title}
            </h2>
          ) : null}
          {page.cta.description ? (
            <p className="relative z-10 mx-auto mb-6 max-w-xl text-[0.97rem] leading-relaxed text-[#d8e7f7]">
              {page.cta.description}
            </p>
          ) : null}
          <div className="relative z-10 flex flex-wrap justify-center gap-3">
            <Button href={page.cta.primaryHref} variant="primary" className="px-6">
              {page.cta.primaryLabel}
            </Button>
            {page.cta.secondaryLabel && page.cta.secondaryHref && (
              <Button
                href={page.cta.secondaryHref}
                variant="primary"
                className="px-6"
              >
                {page.cta.secondaryLabel}
              </Button>
            )}
          </div>
        </section>
      </HomeSection>
    </>
  );
}
