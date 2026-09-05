"use client";

import { motion } from "framer-motion";
import { Gauge, ShieldCheck, Wrench } from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    value: "5,000+",
    label: "Fleets Serviced",
    description:
      "Proven track record servicing heavy tippers, logistics haulers, and long-route transit coaches.",
  },
  {
    icon: Gauge,
    value: "20+",
    label: "Years Experience",
    description:
      "Master automotive electricians specializing in full harness refits, alternators, and starter dynamos.",
  },
  {
    icon: Wrench,
    value: "98%",
    label: "Fleet Reliability",
    description:
      "Direct on-site workmanship, no third-party middlemen — every repair is load-tested before delivery.",
  },
];

export function AboutIntro() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
              • About Us •
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
              Heavy Vehicle Electrical Specialists,{" "}
              <span className="text-secondary">Since Day One!</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-500 md:mt-2"
          >
            Founded in Bharatpur to end roadside electrical breakdowns for
            commercial fleets across Nepal, Kalika Battery &amp; Wiring
            restores starter dynamos, wiring harnesses, and power systems on
            everything from multi-axle tippers to interstate coaches — back
            to factory tolerance.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="text-lg font-bold text-foreground">
                {stat.value} {stat.label}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
