"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { useRef } from "react";

const pairs = [
  { problem: "Battery Not Charging", solution: "Battery Diagnostics" },
  { problem: "Vehicle Won't Start", solution: "Battery Replacement" },
  { problem: "Wiring Short Circuit", solution: "Complete Wiring Repair" },
  { problem: "Electrical Failure", solution: "Fuse & Relay Replacement" },
  { problem: "Headlight Issues", solution: "Electrical Troubleshooting" },
  { problem: "Starter Problems", solution: "Preventive Maintenance" },
];

function Row({ pair }: { pair: (typeof pairs)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 35%"],
  });

  const problemX = useTransform(scrollYProgress, [0, 1], [-28, 0]);
  const solutionX = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const rowOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const strikeWidth = useTransform(scrollYProgress, [0.35, 0.75], ["0%", "100%"]);
  const checkScale = useTransform(scrollYProgress, [0.55, 0.9], [0, 1]);
  const arrowProgress = useTransform(scrollYProgress, [0.3, 0.85], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity: rowOpacity }}
      className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_auto_1fr]"
    >
      <motion.div
        style={{ x: problemX }}
        className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-5 py-4"
      >
        <XCircle className="h-5 w-5 shrink-0 text-red-500" />
        <span className="relative font-medium text-slate-700">
          {pair.problem}
          <motion.span
            style={{ width: strikeWidth }}
            className="absolute left-0 top-1/2 h-px bg-red-400"
          />
        </span>
      </motion.div>

      <div className="relative mx-auto hidden h-5 w-5 sm:block">
        <ArrowRight className="absolute inset-0 h-5 w-5 text-slate-300" />
        <motion.div
          style={{ opacity: arrowProgress }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <ArrowRight className="h-5 w-5 text-secondary" />
        </motion.div>
      </div>
      <ArrowRight className="mx-auto h-5 w-5 rotate-90 text-slate-300 sm:hidden" />

      <motion.div
        style={{ x: solutionX }}
        className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4"
      >
        <motion.span style={{ scale: checkScale }}>
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
        </motion.span>
        <span className="font-medium text-slate-700">{pair.solution}</span>
      </motion.div>
    </motion.div>
  );
}

export function ProblemSolution() {
  return (
    <section className="overflow-hidden bg-background py-24">
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
          {pairs.map((pair) => (
            <Row key={pair.problem} pair={pair} />
          ))}
        </div>
      </div>
    </section>
  );
}
