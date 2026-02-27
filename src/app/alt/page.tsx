import AltHero from "@/components/alt/AltHero";
import AltStats from "@/components/alt/AltStats";
import AltOpportunity from "@/components/alt/AltOpportunity";
import AltCoreInfra from "@/components/alt/AltCoreInfra";
import AltCompound from "@/components/alt/AltCompound";
import AltCapital from "@/components/alt/AltCapital";
import AltLocation from "@/components/alt/AltLocation";
import AltFinancials from "@/components/alt/AltFinancials";
import AltRoadmap from "@/components/alt/AltRoadmap";
import AltTeam from "@/components/alt/AltTeam";
import AltCTA from "@/components/alt/AltCTA";
import AltFooter from "@/components/alt/AltFooter";

export const metadata = {
  title: "Maison Vet Clinic — Alternative",
  description:
    "Medicine, Land, Water & Power. A vertically integrated veterinary clinic and campus in North San Diego County.",
};

export default function AltPage() {
  return (
    <div className="bg-white">
      <AltHero />
      <main id="primary-content" role="main" tabIndex={-1} className="outline-none">
        <AltStats />
        <AltOpportunity />
        <AltCoreInfra />
        <AltCompound />
        <AltCapital />
        <AltLocation />
        <AltFinancials />
        <AltRoadmap />
        <AltTeam />
        <AltCTA />
      </main>
      <AltFooter />
    </div>
  );
}
