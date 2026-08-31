"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, mapsUrl, whatsappHref } from "@/lib/contact";

const urgencyPoints = [
  "Same Day Service Available",
  "Emergency Repairs",
  "Limited Daily Service Slots",
  "Fast Turnaround",
];

// OpenStreetMap's embed needs no API key (unlike Google's Maps Embed API).
// Swap contact.lat/lng for the real workshop coordinates once confirmed.
const OSM_SPAN = 0.02;
const mapEmbedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${
  contact.lng - OSM_SPAN
}%2C${contact.lat - OSM_SPAN}%2C${contact.lng + OSM_SPAN}%2C${
  contact.lat + OSM_SPAN
}&layer=mapnik&marker=${contact.lat}%2C${contact.lng}`;

export function FinalCta() {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Need Battery or Wiring Repair Today?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80 lg:mx-0">
            Get professional diagnostics and expert repairs from trusted
            automotive electrical specialists.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button
              href={contact.phoneHref}
              variant="primary"
              className="bg-white text-primary hover:bg-white/90 shadow-white/20"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button
              href={whatsappHref("Hi, I need battery/wiring repair.")}
              variant="secondary"
            >
              <Zap className="h-4 w-4" />
              WhatsApp Consultation
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70 lg:justify-start">
            {urgencyPoints.map((point) => (
              <span key={point} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                {point}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/30"
        >
          <iframe
            title="Workshop location map"
            src={mapEmbedSrc}
            className="h-80 w-full grayscale-15 lg:h-96"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 text-primary shadow-lg backdrop-blur-sm transition-colors hover:bg-white"
          >
            <MapPin className="h-5 w-5 shrink-0 text-secondary" />
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">
                {contact.address}
              </div>
              <div className="text-xs text-primary/70">Get directions</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
