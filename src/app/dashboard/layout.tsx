import { auth } from "@/auth";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard — Maison Vet",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div
      className="min-h-screen bg-cream-dark"
      data-agent-purpose="authenticated-dashboard-shell"
    >
      <header
        itemScope
        itemType="https://schema.org/WPHeader"
        data-agent-purpose="dashboard-navigation"
        className="bg-green-deep border-b border-white/5 px-6 py-4"
      >
        <div className="mx-auto max-w-[1100px] flex items-center justify-between">
          <a
            href="/dashboard"
            rel="home"
            aria-label="Dashboard home"
            className="font-serif text-xl text-gold tracking-wide"
          >
            Maison Vet
          </a>

          <nav
            aria-label="Dashboard Navigation"
            data-agent-interactive="routing"
          >
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="/dashboard"
                  aria-current="page"
                  className="text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors"
                >
                  Overview
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40">
              {session.user.email}
            </span>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button
                type="submit"
                className="text-xs tracking-widest uppercase text-cream/50 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold rounded-sm px-1 transition-colors"
                aria-label="Sign out of dashboard"
                data-agent-action="sign-out"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main
        id="primary-content"
        role="main"
        tabIndex={-1}
        className="outline-none mx-auto max-w-[1100px] px-6 py-12"
        data-agent-purpose="core-information-payload"
      >
        {children}
      </main>
    </div>
  );
}
