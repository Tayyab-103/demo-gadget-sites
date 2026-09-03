import type { Metadata } from "next";
import { Poppins, Inter, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import siteConfigData from "../../config/site-config.json";
import { CartProvider } from "@/context/CartContext";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const siteUrl = `https://${siteConfig.websiteUrl}`;
const siteTitle = `${siteConfig.brandName} | Precision Electrical Parts & Industrial Equipments`;
const siteDescription = `Industrial-grade electrical parts, precision digital multimeters, continuous power adapter cables, and high-carbon magnetic drive bits for electricians, technicians, and commercial facilities.`;

// Preload common fonts
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteDescription,
  keywords: [
    "Electrical Parts and Equipments",
    "Digital LCD Multimeter Tester",
    "Magnetic Screwdriver Bits",
    "Power Adapter Cables",
    "True-RMS Precision Diagnostic Tools",
    "Industrial Electrical Hardware",
    "Commercial Electrician Tools",
    "NIST Factory Calibrated Multimeters",
    "Voltspire Electrical Collective",
  ],
  authors: [{ name: siteConfig.brandName }],
  creator: siteConfig.brandName,
  publisher: siteConfig.corpName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: siteConfig.brandName,
    images: [
      {
        url: "/img/hero1.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.brandName} - Precision Electrical Parts & Industrial Equipments`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/img/hero1.jpg"],
    creator: `@${siteConfig.brandName.replace(/\s+/g, "")}`,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Select dynamic font variable class
  let selectedFontClass = poppins.variable;
  let activeFontVar = "var(--font-poppins)";

  if (siteConfig.theme.fontFamily === "Inter") {
    selectedFontClass = inter.variable;
    activeFontVar = "var(--font-inter)";
  } else if (siteConfig.theme.fontFamily === "Montserrat") {
    selectedFontClass = montserrat.variable;
    activeFontVar = "var(--font-montserrat)";
  } else if (siteConfig.theme.fontFamily === "Roboto") {
    selectedFontClass = roboto.variable;
    activeFontVar = "var(--font-roboto)";
  }

  // Extract theme values
  const {
    primaryColor,
    primaryTextColor,
    secondaryColor,
    secondaryTextColor,
    neutralBgColor,
    neutralTextColor,
  } = siteConfig.theme;

  return (
    <html lang="en" className={`${selectedFontClass} h-full antialiased`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --primary-color: ${primaryColor};
            --primary-text-color: ${primaryTextColor};
            --secondary-color: ${secondaryColor};
            --secondary-text-color: ${secondaryTextColor};
            --neutral-bg-color: ${neutralBgColor};
            --neutral-text-color: ${neutralTextColor};
            --font-family: ${activeFontVar};
          }
        `}} />
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
