import { Heading } from "@/components/heading";
import { Divider } from "@/components/divider";
import { OperationsSummary } from "./operations-content";

export default function DashboardPage() {
  return (
    <>
      <Heading>Maison Vet Overview</Heading>
      <Divider className="mt-4 mb-8" />
      <OperationsSummary />
    </>
  );
}
