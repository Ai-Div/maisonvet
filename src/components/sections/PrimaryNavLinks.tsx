"use client";

import { useEffect, useState } from "react";

const primaryLinks = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "The Compound", href: "#pillars" },
  { label: "Capital", href: "#capital" },
  { label: "Location", href: "#location" },
  { label: "Financials", href: "#financials" },
  { label: "Contact", href: "#contact" },
];

function getHash() {
  if (typeof window === "undefined") return "";
  return window.location.hash || "";
}

export default function PrimaryNavLinks() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setActiveHash(getHash());
    const handleHashChange = () => setActiveHash(getHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <ul className="flex items-center gap-8">
      {primaryLinks.map((l) => {
        const isActive = activeHash === l.href;
        return (
          <li key={l.href}>
            <a
              href={l.href}
              itemProp="url"
              className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-stone-900 rounded-sm pb-0.5 border-b-2 ${
                isActive
                  ? "text-stone-900 border-stone-900"
                  : "text-stone-600 hover:text-stone-900 border-transparent"
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
