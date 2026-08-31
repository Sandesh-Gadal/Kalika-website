"use client";

import { motion } from "framer-motion";
import { Award, Clock, ThumbsUp, Wrench } from "lucide-react";

const stats = [
  { icon: Wrench, value: "5,000+", label: "Vehicles Serviced" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: ThumbsUp, value: "98%", label: "Customer Satisfaction" },
  { icon: Clock, value: "24/7", label: "Emergency Support" },
];

export function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-slate-500">
          Trusted By Drivers, Businesses &amp; Partner Organizations
        </p>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <stat.icon className="h-6 w-6 text-secondary" />
              <div className="text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
