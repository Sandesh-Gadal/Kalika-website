"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, mapsUrl, whatsappHref } from "@/lib/contact";

const methods = [
  {
    icon: Phone,
    label: "Call",
    value: contact.phoneDisplay,
    href: contact.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: whatsappHref("Hi, I need help with my vehicle."),
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: contact.address,
    href: mapsUrl,
    external: true,
  },
];

export function ContactInfo() {
  return (
    <section className="bg-primary pb-16 pt-32 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-white/60">Contact Us</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Let&apos;s Get Your Vehicle Running
          </h1>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {methods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/20 text-secondary">
                <method.icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  {method.label}
                </span>
                <span className="block truncate font-medium">{method.value}</span>
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70"
        >
          <Clock className="h-4 w-4 text-secondary" />
          Sun–Fri 8:00 AM–7:00 PM · Sat 9:00 AM–5:00 PM · Emergency support 24/7
        </motion.div>
      </div>
    </section>
  );
}
