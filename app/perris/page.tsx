import { readHtmlTemplate } from "@/lib/readHtmlTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perris Property — Maison Vet",
  description: "Decision analysis for 21815 Herbert St, Perris, CA.",
};

export default function PerrisPage() {
  const { bodyContent } = readHtmlTemplate("perris.html");

  return (
    <div
      dangerouslySetInnerHTML={{ __html: bodyContent }}
      className="legacy-content"
    />
  );
}
