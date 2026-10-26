import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/brandIcon";

export const alt = siteConfig.brandName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const { primaryColor, secondaryColor, neutralBgColor, neutralTextColor } = siteConfig.theme;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: neutralBgColor,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${secondaryColor}, ${primaryColor})`,
            display: "flex",
          }}
        />
        <div style={{ display: "flex", fontSize: 26, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: neutralTextColor, opacity: 0.6 }}>
          {siteConfig.Product || "Stationery & Office Supplies"}
        </div>
        <div style={{ display: "flex", marginTop: 18, fontSize: 84, fontWeight: 800, lineHeight: 1.05, color: neutralTextColor, maxWidth: 820 }}>
          {siteConfig.brandName}
        </div>
        <div style={{ display: "flex", marginTop: 28, width: 220, height: 18, borderRadius: 999, background: `linear-gradient(90deg, ${secondaryColor}, ${primaryColor})` }} />
        <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: neutralTextColor, opacity: 0.75 }}>
          Notebooks, pens &amp; desk sets for brighter workdays
        </div>
      </div>
    ),
    { ...size }
  );
}
