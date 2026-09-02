"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Vehicles Serviced", value: "5,000+" },
  { label: "Years Experience", value: "10+" },
  { label: "Customer Satisfaction", value: "98%" },
  { label: "Emergency Support", value: "24/7" },
];

export function AboutIntro() {
  return (
    <section className="bg-primary pb-20 pt-32 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-white/60">About Us</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Heavy Vehicle Electrical Specialists, Since Day One
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Kalika Battery &amp; Wiring Repairing Center grew out of one
            simple frustration: fleet operators had nowhere reliable to take
            heavy vehicle electrical problems. Today we service school
            buses, trucks, tractors, and Hyva units for Tata, Eicher, Ashok
            Leyland, Mahindra, SML, and BharatBenz owners across Nepal.
          </p>
        </motion.div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-4"
            >
              <div className="text-xl font-bold sm:text-2xl">{stat.value}</div>
              <div className="mt-1 text-xs text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
