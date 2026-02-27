"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ArrowRightStartOnRectangleIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

export default function NavUserMenu({
  firstName,
  signOutAction,
}: {
  firstName: string;
  signOutAction: () => Promise<void>;
}) {
  return (
    <Menu as="div" className="relative">
      <MenuButton
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-stone-600 outline-none transition-colors hover:bg-stone-100 hover:text-stone-900 focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 data-[active]:bg-stone-100 data-[active]:text-stone-900"
        aria-label={`User menu for ${firstName}`}
      >
        <span className="max-w-[120px] truncate">{firstName}</span>
        <ChevronDownIcon className="size-4 shrink-0 text-stone-400" aria-hidden />
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        transition
        className="mt-2 w-52 origin-top-right rounded-xl bg-white/95 p-1 shadow-lg ring-1 ring-stone-200 backdrop-blur-md transition duration-100 focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          {({ focus }) => (
            <form action={signOutAction}>
              <button
                type="submit"
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                  focus ? "bg-stone-100 text-stone-900" : "text-stone-700"
                }`}
              >
                <ArrowRightStartOnRectangleIcon className="size-4 shrink-0 text-stone-500" />
                Log out
              </button>
            </form>
          )}
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
