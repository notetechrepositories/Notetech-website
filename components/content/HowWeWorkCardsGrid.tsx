"use client";

import ExpandableHowWeWorkCard, {
  HowWeWorkCardDetails,
} from "@/components/content/ExpandableHowWeWorkCard";
import type { DocPageSection } from "@/components/content/DocPageTemplate";
import { useState } from "react";

const COLS = 3;

type HowWeWorkCardsGridProps = {
  sections: DocPageSection[];
  images: readonly string[];
};

export default function HowWeWorkCardsGrid({
  sections,
  images,
}: HowWeWorkCardsGridProps) {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  // Split flat sections array into rows of COLS
  const rows: DocPageSection[][] = [];
  for (let i = 0; i < sections.length; i += COLS) {
    rows.push(sections.slice(i, i + COLS));
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      {rows.map((rowSections, rowIndex) => {
        const rowStartIndex = rowIndex * COLS;
        // Find which card in this row (if any) is open
        const openInRow =
          openCardIndex !== null &&
          openCardIndex >= rowStartIndex &&
          openCardIndex < rowStartIndex + COLS
            ? openCardIndex
            : null;
        const activeSection =
          openInRow !== null ? sections[openInRow] : null;

        return (
          <div key={rowIndex} className="space-y-6 lg:space-y-8">
            {/* Tile row */}
            <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {rowSections.map((section, colIndex) => {
                const index = rowStartIndex + colIndex;
                const imgSrc = images[index % images.length];
                const isOpen = openCardIndex === index;

                return (
                  <ExpandableHowWeWorkCard
                    key={section.title}
                    section={section}
                    imgSrc={imgSrc}
                    isOpen={isOpen}
                    onToggle={() =>
                      setOpenCardIndex((prev) =>
                        prev === index ? null : index,
                      )
                    }
                    onHoverOpen={() => setOpenCardIndex(index)}
                    onHoverClose={() =>
                      setOpenCardIndex((prev) =>
                        prev === index ? null : prev,
                      )
                    }
                  />
                );
              })}
            </div>

            {/* Content panel — anchored below this row only */}
            {activeSection ? (
              <div className="rounded-2xl border border-[#355b86] bg-[#123560] p-6 shadow-[0_10px_24px_rgba(16,33,51,0.28)] lg:p-8">
                <HowWeWorkCardDetails section={activeSection} />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
