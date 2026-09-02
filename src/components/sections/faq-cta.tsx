"use client";

import { motion } from "framer-motion";
import { MessageCircleQuestion, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, whatsappHref } from "@/lib/contact";

export function FaqCta() {
  return (
    <section className="bg-background py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm"
      >
        <MessageCircleQuestion className="h-9 w-9 text-secondary" />
        <h2 className="text-2xl font-bold text-foreground">
          Still Have Questions?
        </h2>
        <p className="text-slate-500">
          No fixed pricing list, no guesswork — call or message us and
          we&apos;ll
          walk you through it.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button href={contact.phoneHref} variant="primary">
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
          <Button href={whatsappHref("Hi, I have a question.")} variant="secondary">
            <Zap className="h-4 w-4" />
            Ask on WhatsApp
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
