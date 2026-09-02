import type { Metadata } from "next";
import { AboutCta } from "@/components/sections/about-cta";
import { AboutIntro } from "@/components/sections/about-intro";
import { MdMessage } from "@/components/sections/md-message";
import { Partners } from "@/components/sections/partners";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Kalika Battery & Wiring Repairing Center — heavy vehicle electrical specialists in Nepal, and a message from our Managing Director.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us | ${siteConfig.shortName}`,
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <MdMessage />
      <Partners />
      <AboutCta />
    </>
  );
}
