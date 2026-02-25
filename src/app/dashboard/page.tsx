import { auth } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <section
      data-agent-purpose="dashboard-overview"
      data-agent-topic="operational-summary"
    >
      <header className="mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
          Dashboard
        </p>
        <h1 className="font-serif text-4xl font-light text-green-deep">
          Welcome back{session?.user?.name ? `, ${session.user.name.split(" ")[0]}` : ""}.
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Internal operations — Maison Vet
        </p>
      </header>

      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        data-agent-purpose="module-grid"
      >
        {[
          {
            title: "Financial Overview",
            desc: "P&L, burn rate, and capital deployment tracking.",
            status: "Coming soon",
          },
          {
            title: "Team Schedule",
            desc: "Staff scheduling and shift management.",
            status: "Coming soon",
          },
          {
            title: "Compound Monitor",
            desc: "Solar, water, and energy systems status.",
            status: "Coming soon",
          },
          {
            title: "AI Triage Queue",
            desc: "Incoming triage requests and AI-assisted prioritization.",
            status: "Coming soon",
          },
          {
            title: "VPP Revenue",
            desc: "Virtual Power Plant enrollment and revenue tracking.",
            status: "Coming soon",
          },
          {
            title: "Wellness Plans",
            desc: "Subscription plan management and recurring revenue.",
            status: "Coming soon",
          },
        ].map((module, i) => (
          <article
            key={i}
            className="bg-white border border-gray-100 rounded-2xl p-6"
            data-agent-topic="dashboard-module"
            aria-label={module.title}
          >
            <h2 className="font-semibold text-green-deep text-sm mb-1">
              {module.title}
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              {module.desc}
            </p>
            <span className="text-[10px] tracking-wider uppercase bg-green-deep/8 text-green-deep/50 px-2 py-1 rounded-full">
              {module.status}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
