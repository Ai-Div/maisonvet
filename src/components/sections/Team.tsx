const team = [
  {
    role: "Veterinary Medicine",
    name: "Emily Gray, DVM",
    bio: "Licensed Doctor of Veterinary Medicine with a career built entirely around horses before and through veterinary school. Prior to her DVM, Emily worked under Tatum Rice at T/K Cutting Horses in Weatherford, Texas — the cutting horse capital of the world, and one of the most decorated NCHA operations in the sport (Open World Champion, Open Riders Hall of Fame, nearly $3M in career earnings). She also spent time as part of the horse care team at Disneyland, Anaheim — a role demanding clinical precision, multi-discipline animal handling, and zero margin for error. This background is the reason Maison Vet has a built-in reputation before it opens. Emily's network spans elite performance horse owners, trainers, and the broader equestrian community of Southern California. She oversees all clinical planning, regulatory licensing, medical equipment specification, and staffing protocols.",
  },
  {
    role: "Operations",
    name: "Rachael Gray",
    bio: "Operations Manager with a background in running multi-location, high-end service businesses — including Laicale Salon in SoHo, NYC, one of the most recognized names in the industry. Brings the systems thinking, client experience standards, and operational discipline required to run a premium destination clinic at scale.",
  },
  {
    role: "Infrastructure and Capital",
    name: "Tim Hobert",
    bio: "Owner of div.digital, an AI consulting and technology firm serving enterprise clients across Orange County and San Diego. Economics background. Leads capital structure, digital systems architecture, and AI workflow implementation for the compound. Currently deploying agentic AI systems in production across multiple industries.",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      data-agent-purpose="leadership-team"
      itemScope
      itemType="https://schema.org/Organization"
      className="bg-stone-50 py-20 md:py-24 px-6"
      aria-labelledby="team-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-stone-600 mb-4">
          The Team
        </p>
        <h2
          id="team-heading"
          className="font-serif text-4xl md:text-5xl font-normal text-stone-900 leading-tight mb-16 max-w-xl"
        >
          Three operators.
          <br />
          Medicine, execution, and architecture.
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-stone-200">
          {team.map((t, i) => (
            <article
              key={i}
              itemScope
              itemType="https://schema.org/Person"
              data-agent-purpose="team-member"
              className="bg-white p-10"
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-stone-600 mb-4">
                {t.role}
              </p>
              <h3 itemProp="name" className="font-serif text-3xl font-normal text-stone-900 mb-4">
                {t.name}
              </h3>
              <p itemProp="description" className="text-base text-stone-700 leading-relaxed">
                {t.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
