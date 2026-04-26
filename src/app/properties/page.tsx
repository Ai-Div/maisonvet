import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { readHtmlTemplate } from "@/../lib/readHtmlTemplate";
import Script from "next/script";

export default async function PropertiesPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in?callbackUrl=/research");
  }

  redirect("/research");
}
