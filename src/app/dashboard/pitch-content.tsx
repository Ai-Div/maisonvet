export const PitchDeck = () => (
  <div className="prose prose-stone max-w-none">
    <h3 className="text-xl font-serif text-stone-900 mb-4">Pitch Deck (Lender Agnostic)</h3>
    <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 space-y-8">
      
      <div className="border-b border-stone-200 pb-4">
        <h4 className="font-bold text-stone-900">Slide 1: Title</h4>
        <p className="text-lg font-serif text-stone-900">Maison Vet: A Sovereign Veterinary Campus</p>
        <p className="italic text-stone-600">Subtitle: Vertical Infrastructure for the Future of Veterinary Medicine</p>
        <ul className="list-disc pl-5 mt-2 text-sm text-stone-700">
          <li><strong>Visual:</strong> High-quality rendering of the campus (solar array, clinic, agriculture).</li>
          <li><strong>Key Stat:</strong> "15 Acres. 75kW Microgrid. Adjudicated Water Rights."</li>
        </ul>
      </div>

      <div className="border-b border-stone-200 pb-4">
        <h4 className="font-bold text-stone-900">Slide 2: The Problem (The Traditional Model is Broken)</h4>
        <p className="font-semibold text-red-800">Headline: "The Rent-Seeking Trap"</p>
        <ul className="list-disc pl-5 mt-2 text-sm text-stone-700">
          <li>Traditional clinics are vulnerable to NNN lease escalation.</li>
          <li>Grid dependency = operational risk (power outages stop surgery).</li>
          <li>Water scarcity in CA is an existential threat to rural operations.</li>
          <li className="font-bold mt-1">The Gap: No one is building <em>resilient</em> veterinary infrastructure.</li>
        </ul>
      </div>

      <div className="border-b border-stone-200 pb-4">
        <h4 className="font-bold text-stone-900">Slide 3: The Solution (Sovereignty as a Service)</h4>
        <p className="font-semibold text-stone-900">Headline: "Owning the Entire Stack"</p>
        <div className="mt-2 text-sm text-stone-700">
          <strong>The Asset:</strong>
          <ol className="list-decimal pl-5 mt-1">
            <li><strong>Land:</strong> 15+ Acres in prime North County (Pauma/Valley Center).</li>
            <li><strong>Water:</strong> Senior Adjudicated Rights (San Luis Rey Basin). Inflation-proof.</li>
            <li><strong>Energy:</strong> 75kW Solar + Battery Microgrid (VPP Revenue + Resilience).</li>
          </ol>
          <p className="mt-2"><strong>The Business:</strong> A high-margin veterinary practice sitting on top of a hard asset.</p>
        </div>
      </div>

      <div className="border-b border-stone-200 pb-4">
        <h4 className="font-bold text-stone-900">Slide 4: The Anchor Tenant (Maison Vet)</h4>
        <p className="font-semibold text-stone-900">Headline: "Elite Veterinary Care"</p>
        <ul className="list-disc pl-5 mt-2 text-sm text-stone-700">
          <li><strong>Founder:</strong> Emily Gray, DVM.</li>
          <li><strong>Model:</strong> Advanced Diagnostics + Surgery + Equine/Large Animal.</li>
          <li><strong>Revenue:</strong> Projected $X.XM Year 1. (Conservative estimates).</li>
        </ul>
      </div>

      <div className="border-b border-stone-200 pb-4">
        <h4 className="font-bold text-stone-900">Slide 5: The Financial Structure (Collateral First)</h4>
        <p className="font-semibold text-stone-900">Headline: "A Multi-Tranche Capital Stack"</p>
        <p className="mt-1 text-sm"><strong>The Ask:</strong> Senior Debt (Land Acquisition).</p>
        <div className="mt-2 text-sm text-stone-700">
          <strong>The Stack:</strong>
          <ul className="list-disc pl-5 mt-1">
            <li><strong>Senior Debt:</strong> Land & Core Infrastructure. (Low LTV, High Collateral).</li>
            <li><strong>C-PACE (Green Finance):</strong> Solar & Efficiency. (Non-recourse, tax assessment).</li>
            <li><strong>SBA 504:</strong> Clinic Construction. (Long-term fixed).</li>
          </ul>
        </div>
      </div>

      <div className="border-b border-stone-200 pb-4">
        <h4 className="font-bold text-stone-900">Slide 6: Risk Mitigation</h4>
        <p className="font-semibold text-stone-900">Headline: "De-Risking the Asset"</p>
        <ul className="list-disc pl-5 mt-2 text-sm text-stone-700">
          <li><strong>Collateral Coverage:</strong> Land value + Water Rights value &gt; Loan Amount.</li>
          <li><strong>DSCR:</strong> Clinic revenue + VPP energy revenue + Agricultural revenue covers debt service.</li>
          <li><strong>Execution Team:</strong> Tim Hobert (Tech/Ops), Emily Gray (Clinical), Rachael Gray (Ops).</li>
        </ul>
      </div>

      <div className="pb-4">
        <h4 className="font-bold text-stone-900">Slide 7: The Ask</h4>
        <p className="font-semibold text-stone-900">Headline: "Partnership for the Next 20 Years"</p>
        <ul className="list-disc pl-5 mt-2 text-sm text-stone-700">
          <li><strong>Next Steps:</strong> Site selection (in progress), Pre-application conference.</li>
          <li><strong>Closing:</strong> "We are building a legacy asset. We want a Tier 1 partner."</li>
        </ul>
      </div>

    </div>
  </div>
);
