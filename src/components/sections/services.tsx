"use client";

import { motion } from "framer-motion";
import { pexelsUrl, type StockPhotoKey } from "@/lib/images";
import { servicesJsonLd } from "@/lib/schema";

const categories: {
  photo: StockPhotoKey;
  title: string;
  items: string[];
}[] = [
  {
    photo: "batteryCloseup",
    title: "Battery Services",
    items: ["Battery Testing", "Battery Replacement", "Battery Charging"],
  },
  {
    photo: "diagnosticsHand",
    title: "Wiring Services",
    items: ["Full Vehicle Wiring", "Wiring Repair", "Harness Installation"],
  },
  {
    photo: "underCarLift",
    title: "Electrical Diagnostics",
    items: ["Scanner Diagnosis", "Fault Detection", "Electrical Inspection"],
  },
  {
    photo: "monoEngineBay",
    title: "Lighting Systems",
    items: ["Headlight Repair", "LED Installation", "Indicator Repair"],
  },
  {
    photo: "dynamoRewind",
    title: "Starting & Charging Systems",
    items: ["Alternator Repair", "Starter Repair", "Charging System Testing"],
  },
  {
    photo: "batteryChargingClamps",
    title: "Emergency Services",
    items: ["Roadside Support", "Jump Start", "Emergency Diagnostics"],
  },
];

// Radial "hub with spokes" diagram, in a fixed pixel coordinate space so the
// trig for node placement + connector lines stays simple. Rendered only at
// `lg`+; smaller screens get a plain grid fallback below since a fan layout
// this wide doesn't have anywhere to go on a narrow viewport.
//
// Nodes are plain circles with the label sitting outside/below them (not
// crammed inside a clipped shape) — simpler, and there's no shape edge that
// can ever cut off a longer title.
const CANVAS = { width: 940, height: 650 };
const HUB = { x: 470, y: 140, r: 96 };
const NODE_RADIUS = 380;
const NODE_SIZE = 132;
const NODE_LABEL_WIDTH = 160;
const START_ANGLE = 170;
const ANGLE_STEP = 32;

// Rounded to 2dp: trig functions aren't guaranteed bit-identical across the
// server's Node/V8 and the browser's, so unrounded values can differ in the
// last bit and fail React's server/client string match during hydration.
function round(n: number) {
  return Math.round(n * 100) / 100;
}

function polarPoint(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: round(HUB.x + radius * Math.cos(rad)),
    y: round(HUB.y + radius * Math.sin(rad)),
  };
}

const nodes = categories.map((cat, i) => {
  const angle = START_ANGLE - i * ANGLE_STEP;
  return { ...cat, ...polarPoint(angle, NODE_RADIUS), tone: i % 2 === 1 ? "secondary" : "primary" };
});

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-background py-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd(categories)) }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-secondary/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
            What We Fix
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-slate-500">
            Everything your vehicle needs, under one roof.
          </p>
        </div>

        {/* Radial hub diagram — lg and up */}
        <div
          className="relative mx-auto hidden lg:block"
          style={{ width: CANVAS.width, height: CANVAS.height }}
        >
          <svg
            aria-hidden
            className="absolute inset-0"
            width={CANVAS.width}
            height={CANVAS.height}
          >
            {nodes.map((n, i) => (
              <line
                key={i}
                x1={HUB.x}
                y1={HUB.y}
                x2={n.x}
                y2={n.y}
                stroke="var(--color-secondary)"
                strokeOpacity={0.3}
                strokeWidth={1.5}
                strokeDasharray="5 5"
              />
            ))}
          </svg>

          {/* Positioning lives on this plain div. Framer Motion takes full
              ownership of `transform` on any element it animates `scale` on,
              so a motion.div here would silently drop the manual
              translate(-50%,-50%) centering — that was the exact bug that
              left the hub/nodes off-center by half their own size. */}
          <div
            className="absolute"
            style={{
              left: HUB.x,
              top: HUB.y,
              width: HUB.r * 2,
              height: HUB.r * 2,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex h-full w-full flex-col items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary text-center text-white shadow-xl shadow-primary/25"
            >
              <span className="px-2 text-xl font-extrabold leading-tight">
                Our Services
              </span>
              <span className="mt-1 text-xs font-medium text-white/75">
                6 Specialties
              </span>
            </motion.div>
          </div>

          {nodes.map((n, i) => (
            <div
              key={n.title}
              className="absolute flex flex-col items-center"
              style={{
                left: n.x,
                top: n.y,
                width: NODE_LABEL_WIDTH,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: "backOut" }}
                className="flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`overflow-hidden rounded-full shadow-lg ring-4 ${
                    n.tone === "secondary" ? "ring-secondary" : "ring-primary"
                  }`}
                  style={{ width: NODE_SIZE, height: NODE_SIZE }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pexelsUrl(n.photo, 300)}
                    alt={`${n.title} at Kalika Battery & Wiring`}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <span className="mt-3 text-center text-sm font-semibold leading-snug text-foreground">
                  {n.title}
                </span>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Plain grid fallback — below lg */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:hidden">
          {nodes.map((n, i) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span
                className={`block h-20 w-20 overflow-hidden rounded-full shadow-md ring-4 ${
                  n.tone === "secondary" ? "ring-secondary" : "ring-primary"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pexelsUrl(n.photo, 300)}
                  alt={`${n.title} at Kalika Battery & Wiring`}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="text-sm font-semibold leading-snug text-foreground">
                {n.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
