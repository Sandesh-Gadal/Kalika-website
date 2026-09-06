import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { Partners } from "@/components/sections/partners";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { ReadyToFit } from "@/components/sections/ready-to-fit";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Highlights />
      {/* <ReadyToFit /> */}
      
      {/* <ProblemSolution /> */}
      <Testimonials />
      <Partners />
      {/* <FinalCta /> */}
    </>
  );
}
