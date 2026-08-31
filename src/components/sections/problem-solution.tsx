"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

const pairs = [
  { problem: "Battery Not Charging", solution: "Battery Diagnostics" },
  { problem: "Vehicle Won't Start", solution: "Battery Replacement" },
  { problem: "Wiring Short Circuit", solution: "Complete Wiring Repair" },
  { problem: "Electrical Failure", solution: "Fuse & Relay Replacement" },
  { problem: "Headlight Issues", solution: "Electrical Troubleshooting" },
  { problem: "Starter Problems", solution: "Preventive Maintenance" },
];

export function ProblemSolution() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            We Understand the Problem — And We Fix It
          </h2>
          <p className="mt-3 text-slate-500">
            Common vehicle electrical issues, matched to the exact service
            that resolves them.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {pairs.map((pair, i) => (
            <motion.div
              key={pair.problem}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_auto_1fr]"
            >
              <div className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-5 py-4">
                <XCircle className="h-5 w-5 shrink-0 text-red-500" />
                <span className="font-medium text-slate-700">
                  {pair.problem}
                </span>
              </div>
              <ArrowRight className="mx-auto hidden h-5 w-5 rotate-90 text-slate-300 sm:block sm:rotate-0" />
              <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                <span className="font-medium text-slate-700">
                  {pair.solution}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
