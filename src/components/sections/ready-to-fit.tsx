"use client";

import { motion } from "framer-motion";
import { PackageCheck } from "lucide-react";

const parts = [
  "Self Starters",
  "Alternators",
  "Batteries",
  "Wiper Motors",
  "Lights",
];

export function ReadyToFit() {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <PackageCheck className="h-10 w-10 text-secondary" />
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready-to-Fit Tested Parts Available!
          </h2>
          <p className="max-w-xl text-white/70">
            We keep a wide range of tested and ready-to-install electrical
            parts in stock — saving you time and getting your vehicle back
            on the road faster.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {parts.map((part) => (
              <span
                key={part}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium"
              >
                {part}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
