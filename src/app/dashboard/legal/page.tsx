import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LegalChecklist } from "../legal-content";
import { Heading } from "@/components/heading";
import { Divider } from "@/components/divider";

export default async function LegalPage() {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return (
    <>
      <Heading>Legal & Compliance</Heading>
      <Divider className="mt-4 mb-8" />
      <LegalChecklist />
    </>
  );
}
