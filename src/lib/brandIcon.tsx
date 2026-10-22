// Shared brand data for every component (client-safe).
// The favicon renderer lives in src/app/icon.tsx — never add node:fs or next/og imports here,
// or client components importing this file will fail to build ("Can't resolve 'child_process'").
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

export const siteConfig = siteConfigData as unknown as SiteConfig;
export const products = productsData as unknown as Product[];

// "Fieldstone Outdoor Sports" -> "Fieldstone" for tight mobile layouts
export const brandShort = siteConfig.brandName.split(" ")[0];

export const fallbackImage = "/img/products/product1.jpg";

export const startingPrice = (product: Product) =>
  product.bundles && product.bundles[0] ? product.bundles[0].price.toFixed(2) : product.ssPrice;

// First letter or digit of the brand name, e.g. "Hearthside Kitchen Tool Market" -> "H"
export const brandInitial = (siteConfig.brandName.match(/[A-Za-z0-9]/)?.[0] ?? "S").toUpperCase();
