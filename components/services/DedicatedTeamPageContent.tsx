import HomeSection from "@/components/home/HomeSection";
import Button from "@/components/ui/Button";
import type { RichItem, ServiceDetail } from "@/data/services";

// ---------- inline SVG icon primitives (used only in rich layout) ----------

type IconKey =
  | "refresh"
  | "building"
  | "calendar"
  | "users"
  | "clock"
  | "file-text"
  | "medal"
  | "shield";

const ICON_PATHS: Record<IconKey, React.ReactNode> = {
  refresh: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M4 4v5h.582m0 0A7 7 0 0 1 18 9m-1.582 6A7 7 0 0 1 6 15m-.582 0H10m9 0v-5"
    />
  ),
  building: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M3 21h18M9 3h6a1 1 0 0 1 1 1v17H8V4a1 1 0 0 1 1-1ZM9 8h2m2 0h2M9 12h2m2 0h2M9 16h2m2 0h2"
    />
  ),
  calendar: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M8 7V3m8 4V3M3 11h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
    />
  ),
  users: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
    />
  ),
  clock: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
    />
  ),
  "file-text": (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M14 2v6h6M16 13H8m8 4H8m2-8H8"
      />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="8" r="6" strokeWidth={1.75} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="m8.21 13.89-1.96 5.03L12 17l5.75 1.92-1.96-5.03"
      />
    </>
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M12 2 4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4Zm-1.5 8.5 1.5 1.5 3-3"
    />
  ),
};

function ServiceIcon({
  name,
  variant = "filled",
}: {
  name: string;
  variant?: "filled" | "outlined";
}) {
  const paths = ICON_PATHS[name as IconKey] ?? null;

  if (variant === "filled") {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          className="h-5 w-5"
          aria-hidden
        >
          {paths}
        </svg>
      </span>
    );
  }

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/8">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-5 w-5 text-primary"
        aria-hidden
      >
        {paths}
      </svg>
    </span>
  );
}

// ---------- component ----------

type Props = {
  service: ServiceDetail;
  bestForTitle?: string;
  whatYouGetTitle?: string;
  showWorkingModel?: boolean;
  workingModelTitle?: string;
  workingModelPrimaryLine?: string;
  showToolsCapabilities?: boolean;
  ctaVariant?: "default" | "engagement";
  ctaTitle?: string;
  ctaDescription?: string;
  /** When true, uses the Cloud-style rich layout shell. */
  richLayout?: boolean;
};

export default function DedicatedTeamPageContent({
  service,
  bestForTitle = "Best for",
  whatYouGetTitle = "What you get",
  showWorkingModel = true,
  workingModelTitle = "Working model",
  workingModelPrimaryLine,
  showToolsCapabilities = false,
  ctaVariant = "default",
  ctaTitle,
  ctaDescription,
  richLayout = false,
}: Props) {
  const workingModelText =
    service.workingModel ??
    "You set priorities and requirements; our team designs, builds, tests, and maintains the software while adapting to your tools and standards.";
  const resolvedWorkingModelPrimaryLine =
    workingModelPrimaryLine ?? workingModelText;

  // ── Rich layout (shared Cloud-style shell for all service detail pages) ─
  if (richLayout) {
    const introKicker = service.introKicker ?? service.title;

    return (
      <HomeSection tone="white" className="!bg-[#f8f8f6]">
        <div className="mx-auto overflow-hidden border border-border-subtle bg-white shadow-[0_18px_42px_-16px_rgba(11,18,32,0.45)]">

          {/* Intro */}
          <div className="bg-[#f8f8f6] p-8 lg:p-10">
            <p className="text-kicker">{introKicker}</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-headline lg:text-[2.5rem] lg:leading-[1.14]">
              {service.headlineLines ? (
                <>
                  <span className="block">{service.headlineLines[0]}</span>
                  <span className="block">{service.headlineLines[1]}</span>
                </>
              ) : (
                service.headline
              )}
            </h2>
            <p className="mt-4 max-w-2xl text-[1.0625rem] leading-[1.75] text-body">
              {service.intro}
            </p>
          </div>

          {/* Best for */}
          <section
            aria-labelledby="dedicated-best-for-heading"
            className="border-t border-[#e2e8f0] bg-[#f8f8f6] px-8 py-10 lg:px-10 lg:py-12"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14">
              <div className="w-full shrink-0 overflow-hidden rounded-2xl lg:w-[44%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.imageSrc ?? "/imagery/service-dedicated-team.jpg"}
                  alt={service.imageAlt ?? `${service.title} image`}
                  className="h-[220px] w-full object-cover object-center sm:h-[260px] lg:h-[300px]"
                />
              </div>

              <div className="flex-1">
                <p className="text-kicker">Best for</p>
                <h3
                  id="dedicated-best-for-heading"
                  className="mt-2 font-display text-2xl font-bold tracking-tight text-headline lg:text-3xl"
                >
                  {bestForTitle === "Best for" ? "Best For" : bestForTitle}
                </h3>

                {service.bestForRich ? (
                  <ul className="mt-6 space-y-5">
                    {service.bestForRich.map((item: RichItem, i: number) => (
                      <li key={i} className="flex items-start gap-4">
                        <ServiceIcon name={item.icon} variant="filled" />
                        <div>
                          <p className="font-semibold text-headline">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-sm italic leading-relaxed text-primary/80">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="mt-5 space-y-3">
                    {service.bestFor.map((item, i) => (
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
                )}
              </div>
            </div>
          </section>

          {/* What you get */}
          <section
            aria-labelledby="dedicated-what-you-get-heading"
            className="border-t border-[#e2e8f0] bg-[#f8f8f6] px-8 py-10 lg:px-10 lg:py-12"
          >
            <div className="flex items-center gap-4">
              <h3
                id="dedicated-what-you-get-heading"
                className="shrink-0 font-display text-2xl font-bold tracking-tight text-headline lg:text-3xl"
              >
                {whatYouGetTitle === "What you get"
                  ? "What You Get"
                  : whatYouGetTitle}
              </h3>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>

            {service.whatYouGetRich ? (
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {service.whatYouGetRich.map((item: RichItem, i: number) => (
                  <li
                    key={i}
                    className="flex flex-col gap-3 rounded-xl border border-[#dde4ef] bg-white p-5"
                  >
                    <ServiceIcon name={item.icon} variant="outlined" />
                    <p className="font-semibold text-headline">{item.title}</p>
                    <p className="text-sm leading-relaxed text-primary/80">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="mt-5 space-y-3">
                {service.whatYouGet.map((item, i) => (
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
            )}
          </section>

          {/* Working model */}
          {showWorkingModel ? (
            <section
              aria-labelledby="dedicated-working-model-heading"
              className="border-t border-[#e2e8f0] bg-[#f8f8f6] px-8 py-10 lg:px-10 lg:py-12"
            >
              <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white px-8 py-10 text-center shadow-[0_8px_32px_-8px_rgba(11,18,32,0.18)] ring-1 ring-[#dde4ef] lg:px-12 lg:py-12">
                <span
                  className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#f1f4f9]"
                  aria-hidden
                />
                <h3
                  id="dedicated-working-model-heading"
                  className="relative z-10 font-display text-2xl font-bold tracking-tight text-headline lg:text-3xl"
                >
                  {workingModelTitle}
                </h3>
                <p className="relative z-10 mx-auto mt-4 text-[1.0625rem] italic leading-[1.75] text-body">
                  &ldquo;{resolvedWorkingModelPrimaryLine}&rdquo;
                </p>
                {showToolsCapabilities && service.toolsCapabilities?.length ? (
                  <div className="relative z-10 mx-auto mt-6 max-w-xl border-t border-border-subtle pt-6 text-left">
                    <h4 className="mb-3 text-kicker">Tools & capabilities</h4>
                    <ul className="space-y-2.5">
                      {service.toolsCapabilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
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
                  </div>
                ) : null}
                <div className="relative z-10 mt-7">
                  <Button
                    href={service.cta.primaryHref}
                    variant="primary"
                    className="px-8"
                  >
                    {service.cta.primaryLabel}
                  </Button>
                </div>
              </div>
            </section>
          ) : null}

          {!showWorkingModel && ctaVariant === "engagement" ? (
            <section
              aria-labelledby="rich-engagement-cta-heading"
              className="border-t border-[#e2e8f0] bg-[#f8f8f6] px-8 py-10 lg:px-10 lg:py-12"
            >
              <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white px-8 py-10 text-center shadow-[0_8px_32px_-8px_rgba(11,18,32,0.18)] ring-1 ring-[#dde4ef] lg:px-12 lg:py-12">
                <span
                  className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#f1f4f9]"
                  aria-hidden
                />
                {ctaTitle ? (
                  <h3
                    id="rich-engagement-cta-heading"
                    className="relative z-10 font-display text-2xl font-bold tracking-tight text-headline lg:text-3xl"
                  >
                    {ctaTitle}
                  </h3>
                ) : (
                  <h3 id="rich-engagement-cta-heading" className="sr-only">
                    Get in touch
                  </h3>
                )}
                {ctaDescription ? (
                  <p className="relative z-10 mx-auto mt-4 max-w-xl text-[1.0625rem] italic leading-[1.75] text-body">
                    &ldquo;{ctaDescription}&rdquo;
                  </p>
                ) : null}
                <div className="relative z-10 mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    href={service.cta.primaryHref}
                    variant="primary"
                    className="px-8"
                  >
                    {service.cta.primaryLabel}
                  </Button>
                  {service.cta.secondaryHref && service.cta.secondaryLabel ? (
                    <Button
                      href={service.cta.secondaryHref}
                      variant="ghost"
                      className="px-8"
                    >
                      {service.cta.secondaryLabel}
                    </Button>
                  ) : null}
                </div>
              </div>
            </section>
          ) : null}

        </div>
      </HomeSection>
    );
  }

  // ── Original layout (all other service pages) ───────────────────────────
  return (
    <HomeSection tone="white" className="!bg-[#f8f8f6]">
      <div className="mx-auto border border-border-subtle bg-[#f8f8f6] p-8 shadow-[0_18px_42px_-16px_rgba(11,18,32,0.45)]">

        {/* Intro */}
        <div>
          <p className="text-kicker">{service.title}</p>
          <h2 className="font-display text-3xl tracking-tight text-headline lg:text-[2.5rem] lg:leading-[1.14]">
            {service.headline}
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.75] text-body">
            {service.intro}
          </p>
        </div>

        {/* Best for */}
        <section
          aria-labelledby="dedicated-best-for"
          className="mt-10 border-t border-[#e2e8f0] pt-10 lg:mt-12 lg:pt-12"
        >
          <h3 id="dedicated-best-for" className="sr-only">
            Best for
          </h3>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
            <div className="w-full shrink-0 overflow-hidden rounded-xl lg:w-[44%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.imageSrc ?? "/imagery/service-dedicated-team.jpg"}
                alt={service.imageAlt ?? `${service.title} image`}
                className="h-[220px] w-full object-cover object-center sm:h-[260px] lg:h-[280px]"
              />
            </div>
            <div className="flex-1">
              <p className="text-kicker">{bestForTitle}</p>
              <ul className="mt-5 space-y-3">
                {service.bestFor.map((item, i) => (
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
            </div>
          </div>
        </section>

        {/* What you get */}
        <section
          aria-labelledby="dedicated-what-you-get"
          className="mt-10 border-t border-[#e2e8f0] pt-10 lg:mt-12 lg:pt-12"
        >
          <p className="text-kicker">{whatYouGetTitle}</p>
          <h3 id="dedicated-what-you-get" className="sr-only">
            {whatYouGetTitle}
          </h3>
          <ul className="mt-5 space-y-3">
            {service.whatYouGet.map((item, i) => (
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
        </section>

        {showWorkingModel ? (
          <section
            aria-labelledby="dedicated-working-model"
            className="mt-10 rounded-[var(--radius-hero)] border border-border-subtle bg-white p-6 text-center shadow-[0_18px_42px_-16px_rgba(11,18,32,0.45)] lg:mt-12 lg:p-8"
          >
            <p className="text-kicker">{workingModelTitle}</p>
            <h3 id="dedicated-working-model" className="sr-only">
              {workingModelTitle}
            </h3>
            <p className="mt-3 text-[1.0625rem] leading-[1.75] text-body">
              {resolvedWorkingModelPrimaryLine}
            </p>
            {showToolsCapabilities && service.toolsCapabilities?.length ? (
              <div className="mt-5 border-t border-border-subtle pt-4 text-left">
                <h4 className="mb-3 text-kicker">Tools & capabilities</h4>
                <ul className="space-y-2.5">
                  {service.toolsCapabilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
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
              </div>
            ) : null}
            <div className="mt-6">
              <Button
                href={service.cta.primaryHref}
                variant="primary"
                className="px-7"
              >
                {service.cta.primaryLabel}
              </Button>
            </div>
          </section>
        ) : ctaVariant === "engagement" ? (
          <section
            aria-labelledby="legacy-engagement-cta-heading"
            className="mt-10 border-t border-[#e2e8f0] pt-10 text-center lg:mt-12 lg:pt-12"
          >
            <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white px-8 py-10 shadow-[0_8px_32px_-8px_rgba(11,18,32,0.18)] ring-1 ring-[#dde4ef] lg:px-12 lg:py-12">
              <span
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#f1f4f9]"
                aria-hidden
              />
              {ctaTitle ? (
                <h3
                  id="legacy-engagement-cta-heading"
                  className="relative z-10 font-display text-2xl font-bold tracking-tight text-headline lg:text-3xl"
                >
                  {ctaTitle}
                </h3>
              ) : (
                <h3 id="legacy-engagement-cta-heading" className="sr-only">
                  Get in touch
                </h3>
              )}
              {ctaDescription ? (
                <p className="relative z-10 mx-auto mt-4 max-w-xl text-[1.0625rem] italic leading-[1.75] text-body">
                  &ldquo;{ctaDescription}&rdquo;
                </p>
              ) : null}
              <div className="relative z-10 mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href={service.cta.primaryHref}
                  variant="primary"
                  className="px-8"
                >
                  {service.cta.primaryLabel}
                </Button>
                {service.cta.secondaryHref && service.cta.secondaryLabel ? (
                  <Button
                    href={service.cta.secondaryHref}
                    variant="ghost"
                    className="px-8"
                  >
                    {service.cta.secondaryLabel}
                  </Button>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

      </div>
    </HomeSection>
  );
}
