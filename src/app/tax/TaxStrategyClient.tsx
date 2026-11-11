'use client'

import { Heading, Subheading } from '@/components/heading'
import { Text, TextLink, Strong } from '@/components/text'
import { Divider } from '@/components/divider'
import { Badge } from '@/components/badge'
import { DescriptionList, DescriptionTerm, DescriptionDetails } from '@/components/description-list'
import { baseline, keyNumbers2026, strategies, strListings, neededFromTim, thisYearChecklist, updated } from './tax-data'

const tierColor = {
  'Do now': 'green',
  'Bigger move': 'blue',
  Situational: 'amber',
  Avoid: 'red',
} as const

export default function TaxStrategyClient() {
  const ranked = strategies.filter((s) => s.tier !== 'Avoid')

  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Heading>Tax Strategy</Heading>
          <Text className="mt-1">Ways to lower the household tax bill as Div Digital grows, including real estate without owning a home.</Text>
        </div>
        <Badge color="blue">Researched {updated}</Badge>
      </header>

      <div className="rounded-xl border border-amber-500/30 bg-amber-50 p-4 dark:bg-amber-500/10">
        <Text>
          <Strong>Research, not tax advice.</Strong> Figures use 2026 law (including the July 2025 tax act) and a placeholder
          income. Confirm every move with a CPA or EA before acting. Visible only to Tim.
        </Text>
      </div>

      <section className="space-y-4">
        <Subheading level={2}>At a glance</Subheading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ranked.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="block rounded-xl border border-zinc-950/5 bg-zinc-50 p-4 hover:border-zinc-950/20 dark:border-white/5 dark:bg-white/5">
              <Badge color={tierColor[s.tier]}>{s.tier}</Badge>
              <Text className="mt-2 font-semibold !text-zinc-950 dark:!text-white">{s.name}</Text>
              <Text className="mt-1 text-sm">{s.annualSavings}</Text>
            </a>
          ))}
        </div>
        <Text className="text-sm">
          Stacking the “Do now” items saves roughly <Strong>$34,000–39,000 a year</Strong> on the baseline below. Adding a cash
          balance plan takes it to about <Strong>$86,000–91,000</Strong>. A short-term rental adds roughly $53,000 in its first year.
        </Text>
      </section>

      <section className="space-y-4">
        <Subheading level={2}>Before December 31, 2026</Subheading>
        <ul className="ml-4 list-inside list-disc space-y-2">
          {thisYearChecklist.map((item) => (
            <li key={item}><Text className="inline">{item}</Text></li>
          ))}
        </ul>
      </section>

      <Divider />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <section className="space-y-4">
          <Subheading level={2}>Baseline used for the math</Subheading>
          <DescriptionList>
            {baseline.map((a) => (
              <div key={a.label} className="contents">
                <DescriptionTerm>{a.label}</DescriptionTerm>
                <DescriptionDetails>{a.value}</DescriptionDetails>
              </div>
            ))}
          </DescriptionList>
        </section>
        <section className="space-y-4">
          <Subheading level={2}>Key 2026 numbers</Subheading>
          <DescriptionList>
            {keyNumbers2026.map((a) => (
              <div key={a.label} className="contents">
                <DescriptionTerm>{a.label}</DescriptionTerm>
                <DescriptionDetails>{a.value}</DescriptionDetails>
              </div>
            ))}
          </DescriptionList>
        </section>
      </div>

      <Divider />

      <section className="space-y-6">
        <Subheading level={2}>The options in detail</Subheading>
        {strategies.map((s) => (
          <article key={s.id} id={s.id} className="scroll-mt-24 space-y-4 rounded-xl border border-zinc-950/5 p-6 dark:border-white/5">
            <div className="flex flex-wrap items-center gap-3">
              <Badge color={tierColor[s.tier]}>{s.tier}</Badge>
              <Text className="text-lg font-semibold !text-zinc-950 dark:!text-white">{s.name}</Text>
            </div>
            {s.tier !== 'Avoid' && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div><Text className="text-xs uppercase tracking-wide">Estimated savings</Text><Text className="font-medium !text-zinc-950 dark:!text-white">{s.annualSavings}</Text></div>
                <div><Text className="text-xs uppercase tracking-wide">Effort</Text><Text>{s.effort}</Text></div>
                <div><Text className="text-xs uppercase tracking-wide">Timing</Text><Text>{s.deadline}</Text></div>
              </div>
            )}
            <Text>{s.summary}</Text>
            {s.math.length > 0 && (
              <div className="rounded-lg bg-zinc-50 p-4 dark:bg-white/5">
                <Text className="mb-2 text-xs font-semibold uppercase tracking-wide">The math</Text>
                <ul className="ml-4 list-disc space-y-1">
                  {s.math.map((m) => <li key={m}><Text className="inline">{m}</Text></li>)}
                </ul>
              </div>
            )}
            {s.id === 'str' && (
              <div className="space-y-2">
                <Text className="text-xs font-semibold uppercase tracking-wide">Current examples (verify status before acting)</Text>
                <ul className="space-y-2">
                  {strListings.map((l) => (
                    <li key={l.address}>
                      <Text>
                        <TextLink href={l.url} target="_blank" rel="noopener">{l.address}</TextLink> — <Strong>{l.price}</Strong>. {l.details}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <Text className="mb-2 text-xs font-semibold uppercase tracking-wide">{s.tier === 'Avoid' ? 'Skip these' : 'Watch out'}</Text>
              <ul className="ml-4 list-disc space-y-1">
                {s.watchOuts.map((w) => <li key={w}><Text className="inline">{w}</Text></li>)}
              </ul>
            </div>
            <Text className="text-sm">
              Sources:{' '}
              {s.sources.map((src, i) => (
                <span key={src.url}>
                  {i > 0 && ' · '}
                  <TextLink href={src.url} target="_blank" rel="noopener">{src.label}</TextLink>
                </span>
              ))}
            </Text>
          </article>
        ))}
      </section>

      <section className="space-y-4">
        <Subheading level={2}>Needed from Tim to make this exact</Subheading>
        <ul className="ml-4 list-inside list-disc space-y-2">
          {neededFromTim.map((item) => (
            <li key={item}><Text className="inline">{item}</Text></li>
          ))}
        </ul>
      </section>
    </div>
  )
}
