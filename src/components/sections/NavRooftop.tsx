"use client";

import { usePathname } from "next/navigation";

const rooftopLinks = [
  { label: "Vision", href: "/vision" },
  { label: "Properties", href: "/properties" },
  { label: "Perris", href: "/perris" },
  { label: "Dashboard", href: "/dashboard" },
];

export default function NavRooftop() {
  const pathname = usePathname();

  return (
    <div
      className="border-b border-stone-200 bg-stone-50"
      aria-label="Operational navigation"
    >
      <nav
        className="mx-auto flex h-11 max-w-6xl items-center justify-center gap-1 px-6"
        data-agent-interactive="routing"
      >
        {rooftopLinks.map((link) => {
          const isCurrent = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isCurrent
                  ? "bg-stone-200 text-stone-900"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
