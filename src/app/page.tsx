import Nav from "@/components/sections/Nav";
import SectionNav from "@/components/sections/SectionNav";
import Hero from "@/components/sections/Hero";
import Opportunity from "@/components/sections/Opportunity";
import Pillars from "@/components/sections/Pillars";
import Compound from "@/components/sections/Compound";
import Finance from "@/components/sections/Finance";
import Location from "@/components/sections/Location";
import Timeline from "@/components/sections/Timeline";
import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <SectionNav />
      <main
        id="primary-content"
        tabIndex={-1}
        role="main"
        className="outline-none"
        data-agent-purpose="core-information-payload"
      >
        <Hero />
        <Opportunity />
        <Pillars />
        <Compound />
        <Finance />
        <Location />
        <Timeline />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
