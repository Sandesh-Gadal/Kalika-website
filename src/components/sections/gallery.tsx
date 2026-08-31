"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { useState } from "react";
import { pexelsUrl, type StockPhotoKey } from "@/lib/images";

const categories = [
  "All",
  "Battery Installation",
  "Wiring Repair",
  "Dashboard Wiring",
  "Commercial Vehicle Work",
  "Fleet Maintenance",
  "Emergency Repairs",
] as const;

type Category = (typeof categories)[number];

const items: {
  id: number;
  category: Exclude<Category, "All">;
  title: string;
  photo: StockPhotoKey;
}[] = [
  { id: 1, category: "Battery Installation", title: "12V Battery Swap — Sedan", photo: "batteryCloseup" },
  { id: 2, category: "Wiring Repair", title: "Dynamo & Alternator Rewinding", photo: "dynamoRewind" },
  { id: 3, category: "Dashboard Wiring", title: "Dash Panel Rewire — SUV", photo: "diagnosticsHand" },
  { id: 4, category: "Commercial Vehicle Work", title: "Ashok Leyland Truck Electrical Overhaul", photo: "ashokLeylandTruck" },
  { id: 5, category: "Fleet Maintenance", title: "Eicher School Bus Fleet Checkup", photo: "eicherSchoolBus" },
  { id: 6, category: "Emergency Repairs", title: "Roadside Jump Start", photo: "batteryChargingClamps" },
  { id: 7, category: "Battery Installation", title: "Tipper Truck Battery Bank Upgrade", photo: "tipperTruck" },
  { id: 8, category: "Wiring Repair", title: "Short-Circuit Diagnosis & Fix", photo: "monoEngineBay" },
];

export function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered =
    active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <section id="gallery" className="scroll-mt-24 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-3 text-slate-500">
            Real repairs, real results — see the difference for yourself.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-white"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              onClick={() => setSelected(item.id)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl border border-slate-200 bg-white text-left"
              style={{ aspectRatio: i % 3 === 0 ? "4/5" : "4/3" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pexelsUrl(item.photo, 400)}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-2.5 pt-8">
                <span className="text-xs font-medium text-white">
                  {item.title}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <ZoomIn className="h-6 w-6 text-white" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-2xl bg-primary text-white"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
              {(() => {
                const item = items.find((i) => i.id === selected);
                if (!item) return null;
                return (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pexelsUrl(item.photo, 1000)}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-5">
                      <span className="font-medium">{item.title}</span>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
