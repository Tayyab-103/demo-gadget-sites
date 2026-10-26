import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface BrandNameProps {
  className?: string;
  topClassName?: string;
  bottomClassName?: string;
}

// Splits the brand name into a large top line and a smaller tagline below,
// e.g. "Modern Meadow Womenswear Shop" -> "MODERN MEADOW" / "WOMENSWEAR SHOP"
export default function BrandName({
  className = "",
  topClassName = "text-base sm:text-lg xl:text-xl",
  bottomClassName = "text-[0.55rem] sm:text-[0.62rem]",
}: BrandNameProps) {
  const words = siteConfig.brandName.trim().split(/\s+/);
  const splitAt = Math.ceil(words.length / 2);
  const top = words.slice(0, splitAt).join(" ");
  const bottom = words.slice(splitAt).join(" ");

  return (
    <span className={`inline-flex flex-col items-start leading-none ${className}`}>
      <span className={`font-heading font-bold uppercase tracking-[0.12em] whitespace-nowrap ${topClassName}`}>
        {top}
      </span>
      {bottom && (
        <span className={`mt-1 font-heading font-semibold uppercase tracking-[0.42em] whitespace-nowrap opacity-70 ${bottomClassName}`}>
          {bottom}
        </span>
      )}
    </span>
  );
}
