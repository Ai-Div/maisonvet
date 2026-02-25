import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { readHtmlTemplate } from "@/../lib/readHtmlTemplate";
import Script from "next/script";

export default async function PropertiesPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in?callbackUrl=/properties");
  }

  const { title, bodyContent } = readHtmlTemplate("properties.html");

  return (
    <>
      {/* We don't need Script for Tailwind because it's built-in now */}
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
      <Script id="nav-init" strategy="afterInteractive">{`
        (function() {
          var t = document.getElementById('nav-toggle'), d = document.getElementById('nav-drawer');
          if (!t || !d) return;
          t.addEventListener('click', function() {
            var o = !d.classList.contains('hidden');
            d.classList.toggle('hidden', o);
            t.setAttribute('aria-expanded', String(!o));
          });
          document.querySelectorAll('.mobile-nav-link').forEach(function(l) {
            l.addEventListener('click', function() {
              if(d) d.classList.add('hidden');
              if(t) t.setAttribute('aria-expanded','false');
            });
          });
        })();
      `}</Script>
    </>
  );
}
