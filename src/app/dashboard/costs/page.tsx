import { Heading } from "@/components/heading";
import { Divider } from "@/components/divider";
import { Badge } from "@/components/badge";
import { Text } from "@/components/text";

interface ServiceCard {
  name: string;
  category: string;
  billingType: "subscription" | "pay-per-use" | "unknown";
  monthlyCost?: string;
  account: string;
  link: string;
  note?: string;
  apiKeyMasked?: string;
}

const services: ServiceCard[] = [
  {
    name: "Anthropic / Claude",
    category: "AI",
    billingType: "subscription",
    monthlyCost: "$200 / mo",
    account: "ai@div.digital",
    link: "https://platform.claude.com/cost",
    note: "Claude Max subscription. OpenClaw uses OAuth token — not metered. API key exists but not wired to production.",
  },
  {
    name: "Google Cloud — Gemini API",
    category: "AI",
    billingType: "pay-per-use",
    account: "ai@div.digital",
    link: "https://console.cloud.google.com/billing",
    apiKeyMasked: "...x7g",
    note: "Project: locl-it. Live billing data available once GCP service account is configured.",
  },
  {
    name: "Google Cloud — Places API",
    category: "Maps",
    billingType: "pay-per-use",
    account: "ai@div.digital",
    link: "https://console.cloud.google.com/billing",
    apiKeyMasked: "...k7c",
    note: "Project: locl-it. Same billing account as Gemini.",
  },
  {
    name: "Brave Search API",
    category: "Search",
    billingType: "pay-per-use",
    account: "ai@div.digital",
    link: "https://api.search.brave.com/app/dashboard",
    note: "Check Brave dashboard for monthly usage totals.",
  },
  {
    name: "Vercel",
    category: "Hosting",
    billingType: "subscription",
    account: "ai@div.digital",
    link: "https://vercel.com/div-digital",
    note: "Check dashboard for current plan and any overage charges.",
  },
  {
    name: "Supabase — LOCL (main)",
    category: "Database",
    billingType: "unknown",
    account: "tim@div.digital",
    link: "https://supabase.com/dashboard/project/gtdlrnfnyyvqabjroobt",
    note: "Project ref: gtdlrnfnyyvqabjroobt. Under Tim's account.",
  },
  {
    name: "Supabase — locl-it",
    category: "Database",
    billingType: "unknown",
    account: "ai@div.digital",
    link: "https://supabase.com/dashboard/project/nrfbtzexkdbdvunxswqy",
    note: "Project ref: nrfbtzexkdbdvunxswqy. Under ai@div.digital.",
  },
  {
    name: "OpenClaw",
    category: "Agent Platform",
    billingType: "subscription",
    account: "tim@div.digital",
    link: "https://openclaw.ai",
    note: "Running locally on MacBook Pro. Bundled with Claude Max subscription.",
  },
  {
    name: "Slack App",
    category: "Messaging",
    billingType: "subscription",
    account: "ai@div.digital",
    link: "https://api.slack.com/apps/A0AHANY0FNU",
    note: "Part of div.digital Slack workspace plan. App ID: A0AHANY0FNU.",
  },
  {
    name: "GitHub — Ai-Div",
    category: "Dev",
    billingType: "unknown",
    account: "ai@div.digital",
    link: "https://github.com/Ai-Div",
    note: "Check GitHub billing for any paid features or Actions minutes.",
  },
];

const categoryColor: Record<string, "purple" | "blue" | "amber" | "green" | "cyan" | "zinc" | "pink" | "lime"> = {
  AI: "purple",
  Maps: "blue",
  Search: "amber",
  Hosting: "green",
  Database: "cyan",
  "Agent Platform": "zinc",
  Messaging: "pink",
  Dev: "lime",
};

const billingColor: Record<string, "green" | "amber" | "zinc"> = {
  subscription: "green",
  "pay-per-use": "amber",
  unknown: "zinc",
};

function billingLabel(type: ServiceCard["billingType"]) {
  if (type === "subscription") return "Subscription";
  if (type === "pay-per-use") return "Pay-per-use";
  return "Check dashboard";
}

export default function CostsPage() {
  const generatedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <Heading>Costs &amp; Usage</Heading>
          <Text className="mt-1">All active services and billing accounts for div.digital infrastructure.</Text>
        </div>
        <Text className="text-xs text-zinc-500">Updated {generatedAt}</Text>
      </div>
      <Divider className="mt-4 mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {services.map((s) => (
          <div
            key={s.name}
            className="rounded-lg border border-zinc-950/10 bg-white p-5 flex flex-col gap-3 dark:border-white/10 dark:bg-zinc-900"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-zinc-950 dark:text-white leading-snug">{s.name}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{s.account}</p>
              </div>
              <Badge color={categoryColor[s.category] ?? "zinc"}>{s.category}</Badge>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <Badge color={billingColor[s.billingType] ?? "zinc"}>{billingLabel(s.billingType)}</Badge>
              {s.monthlyCost && (
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{s.monthlyCost}</span>
              )}
              {s.apiKeyMasked && (
                <span className="text-xs text-zinc-500 font-mono">key {s.apiKeyMasked}</span>
              )}
            </div>

            {s.note && <Text className="text-xs leading-relaxed">{s.note}</Text>}

            <div className="mt-auto pt-1">
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-600 underline underline-offset-2 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                Open dashboard
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-zinc-950/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-900">
        <p className="text-sm font-semibold text-zinc-950 dark:text-white mb-2">Enable live billing data</p>
        <ol className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1.5 list-decimal list-inside">
          <li>
            Generate an Anthropic Admin API key at{" "}
            <a href="https://platform.claude.com/settings/admin-keys" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-white">
              platform.claude.com/settings/admin-keys
            </a>{" "}
            and add <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">ANTHROPIC_ADMIN_KEY</code> to Vercel env vars.
          </li>
          <li>
            Create a GCP service account with Billing Viewer role, download the JSON key, and add{" "}
            <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">GOOGLE_SERVICE_ACCOUNT_KEY</code> to Vercel env vars.
          </li>
        </ol>
      </div>
    </>
  );
}
