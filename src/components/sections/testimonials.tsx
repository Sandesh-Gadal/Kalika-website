"use client";

import { motion } from "framer-motion";
import { Quote, Star, UserCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Thapa",
    vehicle: "Toyota Hilux",
    service: "Complete Wiring Repair",
    review:
      "My vehicle had recurring wiring issues that other workshops couldn't solve. Kalika Battery & Wiring fixed everything professionally.",
    rating: 5,
  },
  {
    name: "Sita Gurung",
    vehicle: "Hyundai Creta",
    service: "Battery Replacement",
    review:
      "Fast, honest diagnosis and a same-day battery replacement. Haven't had a starting issue since.",
    rating: 5,
  },
  {
    name: "Prakash Adhikari",
    vehicle: "Fleet of 8 Delivery Vans",
    service: "Fleet Maintenance",
    review:
      "We service our entire delivery fleet here. Reliable scheduling and they know commercial vehicles inside out.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
            Trusted By Drivers &amp; Fleets
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-background p-6"
            >
              <Quote className="mb-3 h-7 w-7 text-secondary/25" />
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-700">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                <UserCircle2 className="h-9 w-9 shrink-0 text-slate-300" />
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="truncate text-xs text-slate-500">
                    {t.vehicle} &middot; {t.service}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
