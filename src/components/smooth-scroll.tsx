"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function GsapLenisSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    lenis.on("scroll", ScrollTrigger.update);
    return () => {
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);

  return null;
}

// Next's router resets `window.scrollTo(0, 0)` on a client-side route change,
// but Lenis owns scroll interpolation and immediately overrides that with its
// own cached target — so without this, navigating away mid-scroll drops you
// wherever the old offset happens to land on the new (often shorter) page
// instead of the top.
function ResetScrollOnRouteChange() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      <GsapLenisSync />
      <ResetScrollOnRouteChange />
      {children}
    </ReactLenis>
  );
}
