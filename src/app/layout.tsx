import type { Metadata } from "next";
import { Poppins, Inter, Montserrat, Roboto, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import siteConfigData from "../../config/site-config.json";
import { CartProvider } from "@/context/CartContext";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const siteUrl = `https://${siteConfig.websiteUrl}`;
const siteDescription = `Welcome to ${siteConfig.brandName}. Discover handcrafted home furnishings, bespoke living textiles, sculptural ambient lighting, and timeless interior decor.`;

// Preload fonts
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

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
  title: siteConfig.brandName,
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
  let selectedFontClass = `${montserrat.variable} ${cormorant.variable}`;
  let activeFontVar = "var(--font-montserrat)";

  if (siteConfig.theme.fontFamily === "Inter") {
    selectedFontClass = `${inter.variable} ${cormorant.variable}`;
    activeFontVar = "var(--font-inter)";
  } else if (siteConfig.theme.fontFamily === "Poppins") {
    selectedFontClass = `${poppins.variable} ${cormorant.variable}`;
    activeFontVar = "var(--font-poppins)";
  } else if (siteConfig.theme.fontFamily === "Roboto") {
    selectedFontClass = `${roboto.variable} ${cormorant.variable}`;
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
            --font-serif: var(--font-cormorant), "Playfair Display", "Cinzel", serif;
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
