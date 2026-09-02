"use client";

import { motion } from "framer-motion";
import { Phone, Zap } from "lucide-react";
import { LocationMap } from "@/components/location-map";
import { Button } from "@/components/ui/button";
import { contact, whatsappHref } from "@/lib/contact";

const urgencyPoints = [
  "Same Day Service Available",
  "Emergency Repairs",
  "Limited Daily Service Slots",
  "Fast Turnaround",
];

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
          className="overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/30"
        >
          <LocationMap className="h-80 lg:h-96" />
        </motion.div>
      </div>
    </section>
  );
}
