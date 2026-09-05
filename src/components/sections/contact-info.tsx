"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, Zap } from "lucide-react";
import { contact, mapsUrl, whatsappHref } from "@/lib/contact";

const methods = [
  {
    icon: Phone,
    label: "Direct Phone",
    value: contact.phoneDisplay,
    href: contact.phoneHref,
    tag: "24/7 Hotline",
    tagClass: "text-emerald-600",
    hoverBorder: "hover:border-primary",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Support",
    value: contact.whatsappDisplay,
    href: whatsappHref("Hi, I need help with my vehicle."),
    external: true,
    tag: "Instant photo/voice quote",
    tagClass: "text-slate-500",
    hoverBorder: "hover:border-emerald-500",
  },
  {
    icon: Mail,
    label: "Official Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    tag: "Fleet inquiries & tenders",
    tagClass: "text-slate-500",
    hoverBorder: "hover:border-primary",
  },
  {
    icon: MapPin,
    label: "Main Workshop",
    value: "Bharatpur-9, Chitwan",
    href: mapsUrl,
    external: true,
    tag: "Open in Google Maps",
    tagClass: "text-secondary font-medium",
    hoverBorder: "hover:border-primary",
    tagIcon: ArrowUpRight,
  },
];

export function ContactInfo() {
  return (
    <section className="bg-white pb-10 pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded border border-primary/20 bg-primary/10 px-3 py-1 text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest">
                Connect with Engineering Specialists
              </span>
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Let&apos;s Get Your{" "}
              <span className="text-secondary">Vehicle Running</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base text-slate-500 sm:text-lg">
              Whether you require emergency highway assistance, heavy vehicle
              wiring rewiring, or computerized ECU diagnostics, our
              technicians in Chitwan are available 24/7.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-4 self-start rounded-lg border border-slate-200 bg-white px-5 py-3 shadow-sm md:self-end">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Average On-Site Dispatch
              </div>
              <div className="text-base font-bold text-primary">
                Under 30 Minutes
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className={`group flex items-start gap-4 rounded border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md ${method.hoverBorder}`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <method.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-500">
                  {method.label}
                </span>
                <span className="mt-0.5 block truncate text-base font-bold text-primary transition-colors group-hover:text-secondary">
                  {method.value}
                </span>
                <span className={`mt-1 flex items-center gap-1 text-xs ${method.tagClass}`}>
                  {!method.tagIcon && (
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  )}
                  {method.tag}
                  {method.tagIcon && <method.tagIcon className="h-3 w-3" />}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
