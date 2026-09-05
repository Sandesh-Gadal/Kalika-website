"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { pexelsUrl, type StockPhotoKey } from "@/lib/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cards: { photo: StockPhotoKey; category: string; title: string }[] = [
  { photo: "ashokLeylandTruck", category: "Specialty", title: "Heavy Vehicle Electrical Specialist" },
  { photo: "eicherSchoolBus", category: "Specialty", title: "School Bus Electrical Support" },
  { photo: "dynamoRewind", category: "Repair", title: "Starter & Alternator Specialist" },
  { photo: "batteryChargingClamps", category: "Battery", title: "Battery Sales, Charging & Testing" },
  { photo: "obdScanner", category: "Parts", title: "Genuine & Compatible Spare Parts" },
  { photo: "underCarLift", category: "Quality", title: "Tested & Reconditioned Parts Available" },
  { photo: "diagnosticsHand", category: "Wiring", title: "Heavy Vehicle Wiring & DC Electrical" },
  { photo: "monoEngineBay", category: "Quality", title: "Tested Before Delivery" },
  { photo: "tipperTruck", category: "Service", title: "Repair • Replace • Test • Fit" },
  { photo: "batteryCloseup", category: "Parts", title: "Parts Available for Quick Replacement" },
  { photo: "ashokLeylandTruck", category: "Fleet", title: "Workshop & Fleet Support" },
];

const CARD_WIDTH = 288;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;
// Scroll runway for the coverflow — deliberately shorter than the full
// card-travel distance so it stays a quick beat, not a slog (also means
// jumping straight to "Services" via nav doesn't drag through it for long).
const SCROLL_RUNWAY_VH = 180;

export function Highlights() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    const totalTravel = STEP * (cards.length - 1);
    const centerOffset = () => window.innerWidth / 2 - CARD_WIDTH / 2;

    gsap.set(trackRef.current, { x: centerOffset() });

    // No `pin: true` here on purpose — GSAP's pin wraps the trigger element
    // in a spacer div it inserts directly into the DOM, which fights with
    // React's own unmount bookkeeping (crashes with a removeChild error on
    // client-side route changes). `position: sticky` gets the same pinned
    // look with zero DOM surgery, so this ScrollTrigger only ever touches
    // transforms/opacity — safe for React to unmount at any time.
    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const x = centerOffset() - progress * totalTravel;
          gsap.set(trackRef.current, { x });

          const activeProgress = progress * (cards.length - 1);
          setActiveIndex(Math.round(activeProgress));

          cardRefs.current.forEach((el, i) => {
            if (!el) return;
            const dist = Math.abs(i - activeProgress);
            const scale = gsap.utils.clamp(0.75, 1, 1 - dist * 0.16);
            const opacity = gsap.utils.clamp(0.3, 1, 1 - dist * 0.4);
            gsap.set(el, { scale, opacity });
          });
        },
      });
      triggerRef.current = trigger;
    }, wrapperRef);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(cards.length - 1, index));
    const trigger = triggerRef.current;
    if (!trigger) return;
    const progress = clamped / (cards.length - 1);
    const targetY = trigger.start + progress * (trigger.end - trigger.start);
    lenis?.scrollTo(targetY, { duration: 1 });
  };

  return (
    <section
      ref={wrapperRef}
      style={{ height: `${SCROLL_RUNWAY_VH}vh` }}
      className="relative bg-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 pt-20 text-center">
          <span className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
            Why Choose Us
          </span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Why Workshops &amp; Fleets Choose Us
          </h2>
          <p className="mt-2 text-slate-500">
            Heavy vehicle electrical work, done properly — from diagnostics
            to genuine spare parts.
          </p>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div ref={trackRef} className="flex gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="relative h-96 w-72 shrink-0 overflow-hidden rounded-3xl shadow-2xl shadow-black/20"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pexelsUrl(card.photo, 500)}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left text-white">
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    {card.category}
                  </div>
                  <div className="mt-1 text-lg font-bold leading-snug">
                    {card.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-6">
          <button
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous highlight"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:bg-slate-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next highlight"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:bg-slate-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
