import {
  selectedEngagementsDocPage,
  selectedEngagementsLanding,
} from "@/data/selected-engagements";
import DeliveryProcessTemplate from "@/components/content/DeliveryProcessTemplate";
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
  return <DeliveryProcessTemplate page={selectedEngagementsDocPage} />;
}
