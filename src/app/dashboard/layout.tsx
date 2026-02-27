import { auth } from "@/auth";
import { ApplicationLayout } from "./application-layout";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return (
    <ApplicationLayout user={session.user}>
      {children}
    </ApplicationLayout>
  );
}
