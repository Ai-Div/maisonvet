import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Financials } from "../financials-content";
import { Heading } from "@/components/heading";
import { Divider } from "@/components/divider";

export default async function FinancialsPage() {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return (
    <>
      <Heading>Financial Projections</Heading>
      <Divider className="mt-4 mb-8" />
      <Financials />
    </>
  );
}
