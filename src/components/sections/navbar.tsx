"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, Phone, Wrench, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/contact";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <motion.span
            whileHover={{ rotate: -18, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
              scrolled ? "bg-primary text-white" : "bg-white/15 text-white"
            }`}
          >
            <Wrench className="h-5 w-5" />
          </motion.span>
          <span
            className={`text-sm font-bold transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            Kalika Battery &amp; Wiring
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
              className={`group relative text-sm font-medium transition-colors ${
                scrolled ? "text-slate-600 hover:text-primary" : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-secondary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={contact.phoneHref}
            variant="primary"
            className={
              scrolled ? "" : "bg-white text-primary hover:bg-white/90 shadow-white/20"
            }
          >
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium text-slate-700"
                >
                  {link.label}
                </a>
              ))}
              <Button href={contact.phoneHref} variant="primary" className="mt-2 w-full">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
