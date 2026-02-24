import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Maison Vet — A Sovereign Medical Compound",
  description: "Confidential investment summary for a sovereign veterinary medical compound in North San Diego County.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryClinic",
  "name": "Maison Vet",
  "description": "A sovereign veterinary medical compound in North San Diego County. Advanced diagnostics including CT and MRI. Energy and water independent.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "CA",
    "addressCountry": "US",
    "addressLocality": "North San Diego County"
  },
  "areaServed": "North San Diego County",
  "serviceType": ["Small Animal Medicine", "Equine Medicine", "CT Imaging", "MRI Imaging", "Advanced Diagnostics", "Wellness Plans"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#primary-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-green-deep focus:text-gold rounded-br-md"
        >
          Skip to primary content
        </a>
        {children}
      </body>
    </html>
  );
}
