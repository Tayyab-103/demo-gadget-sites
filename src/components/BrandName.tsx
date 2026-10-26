import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

// "Powerline Electrical Supply" -> "POWERLINE" / "ELECTRICAL SUPPLY"
const words = siteConfig.brandName.trim().split(/\s+/);
const splitAt = Math.max(1, Math.floor(words.length / 2));
export const brandTop = words.slice(0, splitAt).join(" ");
export const brandBottom = words.slice(splitAt).join(" ");

interface BrandNameProps {
  /** "dark" for light backgrounds, "light" for dark/colored backgrounds */
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { top: "text-base", bottom: "text-[0.5rem]" },
  md: { top: "text-xl sm:text-2xl", bottom: "text-[0.55rem] sm:text-[0.62rem]" },
  lg: { top: "text-2xl sm:text-3xl", bottom: "text-[0.62rem] sm:text-[0.7rem]" },
};

export default function BrandName({ tone = "dark", size = "md" }: BrandNameProps) {
  const s = sizes[size];

  return (
    <span className="inline-flex flex-col leading-none">
      <span
        className={`font-extrabold uppercase tracking-[0.06em] whitespace-nowrap ${s.top} ${
          tone === "dark" ? "text-gradient" : "text-white"
        }`}
      >
        {brandTop}
      </span>
      {brandBottom && (
        <span
          className={`mt-1.5 font-semibold uppercase tracking-[0.38em] whitespace-nowrap ${s.bottom} ${
            tone === "dark" ? "text-ink/70" : "text-white/70"
          }`}
        >
          {brandBottom}
        </span>
      )}
    </span>
  );
}
