"use client";

import { motion } from "framer-motion";
import { ChevronDown, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, whatsappHref } from "@/lib/contact";

const stats = [
  { label: "Vehicles Serviced", value: "5,000+" },
  { label: "Years Experience", value: "10+" },
  { label: "Satisfaction", value: "98%" },
  { label: "Support", value: "24/7" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#050b16] text-white"
    >
      <GradientMesh />
      <DotGrid />
      <CircuitLines />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-32 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Live &amp; On-Call — 24/7 Emergency Response
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Power Your Vehicle.
          <br />
          <span className="bg-linear-to-r from-secondary via-sky-300 to-secondary bg-clip-text text-transparent">
            Wired Right.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-lg text-white/60"
        >
          Battery diagnostics, replacement, and complete vehicle wiring
          repairs — Kalika Battery &amp; Wiring Repairing Center keeps
          drivers and fleets moving, with certified precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <motion.a
            href={contact.phoneHref}
            animate={{
              boxShadow: [
                "0 0 0px rgba(30,136,229,0.5)",
                "0 0 28px rgba(30,136,229,0.65)",
                "0 0 0px rgba(30,136,229,0.5)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </motion.a>
          <Button
            href={whatsappHref("Hi, I need help with my vehicle.")}
            variant="secondary"
          >
            <Zap className="h-4 w-4" />
            Chat on WhatsApp
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 grid w-full max-w-2xl grid-cols-2 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-md sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-4 py-5">
              <div className="font-mono text-xl font-bold tabular-nums text-secondary sm:text-2xl">
                {stat.value}
              </div>
              <div className="text-[11px] uppercase tracking-wide text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/30"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}

function GradientMesh() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -left-32 -top-40 h-xl w-xl rounded-full bg-secondary/25 blur-[120px]" />
      <div className="absolute -right-24 top-1/4 h-md w-md rounded-full bg-primary/40 blur-[110px]" />
      <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-cyan-400/15 blur-[100px]" />
    </div>
  );
}

function DotGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
  );
}

const circuitPaths = [
  { d: "M-40 120 H340 Q360 120 360 140 V260 Q360 280 380 280 H900", duration: 5, delay: 0 },
  { d: "M1480 640 H1080 Q1060 640 1060 620 V460 Q1060 440 1040 440 H520", duration: 6, delay: 1.2 },
  { d: "M-40 560 H240 Q260 560 260 540 V400 Q260 380 280 380 H700 Q720 380 720 360 V180", duration: 7, delay: 2.4 },
];

const circuitNodes = [
  { cx: 360, cy: 120 },
  { cx: 900, cy: 280 },
  { cx: 520, cy: 440 },
  { cx: 720, cy: 180 },
  { cx: 260, cy: 560 },
];

function CircuitLines() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
    >
      {circuitPaths.map((path, i) => (
        <motion.path
          key={i}
          d={path.d}
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeDasharray="10 14"
          animate={{ strokeDashoffset: [0, -480] }}
          transition={{
            duration: path.duration,
            delay: path.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      {circuitNodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r={3.5}
          fill="#1E88E5"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 2.5,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <defs>
        <linearGradient id="circuit-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E88E5" stopOpacity="0" />
          <stop offset="50%" stopColor="#1E88E5" stopOpacity="1" />
          <stop offset="100%" stopColor="#1E88E5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
