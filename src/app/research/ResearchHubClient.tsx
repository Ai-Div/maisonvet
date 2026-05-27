'use client'

import { Heading, Subheading } from '@/components/heading'
import { Text } from '@/components/text'
import { Divider } from '@/components/divider'
import { Checkbox, CheckboxField } from '@/components/checkbox'
import { Badge } from '@/components/badge'
import { researchData } from './research-data'
import { DescriptionList, DescriptionTerm, DescriptionDetails } from '@/components/description-list'

export default function ResearchHubClient() {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Heading>Research Hub</Heading>
          <Text className="mt-1">Project tracking, regulatory research, and financial frameworks.</Text>
        </div>
        <Badge color="blue">Updated April 2026</Badge>
      </header>

      <Divider />

      <section className="space-y-6">
        <Subheading level={2}>Pending Action Items</Subheading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {researchData.actionItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-xl border border-zinc-950/5 bg-zinc-50 dark:border-white/5 dark:bg-white/5">
              <Checkbox defaultChecked={item.completed} />
              <Text className="text-sm font-medium !text-zinc-950 dark:!text-white">
                {item.task}
              </Text>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <section className="space-y-4">
          <Subheading level={2}>Legislative & Regulatory Leverage</Subheading>
          <div className="rounded-xl border border-zinc-950/5 p-6 space-y-6">
            {researchData.regulatory.map((item, index) => (
              <div key={index} className="space-y-1">
                <Text className="font-bold !text-zinc-950 dark:!text-white">{item.title}</Text>
                <Text>{item.description}</Text>
                {index < researchData.regulatory.length - 1 && <Divider soft className="mt-4" />}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <Subheading level={2}>Financial & Funding Frameworks</Subheading>
          <div className="rounded-xl border border-zinc-950/5 p-6 space-y-6">
            {researchData.financial.map((item, index) => (
              <div key={index} className="space-y-1">
                <Text className="font-bold !text-zinc-950 dark:!text-white">{item.title}</Text>
                <Text>{item.description}</Text>
                {index < researchData.financial.length - 1 && <Divider soft className="mt-4" />}
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="space-y-4">
        <Subheading level={2}>Strategic Roadmap</Subheading>
        <div className="overflow-hidden rounded-xl border border-zinc-950/5">
          <DescriptionList>
            {researchData.roadmap.map((item, index) => (
              <div key={index} className="contents">
                <DescriptionTerm>{item.phase} ({item.date})</DescriptionTerm>
                <DescriptionDetails>{item.goal}</DescriptionDetails>
              </div>
            ))}
          </DescriptionList>
        </div>
      </section>

      <section className="space-y-4">
        <Subheading level={2}>Needed from Tim/Partner</Subheading>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {researchData.neededFromTim.map((item, index) => (
            <li key={index}>
              <Text className="inline">{item}</Text>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
