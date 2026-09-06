"use client";

import type { CSSProperties } from "react";
import { pexelsUrl, type StockPhotoKey } from "@/lib/images";

const cards: { photo: StockPhotoKey; category: string; title: string }[] = [
  { photo: "ashokLeylandTruck", category: "Specialty", title: "Heavy Vehicle Electrical Specialist" },
  { photo: "eicherSchoolBus", category: "Specialty", title: "School Bus Electrical Support" },
  { photo: "dynamoRewind", category: "Repair", title: "Starter & Alternator Specialist" },
  { photo: "batteryChargingClamps", category: "Battery", title: "Battery Sales, Charging & Testing" },
  { photo: "obdScanner", category: "Parts", title: "Genuine & Compatible Spare Parts" },
  { photo: "underCarLift", category: "Quality", title: "Tested & Reconditioned Parts Available" },
  { photo: "diagnosticsHand", category: "Wiring", title: "Heavy Vehicle Wiring & DC Electrical" },
  { photo: "monoEngineBay", category: "Quality", title: "Tested Before Delivery" },
  { photo: "tipperTruck", category: "Service", title: "Repair • Replace • Test • Fit" },
  { photo: "batteryCloseup", category: "Parts", title: "Parts Available for Quick Replacement" },
  { photo: "ashokLeylandTruck", category: "Fleet", title: "Workshop & Fleet Support" },
];

const track = [...cards, ...cards];

export function Highlights() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
          Why Choose Us
        </span>
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Why Workshops &amp; Fleets Choose Us
        </h2>
        <p className="mt-2 text-slate-500">
          Heavy vehicle electrical work, done properly — from diagnostics to
          genuine spare parts.
        </p>
      </div>

      <div className="group relative mt-10 overflow-hidden">
        <div
          className="flex w-max gap-6 px-6 animate-marquee-left group-hover:[animation-play-state:paused]"
          style={{ "--marquee-duration": "55s" } as CSSProperties}
        >
          {track.map((card, i) => (
            <div
              key={i}
              className="relative h-96 w-72 shrink-0 overflow-hidden rounded-3xl shadow-lg shadow-black/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pexelsUrl(card.photo, 500)}
                alt={card.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-left text-white">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  {card.category}
                </div>
                <div className="mt-1 text-lg font-bold leading-snug">
                  {card.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-white to-transparent sm:w-32" />
      </div>
    </section>
  );
}
