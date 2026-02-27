import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { PitchDeck } from "../pitch-content";
import { Heading } from "@/components/heading";
import { Divider } from "@/components/divider";

export default async function PitchPage() {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return (
    <>
      <Heading>Lender Pitch Deck</Heading>
      <Divider className="mt-4 mb-8" />
      <PitchDeck />
    </>
  );
}
