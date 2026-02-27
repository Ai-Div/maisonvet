"use client";

import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

const navigation = [
  { name: "Medicine", href: "#opportunity" },
  { name: "Land", href: "#campus" },
  { name: "Water", href: "#core-infra" },
  { name: "Power", href: "#core-infra" },
  { name: "Contact", href: "#contact" },
];

function MenuIcon() {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export default function AltHero() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => detailsRef.current?.removeAttribute("open");

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav aria-label="Global" className="flex items-center justify-between lg:justify-start">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Maison Vet</span>
                <span className="text-xl font-bold text-stone-900">Maison Vet</span>
              </Link>
              <details ref={detailsRef} className="relative lg:hidden group" data-menu="mobile">
                <summary className="-m-2.5 list-none cursor-pointer rounded-md p-2.5 text-stone-700" aria-label="Open main menu">
                  <MenuIcon />
                </summary>
                <div className="fixed inset-0 z-40" aria-hidden="true" />
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-stone-900/10">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-stone-900">Maison Vet</span>
                  </div>
                  <nav className="mt-6 flow-root" aria-label="Mobile navigation">
                    <div className="-my-6 divide-y divide-stone-500/10">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={closeMenu}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-stone-900 hover:bg-stone-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </nav>
                </div>
              </details>
              <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="text-sm font-semibold text-stone-900">
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block">
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-pretty text-5xl font-semibold tracking-tight text-stone-900 sm:text-7xl">
                  Medicine, Land, Water &amp; Power.
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-stone-600 sm:text-xl">
                  A vertically integrated veterinary clinic and campus — built on land we own, powered by energy we generate, and watered by rights that cannot be taken away.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link href="#opportunity" className="rounded-md bg-stone-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-stone-800">
                    The Opportunity
                  </Link>
                  <Link href="#contact" className="text-sm font-semibold text-stone-900">
                    Contact <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-stone-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            alt="Maison Vet campus"
            src="https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80"
            width={1587}
            height={1058}
            className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}
