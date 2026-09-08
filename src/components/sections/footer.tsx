import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/lib/contact";

const services = [
  "Battery Service",
  "Wiring Repair",
  "Diagnostics",
  "Lighting Systems",
];

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-[#0b3660] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-3 text-lg font-semibold">
            Kalika Battery &amp; Wiring
          </h3>
          <p className="text-sm text-white/70">
            Professional automotive battery, wiring, and electrical repair
            services for vehicles and fleets.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
            Services
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" /> {contact.phoneDisplay}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" /> {contact.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> {contact.address}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
            Business Hours
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Sun–Fri: 8:00 AM – 7:00 PM</li>
            <li>Sat: 9:00 AM – 5:00 PM</li>
            <li>Emergency support: 24/7</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-white/60 sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} Kalika Battery &amp; Wiring
            Repairing Center. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
