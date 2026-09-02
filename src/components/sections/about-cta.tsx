"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, whatsappHref } from "@/lib/contact";

export function AboutCta() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Come See the Workshop
          </h2>
          <p className="mt-3 max-w-md text-slate-500">
            We&apos;re not a middleman — every repair happens on-site, tested
            before it leaves. Drop by, or call ahead to skip the queue.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={contact.phoneHref} variant="primary">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button href={whatsappHref("Hi, I'd like to visit the workshop.")} variant="secondary">
              Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-background p-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
            <span className="text-sm text-slate-600">{contact.address}</span>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-background p-4">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
            <span className="text-sm text-slate-600">
              Sun–Fri 8:00 AM–7:00 PM · Sat 9:00 AM–5:00 PM · Emergency 24/7
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
