"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  Battery,
  Cable,
  Lightbulb,
  Search,
  Zap,
} from "lucide-react";

const categories = [
  {
    icon: Battery,
    title: "Battery Services",
    items: ["Battery Testing", "Battery Replacement", "Battery Charging"],
  },
  {
    icon: Cable,
    title: "Wiring Services",
    items: [
      "Full Vehicle Wiring",
      "Wiring Repair",
      "Harness Installation",
    ],
  },
  {
    icon: Search,
    title: "Electrical Diagnostics",
    items: ["Scanner Diagnosis", "Fault Detection", "Electrical Inspection"],
  },
  {
    icon: Lightbulb,
    title: "Lighting Systems",
    items: ["Headlight Repair", "LED Installation", "Indicator Repair"],
  },
  {
    icon: Zap,
    title: "Starting & Charging Systems",
    items: [
      "Alternator Repair",
      "Starter Repair",
      "Charging System Testing",
    ],
  },
  {
    icon: AlertCircle,
    title: "Emergency Services",
    items: ["Roadside Support", "Jump Start", "Emergency Diagnostics"],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-slate-500">
            Everything your vehicle needs, under one roof.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <cat.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {cat.title}
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-500">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
