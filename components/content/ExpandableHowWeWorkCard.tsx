"use client";

import type { DocCard, DocPageSection, DocSubsection } from "@/components/content/DocPageTemplate";
import Image from "next/image";
import { useState } from "react";

const LABEL_COLOURS: Record<string, string> = {
  "best for": "text-[#c8ddf3]",
  "good when": "text-[#c8ddf3]",
  "good when you need": "text-[#c8ddf3]",
  "across all models": "text-[#c8ddf3]",
};

function LabelledText({ text }: { text: string }) {
  const colonIdx = text.indexOf(": ");
  if (colonIdx === -1) {
    return <p className="text-[0.95rem] leading-relaxed text-[#d9e7f6]">{text}</p>;
  }

  const label = text.slice(0, colonIdx);
  const rest = text.slice(colonIdx + 2);
  const colour = LABEL_COLOURS[label.toLowerCase()] ?? "text-[#c8ddf3]";

  return (
    <div>
      <p className={`mb-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] ${colour}`}>
        {label}
      </p>
      <p className="text-[0.95rem] leading-relaxed text-[#d9e7f6]">{rest}</p>
    </div>
  );
}

function SubsectionBlock({ sub }: { sub: DocSubsection }) {
  return (
    <div>
      <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#d6e8fa]">
        {sub.heading}
      </p>
      <div className="mb-3 h-px bg-[#6b90ba]/35" />
      {sub.bullets?.length ? (
        <ul className="space-y-2">
          {sub.bullets.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-lg bg-[#1a4472] px-3 py-2 text-[0.9rem] leading-relaxed text-[#d9e7f6]"
            >
              <span className="mt-px shrink-0 font-semibold text-[#9cc3ef]">›</span>
              <span className="whitespace-pre-line">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {sub.note && (
        <div className="mt-3 rounded-xl border-l-2 border-[#6a90ba] bg-[#1a4472] px-4 py-3">
          <LabelledText text={sub.note} />
        </div>
      )}
    </div>
  );
}

function CardList({ cards }: { cards: DocCard[] }) {
  return (
    <ul className="space-y-3">
      {cards.map((card, i) => (
        <li key={i} className="text-[0.95rem] leading-relaxed text-[#d9e7f6]">
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
};

export default function ExpandableHowWeWorkCard({
  section,
  imgSrc,
}: ExpandableHowWeWorkCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="overflow-hidden rounded-2xl border border-[#355b86] bg-[#123560] shadow-[0_10px_24px_rgba(16,33,51,0.28)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(16,33,51,0.34)]">
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
          <p className="mb-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#8eb5df]">
            Explore section
          </p>
          <h2 className="text-lg font-semibold tracking-tight text-white lg:text-[1.2rem]">
            {section.title}
          </h2>
        </div>
        <div className="flex items-center justify-center bg-[#123560] px-5 py-2.5">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse details" : "Expand details"}
            className="group grid h-9 w-9 place-items-center rounded-full border border-[#6c95c2] bg-[#1a4472] text-[#d9e9fa] shadow-[0_1px_4px_rgba(10,28,55,0.35)] transition hover:border-[#90b4db] hover:bg-[#235384] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9ab4d4]/45"
          >
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              className={`h-4 w-4 transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`}
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

      {isOpen ? (
        <div className="border-t border-[#355b86] bg-[#123560] p-6 lg:p-8">
          <h3 className="font-display text-2xl tracking-tight text-white lg:text-3xl">
            {section.title}
          </h3>
          <div className="mb-6 mt-2 h-0.5 w-8 bg-[#46c3e6]" />
          {section.description && (
            <div className="mb-6 rounded-xl border-l-2 border-[#6a90ba] bg-[#1a4472] px-4 py-3">
              <LabelledText text={section.description} />
            </div>
          )}
          {section.subsections?.length ? (
            <div className="space-y-6">
              {section.subsections.map((sub, si) => (
                <SubsectionBlock key={si} sub={sub} />
              ))}
            </div>
          ) : section.bullets?.length ? (
            <>
              {section.title === "Team flexibility & replacement policy" ? (
                <>
                  <div className="mb-3 rounded-xl border-l-2 border-[#6a90ba] bg-[#1a4472] px-4 py-3">
                    <p className="text-[0.95rem] leading-relaxed text-[#d9e7f6]">
                      {section.bullets[0]}
                    </p>
                  </div>
                  {section.bullets.slice(1).length ? (
                    <ul className="space-y-2">
                      {section.bullets.slice(1).map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 rounded-lg bg-[#1a4472] px-3 py-2 text-[0.9rem] leading-relaxed text-[#d9e7f6]"
                        >
                          <span className="mt-px shrink-0 font-semibold text-[#9cc3ef]">›</span>
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
                      className="flex items-start gap-3 rounded-lg bg-[#1a4472] px-3 py-2 text-[0.9rem] leading-relaxed text-[#d9e7f6]"
                    >
                      <span className="mt-px shrink-0 font-semibold text-[#9cc3ef]">›</span>
                      <span className="whitespace-pre-line">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : null}
          {section.cards?.length ? <CardList cards={section.cards} /> : null}
        </div>
      ) : null}
    </section>
  );
}
