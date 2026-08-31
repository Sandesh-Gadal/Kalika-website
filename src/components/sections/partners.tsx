"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Bus,
  Container,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";

const partners = [
  { name: "City Transport Co.", Icon: Bus },
  { name: "Everest Logistics", Icon: Truck },
  { name: "Himalayan Fleet Services", Icon: Container },
  { name: "Valley Cab Cooperative", Icon: Building2 },
  { name: "Northline Freight", Icon: Ship },
  { name: "Metro Bus Corporation", Icon: Warehouse },
];

export function Partners() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-10 text-2xl font-bold text-foreground sm:text-3xl">
          Organizations &amp; Businesses We Work With
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map(({ name, Icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-md"
            >
              <Icon className="h-6 w-6 text-secondary" />
              <span className="text-xs font-medium text-slate-500">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
