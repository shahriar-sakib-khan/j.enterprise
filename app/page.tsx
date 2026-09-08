import Hero from "@/components/sections/Hero";
import TrustIntro from "@/components/sections/TrustIntro";
import ServicesGrid from "@/components/sections/ServicesGrid";
import MachineryShowcase from "@/components/sections/MachineryShowcase";
import Brands from "@/components/sections/Brands";
import MarineVisual from "@/components/sections/MarineVisual";
import WhyWorkWithUs from "@/components/sections/WhyWorkWithUs";
import Locations from "@/components/sections/Locations";

export default function Home() {
  return (
    <>
      <Hero />
      <MachineryShowcase />
      <TrustIntro />
      <ServicesGrid />
      <Brands />
      <MarineVisual />
      <WhyWorkWithUs />
      <Locations />
    </>
  );
}
