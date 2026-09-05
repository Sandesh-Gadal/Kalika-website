import type { Metadata } from "next";
import { ContactInfo } from "@/components/sections/contact-info";
import { WorkshopSchedule } from "@/components/sections/workshop-schedule";
import { WorkshopYard } from "@/components/sections/workshop-yard";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, WhatsApp, or visit Kalika Battery & Wiring Repairing Center in Bharatpur, Chitwan — heavy vehicle electrical specialists in Nepal.",
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
      <section className="bg-white pb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 px-6 lg:grid-cols-2">
          <WorkshopSchedule />
          <WorkshopYard />
        </div>
      </section>
    </>
  );
}
