export const LegalChecklist = () => (
  <div className="prose prose-stone max-w-none">
    <h3 className="text-xl font-serif text-stone-900 mb-4">CA Professional Corp Formation</h3>
    <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
      
      <div className="mb-12">
        <h4 className="font-bold text-stone-900 border-b border-stone-200 pb-2 mb-6">Equity & Corporate Structure</h4>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-stone-50 p-6 rounded-lg border border-stone-100 flex flex-col h-full">
            <p className="text-[10px] font-bold tracking-widest uppercase text-stone-500 mb-2">Land Holding LLC</p>
            <p className="text-xs text-stone-600 mb-4 font-serif italic">Owning Land, Water & Energy Assets</p>
            <ul className="space-y-2 mt-auto">
              <li className="flex justify-between text-xs font-medium"><span>Emily Gray</span> <span className="font-mono text-stone-900">33.3%</span></li>
              <li className="flex justify-between text-xs font-medium"><span>Rachael Gray</span> <span className="font-mono text-stone-900">33.3%</span></li>
              <li className="flex justify-between text-xs font-medium"><span>Tim Hobert</span> <span className="font-mono text-stone-900">33.3%</span></li>
            </ul>
          </div>
          <div className="bg-stone-50 p-6 rounded-lg border border-stone-100 flex flex-col h-full">
            <p className="text-[10px] font-bold tracking-widest uppercase text-stone-500 mb-2">Management LLC</p>
            <p className="text-xs text-stone-600 mb-4 font-serif italic">Operational Infrastructure & Brand</p>
            <ul className="space-y-2 mt-auto">
              <li className="flex justify-between text-xs font-medium"><span>Emily Gray</span> <span className="font-mono text-stone-900">33.3%</span></li>
              <li className="flex justify-between text-xs font-medium"><span>Rachael Gray</span> <span className="font-mono text-stone-900">33.3%</span></li>
              <li className="flex justify-between text-xs font-medium"><span>Tim Hobert</span> <span className="font-mono text-stone-900">33.3%</span></li>
            </ul>
          </div>
          <div className="bg-stone-50 p-6 rounded-lg border border-stone-100 flex flex-col h-full">
            <p className="text-[10px] font-bold tracking-widest uppercase text-stone-500 mb-2">Maison Vet, PC</p>
            <p className="text-xs text-stone-600 mb-4 font-serif italic">Professional Medical Entity (Clinical)</p>
            <ul className="space-y-2 mt-auto">
              <li className="flex justify-between text-xs font-medium"><span>Emily Gray, DVM</span> <span className="font-mono text-stone-900">100%</span></li>
              <li className="text-[10px] text-stone-400 italic mt-2 leading-tight">CA Board regulation requires 100% licensed ownership.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-bold text-stone-900 border-b border-stone-200 pb-2 mb-4">Action Items (Blocked)</h4>
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
          <h4 className="font-bold text-stone-900 text-lg">Phase 1: Preparation (Immediate)</h4>
          <ul className="list-disc pl-5 mt-2 text-sm text-stone-700 space-y-2">
            <li><span className="text-red-500 font-bold">[ ]</span> <strong>Choose a Corporate Name:</strong> Check CA Secretary of State database for conflicts.</li>
            <li><span className="text-red-500 font-bold">[ ]</span> <strong>Designate Initial Agent:</strong> Must be physical CA address (no PO Boxes).</li>
            <li><span className="text-red-500 font-bold">[ ]</span> <strong>Determine Share Structure:</strong> e.g., 1,000 shares authorized.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-stone-900 text-lg">Phase 2: Drafting & Filing (Execution)</h4>
          <ul className="list-disc pl-5 mt-2 text-sm text-stone-700 space-y-2">
            <li><span className="text-stone-400 font-bold">[ ]</span> <strong>Draft Articles of Incorporation (Form ARTS-PC):</strong> Purpose clause for veterinary medicine.</li>
            <li><span className="text-stone-400 font-bold">[ ]</span> <strong>File Articles:</strong> Online via bizfileOnline.sos.ca.gov. ($100 + fees).</li>
            <li><span className="text-stone-400 font-bold">[ ]</span> <strong>Draft Bylaws:</strong> Include specific PC share transfer restrictions.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-stone-900 text-lg">Phase 3: Post-Incorporation (Within 90 Days)</h4>
          <ul className="list-disc pl-5 mt-2 text-sm text-stone-700 space-y-2">
            <li><span className="text-stone-400 font-bold">[ ]</span> <strong>File Statement of Information (Form SI-200):</strong> $25 fee.</li>
            <li><span className="text-stone-400 font-bold">[ ]</span> <strong>Obtain EIN:</strong> IRS Form SS-4 (Online).</li>
            <li><span className="text-stone-400 font-bold">[ ]</span> <strong>File Limited Offering Exemption (25102(f)):</strong> CA Dept of Financial Protection.</li>
            <li><span className="text-stone-400 font-bold">[ ]</span> <strong>Register with Veterinary Medical Board:</strong> Attach certified Articles.</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
);
