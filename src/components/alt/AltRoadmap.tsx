const timeline = [
  { name: "Capital & Land", phase: "Phase 1", date: "Months 1–6", dateTime: "2025-01", description: "Secure land under contract. Finalize SBA 504 pre-qualification. Engage C-PACE provider." },
  { name: "Infrastructure", phase: "Phase 2", date: "Months 7–18", dateTime: "2025-07", description: "Close land acquisition. Begin modular clinic construction. Install solar and battery system." },
  { name: "Systems & Staff", phase: "Phase 3", date: "Months 19–21", dateTime: "2026-07", description: "Install CT and MRI equipment. Deploy AI triage. Hire senior RVTs. Complete fire mitigation." },
  { name: "Launch", phase: "Phase 4", date: "Months 22–24", dateTime: "2026-10", description: "Grand opening. Activate VPP enrollment. Begin agricultural operations. Break-even target." },
];

export default function AltRoadmap() {
  return (
    <div className="bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Roadmap</h2>
          <p className="mt-6 text-lg text-stone-600">Execution Plan — 24 months. Four phases.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name} className="relative">
              <time dateTime={item.dateTime} className="flex items-center text-sm font-semibold text-stone-600">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
              </time>
              <p className="mt-6 text-lg font-semibold tracking-tight text-stone-900">{item.phase}</p>
              <p className="mt-1 text-base font-semibold text-stone-900">{item.name}</p>
              <p className="mt-2 text-base text-stone-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
