"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useState } from "react";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/#contact" },
];

const rooftopLinks = [
  { label: "Vision", href: "/vision" },
  { label: "Properties", href: "/properties" },
  { label: "Perris", href: "/perris" },
  { label: "Dashboard", href: "/dashboard" },
];

export default function NavMobileMenu({
  user,
  signOutAction,
}: {
  user: boolean;
  signOutAction: () => Promise<void>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="-m-2 inline-flex items-center justify-center rounded-lg p-2 text-stone-600 outline-none transition-colors hover:bg-stone-100 hover:text-stone-900 focus-visible:ring-2 focus-visible:ring-stone-900"
        aria-label="Open navigation menu"
      >
        <Bars3Icon className="size-6" aria-hidden />
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-stone-950/30 backdrop-blur-sm transition duration-200 data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 flex justify-end">
          <DialogPanel
            transition
            className="fixed top-0 right-0 flex h-full w-full max-w-sm flex-col bg-white shadow-xl transition duration-200 data-[closed]:translate-x-full"
          >
            <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4">
              <span className="text-sm font-semibold text-stone-900">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-m-2 rounded-lg p-2 text-stone-600 outline-none transition-colors hover:bg-stone-100 hover:text-stone-900 focus-visible:ring-2 focus-visible:ring-stone-900"
                aria-label="Close menu"
              >
                <XMarkIcon className="size-5" aria-hidden />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-4" aria-label="Mobile navigation">
              <div className="space-y-1">
                {primaryLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-900"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              {user && (
                <>
                  <div className="my-6 border-t border-stone-200" />
                  <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Operational
                  </p>
                  <div className="space-y-1">
                    {rooftopLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-base font-medium text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-900"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                  <div className="my-6 border-t border-stone-200" />
                  <form action={signOutAction}>
                    <button
                      type="submit"
                      className="block w-full rounded-lg px-3 py-2.5 text-left text-base font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
                      onClick={() => setOpen(false)}
                    >
                      Log out
                    </button>
                  </form>
                </>
              )}
              {!user && (
                <>
                  <div className="my-6 border-t border-stone-200" />
                  <a
                    href="/sign-in"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg bg-stone-900 px-3 py-2.5 text-center text-base font-semibold text-white transition-colors hover:bg-stone-800"
                  >
                    Sign in
                  </a>
                </>
              )}
            </nav>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
