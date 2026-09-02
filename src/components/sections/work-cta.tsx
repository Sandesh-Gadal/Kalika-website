"use client";

import { motion } from "framer-motion";
import { Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/icons";
import { contact, whatsappHref } from "@/lib/contact";

export function WorkCta() {
  return (
    <section className="relative overflow-hidden bg-[#0b3660] py-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, currentColor 0 2px, transparent 2px 40px)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 text-center"
      >
        <LogoMark className="h-10 w-10 text-secondary" />
        <h2 className="text-3xl font-bold sm:text-4xl">Like What You See?</h2>
        <p className="max-w-xl text-white/70">
          This is the same standard of work every vehicle gets — book yours
          in, or bring it by the workshop.
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Button href={contact.phoneHref} variant="primary" className="bg-white text-primary hover:bg-white/90">
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
          <Button href={whatsappHref("Hi, I saw your work — I'd like a quote.")} variant="secondary">
            <Zap className="h-4 w-4" />
            WhatsApp Us
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
