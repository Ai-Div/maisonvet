// Who may see /tax. Override with NEXT_PUBLIC_TAX_PAGE_EMAILS (comma-separated) in
// Vercel. NEXT_PUBLIC_ because the sidebar (a client component) also checks it.
const TAX_PAGE_EMAILS = process.env.NEXT_PUBLIC_TAX_PAGE_EMAILS?.split(",").map((e) => e.trim().toLowerCase()).filter(Boolean) ?? [
  "tim@div.digital",
  "timhobert@gmail.com",
  "hobertgrayfamily@gmail.com",
];

export function canViewTax(email?: string | null): boolean {
  return !!email && TAX_PAGE_EMAILS.includes(email.toLowerCase());
}
