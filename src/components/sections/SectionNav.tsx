"use client";

import { useEffect, useState } from "react";

const sections = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "Core", href: "#pillars" },
  { label: "Campus", href: "#campus" },
  { label: "Capital", href: "#capital" },
  { label: "Location", href: "#location" },
  { label: "Financials", href: "#financials" },
  { label: "Timeline", href: "#timeline" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const ids = sections.map((s) => s.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Topmost visible section (smallest top value)
          const topmost = visible.reduce((a, b) =>
            (a.boundingClientRect?.top ?? Infinity) < (b.boundingClientRect?.top ?? Infinity) ? a : b
          );
          setActiveId(topmost.target.id);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page Section Navigation"
      data-agent-purpose="page-section-anchors"
      data-agent-interactive="anchor-navigation"
      className="sticky z-40 overflow-x-auto border-b border-stone-200 bg-white/95 backdrop-blur-md"
      style={{ top: "var(--header-height, 4rem)" }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ul className="flex h-11 items-center gap-1 whitespace-nowrap">
          {sections.map((s) => {
            const id = s.href.slice(1);
            const isActive = activeId === id;
            return (
              <li key={s.href}>
                <a
                  href={s.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-stone-100 text-stone-900"
                      : "text-stone-500 hover:bg-stone-100 hover:text-stone-900"
                  }`}
                  itemProp="url"
                >
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
