import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig, brandInitial } from "@/lib/brandIcon";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const FONT_NAME = "Playfair Display";

/**
 * Renders the brand monogram (italic first letter on the theme's primary color).
 * Everything comes from config/site-config.json, so each site gets its own icon automatically.
 */
export async function renderBrandIcon(px: number, { rounded }: { rounded: boolean }) {
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
          borderRadius: rounded ? px * 0.24 : 0,
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: FONT_NAME,
            fontStyle: "italic",
            fontWeight: 800,
            fontSize: px * 0.78,
            lineHeight: 1,
            color: primaryTextColor,
            // Italic glyphs lean right; nudge left and up so the letter looks centered
            marginLeft: -px * 0.04,
            marginTop: -px * 0.06,
          }}
        >
          {brandInitial}
        </div>
        {px >= 64 && (
          <div
            style={{
              display: "flex",
              width: px * 0.3,
              height: Math.max(2, px * 0.03),
              borderRadius: 999,
              background: secondaryColor,
              marginTop: px * 0.02,
            }}
          />
        )}
      </div>
    ),
    {
      width: px,
      height: px,
      fonts: [{ name: FONT_NAME, data: font, weight: 800, style: "italic" }],
    }
  );
}

export default function Icon() {
  return renderBrandIcon(size.width, { rounded: true });
}
