import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Heading, Subheading } from "@/components/heading";
import { Divider } from "@/components/divider";
import { DescriptionList, DescriptionTerm, DescriptionDetails } from "@/components/description-list";
import { Badge } from "@/components/badge";

export default async function SettingsPage() {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return (
    <div className="max-w-4xl">
      <Heading>Dashboard Settings</Heading>
      <Divider className="mt-4 mb-8" />

      <section className="space-y-12">
        {/* User Configuration */}
        <div>
          <Subheading>Authorized Users</Subheading>
          <p className="mt-1 text-sm text-zinc-500">Entities with production dashboard access via Google Auth.</p>
          <DescriptionList className="mt-6">
            <DescriptionTerm>Admins</DescriptionTerm>
            <DescriptionDetails>
              <div className="flex flex-wrap gap-2">
                <Badge color="zinc">tim@div.digital</Badge>
                <Badge color="zinc">hello@maisonvet.com</Badge>
                <Badge color="zinc">ai@div.digital</Badge>
              </div>
            </DescriptionDetails>
            <DescriptionTerm>Whitelisted Guests</DescriptionTerm>
            <DescriptionDetails>
              <div className="flex flex-wrap gap-2">
                <Badge color="blue">zephobert@gmail.com</Badge>
                <Badge color="blue">hobertgrayfamily@gmail.com</Badge>
              </div>
            </DescriptionDetails>
            <DescriptionTerm>Domain Access</DescriptionTerm>
            <DescriptionDetails>
              <span className="text-zinc-600">All users with @div.digital or @maisonvet.com email addresses.</span>
            </DescriptionDetails>
          </DescriptionList>
        </div>

        <Divider />

        {/* Technical Infrastructure */}
        <div>
          <Subheading>Infrastructure Configuration</Subheading>
          <p className="mt-1 text-sm text-zinc-500">Global settings for the Maison Vet digital stack.</p>
          <DescriptionList className="mt-6">
            <DescriptionTerm>Production URL</DescriptionTerm>
            <DescriptionDetails>https://maisonvet.com</DescriptionDetails>
            <DescriptionTerm>Property Search Tool</DescriptionTerm>
            <DescriptionDetails>https://maisonvet-search.vercel.app</DescriptionDetails>
            <DescriptionTerm>Frontend Breakpoint</DescriptionTerm>
            <DescriptionDetails>
              <code className="text-xs bg-zinc-100 px-1 py-0.5 rounded">lg: 1120px</code> (Optimized for side-by-side viewports)
            </DescriptionDetails>
            <DescriptionTerm>Deployment Mode</DescriptionTerm>
            <DescriptionDetails>
              <Badge color="green">Vercel Edge (Production)</Badge>
            </DescriptionDetails>
          </DescriptionList>
        </div>

        <Divider />

        {/* Model Parameters */}
        <div>
          <Subheading>Projection Parameters</Subheading>
          <p className="mt-1 text-sm text-zinc-500">Default constants used in the 10-year P&L model.</p>
          <DescriptionList className="mt-6">
            <DescriptionTerm>Annual Growth (Mature)</DescriptionTerm>
            <DescriptionDetails>4%</DescriptionDetails>
            <DescriptionTerm>Price Index Inflation</DescriptionTerm>
            <DescriptionDetails>3% annually</DescriptionDetails>
            <DescriptionTerm>Blended Tax Rate</DescriptionTerm>
            <DescriptionDetails>28% (Federal + CA Franchise)</DescriptionDetails>
            <DescriptionTerm>Patient Cap</DescriptionTerm>
            <DescriptionDetails>85 patients/month per DVM</DescriptionDetails>
          </DescriptionList>
        </div>
      </section>

      <div className="mt-24 text-center p-8 border-t border-zinc-100">
        <p className="text-[10px] text-zinc-400 tracking-[0.3em] uppercase">
          System: OpenClaw Native | Version: 1.0.4 | Status: Operational
        </p>
      </div>
    </div>
  );
}
