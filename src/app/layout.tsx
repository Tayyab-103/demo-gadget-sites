import type { Metadata } from "next";
import { Josefin_Sans, Raleway } from "next/font/google";
import "./globals.css";
import siteConfigData from "../../config/site-config.json";
import { CartProvider } from "@/context/CartContext";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const siteUrl = `https://${siteConfig.websiteUrl}`;
const siteDescription = `Welcome to ${siteConfig.brandName}. Explore curated contemporary women's fashion, elegant knitwear, seasonal dresses, and chic wardrobe essentials.`;

// Preload Fashionee's authentic fonts
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.brandName} - Contemporary Women's Fashion & Apparel`,
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
    <html lang="en" className={`${josefinSans.variable} ${raleway.variable} h-full antialiased`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --primary-color: ${primaryColor};
            --primary-text-color: ${primaryTextColor};
            --secondary-color: ${secondaryColor};
            --secondary-text-color: ${secondaryTextColor};
            --neutral-bg-color: ${neutralBgColor};
            --neutral-text-color: ${neutralTextColor};
            --font-josefin: var(--font-josefin);
            --font-raleway: var(--font-raleway);
          }
        `}} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
