"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Wheel({ cx, cy }: { cx: number; cy: number }) {
  return (
    <motion.g
      style={{ originX: `${cx}px`, originY: `${cy}px` }}
      animate={{ rotate: 360 }}
      transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
    >
      <circle cx={cx} cy={cy} r={4.5} />
      <path d={`M${cx} ${cy - 3.5} V${cy + 3.5} M${cx - 3.5} ${cy} H${cx + 3.5}`} />
    </motion.g>
  );
}

function CarSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 22 V15.5 Q4 13.5 6 13.5 H12.5 L17.5 6.5 Q18.5 5.5 20 5.5 H36 Q37.5 5.5 38.5 7 L43.5 13.5 H56 Q60 13.5 60 17.5 V22" />
      <path d="M2 22 H62" />
      <Wheel cx={16} cy={24} />
      <Wheel cx={46} cy={24} />
    </svg>
  );
}

export function VehicleStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-15%", "115%"]);
  const bob = useTransform(scrollYProgress, (v) => Math.sin(v * 40) * 2);

  return (
    <div ref={ref} className="relative h-32 overflow-hidden bg-primary">
      <div className="absolute inset-x-0 bottom-10 border-t border-dashed border-white/20" />
      <motion.div
        style={{ x, y: bob }}
        className="absolute bottom-6 w-24 text-secondary drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]"
      >
        <CarSvg className="w-full" />
      </motion.div>
    </div>
  );
}
