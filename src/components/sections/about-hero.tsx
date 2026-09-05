"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="bg-primary py-24 pt-32 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl px-6"
      >
        <h1 className="text-4xl font-extrabold sm:text-5xl">About Us</h1>
        <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-widest text-secondary sm:text-sm">
          Multi-Axle Commercial Vehicle Wiring &amp; Starter-Dynamo
          Specialists
        </p>
      </motion.div>
    </section>
  );
}
