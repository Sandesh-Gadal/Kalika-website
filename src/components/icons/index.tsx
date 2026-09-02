// Hand-drawn icon set, purpose-built for this workshop's services instead
// of dropping in generic icon-library glyphs. Same interface as lucide
// icons (className prop, currentColor stroke) so they drop in anywhere.
type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BatteryServiceIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="8" width="15" height="11" rx="2" />
      <path d="M9 8V6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2" />
      <path d="M21 11.5v3" />
      <path d="M13.5 11 10.5 14.5h2.5L10.5 18" />
    </svg>
  );
}

export function WiringServiceIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="4.5" cy="6" r="1.6" />
      <circle cx="19.5" cy="18" r="1.6" />
      <path d="M4.5 7.6V11c0 1 .6 1.6 1.6 1.6h4.8c1 0 1.6.6 1.6 1.6v.4" />
      <path d="M19.5 16.4V13c0-1-.6-1.6-1.6-1.6H12" />
      <path d="M9 9h2M13.5 15.5h2" />
    </svg>
  );
}

export function DiagnosticsServiceIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="6" y="5" width="9" height="14" rx="2" />
      <path d="M9 5V3.6" />
      <path d="M8.5 9.5h2l1-2.5 1.5 6 1-3.5h1.5" />
      <path d="M17.5 12.5 20 15" />
    </svg>
  );
}

export function LightingServiceIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="7" cy="12" r="4" />
      <circle cx="7" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <path d="M13 8.5 21 5M13 12h9M13 15.5l8 3.5" />
    </svg>
  );
}

export function ChargingServiceIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 4.5v2M12 17.5v2M19.5 12h-2M6.5 12h-2M17.8 6.2l-1.4 1.4M7.6 16.4l-1.4 1.4M17.8 17.8l-1.4-1.4M7.6 7.6 6.2 6.2" />
      <path d="M13.5 8.5 10 13h2.2l-1 3.5" />
    </svg>
  );
}

export function EmergencyServiceIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 21 19H3z" />
      <path d="M13 9.5 10.2 13h2.3L11.3 16.5" />
    </svg>
  );
}

export function LogoMark({ className }: IconProps) {
  return (
    <svg {...base} className={className} strokeWidth={1.8}>
      <path d="M6 3.5v17" />
      <path d="M6 12.5 13.5 3.5M8.5 10 16.5 20.5" />
      <path d="M17.5 6 15 10.5h3l-2.5 4.5" />
    </svg>
  );
}
