import type { Metadata } from "next";
import localFont from "next/font/local";
import { auth } from "@/auth";
import "./globals.css";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import { headers } from "next/headers";

const notoSerif = localFont({
  src: [
    {
      path: "../../public/fonts/Noto_Serif/static/NotoSerif-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Noto_Serif/static/NotoSerif-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Noto_Serif/static/NotoSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Noto_Serif/static/NotoSerif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Noto_Serif/static/NotoSerif-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Noto_Serif/static/NotoSerif-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter/static/Inter_18pt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter/static/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter/static/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter/static/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Maison Vet Clinic",
  description: "A vertically integrated veterinary clinic and campus in North San Diego County. Energy independence, senior water rights, and destination-tier medicine.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryClinic",
  "name": "Maison Vet",
  "description": "A vertically integrated veterinary clinic and campus in North San Diego County. Energy independence, senior water rights, and destination-tier medicine.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "CA",
    "addressCountry": "US",
    "addressLocality": "North San Diego County"
  },
  "areaServed": "North San Diego County",
  "serviceType": ["Small Animal Medicine", "Equine Medicine", "CT Imaging", "MRI Imaging", "Advanced Diagnostics", "Wellness Plans"]
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user;

  const headerList = await headers();
  const pathname = headerList.get("x-invoke-path") || "";

  // h-16 (64px) main nav + h-11 (44px) rooftop = 108px = 6.75rem; use pt-28 (7rem) for safe clearance
  const headerPadding = (user && !pathname.startsWith('/dashboard') && pathname !== '/vision' && pathname !== '/properties' && pathname !== '/perris') ? "pt-28" : (!user ? "pt-16" : "");

  return (
    <html lang="en" dir="ltr" className={`${notoSerif.variable} ${inter.variable} scroll-smooth`} style={{ colorScheme: "light" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased bg-white text-stone-900"
        style={{ "--header-height": (user && !pathname.startsWith('/dashboard')) ? "6.75rem" : "4rem" } as React.CSSProperties}
      >
        <a
          href="#primary-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-stone-900 focus:text-white rounded-br-md"
        >
          Skip to primary content
        </a>
        <Nav />
        <div className={headerPadding}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
