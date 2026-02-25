import fs from "fs";
import path from "path";

export interface HtmlParts {
  title: string;
  metaDescription: string;
  bodyContent: string; // body inner HTML, scripts stripped
}

export function readHtmlTemplate(filename: string): HtmlParts {
  const filePath = path.join(process.cwd(), "templates", "html-templates", filename);
  const raw = fs.readFileSync(filePath, "utf-8");

  // Extract title
  const titleMatch = raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "Maison Vet";

  // Extract meta description
  const metaMatch = raw.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
  const metaDescription = metaMatch ? metaMatch[1] : "";

  // Extract body inner HTML
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyInner = bodyMatch ? bodyMatch[1] : raw;

  // Strip <script>...</script> blocks
  let bodyContent = bodyInner.replace(/<script[\s\S]*?<\/script>/gi, "");

  // Strip <nav>...</nav> blocks (legacy navigation)
  bodyContent = bodyContent.replace(/<nav[\s\S]*?<\/nav>/gi, "");

  return { title, metaDescription, bodyContent: bodyContent.trim() };
}
