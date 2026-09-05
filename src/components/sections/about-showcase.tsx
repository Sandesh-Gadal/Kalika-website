"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { pexelsUrl } from "@/lib/images";

const readings = [
  { label: "Starter", value: "12.8 kW" },
  { label: "Alternator", value: "140A / 28V" },
  { label: "ECU Bus", value: "CAN J1939" },
];

export function AboutShowcase() {
  return (
    <section className="bg-background pb-24 sm:pb-40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl sm:aspect-21/9">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pexelsUrl("underCarLift", 1200)}
              alt="Mechanic inspecting a heavy vehicle at the Bharatpur workshop bay"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="mb-1 flex items-center gap-1.5 text-xs font-medium text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live Bay Inspection &amp; Diagnostic Bench
              </span>
              <div className="text-lg font-bold sm:text-xl">
                Bharatpur Commercial Hub Bay No. 2
              </div>
              <p className="mt-0.5 max-w-md text-xs text-white/70">
                Dedicated high-amperage testing rigs for 24V Tata, Eicher, and
                multi-axle tipper electrical assemblies.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative mx-6 -mt-10 rounded-2xl border border-slate-200 bg-primary p-5 text-white shadow-xl sm:absolute sm:-bottom-8 sm:right-8 sm:mx-0 sm:mt-0 sm:w-80"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-white/60">
                Harness Spec Test
              </span>
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-400">
                Pass 24.2V
              </span>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <div>
                <div className="text-sm font-bold">
                  Live Diagnostic Verification
                </div>
                <div className="text-xs text-white/60">
                  High-vibration load testing under simulated road conditions.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {readings.map((r) => (
                <div
                  key={r.label}
                  className="rounded bg-white/5 px-2 py-2 text-center"
                >
                  <div className="font-mono text-[10px] uppercase tracking-wide text-white/50">
                    {r.label}
                  </div>
                  <div className="mt-0.5 font-mono text-xs font-bold text-secondary">
                    {r.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[10px] uppercase tracking-wide">
              <span className="text-white/60">Direct On-Site Workmanship</span>
              <span className="text-secondary">No 3rd-Party Outsourcing</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
