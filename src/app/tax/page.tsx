import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";
import { ApplicationLayout } from "@/app/dashboard/application-layout";
import TaxStrategyClient from "./TaxStrategyClient";
import { canViewTax } from "./access";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Strategy — Private",
  robots: { index: false, follow: false },
};

export default async function TaxPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in?callbackUrl=/tax");
  }
  // Personal financial research: hidden from everyone else on the allowlist.
  if (!canViewTax(session.user.email)) {
    notFound();
  }

  return (
    <ApplicationLayout user={session.user}>
      <TaxStrategyClient />
    </ApplicationLayout>
  );
}
