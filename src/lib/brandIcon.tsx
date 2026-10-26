import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

// Client-safe brand helpers. Keep server-only imports (node:fs, next/og) out of this file.
export const siteConfig = siteConfigData as unknown as SiteConfig;
export const products = productsData as unknown as Product[];

// "Active Peak Athletic Wear Store" -> lead "Active Peak", tail "Athletic Wear Store"
const words = siteConfig.brandName.trim().split(/\s+/);
export const brandLead = words.slice(0, Math.min(2, words.length)).join(" ");
export const brandTail = words.slice(2).join(" ");
export const brandShort = brandLead;

// First letter or digit of the brand name, e.g. "Active Peak Athletic Wear Store" -> "A"
export const brandInitial = (siteConfig.brandName.match(/[A-Za-z0-9]/)?.[0] ?? "S").toUpperCase();

export const fallbackImage = "/img/herosection3.jpg";

export const startingPrice = Math.min(
  ...products.map((p) => (p.bundles && p.bundles[0] ? p.bundles[0].price : parseFloat(p.ssPrice)))
).toFixed(2);

export const trialDays = siteConfig.trialPeriod || 14;
