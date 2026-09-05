"use client";

import { motion } from "framer-motion";
import { Clock, MessageCircle, ShieldCheck, Siren } from "lucide-react";
import { whatsappHref } from "@/lib/contact";

const hours = [
  { day: "Daily (except Saturday)", time: "8:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
];

export function WorkshopSchedule() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-between gap-8 rounded border border-slate-200 bg-white p-8 shadow-sm md:p-10"
    >
      <div className="flex flex-col gap-6">
        <div>
          <span className="mb-3 inline-flex items-center gap-2 rounded border border-secondary/30 bg-secondary/10 px-2.5 py-1 text-secondary">
            <Clock className="h-3.5 w-3.5" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider">
              Hours of Operation
            </span>
          </span>
          <h2 className="text-2xl font-bold text-primary">Workshop Schedule</h2>
          <p className="mt-1 text-sm text-slate-500">
            Walk-in diagnostics &amp; scheduled repair bays open daily in
            Bharatpur.
          </p>
        </div>

        <div className="flex flex-col gap-3 font-mono text-sm">
          {hours.map((row) => (
            <div
              key={row.day}
              className="flex items-center justify-between border-b border-slate-100 py-3"
            >
              <span className="font-medium text-slate-500">{row.day}</span>
              <span className="font-bold text-primary">{row.time}</span>
            </div>
          ))}
          <div className="flex items-center justify-between rounded bg-primary p-3.5 text-white">
            <span className="flex items-center gap-2 font-bold">
              <Siren className="h-[18px] w-[18px] text-secondary" />
              Roadside Emergency
            </span>
            <span className="rounded bg-white/15 px-2 py-1 font-mono text-xs font-bold uppercase tracking-wider text-secondary">
              24/7 Standby
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded border border-slate-200 bg-background p-4">
          <div className="flex items-center gap-2 text-sm font-bold text-primary">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            Rapid Highway Mobilization
          </div>
          <p className="text-xs leading-relaxed text-slate-500">
            Equipped mobile response van stationed for express dispatch along
            Narayanghat, Mugling, and central highway networks.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row">
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full flex-1 items-center justify-center gap-2 rounded border border-slate-200 bg-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-emerald-700 transition-colors hover:bg-slate-50"
        >
          <MessageCircle className="h-[18px] w-[18px]" />
          WhatsApp Dispatch
        </a>
      </div>
    </motion.div>
  );
}
