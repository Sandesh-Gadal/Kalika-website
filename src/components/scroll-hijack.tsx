"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, type ReactNode } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Pins this section in place (fixed on screen, not scrolling away) for a
 * stretch of scroll distance, then releases to normal scroll. Meant to be
 * paired with a `SlideOverReveal`-wrapped section right after it, which
 * slides in from the side and visually covers this one while it's pinned.
 */
export function PinSection({
  children,
  className,
  distance = "70%",
}: {
  children: ReactNode;
  className?: string;
  distance?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: `+=${distance}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });
    }, wrapperRef);
    return () => ctx.revert();
  }, [distance]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}

/**
 * Slides this section in from the side (covering whatever is pinned above
 * it) as it scrolls up into view, then continues in normal document flow
 * once fully revealed — full content height is preserved, nothing is
 * clipped or duplicated.
 */
export function SlideOverReveal({
  children,
  className,
  from = "right",
}: {
  children: ReactNode;
  className?: string;
  from?: "left" | "right";
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { xPercent: from === "right" ? 55 : -55 },
        {
          xPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [from]);

  return (
    <div ref={sectionRef} className={`relative ${className ?? ""}`}>
      {children}
    </div>
  );
}

/**
 * Pins the section and zooms its content in (with a slight overshoot
 * settle) as the user scrolls, before releasing to normal scroll.
 */
export function ScrollZoomSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=90%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
      tl.fromTo(
        innerRef.current,
        { scale: 0.6, opacity: 0 },
        { scale: 1.06, opacity: 1, ease: "none", duration: 0.7 },
        0,
      ).to(innerRef.current, { scale: 1, ease: "none", duration: 0.3 }, 0.7);
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className ?? ""}`}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
