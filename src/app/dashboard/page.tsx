import { auth } from "@/auth";
import ClientDashboard from "./client-dashboard";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-6">
      <ClientDashboard user={session?.user} />
    </div>
  );
}
