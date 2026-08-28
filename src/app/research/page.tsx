import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ApplicationLayout } from "@/app/dashboard/application-layout";
import ResearchHubClient from "./ResearchHubClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Hub — Maison Vet",
  description: "Regulatory, financial, and operational research tracking for the Maison Vet veterinary campus.",
};

export default async function ResearchPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in?callbackUrl=/research");
  }

  return (
    <ApplicationLayout user={session.user}>
      <ResearchHubClient />
    </ApplicationLayout>
  );
}
