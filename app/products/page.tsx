import DocPageTemplate from "@/components/content/DocPageTemplate";
import { productsPage } from "@/data/companyPages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: productsPage.metaTitle ?? productsPage.title,
  description: productsPage.metaDescription,
  openGraph: {
    title: `${productsPage.title} · Notetech`,
    description: productsPage.metaDescription,
    type: "article",
  },
};

export default function ProductsPage() {
  return <DocPageTemplate page={productsPage} />;
}
