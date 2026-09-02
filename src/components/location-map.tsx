import { MapPin } from "lucide-react";
import { contact, mapsUrl } from "@/lib/contact";

// OpenStreetMap's embed needs no API key (unlike Google's Maps Embed API).
// Swap contact.lat/lng for the real workshop coordinates once confirmed.
const OSM_SPAN = 0.02;
const mapEmbedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${
  contact.lng - OSM_SPAN
}%2C${contact.lat - OSM_SPAN}%2C${contact.lng + OSM_SPAN}%2C${
  contact.lat + OSM_SPAN
}&layer=mapnik&marker=${contact.lat}%2C${contact.lng}`;

export function LocationMap({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className ?? "h-80 lg:h-96"}`}>
      <iframe
        title="Workshop location map"
        src={mapEmbedSrc}
        className="h-full w-full grayscale-15"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
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
    </div>
  );
}
