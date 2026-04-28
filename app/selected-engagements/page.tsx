import {
  selectedEngagementsDocPage,
  selectedEngagementsLanding,
} from "@/data/selected-engagements";
import DocPageTemplate from "@/components/content/DocPageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: selectedEngagementsLanding.metaTitle,
  description: selectedEngagementsLanding.metaDescription,
  openGraph: {
    title: `${selectedEngagementsLanding.title} · Notetech`,
    description: selectedEngagementsLanding.metaDescription,
    type: "website",
  },
};

export default function SelectedEngagementsPage() {
  return <DocPageTemplate page={selectedEngagementsDocPage} />;
}
