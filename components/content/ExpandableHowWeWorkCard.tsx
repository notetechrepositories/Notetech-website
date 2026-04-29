"use client";

import type { DocCard, DocPageSection, DocSubsection } from "@/components/content/DocPageTemplate";
import Image from "next/image";

const LABEL_COLOURS: Record<string, string> = {
  "best for": "text-[#d7e1ed]",
  "good when": "text-[#d7e1ed]",
  "good when you need": "text-[#d7e1ed]",
  "across all models": "text-[#d7e1ed]",
};

function LabelledText({ text }: { text: string }) {
  const colonIdx = text.indexOf(": ");
  if (colonIdx === -1) {
    return <p className="text-[0.95rem] leading-relaxed text-[#e8eff7]">{text}</p>;
  }

  const label = text.slice(0, colonIdx);
  const rest = text.slice(colonIdx + 2);
  const colour = LABEL_COLOURS[label.toLowerCase()] ?? "text-[#d7e1ed]";

  return (
    <div>
      <p className={`mb-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] ${colour}`}>
        {label}
      </p>
      <p className="text-[0.95rem] leading-relaxed text-[#e8eff7]">{rest}</p>
    </div>
  );
}

function parseLabelledText(text: string) {
  const colonIdx = text.indexOf(": ");
  if (colonIdx === -1) {
    return { label: null, body: text };
  }

  return {
    label: text.slice(0, colonIdx),
    body: text.slice(colonIdx + 2),
  };
}

function InnerDetailCard({ text, compact = false }: { text: string; compact?: boolean }) {
  return (
    <div
      className={`flex items-start gap-3 rounded-lg bg-[#8ea4bd] px-3 py-2 leading-relaxed text-[#f2f6fb] ${
        compact ? "text-[0.84rem]" : "text-[0.9rem]"
      }`}
    >
      <span className="mt-px shrink-0 font-semibold text-[#e5edf7]">›</span>
      <span className="whitespace-pre-line">{text}</span>
    </div>
  );
}

function SubsectionBlock({ sub }: { sub: DocSubsection }) {
  const parsedNote = sub.note ? parseLabelledText(sub.note) : null;
  const isGoodWhenYouNeedNote =
    parsedNote?.label?.toLowerCase() === "good when you need";

  return (
    <div>
      <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#d9e4f0]">
        {sub.heading}
      </p>
      <div className="mb-3 h-px bg-[#a7b9cc]/35" />
      {sub.bullets?.length ? (
        <ul className="space-y-2">
          {sub.bullets.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-lg bg-[#8ea4bd] px-3 py-2 text-[0.9rem] leading-relaxed text-[#f2f6fb]"
            >
              <span className="mt-px shrink-0 font-semibold text-[#e5edf7]">›</span>
              <span className="whitespace-pre-line">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {sub.note ? (
        isGoodWhenYouNeedNote ? (
          <div className="mt-3">
            <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#d9e4f0]">
              {parsedNote.label}
            </p>
            <div className="mb-3 h-px bg-[#a7b9cc]/35" />
            <InnerDetailCard text={parsedNote.body} />
          </div>
        ) : (
          <div className="mt-3 rounded-xl border-l-2 border-[#dbe7f4]/55 bg-[#8ea4bd] px-4 py-3">
            <LabelledText text={sub.note} />
          </div>
        )
      ) : null}
    </div>
  );
}

function CardList({ cards }: { cards: DocCard[] }) {
  return (
    <ul className="space-y-3">
      {cards.map((card, i) => (
        <li key={i} className="text-[0.95rem] leading-relaxed text-[#eef3fa]">
          <span className="font-semibold text-white">{card.title}: </span>
          {card.body}
        </li>
      ))}
    </ul>
  );
}

type ExpandableHowWeWorkCardProps = {
  section: DocPageSection;
  imgSrc: string;
  isOpen: boolean;
  onToggle: () => void;
  onHoverOpen: () => void;
  onHoverClose: () => void;
};

export function HowWeWorkCardDetails({ section }: { section: DocPageSection }) {
  const parsedDescription = section.description
    ? parseLabelledText(section.description)
    : null;
  const descriptionLabel = parsedDescription?.label?.toLowerCase();
  const isBestForDescription = descriptionLabel === "best for";
  const isAcrossAllModelsDescription = descriptionLabel === "across all models";
  const useHeadingStyleDescription =
    isBestForDescription || isAcrossAllModelsDescription;

  const primarySubsection = section.subsections?.[0];
  const parsedPrimaryNote = primarySubsection?.note
    ? parseLabelledText(primarySubsection.note)
    : null;
  const isGoodWhenYouNeedPrimaryNote =
    parsedPrimaryNote?.label?.toLowerCase() === "good when you need";
  const useThreeColumnEngagementLayout =
    isBestForDescription &&
    Boolean(primarySubsection?.bullets?.length) &&
    Boolean(isGoodWhenYouNeedPrimaryNote);
  const useTwoColumnStackedSummaryLayout =
    useThreeColumnEngagementLayout &&
    (section.title === "Dedicated Development Team" ||
      section.title === "Time & Materials");
  const isTimeAndMaterials = section.title === "Time & Materials";

  return (
    <div className="rounded-2xl border border-[#355b86] bg-[#123560] p-6 lg:p-8">
      {useTwoColumnStackedSummaryLayout ? (
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-4">
            <div>
              <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#d9e4f0]">
                {parsedDescription?.label}
              </p>
              <div className="mb-3 h-px bg-[#a7b9cc]/35" />
              <InnerDetailCard text={parsedDescription?.body ?? ""} compact={isTimeAndMaterials} />
            </div>
            <div>
              <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#d9e4f0]">
                {parsedPrimaryNote?.label}
              </p>
              <div className="mb-3 h-px bg-[#a7b9cc]/35" />
              <InnerDetailCard text={parsedPrimaryNote?.body ?? ""} compact={isTimeAndMaterials} />
            </div>
          </div>
          <div>
            <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#d9e4f0]">
              {primarySubsection?.heading}
            </p>
            <div className="mb-3 h-px bg-[#a7b9cc]/35" />
            <ul className="space-y-2">
              {primarySubsection?.bullets?.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-lg bg-[#8ea4bd] px-3 py-2 text-[0.9rem] leading-relaxed text-[#f2f6fb]"
                >
                  <span className="mt-px shrink-0 font-semibold text-[#e5edf7]">›</span>
                  <span className="whitespace-pre-line">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : useThreeColumnEngagementLayout ? (
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-7">
          <div>
            <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#d9e4f0]">
              {parsedDescription?.label}
            </p>
            <div className="mb-3 h-px bg-[#a7b9cc]/35" />
            <InnerDetailCard text={parsedDescription?.body ?? ""} />
          </div>
          <div>
            <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#d9e4f0]">
              {primarySubsection?.heading}
            </p>
            <div className="mb-3 h-px bg-[#a7b9cc]/35" />
            <ul className="space-y-2">
              {primarySubsection?.bullets?.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-lg bg-[#8ea4bd] px-3 py-2 text-[0.9rem] leading-relaxed text-[#f2f6fb]"
                >
                  <span className="mt-px shrink-0 font-semibold text-[#e5edf7]">›</span>
                  <span className="whitespace-pre-line">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#d9e4f0]">
              {parsedPrimaryNote?.label}
            </p>
            <div className="mb-3 h-px bg-[#a7b9cc]/35" />
            <InnerDetailCard text={parsedPrimaryNote?.body ?? ""} />
          </div>
        </div>
      ) : (
        <>
          {section.description ? (
            useHeadingStyleDescription ? (
              <div className="mb-6">
                <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#d9e4f0]">
                  {parsedDescription?.label}
                </p>
                <div className="mb-3 h-px bg-[#a7b9cc]/35" />
                {parsedDescription?.body ? (
                  <InnerDetailCard text={parsedDescription.body} />
                ) : null}
              </div>
            ) : (
              <div className="mb-6 rounded-xl border-l-2 border-[#dbe7f4]/55 bg-[#8ea4bd] px-4 py-3">
                <LabelledText text={section.description} />
              </div>
            )
          ) : null}
          {section.subsections?.length ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {section.subsections.map((sub, si) => (
                <SubsectionBlock key={si} sub={sub} />
              ))}
            </div>
          ) : section.bullets?.length ? (
            <>
              {section.title === "Team flexibility & replacement policy" ? (
                <>
                  <div className="mb-4">
                    <p className="text-[0.95rem] leading-relaxed text-[#e8eff7]">
                      {section.bullets[0]}
                    </p>
                  </div>
                  {section.bullets.slice(1).length ? (
                    <ul className="space-y-2">
                      {section.bullets.slice(1).map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 rounded-lg bg-[#8ea4bd] px-3 py-2 text-[0.9rem] leading-relaxed text-[#f2f6fb]"
                        >
                          <span className="mt-px shrink-0 font-semibold text-[#e5edf7]">›</span>
                          <span className="whitespace-pre-line">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </>
              ) : (
                <ul className="space-y-2">
                  {section.bullets.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 rounded-lg bg-[#8ea4bd] px-3 py-2 text-[0.9rem] leading-relaxed text-[#f2f6fb]"
                    >
                      <span className="mt-px shrink-0 font-semibold text-[#e5edf7]">›</span>
                      <span className="whitespace-pre-line">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : null}
        </>
      )}
      {section.cards?.length ? <CardList cards={section.cards} /> : null}
    </div>
  );
}

export default function ExpandableHowWeWorkCard({
  section,
  imgSrc,
  isOpen,
  onToggle,
  onHoverOpen,
  onHoverClose,
}: ExpandableHowWeWorkCardProps) {
  return (
    <section
      className="overflow-hidden rounded-2xl border border-[#355b86] bg-[#123560] shadow-[0_10px_24px_rgba(16,33,51,0.28)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(16,33,51,0.34)]"
      onMouseEnter={onHoverOpen}
      onMouseLeave={onHoverClose}
    >
      <div className="flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-[#d8e2ee]">
          <Image
            src={imgSrc}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b1f36]/55 to-transparent" />
        </div>
        <div className="border-b border-[#355b86] bg-[#123560] px-5 py-3.5">
          <h2 className="text-lg font-semibold tracking-tight text-white lg:text-[1.2rem]">
            {section.title}
          </h2>
        </div>
        <div className="flex items-center justify-center bg-[#123560] px-5 py-1.5">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse details" : "Expand details"}
            className="group grid h-8 w-8 place-items-center rounded-full border border-[#6c95c2] bg-[#1a4472] text-[#d9e9fa] shadow-[0_1px_4px_rgba(10,28,55,0.35)] transition hover:border-[#90b4db] hover:bg-[#235384] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9ab4d4]/45"
          >
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              className={`h-3.5 w-3.5 transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`}
            >
              <path
                d="M5.5 8l4.5 4.5L14.5 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
