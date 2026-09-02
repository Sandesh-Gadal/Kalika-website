import { LogoMarquee } from "@/components/logo-marquee";

const vehicleBrands = [
  { name: "Tata", src: "/logos/tata.png" },
  { name: "Ashok Leyland", src: "/logos/ashok-leyland.jpg" },
  { name: "Force", src: "/logos/force.png" },
  { name: "AMW" },
  { name: "Eicher", src: "/logos/eicher.png" },
  { name: "SML Isuzu", src: "/logos/sml-isuzu.jpg" },
  { name: "BharatBenz", src: "/logos/bharatbenz.jpg" },
  { name: "Hino", src: "/logos/hino.png" },
  { name: "Mahindra", src: "/logos/mahindra.png" },
  { name: "MAN", src: "/logos/man.png" },
  { name: "Volvo", src: "/logos/volvo.png" },
];

const tractorBrands = [
  { name: "Mahindra", src: "/logos/mahindra.png" },
  { name: "Sonalika", src: "/logos/sonalika.png" },
  { name: "New Holland", src: "/logos/new-holland.png" },
  { name: "Eicher", src: "/logos/eicher.png" },
  { name: "John Deere", src: "/logos/john-deere.png" },
  { name: "TAFE", src: "/logos/tafe.png" },
  { name: "Swaraj" },
  { name: "Massey Ferguson", src: "/logos/massey-ferguson.png" },
];

export function Partners() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
          Brands We Work With
        </h2>
        <p className="mb-12 text-slate-500">
          Specialized electrical support across Nepal&apos;s most common
          heavy vehicle and tractor brands.
        </p>

        <div className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
          Heavy Vehicles &amp; Commercial Brands
        </div>
        <LogoMarquee items={vehicleBrands} direction="left" speed={34} />

        <div className="mb-4 mt-10 inline-block rounded-full bg-emerald-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
          Tractor Brands
        </div>
        <LogoMarquee items={tractorBrands} direction="right" speed={28} />

        <p className="mt-10 text-sm text-slate-500">
          Also servicing concrete mixers, tippers &amp; heavy construction
          equipment.
        </p>
      </div>
    </section>
  );
}
