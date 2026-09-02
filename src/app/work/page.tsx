import type { Metadata } from "next";
import { Gallery } from "@/components/sections/gallery";
import { WorkCta } from "@/components/sections/work-cta";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Real repairs from Kalika Battery & Wiring — battery installs, dynamo rewinding, and electrical overhauls on trucks, buses, and tractors across Nepal.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: `Our Work | ${siteConfig.shortName}`,
    url: `${siteConfig.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <>
      <div className="bg-primary pt-18" />
      <Gallery />
      <WorkCta />
    </>
  );
}
