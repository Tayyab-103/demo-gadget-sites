import type { Metadata } from "next";
import { Nunito, Poppins, Inter, Montserrat, Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import siteConfigData from "../../config/site-config.json";
import { CartProvider } from "@/context/CartContext";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const siteUrl = `https://${siteConfig.websiteUrl}`;
const siteDescription = `Welcome to ${siteConfig.brandName}. Discover our wonderland of kids toys, superhero action figures, cuddly plushies, Montessori wooden STEM puzzles, family board games, RC racers, and creative play accessories.`;

// Preload fonts
const nunito = Nunito({
  weight: ["300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  variable: "--font-nunito",
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

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.brandName} | Kids Toys, Games, Puzzles & Action Figures`,
  description: siteDescription,
  keywords: [
    "Toy and Game Shops",
    "kids toys",
    "children games",
    "action figures",
    "plushies",
    "wooden puzzles",
    "STEM toys",
    "board games",
    "remote control cars",
    "magnetic building blocks",
    "Playhouse Games and Toy Store",
    "Blitzing Branding LLC"
  ],
  openGraph: {
    title: `${siteConfig.brandName} | Kids Toys, Games, Puzzles & Action Figures`,
    description: siteDescription,
    url: siteUrl,
    siteName: siteConfig.brandName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | Kids Toys, Games, Puzzles & Action Figures`,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  let selectedFontClass = nunito.variable;
  let activeFontVar = "var(--font-nunito)";

  if (siteConfig.theme.fontFamily === "Nunito") {
    selectedFontClass = nunito.variable;
    activeFontVar = "var(--font-nunito)";
  } else if (siteConfig.theme.fontFamily === "Poppins") {
    selectedFontClass = poppins.variable;
    activeFontVar = "var(--font-poppins)";
  } else if (siteConfig.theme.fontFamily === "Montserrat") {
    selectedFontClass = montserrat.variable;
    activeFontVar = "var(--font-montserrat)";
  } else if (siteConfig.theme.fontFamily === "Roboto") {
    selectedFontClass = roboto.variable;
    activeFontVar = "var(--font-roboto)";
  } else if (siteConfig.theme.fontFamily === "Playfair Display") {
    selectedFontClass = playfairDisplay.variable;
    activeFontVar = "var(--font-playfair-display)";
  } else if (siteConfig.theme.fontFamily === "Inter") {
    selectedFontClass = inter.variable;
    activeFontVar = "var(--font-inter)";
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
