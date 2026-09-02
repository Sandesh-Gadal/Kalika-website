"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUp, MessageCircle, Phone, QrCode } from "lucide-react";
import { useLenis } from "lenis/react";
import { useState } from "react";
import { contact, whatsappHref } from "@/lib/contact";

export function FloatingContact() {
  const [showTop, setShowTop] = useState(false);
  const { scrollY } = useScroll();
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowTop(latest > 500);
  });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="hidden flex-col items-center gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl sm:flex"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
          <QrCode className="h-10 w-10" />
        </div>
        <span className="text-[11px] font-medium text-foreground">
          Scan to WhatsApp
        </span>
      </motion.div> */}

      <motion.a
        href={contact.phoneHref}
        aria-label="Call now"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40"
      >
        <Phone className="h-6 w-6" />
      </motion.a>

      <motion.a
        href={whatsappHref("Hi, I need help with my vehicle.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>

      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-primary shadow-lg"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
