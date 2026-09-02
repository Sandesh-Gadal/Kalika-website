"use client";

import { motion } from "framer-motion";
import { Quote, UserCircle2 } from "lucide-react";

// TODO: replace with the Managing Director's real name, title, and words.
const md = {
  name: "Managing Director",
  title: "Kalika Battery & Wiring Repairing Center",
  message:
    "We started this workshop with one goal — to make sure no bus, truck, or tractor sits idle over an electrical problem we could have caught earlier. Every battery we sell and every wire we repair goes out tested, because a fleet's schedule depends on it. That's the standard we hold ourselves to, on every vehicle that comes through our doors.",
};

export function MdMessage() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-slate-200 bg-background p-8 sm:p-12"
        >
          <Quote className="h-10 w-10 text-secondary/30" />
          <p className="mt-4 text-xl leading-relaxed text-slate-700 sm:text-2xl">
            {md.message}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <UserCircle2 className="h-14 w-14 text-slate-300" />
            <div>
              <div className="font-semibold text-foreground">{md.name}</div>
              <div className="text-sm text-slate-500">{md.title}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
