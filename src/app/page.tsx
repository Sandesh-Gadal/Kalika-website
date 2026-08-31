import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustBar } from "@/components/sections/trust-bar";
import { VehicleStrip } from "@/components/sections/vehicle-strip";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TrustBar /> */}
      <ProblemSolution />
      {/* <VehicleStrip /> */}
      <Services />
      <Gallery />
      <Testimonials />
      <Partners />
      <FinalCta />
      <Faq />
      <Footer />
    </>
  );
}
