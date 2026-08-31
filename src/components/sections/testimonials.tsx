"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, UserCircle2 } from "lucide-react";
import { useState } from "react";

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
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-slate-200 bg-background p-8 text-center sm:p-10"
            >
              <div className="mb-4 flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-6 text-lg leading-relaxed text-slate-700">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex flex-col items-center gap-1">
                <UserCircle2 className="h-10 w-10 text-slate-300" />
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-slate-500">
                  {t.vehicle} &middot; {t.service}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full border border-slate-200 p-2 hover:bg-slate-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === index ? "bg-primary" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full border border-slate-200 p-2 hover:bg-slate-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
