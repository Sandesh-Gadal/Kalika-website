"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Quote } from "lucide-react";

// TODO: replace with the Managing Director's real name and photo.
const md = {
  name: "Managing Director & Founder",
  org: "Kalika Battery & Wiring Repairing Center • Bharatpur, Chitwan",
  initials: "KB",
  quote:
    "No bus, truck, or tractor sits idle over an electrical problem we could have diagnosed earlier.",
  message:
    "We started this workshop with one goal — to make sure commercial fleets across Nepal never lose a day of operation to preventable electrical failure. Every battery we calibrate and every wiring harness we rebuild goes out load-tested under live simulated conditions, because an entire logistics schedule depends on it.",
};

export function MdMessage() {
  return (
    <section className="bg-background pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Workshop Leadership
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-medium text-slate-500">
                Founder&apos;s Pledge
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Zero Unscheduled Downtime
            </span>
          </div>

          <div className="relative border-l-2 border-secondary pl-5">
            <Quote className="absolute -left-1 -top-2 h-6 w-6 -translate-x-1/2 text-secondary/30" />
            <p className="text-xl font-bold leading-snug text-primary sm:text-2xl">
              {md.quote}
            </p>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-500">
            {md.message}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-slate-100 pt-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {md.initials}
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  {md.name}
                </div>
                <div className="text-xs text-slate-500">{md.org}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-secondary">
              <span className="text-sm italic text-slate-400">
                Kalika Automotive
              </span>
              <BadgeCheck className="h-5 w-5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
