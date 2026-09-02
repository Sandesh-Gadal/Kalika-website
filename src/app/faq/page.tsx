import type { Metadata } from "next";
import { Faq } from "@/components/sections/faq";
import { FaqCta } from "@/components/sections/faq-cta";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about battery diagnostics, wiring repair, roadside support, and fleet servicing at Kalika Battery & Wiring.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `FAQ | ${siteConfig.shortName}`,
    url: `${siteConfig.url}/faq`,
  },
};

export default function FaqPage() {
  return (
    <>
      <Faq />
      <FaqCta />
    </>
  );
}
