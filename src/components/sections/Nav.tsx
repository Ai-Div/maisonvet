import { auth } from "@/auth";
import { signOut } from "@/auth";

const primaryLinks = [
  { label: "About", href: "/about" },
  { label: "The Compound", href: "/compound" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default async function Nav() {
  const session = await auth();
  const user = session?.user;
  const firstName = user?.name?.split(" ")[0] ?? user?.email;

  return (
    <header
      itemScope
      itemType="https://schema.org/WPHeader"
      data-agent-purpose="site-branding-and-navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-green-deep/95 backdrop-blur-md border-b border-white/5"
    >
      <div className="mx-auto max-w-[1100px] px-6 flex items-center justify-between h-16">

        {/* Brand */}
        <a
          href="/"
          rel="home"
          aria-label="Maison Vet — Return to homepage"
          className="font-serif text-2xl text-gold tracking-wide"
          itemProp="url"
        >
          <span itemProp="name">Maison Vet</span>
        </a>

        {/* Desktop: primary nav + auth state */}
        <div className="hidden md:flex items-center gap-8">
          <nav
            aria-label="Primary Site Navigation"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            data-agent-interactive="routing"
          >
            <ul className="flex items-center gap-8">
              {primaryLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    itemProp="url"
                    className="text-xs tracking-[0.2em] uppercase text-cream/70 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold rounded-sm transition-colors duration-200"
                  >
                    <span itemProp="name">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Auth state */}
          {user ? (
            <details
              className="relative"
              data-agent-purpose="user-menu"
            >
              <summary
                className="list-none cursor-pointer flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-cream/70 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold rounded-sm px-1 transition-colors select-none"
                aria-label={`User menu for ${firstName}`}
                aria-haspopup="menu"
              >
                {firstName}
                <svg aria-hidden="true" className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <nav
                aria-label="User Account Navigation"
                role="menu"
                className="absolute right-0 top-full mt-3 w-44 bg-green-deep border border-white/10 rounded-xl shadow-xl overflow-hidden"
                data-agent-purpose="user-account-menu"
              >
                <ul className="py-1">
                  <li role="none">
                    <a
                      href="/dashboard"
                      role="menuitem"
                      className="block px-4 py-2 text-xs tracking-wider uppercase text-cream/70 hover:text-gold hover:bg-white/5 transition-colors"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li role="none">
                    <a
                      href="/properties"
                      role="menuitem"
                      className="block px-4 py-2 text-xs tracking-wider uppercase text-cream/70 hover:text-gold hover:bg-white/5 transition-colors"
                    >
                      Properties
                    </a>
                  </li>
                  <li role="none">
                    <a
                      href="/perris"
                      role="menuitem"
                      className="block px-4 py-2 text-xs tracking-wider uppercase text-cream/70 hover:text-gold hover:bg-white/5 transition-colors"
                    >
                      Perris Analysis
                    </a>
                  </li>
                  <li role="none" className="border-t border-white/5">
                    <form
                      action={async () => {
                        "use server";
                        await signOut({ redirectTo: "/" });
                      }}
                    >
                      <button
                        type="submit"
                        role="menuitem"
                        className="w-full text-left px-4 py-2.5 text-xs tracking-wider uppercase text-cream/50 hover:text-gold hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-gold transition-colors"
                        data-agent-action="sign-out"
                      >
                        Sign out
                      </button>
                    </form>
                  </li>
                </ul>
              </nav>
            </details>
          ) : (
            <a
              href="/sign-in"
              className="text-xs tracking-[0.2em] uppercase text-gold border border-gold/40 rounded-lg px-4 py-1.5 hover:bg-gold/10 focus-visible:ring-2 focus-visible:ring-gold transition-colors"
              data-agent-action="initiate-sign-in"
            >
              Sign In
            </a>
          )}
        </div>

        {/* Mobile: details/summary burger */}
        <details className="md:hidden" data-agent-purpose="mobile-navigation">
          <summary
            className="list-none cursor-pointer text-cream/70 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold rounded-sm p-1 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </summary>
          <nav
            aria-label="Mobile Navigation"
            className="absolute top-16 left-0 right-0 bg-green-deep/98 border-t border-white/5 px-6 py-5 space-y-4"
          >
            <ul className="space-y-3">
              {primaryLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs tracking-[0.2em] uppercase text-cream/70 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-3 border-t border-white/5">
              {user ? (
                <div className="space-y-3">
                  <a
                    href="/dashboard"
                    className="block text-xs tracking-[0.2em] uppercase text-gold"
                  >
                    Dashboard
                  </a>
                  <a
                    href="/properties"
                    className="block text-xs tracking-[0.2em] uppercase text-cream/70 hover:text-gold"
                  >
                    Properties
                  </a>
                  <a
                    href="/perris"
                    className="block text-xs tracking-[0.2em] uppercase text-cream/70 hover:text-gold"
                  >
                    Perris Analysis
                  </a>
                  <form
                    action={async () => {
                      "use server";
                      await signOut({ redirectTo: "/" });
                    }}
                  >
                    <button
                      type="submit"
                      className="text-xs tracking-[0.2em] uppercase text-cream/40 hover:text-gold transition-colors"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              ) : (
                <a
                  href="/sign-in"
                  className="text-xs tracking-[0.2em] uppercase text-gold"
                >
                  Sign In
                </a>
              )}
            </div>
          </nav>
        </details>

      </div>
    </header>
  );
}
