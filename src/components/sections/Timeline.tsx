const phases = [
  {
    phase: "Phase 1",
    title: "Capital & Land",
    months: "Months 1–6",
    active: true,
    items: [
      "Secure land under contract (LOI → PSA)",
      "Finalize SBA 504 pre-qualification",
      "Engage C-PACE provider for solar financing",
      "Complete environmental & well testing",
      "Establish LLC / operating entity structure",
    ],
  },
  {
    phase: "Phase 2",
    title: "Infrastructure",
    months: "Months 7–18",
    active: false,
    items: [
      "Close land acquisition",
      "Begin modular clinic construction",
      "Install solar microgrid + battery system",
      "Drill / rehabilitate well + storage tanks",
      "Build primary residence + vet cottage",
    ],
  },
  {
    phase: "Phase 3",
    title: "Systems & Staff",
    months: "Months 19–21",
    active: false,
    items: [
      "Install CT and MRI equipment",
      "Deploy AI triage + practice management stack",
      "Hire senior RVTs and support staff",
      "Soft-launch wellness subscription program",
      "Complete fire mitigation + defensible space",
    ],
  },
  {
    phase: "Phase 4",
    title: "Launch",
    months: "Months 22–24",
    active: false,
    items: [
      "Grand opening — by appointment",
      "Activate VPP enrollment with SDG&E",
      "Begin agricultural operations (Phase 3 prep)",
      "Launch referral network with regional vets",
      "First revenue milestone — break-even target",
    ],
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      data-agent-purpose="execution-roadmap"
      data-agent-topic="project-phases"
      className="bg-white py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">Roadmap</p>
        <h2 className="font-serif text-4xl sm:text-5xl font-light text-green-deep mb-3">
          Execution Plan
        </h2>
        <p className="text-gray-500 mb-16">24 months. Four phases.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p, i) => (
            <article
              key={i}
              aria-labelledby={"phase-" + i + "-title"}
              data-agent-topic="project-phase"
              {...(p.active ? { "aria-current": "step" as const } : {})}
              className={`rounded-2xl p-6 ${
                p.active
                  ? "bg-green-deep text-cream"
                  : "bg-gray-50 text-green-deep"
              }`}
            >
              <p className={`text-xs tracking-wider uppercase ${p.active ? "text-gold" : "text-gold"}`}>
                {p.phase} {p.active && "— Current"}
              </p>
              <h3
                id={"phase-" + i + "-title"}
                className={`font-serif text-xl mt-1 mb-1 ${p.active ? "text-cream" : "text-green-deep"}`}
              >
                {p.title}
              </h3>
              <p className={`text-xs mb-4 ${p.active ? "text-cream/50" : "text-gray-400"}`}>
                {p.months}
              </p>
              <ul className="space-y-2 list-disc list-inside">
                {p.items.map((item, j) => (
                  <li key={j} className={`text-xs leading-relaxed ${p.active ? "text-cream/70" : "text-gray-500"}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
