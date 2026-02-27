import { auth } from "@/auth";
import { signOut } from "@/auth";
import PrimaryNavLinks from "./PrimaryNavLinks";
import NavRooftop from "./NavRooftop";
import NavUserMenu from "./NavUserMenu";
import NavMobileMenu from "./NavMobileMenu";

async function signOutAction() {
  "use server";
  await signOut({ redirectTo: "/" });
}

export default async function Nav() {
  const session = await auth();
  const user = session?.user;
  const firstName = user?.name?.split(" ")[0] ?? user?.email;

  return (
    <header
      itemScope
      itemType="https://schema.org/WPHeader"
      data-agent-purpose="site-branding-and-navigation"
      className={`fixed top-0 left-0 right-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-md ${user ? "" : ""}`}
    >
      {user && <NavRooftop />}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="/"
          rel="home"
          aria-label="Maison Vet — Return to homepage"
          className="font-serif text-lg font-normal tracking-wide text-stone-900 transition-colors hover:text-stone-600"
          itemProp="url"
        >
          <span itemProp="name">Maison Vet</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <nav
            aria-label="Primary Site Navigation"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            data-agent-interactive="routing"
          >
            <PrimaryNavLinks />
          </nav>
          <div className="ml-2 h-5 w-px bg-stone-200" aria-hidden />
          {user ? (
            <NavUserMenu firstName={firstName ?? "User"} signOutAction={signOutAction} />
          ) : (
            <a
              href="/sign-in"
              className="rounded-lg bg-stone-900 px-4 py-2 text-sm font-semibold text-white outline-none transition-colors hover:bg-stone-800 focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
              data-agent-action="initiate-sign-in"
            >
              Sign in
            </a>
          )}
        </div>

        <div className="flex md:hidden">
          <NavMobileMenu user={!!user} signOutAction={signOutAction} />
        </div>
      </div>
    </header>
  );
}
