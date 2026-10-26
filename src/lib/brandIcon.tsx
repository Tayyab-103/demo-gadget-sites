import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

// Client-safe brand helpers shared by every component. Keep node-only code (fs, next/og) out of this file.
export const siteConfig = siteConfigData as unknown as SiteConfig;
export const products = productsData as unknown as Product[];

// "Iron Ridge Hardware Tool Shop" -> "Iron Ridge"
export const brandShort = siteConfig.brandName.split(/\s+/).slice(0, 2).join(" ");

// First letter or digit of the brand name, e.g. "Iron Ridge Hardware Tool Shop" -> "I"
export const brandInitial = (siteConfig.brandName.match(/[A-Za-z0-9]/)?.[0] ?? "S").toUpperCase();

export const fallbackImage = "/img/web/products/product1.jpg";

export const productPrice = (product: Product) =>
  product.bundles && product.bundles[0] ? product.bundles[0].price : parseFloat(product.ssPrice);

export const startingPrice = Math.min(...products.map(productPrice)).toFixed(2);
