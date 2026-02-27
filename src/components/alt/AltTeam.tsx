const people = [
  { name: "Emily Gray, DVM", role: "Veterinary Medicine", description: "Licensed DVM with a career built around horses. Oversees clinical planning, regulatory licensing, and staffing." },
  { name: "Rachael Gray", role: "Operations", description: "Operations Manager with multi-location high-end service experience. Brings systems thinking and operational discipline." },
  { name: "Tim Hobert", role: "Infrastructure and Capital", description: "Owner of div.digital. Leads capital structure, digital systems, and AI workflow implementation." },
];

export default function AltTeam() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">The Team</h2>
          <p className="mt-6 text-lg text-stone-600">Three operators. Medicine, execution, and architecture.</p>
        </div>
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {people.map((person) => (
            <li key={person.name} className="flex flex-col">
              <div className="aspect-[14/13] w-full rounded-2xl bg-stone-100 outline outline-1 -outline-offset-1 outline-stone-900/5" />
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-stone-900">{person.name}</h3>
              <p className="text-base font-semibold text-stone-600">{person.role}</p>
              <p className="mt-2 text-sm text-stone-600">{person.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
