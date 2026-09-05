"use client";

import { motion } from "framer-motion";
import { PackageCheck, Phone } from "lucide-react";
import { contact } from "@/lib/contact";
import { pexelsUrl } from "@/lib/images";

const parts = [
  "Self Starters",
  "Alternators",
  "Batteries",
  "Wiper Motors",
  "Lights",
];

// Fades the photo's bottom and right edges into the dark background so it
// reads like an isolated cutout rather than a hard-edged rectangle — no
// licensed alpha-channel cutout needed for the same visual effect.
const cutoutMask = {
  maskImage:
    "linear-gradient(to bottom, black 55%, transparent 96%), linear-gradient(to right, black 75%, transparent 98%)",
  maskComposite: "intersect" as const,
  WebkitMaskImage:
    "linear-gradient(to bottom, black 55%, transparent 96%), linear-gradient(to right, black 75%, transparent 98%)",
  WebkitMaskComposite: "source-in" as unknown as string,
};

export function ReadyToFit() {
  return (
    <section className="relative overflow-hidden bg-[#050b16] py-20 text-white sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-primary/40 blur-[110px]"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto h-95 w-full max-w-sm sm:h-115"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pexelsUrl("mechanicPortrait", 700)}
            alt="Confident Kalika Battery & Wiring auto electrician"
            className="h-full w-full object-cover object-top"
            style={cutoutMask}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
            <PackageCheck className="h-3.5 w-3.5" />
            In-Stock Inventory
          </span>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Ready-to-Fit Tested Parts Available!
          </h2>
          <p className="mt-4 max-w-md text-white/70">
            We keep a wide range of tested and ready-to-install electrical
            parts in stock — saving you time and getting your vehicle back
            on the road faster.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {parts.map((part) => (
              <span
                key={part}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium"
              >
                {part}
              </span>
            ))}
          </div>

          <a
            href={contact.phoneHref}
            className="relative mt-8 inline-flex items-center gap-2 bg-emerald-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-emerald-600"
            style={{ clipPath: "polygon(4% 0, 100% 0, 96% 100%, 0% 100%)" }}
          >
            <Phone className="h-4 w-4" />
            Get In Touch Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
