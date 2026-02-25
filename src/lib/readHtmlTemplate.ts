import fs from "fs";
import path from "path";

export interface HtmlParts {
  title: string;
  metaDescription: string;
  bodyContent: string;
}

export function readHtmlTemplate(filename: string): HtmlParts {
  // In Next.js App Router, process.cwd() is the project root
  const filePath = path.join(process.cwd(), "html-templates", filename);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Template file not found: ${filePath}`);
  }

  const raw = fs.readFileSync(filePath, "utf-8");

  // Extract title
  const titleMatch = raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "Maison Vet";

  // Extract meta description
  const metaMatch = raw.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
  const metaDescription = metaMatch ? metaMatch[1] : "";

  // Extract body inner HTML
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let bodyInner = bodyMatch ? bodyMatch[1] : raw;

  // Strip <script>...</script> blocks
  bodyInner = bodyInner.replace(/<script[\s\S]*?<\/script>/gi, "").trim();

  // Strip local next/font/google or other specific injections if they exist in the raw HTML
  // (Assuming legacy HTML might have some head stuff we don't want in body)

  return { title, metaDescription, bodyContent: bodyInner };
}
