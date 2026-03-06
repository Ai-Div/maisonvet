'use client'

import { Avatar } from '@/components/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/dropdown'
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/navbar'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/sidebar'
import { SidebarLayout } from '@/components/sidebar-layout'
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from '@heroicons/react/16/solid'
import {
  Cog6ToothIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  CurrencyDollarIcon,
  PresentationChartLineIcon,
  ScaleIcon,
  EyeIcon,
  MapIcon,
  InboxIcon,
} from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'

function AccountDropdownMenu({ anchor, user }: { anchor: 'top start' | 'bottom end', user?: any }) {
  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      <DropdownItem href="/dashboard/settings">
        <UserCircleIcon />
        <DropdownLabel>My account</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/privacy">
        <ShieldCheckIcon />
        <DropdownLabel>Privacy policy</DropdownLabel>
      </DropdownItem>
      <DropdownItem href="#">
        <LightBulbIcon />
        <DropdownLabel>Share feedback</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem onClick={() => signOut()}>
        <ArrowRightStartOnRectangleIcon />
        <DropdownLabel>Sign out</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  )
}

export function ApplicationLayout({
  user,
  children,
}: {
  user?: any
  children: React.ReactNode
}) {
  let pathname = usePathname()

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src={user?.image} initials={!user?.image ? user?.name?.split(' ').map((n: string) => n[0]).join('') : undefined} square />
              </DropdownButton>
              <AccountDropdownMenu anchor="bottom end" user={user} />
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <Avatar src="/teams/catalyst.svg" />
                <SidebarLabel>Maison Vet</SidebarLabel>
                <ChevronDownIcon />
              </DropdownButton>
              <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
                <DropdownItem href="/dashboard/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="#">
                  <Avatar slot="icon" src="/teams/catalyst.svg" />
                  <DropdownLabel>Maison Vet</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SidebarHeader>

          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/dashboard" current={pathname === '/dashboard'}>
                <HomeIcon />
                <SidebarLabel>Dashboard</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/vision" current={pathname === '/vision'}>
                <EyeIcon />
                <SidebarLabel>Vision</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/properties" current={pathname === '/properties'}>
                <MapIcon />
                <SidebarLabel>Properties</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/perris" current={pathname === '/perris'}>
                <InboxIcon />
                <SidebarLabel>Perris</SidebarLabel>
              </SidebarItem>
            </SidebarSection>

            <SidebarHeading>Operational</SidebarHeading>

            <SidebarSection>
              <SidebarItem href="/dashboard/financials" current={pathname.startsWith('/dashboard/financials')}>
                <CurrencyDollarIcon />
                <SidebarLabel>Financials</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/dashboard/pitch" current={pathname.startsWith('/dashboard/pitch')}>
                <PresentationChartLineIcon />
                <SidebarLabel>Pitch Deck</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/dashboard/legal" current={pathname.startsWith('/dashboard/legal')}>
                <ScaleIcon />
                <SidebarLabel>Legal</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/dashboard/settings" current={pathname.startsWith('/dashboard/settings')}>
                <Cog6ToothIcon />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
            </SidebarSection>

            <SidebarSpacer />

            <SidebarSection>
              <SidebarItem href="#">
                <QuestionMarkCircleIcon />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="#">
                <SparklesIcon />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>

          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar src={user?.image} initials={!user?.image ? user?.name?.split(' ').map((n: string) => n[0]).join('') : undefined} className="size-10" square alt="" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 ">{user?.name || 'User'}</span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 ">
                      {user?.email || 'user@example.com'}
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <AccountDropdownMenu anchor="top start" user={user} />
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </SidebarLayout>
  )
}
