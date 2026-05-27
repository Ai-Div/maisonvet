import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ApplicationLayout } from "@/app/dashboard/application-layout";
import ResearchHubClient from "./ResearchHubClient";

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
