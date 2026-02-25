const team = [
  {
    name: "Tim Hobert",
    role: "Project Architect — Infrastructure & Capital",
    bio: "Founder of div.digital, an AI consulting practice serving mid-market and enterprise clients. Background in economics, infrastructure finance, and operational systems design. Responsible for capital structure, land acquisition, technology stack, and overall project architecture.",
  },
  {
    name: "Emily Gray, DVM",
    role: "Clinical Lead — Veterinary Medicine",
    bio: "Licensed DVM with California and DEA credentials. Experienced in clinical operations, advanced diagnostics, and emergency medicine. Responsible for clinic design, equipment selection, staffing plan, wellness program development, and regulatory compliance.",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      data-agent-purpose="leadership-team"
      itemScope
      itemType="https://schema.org/Organization"
      className="bg-cream-dark py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">Leadership</p>
        <h2 className="font-serif text-4xl sm:text-5xl font-light text-green-deep mb-16">
          The Team
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((t, i) => (
            <article
              key={i}
              itemScope
              itemType="https://schema.org/Person"
              data-agent-purpose="team-member"
              className="bg-white rounded-2xl p-8"
            >
              <h3 itemProp="name" className="font-serif text-2xl text-green-deep">{t.name}</h3>
              <p itemProp="jobTitle" className="text-sm text-gold mt-1 mb-4">{t.role}</p>
              <p itemProp="description" className="text-sm text-gray-500 leading-relaxed">{t.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
