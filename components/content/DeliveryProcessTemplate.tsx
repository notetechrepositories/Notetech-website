import HomeSection from "@/components/home/HomeSection";
import PageHero from "@/components/marketing/PageHero";
import Button from "@/components/ui/Button";
import type {
  DocBulletStructuredItem,
  DocPageData,
  DocSubsection,
} from "@/components/content/DocPageTemplate";
import Image from "next/image";

const PHOTO_CARD_IMAGES = [
  "/imagery/companyPage/engagement.jpg",
  "/imagery/companyPage/leardeship.jpg",
  "/imagery/service-dedicated-team.jpg",
] as const;

type DeliveryProcessTemplateProps = {
  page: DocPageData;
};

function SubsectionHeading({ sub }: { sub: DocSubsection }) {
  if (!sub.heading) return null;
  if (sub.headingStyle === "subtitle") {
    return (
      <p className="font-display text-lg font-semibold tracking-tight text-headline sm:text-xl">
        {sub.heading}
      </p>
    );
  }
  return <p className="text-kicker">{sub.heading}</p>;
}

function SubsectionNote({
  sub,
  alignRight,
  className,
}: {
  sub: DocSubsection;
  alignRight?: boolean;
  /** Extra classes on the note wrapper (e.g. top margin). */
  className?: string;
}) {
  if (!sub.note) return null;
  if (sub.noteWrap === "card") {
    return (
      <div
        className={`mt-3 w-full rounded-lg border border-[#e2e8f0] bg-white/90 px-4 py-3.5 text-[0.95rem] leading-relaxed text-body shadow-sm sm:px-5 sm:py-4 ${
          alignRight ? "text-right" : ""
        } ${className ?? ""}`}
      >
        <p className="text-pretty">{sub.note}</p>
      </div>
    );
  }
  return (
    <p
      className={`mt-2.5 text-[0.9rem] leading-relaxed text-body italic ${
        alignRight ? "text-right" : ""
      } ${className ?? ""}`}
    >
      {sub.note}
    </p>
  );
}

function SubsectionBlock({ sub }: { sub: DocSubsection }) {
  const hasStructured = Boolean(sub.bulletsStructured?.length);
  const isSnapshot = sub.heading.trim().toLowerCase() === "engagement snapshot";
  const inner = (
    <>
      <SubsectionHeading sub={sub} />
      {sub.paragraphs?.length ? (
        <div
          className={`${hasStructured ? "mt-3" : "mt-2.5"} space-y-2.5 text-[1.02rem] leading-[1.66] text-body ${
            sub.paragraphsWidth === "full" ? "max-w-none" : "max-w-prose"
          }`}
        >
          {sub.paragraphs.map((para, pi) => (
            <p key={pi} className="text-pretty">
              {para}
            </p>
          ))}
        </div>
      ) : null}
      {sub.bulletsStructured?.length ? (
        <ul className="mt-4 flex list-none flex-col gap-4 p-0 sm:gap-5">
          {sub.bulletsStructured.map((row, i) => (
            <li
              key={i}
              className="grid grid-cols-[2.4rem_minmax(0,1fr)] items-start gap-x-3.5 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:gap-x-4"
            >
              <div className="flex h-[1.375rem] items-center justify-start sm:h-6" aria-hidden>
                <BulletLeadIcon icon={row.icon} />
              </div>
              <div className="min-w-0 space-y-1">
                <p className="text-pretty font-semibold leading-snug text-headline sm:text-[1.0625rem]">
                  {row.title}
                </p>
                <p className="text-pretty text-[0.96rem] leading-relaxed text-body sm:text-[1rem] sm:leading-[1.6]">
                  {row.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : sub.bullets?.length ? (
        <ul
          className={`${
            isSnapshot
              ? "mt-2.5 space-y-2 border-l-2 border-[#d7e4f4] pl-4 text-[0.98rem] sm:text-[1rem]"
              : `mt-2.5 ${sub.bulletsLayout === "titleDescription" ? "space-y-3" : "space-y-2.5"}`
          }`}
        >
          {sub.bullets.map((item, i) => {
            const parts =
              sub.bulletsLayout === "titleDescription" ? splitBulletTitleDescription(item) : null;
            if (parts) {
              return (
                <li key={i} className="flex items-start gap-3">
                  <BulletIcon />
                  <span className="block min-w-0 text-[1.02rem] leading-[1.64] text-body">
                    <span className="block font-semibold text-headline">{parts.title}</span>
                    <span className="mt-0.5 block text-[1.02rem] leading-snug text-body">
                      {parts.description}
                    </span>
                  </span>
                </li>
              );
            }
            return (
              <li key={i} className={`flex items-start gap-3 ${isSnapshot ? "gap-2.5" : ""}`}>
                <BulletIcon />
                <span className="text-[1.02rem] leading-[1.64] text-body">{item}</span>
              </li>
            );
          })}
        </ul>
      ) : null}
      <SubsectionNote
        sub={sub}
        className={
          hasStructured && sub.noteWrap === "card"
            ? "!mt-6"
            : isSnapshot && sub.noteWrap === "card"
              ? "!mt-4"
              : undefined
        }
      />
    </>
  );
  if (sub.wrap === "card") {
    return (
      <div className="rounded-xl border border-[#e2e8f0] bg-white/80 p-3.5 shadow-sm ring-1 ring-slate-200/40 sm:p-4.5">
        {inner}
      </div>
    );
  }
  return <div>{inner}</div>;
}

/** Split "Title — description" (em or en dash). */
function splitBulletTitleDescription(item: string): { title: string; description: string } | null {
  const m = item.match(/^(.+?)\s[—–]\s(.+)$/);
  if (!m) return null;
  return { title: m[1].trim(), description: m[2].trim() };
}

function BulletIcon() {
  return (
    <span className="mt-[0.32em] shrink-0 text-[#2a6aa6]" aria-hidden>
      <svg viewBox="0 0 20 20" className="block h-4 w-4" fill="none">
        <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M7.3 10.1 9.2 12l3.6-3.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function BulletLeadIcon({ icon }: { icon?: DocBulletStructuredItem["icon"] }) {
  if (!icon) return <BulletIcon />;
  const wrap = "shrink-0 text-[#2a6aa6]";
  const svgCls = "block h-5 w-5";
  switch (icon) {
    case "layers":
      return (
        <span className={wrap} aria-hidden>
          <svg viewBox="0 0 20 20" className={svgCls} fill="none">
            <path
              d="M10 3.5 16.5 7 10 10.5 3.5 7z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 10 10 13.5 16.5 10M3.5 13 10 16.5 16.5 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      );
    case "integration":
      return (
        <span className={wrap} aria-hidden>
          <svg viewBox="0 0 20 20" className={svgCls} fill="none">
            <circle cx="5" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="15" cy="5.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="15" cy="14.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M7.1 9.3 12.4 6.1M7.1 10.7 12.4 13.9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      );
    case "portal":
      return (
        <span className={wrap} aria-hidden>
          <svg viewBox="0 0 20 20" className={svgCls} fill="none">
            <rect
              x="3.5"
              y="4.5"
              width="13"
              height="11"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path d="M3.5 7.5h13" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="5.5" cy="6" r="0.6" fill="currentColor" />
            <circle cx="7.2" cy="6" r="0.6" fill="currentColor" />
          </svg>
        </span>
      );
    case "ledger":
      return (
        <span className={wrap} aria-hidden>
          <svg viewBox="0 0 20 20" className={svgCls} fill="none">
            <path
              d="M5.5 3.5h9a1 1 0 011 1v11a1 1 0 01-1 1h-9a1 1 0 01-1-1v-11a1 1 0 011-1z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path d="M8 7.5h4M8 10h4M8 12.5h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      );
    case "automation":
      return (
        <span className={wrap} aria-hidden>
          <svg viewBox="0 0 20 20" className={svgCls} fill="none">
            <path
              d="M10 3.5v2.2M10 14.3V16.5M16.5 10h-2.2M5.7 10H3.5M14.6 5.4l-1.6 1.6M7 13l-1.6 1.6M14.6 14.6l-1.6-1.6M7 7L5.4 5.4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      );
    default:
      return <BulletIcon />;
  }
}

export default function DeliveryProcessTemplate({
  page,
}: DeliveryProcessTemplateProps) {
  const isPhaseTimelineLayout =
    page.title === "Delivery Process" || page.title === "Onboarding & Kickoff";
  const isSelectedEngagements = page.title === "Selected Engagements";
  const hideTopNavCards =
    page.title === "Communication & Reporting" ||
    page.title === "Pricing Approach" ||
    page.title === "Pilot Engagements" ||
    page.title === "Technology";

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

      {/* Nav cards — Engagement Models / Selected Engagements; hidden for phase-timeline pages, Communication & Reporting, Pricing Approach, Pilot Engagements */}
      {!isPhaseTimelineLayout && !hideTopNavCards && (
      <HomeSection tone="white" className="!bg-white pb-0 pt-6 lg:pt-8" disableAnimation>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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
      )}

      {/* Steps card — intro + all steps in one container, mirrors dedicated-team style */}
      <HomeSection tone="white" className="!bg-white py-7 lg:py-8" disableAnimation>
        <div className="border border-border-subtle bg-[#f8f8f6] p-6 shadow-[0_18px_42px_-16px_rgba(11,18,32,0.45)] lg:p-7">

          {/* Intro — kicker uses page.title; omit entire block when no headline, intro, or contentHeading (e.g. Selected Engagements) */}
          {page.headline || page.intro || page.contentHeading ? (
            <div>
              <p className="text-kicker">{page.title}</p>
              {page.headline ? (
                <h2 className="mt-2 font-display text-3xl tracking-tight text-headline lg:text-[2.5rem] lg:leading-[1.14]">
                  {page.headline}
                </h2>
              ) : null}
              {page.contentHeading ? (
                <p className="mt-3 text-[1.0625rem] font-medium leading-snug text-headline">
                  {page.contentHeading}
                </p>
              ) : null}
              {page.intro ? (
                <p className="mt-4 text-[1.0625rem] leading-[1.75] text-body">{page.intro}</p>
              ) : null}
            </div>
          ) : null}

          {/* Steps */}
          {isPhaseTimelineLayout ? (
            <div className="relative mt-10 border-t border-[#e2e8f0] pt-10 lg:mt-12 lg:pt-12">
              <div
                className="pointer-events-none absolute bottom-0 left-1/2 top-10 hidden w-px -translate-x-1/2 bg-[#d6deea] lg:block"
                aria-hidden
              />
              <div className="space-y-10 lg:space-y-14">
                {page.sections.map((section, index) => {
                  const sectionImages = page.sectionImages ?? [];
                  const imgSrc =
                    sectionImages.length > 0
                      ? sectionImages[index % sectionImages.length]
                      : PHOTO_CARD_IMAGES[index % PHOTO_CARD_IMAGES.length];
                  const stepName = section.title
                    .replace(/^Step\s*\d+\s*[—-]\s*/i, "")
                    .trim();
                  const phaseLabel = `PHASE ${String(index + 1).padStart(2, "0")}`;
                  const isImageRight = index % 2 === 0;

                  return (
                    <section
                      key={section.title}
                      id={`step-${index + 1}`}
                      aria-labelledby={`delivery-step-${index + 1}`}
                      className="scroll-mt-32 lg:scroll-mt-40"
                    >
                      <div className="relative grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-12">
                        <div
                          className="absolute left-1/2 top-1/2 hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#6ba0de] bg-[#f8f8f6] lg:block"
                          aria-hidden
                        />

                        <div
                          className={`rounded-xl bg-transparent ${
                            isImageRight
                              ? "lg:order-1 lg:ml-auto lg:max-w-[31rem] lg:pr-4 lg:text-right"
                              : "lg:order-2 lg:mr-auto lg:max-w-[31rem] lg:pl-4"
                          }`}
                        >
                          <p className="text-kicker text-[#b78708]">{phaseLabel}</p>
                          <h3
                            id={`delivery-step-${index + 1}`}
                            className="mt-2 font-display text-[2rem] leading-[1.12] tracking-tight text-headline"
                          >
                            {stepName}
                          </h3>
                          {section.description ? (
                            <p className="mt-4 text-[1.0625rem] leading-[1.72] text-body">
                              {section.description}
                            </p>
                          ) : null}
                          {section.subsections?.length ? (
                            <div className="mt-4 space-y-5">
                              {section.subsections.map((sub, si) => (
                                <div key={si}>
                                  <SubsectionHeading sub={sub} />
                                  {sub.paragraphs?.length ? (
                                    <div
                                      className={`mt-3 max-w-prose space-y-3 text-[1.0625rem] leading-[1.72] text-body ${
                                        isImageRight ? "ml-auto text-right" : ""
                                      }`}
                                    >
                                      {sub.paragraphs.map((para, pi) => (
                                        <p key={pi} className="text-pretty">
                                          {para}
                                        </p>
                                      ))}
                                    </div>
                                  ) : null}
                                  {sub.bullets?.length ? (
                                    <ul className="mt-3 space-y-3">
                                      {sub.bullets.map((item, i) => (
                                        <li
                                          key={i}
                                          className={`flex items-start gap-3 ${
                                            isImageRight ? "justify-end" : ""
                                          }`}
                                        >
                                          <span className="mt-[0.52em] shrink-0 text-[#2a6aa6]" aria-hidden>
                                            <svg
                                              viewBox="0 0 20 20"
                                              className="block h-3.5 w-3.5"
                                              fill="none"
                                            >
                                              <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.8" />
                                              <path
                                                d="M7.3 10.1 9.2 12l3.6-3.8"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              />
                                            </svg>
                                          </span>
                                          <span
                                            className={`text-[1.0625rem] leading-[1.72] text-body ${
                                              isImageRight ? "text-right" : ""
                                            }`}
                                          >
                                            {item}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : null}
                                  <SubsectionNote sub={sub} alignRight={isImageRight} />
                                </div>
                              ))}
                            </div>
                          ) : section.bullets?.length ? (
                            <ul className="mt-4 space-y-3">
                              {section.bullets.map((item, i) => (
                                <li
                                  key={i}
                                  className={`flex items-start gap-3 ${
                                    isImageRight ? "justify-end" : ""
                                  }`}
                                >
                                  <span className="mt-[0.52em] shrink-0 text-[#2a6aa6]" aria-hidden>
                                    <svg
                                      viewBox="0 0 20 20"
                                      className="block h-3.5 w-3.5"
                                      fill="none"
                                    >
                                      <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.8" />
                                      <path
                                        d="M7.3 10.1 9.2 12l3.6-3.8"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                  <span
                                    className={`text-[1.0625rem] leading-[1.72] text-body ${
                                      isImageRight ? "text-right" : ""
                                    }`}
                                  >
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>

                        <div
                          className={`w-full overflow-hidden rounded-xl border border-[#dbe3ee] shadow-[0_10px_28px_-18px_rgba(9,24,47,0.55)] ${
                            isImageRight ? "lg:order-2 lg:pl-10" : "lg:order-1 lg:pr-10"
                          }`}
                        >
                          <Image
                            src={imgSrc}
                            alt=""
                            width={640}
                            height={400}
                            className="h-[220px] w-full object-cover object-center sm:h-[260px] lg:h-[300px]"
                          />
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          ) : (
            page.sections.map((section, index) => {
              const sectionImages = page.sectionImages ?? [];
              const imgSrc =
                sectionImages.length > 0
                  ? sectionImages[index % sectionImages.length]
                  : PHOTO_CARD_IMAGES[index % PHOTO_CARD_IMAGES.length];
              const stepName = section.title
                .replace(/^Step\s*\d+\s*[—-]\s*/i, "")
                .trim();
              const isImageRight = index % 2 === 0;
              const isTechnologyWhatWeWorkWith =
                page.title === "Technology" && section.title === "What we work with";
              const technologyObservabilitySub = isTechnologyWhatWeWorkWith
                ? section.subsections?.find(
                    (sub) =>
                      sub.heading === "Observability & Security (aligned to your environment)",
                  )
                : undefined;
              const technologyMainSubsections = isTechnologyWhatWeWorkWith
                ? section.subsections?.filter(
                    (sub) =>
                      sub.heading !== "Observability & Security (aligned to your environment)",
                  )
                : section.subsections;

              const asideIdx = section.subsectionIndicesUnderImage;
              const subs = section.subsections;
              const hasAsideLayout = Boolean(asideIdx?.length && subs?.length);

              if (hasAsideLayout && subs && asideIdx) {
                const minAside = Math.min(...asideIdx);
                const maxAside = Math.max(...asideIdx);
                const mainFirst = subs.slice(0, minAside);
                const asideSubs = asideIdx
                  .filter((i) => i >= 0 && i < subs.length)
                  .map((i) => subs[i]);
                const rest = subs.slice(maxAside + 1);

                return (
                  <section
                    key={section.title}
                    id={`step-${index + 1}`}
                    aria-labelledby={`delivery-step-${index + 1}`}
                    className="scroll-mt-28 mt-8 border-t border-[#e2e8f0] pt-8 lg:scroll-mt-36 lg:mt-10 lg:pt-10"
                  >
                    <div>
                      <div>
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
                    </div>
                    <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                      <div
                        className={`min-w-0 flex-1 lg:max-w-3xl ${
                          isImageRight ? "lg:order-1" : "lg:order-2 lg:ml-auto"
                        }`}
                      >
                        {mainFirst.length > 0 ? (
                          <div className="space-y-4">
                            {mainFirst.map((sub, si) => (
                              <SubsectionBlock key={`main-${si}`} sub={sub} />
                            ))}
                          </div>
                        ) : null}
                      </div>
                      <div
                        className={`w-full shrink-0 space-y-5 lg:w-[38%] ${
                          isImageRight ? "lg:order-2 lg:ml-auto lg:mr-6" : "lg:order-1"
                        }`}
                      >
                        <div className="overflow-hidden rounded-xl border border-[#e2e8f0]">
                          <Image
                            src={imgSrc}
                            alt=""
                            width={640}
                            height={400}
                            className="h-[220px] w-full object-cover object-center sm:h-[260px] lg:h-[280px]"
                          />
                        </div>
                        {asideSubs.length > 0 ? (
                          <div className="space-y-4">
                            {asideSubs.map((sub, si) => (
                              <SubsectionBlock key={`aside-${si}`} sub={sub} />
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    {rest.length > 0 ? (
                      <div className="mt-6 w-full max-w-6xl">
                        <div
                          className={
                            isSelectedEngagements
                              ? "grid gap-x-8 gap-y-6 md:grid-cols-2"
                              : "space-y-7"
                          }
                        >
                          {rest.map((sub, si) => (
                            <div
                              key={`rest-${si}`}
                              className={
                                isSelectedEngagements && (sub.wrap === "card" || sub.headingStyle === "subtitle")
                                  ? "md:col-span-2"
                                  : ""
                              }
                            >
                              <SubsectionBlock sub={sub} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </section>
                );
              }

              return (
                <section
                  key={section.title}
                  id={`step-${index + 1}`}
                  aria-labelledby={`delivery-step-${index + 1}`}
                  className="scroll-mt-28 mt-8 border-t border-[#e2e8f0] pt-8 lg:scroll-mt-36 lg:mt-10 lg:pt-10"
                >
                  <div
                    className={`flex flex-col gap-6 lg:flex-row lg:gap-10 ${
                      isTechnologyWhatWeWorkWith ? "lg:items-stretch" : "lg:items-center"
                    }`}
                  >
                    <div
                      className={`flex w-full shrink-0 flex-col overflow-hidden rounded-xl border border-[#e2e8f0] lg:w-[38%] ${
                        isImageRight ? "lg:order-2 lg:ml-auto lg:mr-6" : "lg:order-1"
                      }`}
                    >
                      <Image
                        src={imgSrc}
                        alt=""
                        width={640}
                        height={400}
                        className={`w-full object-cover object-center ${
                          isTechnologyWhatWeWorkWith
                            ? "h-[280px] sm:h-[320px] lg:h-[360px]"
                            : "h-[220px] sm:h-[260px] lg:h-[280px]"
                        }`}
                      />
                      {technologyObservabilitySub ? (
                        <div className="mt-5 rounded-xl border border-[#e2e8f0] bg-white/90 p-4 shadow-sm ring-1 ring-slate-200/40 lg:mt-auto">
                          <SubsectionBlock sub={technologyObservabilitySub} />
                        </div>
                      ) : null}
                    </div>
                    <div
                      className={`min-w-0 flex-1 lg:max-w-3xl ${
                        isImageRight ? "lg:order-1" : "lg:order-2 lg:ml-auto"
                      }`}
                    >
                      <div>
                        <h3
                          id={`delivery-step-${index + 1}`}
                          className="font-display text-2xl tracking-tight text-headline"
                        >
                          {stepName}
                        </h3>
                      </div>
                      {section.description ? (
                        <p className="mt-3 text-kicker text-[#5479a3]">{section.description}</p>
                      ) : null}
                      {technologyMainSubsections?.length ? (
                        <div
                          className={
                            isTechnologyWhatWeWorkWith
                              ? "mt-5 grid gap-4 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-3"
                              : isSelectedEngagements
                              ? "mt-5 grid gap-x-8 gap-y-6 md:grid-cols-2"
                              : "mt-4 space-y-5"
                          }
                        >
                          {technologyMainSubsections.map((sub, si) => (
                            <div
                              key={si}
                              className={
                                isTechnologyWhatWeWorkWith
                                  ? "h-full rounded-xl border border-[#e2e8f0] bg-white/90 p-4 shadow-sm ring-1 ring-slate-200/40"
                                  : isSelectedEngagements &&
                                      (sub.wrap === "card" || sub.headingStyle === "subtitle")
                                  ? "md:col-span-2"
                                  : ""
                              }
                            >
                              <SubsectionBlock sub={sub} />
                            </div>
                          ))}
                        </div>
                      ) : section.bullets?.length ? (
                        <ul className="mt-4 space-y-3">
                          {section.bullets.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <BulletIcon />
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
            })
          )}

          {/* CTA */}
          <section className="relative mt-8 overflow-hidden rounded-2xl p-5 text-center shadow-[0_20px_45px_rgba(8,21,40,0.42)] ring-1 ring-[#6e93bb]/50 lg:mt-10 lg:p-7">
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
