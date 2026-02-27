"use client";

import { usePathname } from "next/navigation";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/#contact" },
];

export default function PrimaryNavLinks() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <ul className="flex items-center gap-1">
      {primaryLinks.map((l) => {
        const isActive = l.href === "/" ? isHome : pathname === l.href;
        return (
          <li key={l.href}>
            <a
              href={l.href}
              itemProp="url"
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 ${
                isActive
                  ? "bg-stone-100 text-stone-900"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <span itemProp="name">{l.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
