import type { Metadata } from "next";
import { Poppins, Inter, Montserrat, Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import siteConfigData from "../../config/site-config.json";
import { CartProvider } from "@/context/CartContext";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const siteUrl = `https://${siteConfig.websiteUrl}`;
const siteDescription = `Welcome to ${siteConfig.brandName}. Handcrafted luxury ${siteConfig.Product?.toLowerCase() || "stationery & office supplies"}, precision fountain pens, full-grain leather journals, and archival desk essentials for creators and executives.`;

// Preload fonts
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
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

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.brandName} | Artisanal Stationery & Fine Writing Instruments`,
  description: siteDescription,
  keywords: [
    "stationery",
    "office supplies",
    "luxury stationery",
    "fine writing instruments",
    "fountain pens",
    "leather bound journals",
    "desk accessories",
    "executive office supplies",
    "calligraphy set",
    "archival paper",
    "Austin stationery atelier",
    "Quillhaven Stationery House"
  ],
  openGraph: {
    title: `${siteConfig.brandName} | Artisanal Stationery & Fine Writing Instruments`,
    description: siteDescription,
    url: siteUrl,
    siteName: siteConfig.brandName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | Artisanal Stationery & Fine Writing Instruments`,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  let selectedFontClass = `${playfairDisplay.variable} ${inter.variable}`;
  let activeFontVar = "var(--font-playfair-display)";

  if (siteConfig.theme.fontFamily === "Poppins") {
    selectedFontClass = `${poppins.variable} ${inter.variable}`;
    activeFontVar = "var(--font-poppins)";
  } else if (siteConfig.theme.fontFamily === "Montserrat") {
    selectedFontClass = `${montserrat.variable} ${inter.variable}`;
    activeFontVar = "var(--font-montserrat)";
  } else if (siteConfig.theme.fontFamily === "Roboto") {
    selectedFontClass = `${roboto.variable} ${inter.variable}`;
    activeFontVar = "var(--font-roboto)";
  } else if (siteConfig.theme.fontFamily === "Playfair Display") {
    selectedFontClass = `${playfairDisplay.variable} ${inter.variable}`;
    activeFontVar = "var(--font-playfair-display)";
  }

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
