"use client";

import { useState } from "react";

const PitchDeck = () => (
  <div className="prose prose-stone max-w-none">
    <h3 className="text-xl font-serif text-green-deep mb-4">Pitch Deck (Lender Agnostic)</h3>
    <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 space-y-8">
      
      <div className="border-b border-stone-200 pb-4">
        <h4 className="font-bold text-gray-900">Slide 1: Title</h4>
        <p className="text-lg font-serif text-green-deep">Maison Vet: A Sovereign Veterinary Compound</p>
        <p className="italic text-gray-600">Subtitle: Vertical Infrastructure for the Future of Veterinary Medicine</p>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          <li><strong>Visual:</strong> High-quality rendering of the compound (solar array, clinic, agriculture).</li>
          <li><strong>Key Stat:</strong> "15 Acres. 250kW Microgrid. Adjudicated Water Rights."</li>
        </ul>
      </div>

      <div className="border-b border-stone-200 pb-4">
        <h4 className="font-bold text-gray-900">Slide 2: The Problem (The Traditional Model is Broken)</h4>
        <p className="font-semibold text-red-800">Headline: "The Rent-Seeking Trap"</p>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          <li>Traditional clinics are vulnerable to NNN lease escalation.</li>
          <li>Grid dependency = operational risk (power outages stop surgery).</li>
          <li>Water scarcity in CA is an existential threat to rural operations.</li>
          <li className="font-bold mt-1">The Gap: No one is building <em>resilient</em> veterinary infrastructure.</li>
        </ul>
      </div>

      <div className="border-b border-stone-200 pb-4">
        <h4 className="font-bold text-gray-900">Slide 3: The Solution (Sovereignty as a Service)</h4>
        <p className="font-semibold text-green-deep">Headline: "Owning the Entire Stack"</p>
        <div className="mt-2 text-sm text-gray-700">
          <strong>The Asset:</strong>
          <ol className="list-decimal pl-5 mt-1">
            <li><strong>Land:</strong> 15+ Acres in prime North County (Pauma/Valley Center).</li>
            <li><strong>Water:</strong> Senior Adjudicated Rights (San Luis Rey Basin). Inflation-proof.</li>
            <li><strong>Energy:</strong> 250kW Solar + Battery Microgrid (VPP Revenue + Resilience).</li>
          </ol>
          <p className="mt-2"><strong>The Business:</strong> A high-margin veterinary practice sitting on top of a hard asset.</p>
        </div>
      </div>

      <div className="border-b border-stone-200 pb-4">
        <h4 className="font-bold text-gray-900">Slide 4: The Anchor Tenant (Maison Vet)</h4>
        <p className="font-semibold text-green-deep">Headline: "Elite Veterinary Care"</p>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          <li><strong>Founder:</strong> Emily Gray, DVM.</li>
          <li><strong>Model:</strong> Advanced Diagnostics + Surgery + Equine/Large Animal.</li>
          <li><strong>Revenue:</strong> Projected $X.XM Year 1. (Conservative estimates).</li>
        </ul>
      </div>

      <div className="border-b border-stone-200 pb-4">
        <h4 className="font-bold text-gray-900">Slide 5: The Financial Structure (Collateral First)</h4>
        <p className="font-semibold text-green-deep">Headline: "A Multi-Tranche Capital Stack"</p>
        <p className="mt-1 text-sm"><strong>The Ask:</strong> Senior Debt (Land Acquisition).</p>
        <div className="mt-2 text-sm text-gray-700">
          <strong>The Stack:</strong>
          <ul className="list-disc pl-5 mt-1">
            <li><strong>Senior Debt:</strong> Land & Core Infrastructure. (Low LTV, High Collateral).</li>
            <li><strong>C-PACE (Green Finance):</strong> Solar & Efficiency. (Non-recourse, tax assessment).</li>
            <li><strong>SBA 504:</strong> Clinic Construction. (Long-term fixed).</li>
          </ul>
        </div>
      </div>

      <div className="border-b border-stone-200 pb-4">
        <h4 className="font-bold text-gray-900">Slide 6: Risk Mitigation</h4>
        <p className="font-semibold text-green-deep">Headline: "De-Risking the Asset"</p>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          <li><strong>Collateral Coverage:</strong> Land value + Water Rights value &gt; Loan Amount.</li>
          <li><strong>DSCR:</strong> Clinic revenue + VPP energy revenue + Agricultural revenue covers debt service.</li>
          <li><strong>Execution Team:</strong> Tim Hobert (Tech/Ops), Emily Gray (Clinical), Rachael Gray (Ops).</li>
        </ul>
      </div>

      <div className="pb-4">
        <h4 className="font-bold text-gray-900">Slide 7: The Ask</h4>
        <p className="font-semibold text-green-deep">Headline: "Partnership for the Next 20 Years"</p>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          <li><strong>Next Steps:</strong> Site selection (in progress), Pre-application conference.</li>
          <li><strong>Closing:</strong> "We are building a legacy asset. We want a Tier 1 partner."</li>
        </ul>
      </div>

    </div>
  </div>
);

const LegalChecklist = () => (
  <div className="prose prose-stone max-w-none">
    <h3 className="text-xl font-serif text-green-deep mb-4">CA Professional Corp Formation</h3>
    <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
      
      <div className="mb-8">
        <h4 className="font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Action Items (Blocked)</h4>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <p className="font-bold text-amber-800 text-sm mb-2">Needs Decision from Tim/Emily:</p>
          <ol className="list-decimal pl-5 text-sm text-amber-900 space-y-1">
            <li><strong>Name Choice:</strong> Provide 3 top choices (Must contain "Veterinary", "Animal Hospital", etc.).</li>
            <li><strong>Agent for Service:</strong> Name and physical CA address.</li>
            <li><strong>Shareholder:</strong> Confirm Emily Gray is the sole shareholder.</li>
            <li><strong>Officer Roles:</strong> Confirm Emily will be CEO, Secretary, and CFO.</li>
          </ol>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-gray-900 text-lg">Phase 1: Preparation (Immediate)</h4>
          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-2">
            <li><span className="text-red-500 font-bold">[ ]</span> <strong>Choose a Corporate Name:</strong> Check CA Secretary of State database for conflicts.</li>
            <li><span className="text-red-500 font-bold">[ ]</span> <strong>Designate Initial Agent:</strong> Must be physical CA address (no PO Boxes).</li>
            <li><span className="text-red-500 font-bold">[ ]</span> <strong>Determine Share Structure:</strong> e.g., 1,000 shares authorized.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 text-lg">Phase 2: Drafting & Filing (Execution)</h4>
          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-2">
            <li><span className="text-gray-400 font-bold">[ ]</span> <strong>Draft Articles of Incorporation (Form ARTS-PC):</strong> Purpose clause for veterinary medicine.</li>
            <li><span className="text-gray-400 font-bold">[ ]</span> <strong>File Articles:</strong> Online via bizfileOnline.sos.ca.gov. ($100 + fees).</li>
            <li><span className="text-gray-400 font-bold">[ ]</span> <strong>Draft Bylaws:</strong> Include specific PC share transfer restrictions.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 text-lg">Phase 3: Post-Incorporation (Within 90 Days)</h4>
          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-2">
            <li><span className="text-gray-400 font-bold">[ ]</span> <strong>File Statement of Information (Form SI-200):</strong> $25 fee.</li>
            <li><span className="text-gray-400 font-bold">[ ]</span> <strong>Obtain EIN:</strong> IRS Form SS-4 (Online).</li>
            <li><span className="text-gray-400 font-bold">[ ]</span> <strong>File Limited Offering Exemption (25102(f)):</strong> CA Dept of Financial Protection.</li>
            <li><span className="text-gray-400 font-bold">[ ]</span> <strong>Register with Veterinary Medical Board:</strong> Attach certified Articles.</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
);

export default function ClientDashboard({ user }: { user?: { name?: string | null } }) {
  const [activeTab, setActiveTab] = useState<"operations" | "pitch" | "legal">("operations");

  return (
    <section>
      <header className="mb-8 border-b border-gray-200 pb-6">
        <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
          Operations Dashboard
        </p>
        <h1 className="font-serif text-3xl font-light text-green-deep">
          Maison Vet Overview
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Secure project documentation for Tim, Emily, and Rachael.
        </p>
      </header>

      <div className="mb-8">
        <nav className="flex space-x-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("operations")}
            className={`pb-3 text-sm font-medium transition-colors ${
              activeTab === "operations"
                ? "border-b-2 border-green-deep text-green-deep"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Summary
          </button>
          <button
            onClick={() => setActiveTab("pitch")}
            className={`pb-3 text-sm font-medium transition-colors ${
              activeTab === "pitch"
                ? "border-b-2 border-green-deep text-green-deep"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Pitch Deck
          </button>
          <button
            onClick={() => setActiveTab("legal")}
            className={`pb-3 text-sm font-medium transition-colors ${
              activeTab === "legal"
                ? "border-b-2 border-green-deep text-green-deep"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Legal & Formation
          </button>
        </nav>
      </div>

      <div className="min-h-[500px]">
        {activeTab === "operations" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Financials", desc: "P&L, burn rate, capital deployment.", status: "Coming soon" },
              { title: "Team Schedule", desc: "Staff scheduling and shifts.", status: "Coming soon" },
              { title: "Compound", desc: "Solar/Water status monitor.", status: "Coming soon" },
              { title: "Triage Queue", desc: "AI-assisted intake.", status: "Coming soon" },
              { title: "VPP Revenue", desc: "Grid support earnings.", status: "Coming soon" },
              { title: "Wellness", desc: "Subscription plans.", status: "Coming soon" },
            ].map((module, i) => (
              <article key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h2 className="font-semibold text-green-deep text-sm mb-1">{module.title}</h2>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{module.desc}</p>
                <span className="text-[10px] tracking-wider uppercase bg-gray-100 text-gray-500 px-2 py-1 rounded-full">{module.status}</span>
              </article>
            ))}
          </div>
        )}

        {activeTab === "pitch" && <PitchDeck />}
        {activeTab === "legal" && <LegalChecklist />}
      </div>
    </section>
  );
}
