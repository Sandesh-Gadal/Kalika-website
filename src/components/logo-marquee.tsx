import type { CSSProperties } from "react";

type LogoItem = { name: string; src?: string };

export function LogoMarquee({
  items,
  direction = "left",
  speed = 32,
}: {
  items: LogoItem[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const track = [...items, ...items];

  return (
    <div className="group relative overflow-hidden">
      <div
        className={`flex w-max items-center gap-4 group-hover:[animation-play-state:paused] ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ "--marquee-duration": `${speed}s` } as CSSProperties}
      >
        {track.map((item, i) => (
          <div
            key={i}
            className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3"
          >
            {item.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.src}
                alt={item.name}
                className="max-h-12 max-w-full object-contain"
              />
            ) : (
              <span className="text-sm font-bold text-foreground">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent" />
    </div>
  );
}
