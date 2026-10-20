import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

// First letter or digit of the brand name, e.g. "Hearthside Kitchen Tool Market" -> "H"
export const brandInitial = (siteConfig.brandName.match(/[A-Za-z0-9]/)?.[0] ?? "S").toUpperCase();

const FONT_NAME = "Playfair Display";

/**
 * Renders the brand monogram (italic first letter on the theme's primary color).
 * Everything comes from config/site-config.json, so each site gets its own icon automatically.
 */
export async function renderBrandIcon(size: number, { rounded }: { rounded: boolean }) {
  const font = await readFile(join(process.cwd(), "assets/fonts/PlayfairDisplay-ExtraBoldItalic.ttf"));
  const { primaryColor, primaryTextColor, secondaryColor } = siteConfig.theme;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: primaryColor,
          borderRadius: rounded ? size * 0.24 : 0,
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: FONT_NAME,
            fontStyle: "italic",
            fontWeight: 800,
            fontSize: size * 0.78,
            lineHeight: 1,
            color: primaryTextColor,
            // Italic glyphs lean right; nudge left and up so the letter looks centered
            marginLeft: -size * 0.04,
            marginTop: -size * 0.06,
          }}
        >
          {brandInitial}
        </div>
        {size >= 64 && (
          <div
            style={{
              display: "flex",
              width: size * 0.3,
              height: Math.max(2, size * 0.03),
              borderRadius: 999,
              background: secondaryColor,
              marginTop: size * 0.02,
            }}
          />
        )}
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: FONT_NAME, data: font, weight: 800, style: "italic" }],
    }
  );
}
