import type { Metadata } from "next";
import "./globals.css";
import siteConfigData from "../../config/site-config.json";
import { CartProvider } from "@/context/CartContext";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const siteUrl = `https://${siteConfig.websiteUrl}`;
const siteDescription = `Welcome to ${siteConfig.brandName}. Shop premium luggage, bags & travel accessories online.`;

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
  let activeFontFamily = "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

  if (siteConfig.theme.fontFamily === "Inter") {
    activeFontFamily = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  } else if (siteConfig.theme.fontFamily === "Montserrat") {
    activeFontFamily = "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  } else if (siteConfig.theme.fontFamily === "Roboto") {
    activeFontFamily = "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  } else if (siteConfig.theme.fontFamily === "Poppins") {
    activeFontFamily = "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
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
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --primary-color: ${primaryColor};
            --primary-text-color: ${primaryTextColor};
            --secondary-color: ${secondaryColor};
            --secondary-text-color: ${secondaryTextColor};
            --neutral-bg-color: ${neutralBgColor};
            --neutral-text-color: ${neutralTextColor};
            --font-family: ${activeFontFamily};
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
