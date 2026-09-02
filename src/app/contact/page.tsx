import type { Metadata } from "next";
import { ContactInfo } from "@/components/sections/contact-info";
import { LocationMap } from "@/components/location-map";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, WhatsApp, or visit Kalika Battery & Wiring Repairing Center — battery, wiring, and heavy vehicle electrical specialists in Nepal.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${siteConfig.shortName}`,
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactInfo />
      <LocationMap className="h-112" />
    </>
  );
}
