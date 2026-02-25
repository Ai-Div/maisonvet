import { readHtmlTemplate } from "@/lib/readHtmlTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties — Maison Vet",
  description: "Active property search candidates for the Maison Vet compound.",
};

export default function PropertiesPage() {
  const { bodyContent } = readHtmlTemplate("properties.html");

  return (
    <div
      dangerouslySetInnerHTML={{ __html: bodyContent }}
      className="legacy-content"
    />
  );
}
