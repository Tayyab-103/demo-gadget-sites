import type { Metadata } from "next";
import { Poppins, Inter, Montserrat, Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import siteConfigData from "../../config/site-config.json";
import { CartProvider } from "@/context/CartContext";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const siteUrl = `https://${siteConfig.websiteUrl}`;
const siteDescription = `Thornwick Garden Tool Foundry — Hand-forged carbon steel trowels, Japanese SK5 bypass pruners, and heritage garden cultivation tools crafted for a lifetime of growing.`;

// Preload the most common fonts
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
  title: `${siteConfig.brandName} | Hand-Forged Artisan Garden Tools`,
  description: siteDescription,
  openGraph: {
    title: siteConfig.brandName,
    description: siteDescription,
    url: siteUrl,
    siteName: siteConfig.brandName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.brandName,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Select dynamic font variable class
  let selectedFontClass = montserrat.variable;
  let activeFontVar = "var(--font-montserrat)";

  if (siteConfig.theme.fontFamily === "Inter") {
    selectedFontClass = inter.variable;
    activeFontVar = "var(--font-inter)";
  } else if (siteConfig.theme.fontFamily === "Poppins") {
    selectedFontClass = poppins.variable;
    activeFontVar = "var(--font-poppins)";
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
    <html lang="en" className={`${selectedFontClass} ${playfair.variable} h-full antialiased`}>
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
            --font-serif: var(--font-playfair), Georgia, serif;
          }
        `}} />
      </head>
      <body className="min-h-screen flex flex-col bg-neutral-bg text-neutral-text font-sans selection:bg-secondary/30 selection:text-primary">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
