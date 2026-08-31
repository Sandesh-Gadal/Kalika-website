"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqPageJsonLd } from "@/lib/schema";

const faqs = [
  {
    q: "How do I know if my vehicle battery needs replacement?",
    a: "Slow engine cranking, dashboard warning lights, dimming headlights, or a battery older than 3 years are common signs. We offer free battery diagnostics to confirm before recommending a replacement.",
  },
  {
    q: "Do you provide emergency roadside battery support?",
    a: "Yes, our emergency services cover jump starts and on-site diagnostics for drivers stuck with a dead battery.",
  },
  {
    q: "Can you repair complete vehicle wiring systems?",
    a: "Yes — from full harness rewiring to isolated short-circuit repairs, we handle wiring work for cars, bikes, and commercial vehicles.",
  },
  {
    q: "How long does electrical diagnostics usually take?",
    a: "Most diagnostics are completed within 30–60 minutes, depending on the complexity of the issue.",
  },
  {
    q: "Do you service commercial and fleet vehicles?",
    a: "Yes, we work with transport companies and fleet operators on scheduled maintenance as well as one-off repairs.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqs)) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="px-6">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-foreground">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-slate-500">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
