import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutIntro } from "@/components/sections/about-intro";
import { AboutShowcase } from "@/components/sections/about-showcase";
import { MdMessage } from "@/components/sections/md-message";
import { Partners } from "@/components/sections/partners";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Kalika Battery & Wiring Repairing Center — heavy vehicle electrical specialists in Bharatpur, Chitwan, and a message from our Managing Director.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us | ${siteConfig.shortName}`,
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutShowcase />
      <MdMessage />
      <Partners />
    </>
  );
}
