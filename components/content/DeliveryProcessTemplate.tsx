import HomeSection from "@/components/home/HomeSection";
import PageHero from "@/components/marketing/PageHero";
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
  const isDeliveryProcess = page.title === "Delivery Process";

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
        subtitle={undefined}
        description={undefined}
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

      {/* Nav cards — only for Engagement Models, not Delivery Process */}
      {!isDeliveryProcess && <HomeSection tone="white" className="!bg-white pb-0 pt-8 lg:pt-10" disableAnimation>
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
      </HomeSection>}

      {/* Steps card — intro + all steps in one container, mirrors dedicated-team style */}
      <HomeSection tone="white" className="!bg-white py-8 lg:py-10" disableAnimation>
        <div className="border border-border-subtle bg-[#f8f8f6] p-8 shadow-[0_18px_42px_-16px_rgba(11,18,32,0.45)]">

          {/* Intro */}
          <div>
            <p className="text-kicker">{page.title}</p>
            {page.headline ? (
              <h2 className="mt-2 font-display text-3xl tracking-tight text-headline lg:text-[2.5rem] lg:leading-[1.14]">
                {page.headline}
              </h2>
            ) : null}
            {page.intro ? (
              <p className="mt-4 text-[1.0625rem] leading-[1.75] text-body">{page.intro}</p>
            ) : null}
          </div>

          {/* Steps */}
          {page.sections.map((section, index) => {
            const sectionImages = page.sectionImages ?? [];
            const imgSrc =
              sectionImages.length > 0
                ? sectionImages[index % sectionImages.length]
                : PHOTO_CARD_IMAGES[index % PHOTO_CARD_IMAGES.length];
            const stepName = section.title
              .replace(/^Step\s*\d+\s*[—-]\s*/i, "")
              .trim();
            const isImageRight = index % 2 === 0;

            return (
              <section
                key={section.title}
                id={`step-${index + 1}`}
                aria-labelledby={`delivery-step-${index + 1}`}
                className="scroll-mt-32 mt-10 border-t border-[#e2e8f0] pt-10 lg:scroll-mt-40 lg:mt-12 lg:pt-12"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                  <div
                    className={`w-full shrink-0 overflow-hidden rounded-xl border border-[#e2e8f0] lg:w-[38%] ${
                      isImageRight ? "lg:order-2 lg:ml-auto lg:mr-6" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={imgSrc}
                      alt=""
                      width={640}
                      height={400}
                      className="h-[220px] w-full object-cover object-center sm:h-[260px] lg:h-[280px]"
                    />
                  </div>
                  <div
                    className={`flex-1 lg:max-w-[30rem] ${
                      isImageRight ? "lg:order-1" : "lg:order-2 lg:ml-auto"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#e6bf2a] bg-[#f2ca39] text-base font-bold text-[#09182f]">
                        {index + 1}
                      </span>
                      <h3
                        id={`delivery-step-${index + 1}`}
                        className="font-display text-2xl tracking-tight text-headline"
                      >
                        {stepName}
                      </h3>
                    </div>
                    {section.description ? (
                      <p className="mt-4 text-kicker text-[#5479a3]">{section.description}</p>
                    ) : null}
                    {section.subsections?.length ? (
                      <div className="mt-4 space-y-5">
                        {section.subsections.map((sub, si) => (
                          <div key={si}>
                            {sub.heading ? (
                              <p className="text-kicker">{sub.heading}</p>
                            ) : null}
                            {sub.bullets?.length ? (
                              <ul className="mt-3 space-y-3">
                                {sub.bullets.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <span
                                      className="mt-[0.46em] block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                                      aria-hidden
                                    />
                                    <span className="text-[1.0625rem] leading-[1.72] text-body">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                            {sub.note ? (
                              <p className="mt-3 text-[0.9rem] leading-relaxed text-body italic">
                                {sub.note}
                              </p>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    ) : section.bullets?.length ? (
                      <ul className="mt-4 space-y-3">
                        {section.bullets.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className="mt-[0.46em] block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                              aria-hidden
                            />
                            <span className="text-[1.0625rem] leading-[1.72] text-body">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </section>
            );
          })}

          {/* CTA */}
          <section className="relative mt-10 overflow-hidden rounded-2xl p-6 text-center shadow-[0_20px_45px_rgba(8,21,40,0.42)] ring-1 ring-[#6e93bb]/50 lg:mt-12 lg:p-8">
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
                <Button href={page.cta.secondaryHref} variant="primary" className="px-6">
                  {page.cta.secondaryLabel}
                </Button>
              )}
            </div>
          </section>
        </div>
      </HomeSection>
    </>
  );
}
