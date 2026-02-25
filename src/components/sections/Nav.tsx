import { auth } from "@/auth";
import { signOut } from "@/auth";
import PrimaryNavLinks from "./PrimaryNavLinks";

const primaryLinks = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "The Compound", href: "#pillars" },
  { label: "Capital", href: "#capital" },
  { label: "Location", href: "#location" },
  { label: "Financials", href: "#financials" },
  { label: "Contact", href: "#contact" },
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
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200"
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a
          href="/"
          rel="home"
          aria-label="Maison Vet — Return to homepage"
          className="text-lg font-bold text-stone-900"
          itemProp="url"
        >
          <span itemProp="name">Maison Vet</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav
            aria-label="Primary Site Navigation"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            data-agent-interactive="routing"
          >
            <PrimaryNavLinks />
          </nav>

          {user ? (
            <details className="relative" data-agent-purpose="user-menu">
              <summary
                className="list-none cursor-pointer flex items-center gap-2 text-xs font-bold uppercase text-stone-600 hover:text-stone-900 focus-visible:ring-2 focus-visible:ring-stone-900 rounded-sm px-1 transition-colors select-none"
                aria-label={`User menu for ${firstName}`}
                aria-haspopup="menu"
              >
                {firstName}
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 opacity-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <nav
                aria-label="User Account Navigation"
                role="menu"
                className="absolute right-0 top-full mt-3 w-44 bg-white border border-stone-200 rounded-xl shadow-xl overflow-hidden"
                data-agent-purpose="user-account-menu"
              >
                <ul className="py-1">
                  <li role="none">
                    <a
                      href="/dashboard"
                      role="menuitem"
                      className="block px-4 py-2 text-xs font-bold uppercase text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li role="none">
                    <a
                      href="/properties"
                      role="menuitem"
                      className="block px-4 py-2 text-xs font-bold uppercase text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                    >
                      Properties
                    </a>
                  </li>
                  <li role="none">
                    <a
                      href="/perris"
                      role="menuitem"
                      className="block px-4 py-2 text-xs font-bold uppercase text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                    >
                      Perris Analysis
                    </a>
                  </li>
                  <li role="none" className="border-t border-stone-100">
                    <form
                      action={async () => {
                        "use server";
                        await signOut({ redirectTo: "/" });
                      }}
                    >
                      <button
                        type="submit"
                        role="menuitem"
                        className="w-full text-left px-4 py-2.5 text-xs font-bold uppercase text-stone-500 hover:text-stone-900 hover:bg-stone-50 focus-visible:ring-2 focus-visible:ring-stone-900 transition-colors"
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
              className="text-xs font-bold uppercase text-white bg-stone-900 px-4 py-2 hover:bg-stone-700 focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 transition-colors rounded-sm"
              data-agent-action="initiate-sign-in"
            >
              Sign In
            </a>
          )}
        </div>

        <details className="md:hidden group" data-agent-purpose="mobile-navigation">
          <summary
            className="list-none cursor-pointer text-stone-600 hover:text-stone-900 focus-visible:ring-2 focus-visible:ring-stone-900 rounded-sm p-2 -m-2 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </summary>
          <nav
            aria-label="Mobile Navigation"
            className="absolute top-16 left-0 right-0 bg-white border-t border-stone-200 px-6 py-5 shadow-xl"
          >
            <ul className="space-y-0">
              {primaryLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block py-4 border-b border-stone-100 text-sm font-semibold tracking-wider uppercase text-stone-700 hover:text-stone-900 transition-colors last:border-0"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4 mt-4 border-t border-stone-200">
              {user ? (
                <div className="space-y-3">
                  <a
                    href="/dashboard"
                    className="block text-xs font-semibold tracking-widest uppercase text-stone-900"
                  >
                    Dashboard
                  </a>
                  <a
                    href="/properties"
                    className="block text-xs font-bold uppercase text-stone-700 hover:text-stone-900"
                  >
                    Properties
                  </a>
                  <a
                    href="/perris"
                    className="block text-xs font-bold uppercase text-stone-700 hover:text-stone-900"
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
                      className="text-xs font-bold uppercase text-stone-500 hover:text-stone-900 transition-colors"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              ) : (
                <a
                  href="/sign-in"
                  className="block text-xs font-semibold tracking-widest uppercase text-stone-900"
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
