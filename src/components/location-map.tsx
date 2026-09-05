import { MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { contact, mapsUrl } from "@/lib/contact";

// Google's `/maps/embed?pb=...` Embed API needs an API key, but the plain
// `/maps?q=...&output=embed` form works fine with no key at all as long as
// it's placed in a real <iframe> (navigating a top-level tab to it directly
// gets refused — that's a different code path). Swap contact.lat/lng for
// the real workshop coordinates once confirmed.
const mapEmbedSrc = `https://www.google.com/maps?q=${contact.lat},${contact.lng}&z=15&output=embed`;

export function LocationMap({
  className,
  overlay = "default",
  children,
}: {
  className?: string;
  overlay?: "default" | "none";
  children?: ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden ${className ?? "h-80 lg:h-96"}`}>
      <iframe
        title="Workshop location map"
        src={mapEmbedSrc}
        className="h-full w-full"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {overlay === "default" && (
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 text-primary shadow-lg backdrop-blur-sm transition-colors hover:bg-white"
        >
          <MapPin className="h-5 w-5 shrink-0 text-secondary" />
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">{contact.address}</div>
            <div className="text-xs text-primary/70">Get directions</div>
          </div>
        </a>
      )}
      {children}
    </div>
  );
}
