import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

export const siteConfig = siteConfigData as unknown as SiteConfig;

// "Happy Trail Pet Goods Market" -> { main: "Happy Trail", sub: "Pet Goods Market" }
const words = siteConfig.brandName.trim().split(/\s+/);
export const brandParts = {
  main: words.slice(0, Math.min(2, words.length)).join(" "),
  sub: words.slice(2).join(" ") || "Pet Store",
};
