import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

// Client-safe brand helpers. Keep server-only imports (node:fs, next/og) out of this file.
export const siteConfig = siteConfigData as unknown as SiteConfig;
export const products = productsData as unknown as Product[];

// "Bright Desk Office Supply Store" -> lead "Bright Desk", tail "Office Supply Store"
const words = siteConfig.brandName.trim().split(/\s+/);
export const brandLead = words.slice(0, Math.min(2, words.length)).join(" ");
export const brandTail = words.slice(2).join(" ");
export const brandShort = brandLead;

// First letter or digit of the brand name, e.g. "Bright Desk Office Supply Store" -> "B"
export const brandInitial = (siteConfig.brandName.match(/[A-Za-z0-9]/)?.[0] ?? "S").toUpperCase();

export const fallbackImage = "/img/desk/standard-3.jpg";

export const trialDays = siteConfig.trialPeriod || 14;

export const firstPrice = (p: Product) =>
  p.bundles && p.bundles[0] ? p.bundles[0].price : parseFloat(p.ssPrice);
