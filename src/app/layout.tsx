import type { Metadata } from "next";
import { Montserrat, Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import siteConfigData from "../../config/site-config.json";
import { CartProvider } from "@/context/CartContext";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const siteUrl = `https://${siteConfig.websiteUrl}`;
const siteDescription = `Discover ${siteConfig.brandName}. Parisian-inspired haute couture, pure mulberry silk charmeuse slip dresses, tailored wool-cashmere trench coats, and bespoke corded Chantilly lace evening gowns.`;

// Preload fonts
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.brandName} | Luxury Women's Fashion & Haute Couture Atelier`,
  description: siteDescription,
  keywords: [
    "Rosethorne Fashion Atelier",
    "luxury womens fashion",
    "haute couture dresses",
    "silk charmeuse slip dress",
    "cashmere trench coat",
    "Chantilly lace evening gown",
    "bespoke designer clothing",
    "women eveningwear atelier",
    "Parisian couture collection",
    "Austin luxury fashion house"
  ],
  openGraph: {
    title: `${siteConfig.brandName} | Luxury Women's Fashion & Haute Couture Atelier`,
    description: siteDescription,
    url: siteUrl,
    siteName: siteConfig.brandName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | Luxury Women's Fashion & Haute Couture Atelier`,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const {
    primaryColor,
    primaryTextColor,
    secondaryColor,
    secondaryTextColor,
    neutralBgColor,
    neutralTextColor,
  } = siteConfig.theme;

  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} ${playfairDisplay.variable} ${cormorant.variable} h-full antialiased`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --primary-color: ${primaryColor};
            --primary-text-color: ${primaryTextColor};
            --secondary-color: ${secondaryColor};
            --secondary-text-color: ${secondaryTextColor};
            --neutral-bg-color: ${neutralBgColor};
            --neutral-text-color: ${neutralTextColor};
            --font-family: var(--font-montserrat);
            --font-serif: var(--font-playfair-display);
            --font-cormorant: var(--font-cormorant);
          }
        `}} />
      </head>
      <body className="bg-[#FAF8F6] text-[#18121E]">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
