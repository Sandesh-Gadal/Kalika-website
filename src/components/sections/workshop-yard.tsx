"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Navigation } from "lucide-react";
import { LocationMap } from "@/components/location-map";
import { contact, mapsUrl } from "@/lib/contact";

export function WorkshopYard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col justify-between gap-6 rounded border border-slate-200 bg-white p-8 shadow-sm md:p-10"
    >
      <div>
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <span className="mb-2 inline-flex items-center gap-2 rounded border border-primary/20 bg-primary/10 px-2.5 py-1 text-primary">
              <MapPin className="h-3.5 w-3.5" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                Physical Hub
              </span>
            </span>
            <h2 className="text-2xl font-bold text-primary">
              Workshop &amp; Service Yard
            </h2>
            <p className="mt-0.5 text-xs text-slate-500">{contact.address}</p>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 rounded border border-slate-200 bg-background px-3 py-1.5 font-mono text-xs font-semibold text-secondary hover:underline"
          >
            Directions
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        <LocationMap className="h-64 rounded border border-slate-200" overlay="none">
          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-primary/85 via-primary/30 to-transparent p-5 text-white">
            <div className="mb-1 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
              </span>
              <span className="text-sm font-bold drop-shadow">
                Kalika Battery &amp; Wiring Repairing Center
              </span>
            </div>
            <p className="font-mono text-[11px] text-white/70 drop-shadow">
              Heavy Commercial Vehicle Specialists &amp; Multi-axle Yard
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-fit items-center gap-1.5 rounded bg-secondary px-4 py-2 font-mono text-xs font-bold uppercase text-white shadow transition-colors hover:bg-secondary/90"
            >
              <Navigation className="h-3.5 w-3.5" />
              Open in Maps
            </a>
          </div>
        </LocationMap>
      </div>
    </motion.div>
  );
}
