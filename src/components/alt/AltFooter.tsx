import Link from "next/link";

const navigation = {
  project: [
    { name: "Opportunity", href: "#opportunity" },
    { name: "Campus", href: "#campus" },
    { name: "Capital", href: "#capital" },
    { name: "Location", href: "#location" },
    { name: "Financials", href: "#financials" },
    { name: "Contact", href: "#contact" },
  ],
  site: [
    { name: "Home", href: "/" },
    { name: "Alt Home", href: "/alt" },
    { name: "Vision", href: "/vision" },
  ],
};

export default function AltFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-xl font-bold text-stone-900">
              Maison Vet
            </Link>
            <p className="text-balance text-sm text-stone-600">
              Medicine, Land, Water &amp; Power. A vertically integrated veterinary clinic and campus in North San Diego County.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-stone-900">Project</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.project.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-stone-600 hover:text-stone-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-stone-900">Site</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.site.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-stone-600 hover:text-stone-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-stone-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm text-stone-600">&copy; {new Date().getFullYear()} Maison Vet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
