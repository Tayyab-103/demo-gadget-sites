import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/brandIcon";

export const alt = `${siteConfig.brandName} - Tools & Hardware`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const { primaryColor, secondaryColor, primaryTextColor } = siteConfig.theme;

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
          background: `linear-gradient(125deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
          color: primaryTextColor,
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "10px 24px",
            borderRadius: 999,
            border: "2px solid rgba(255,255,255,0.35)",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Tools &amp; Hardware
        </div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 76, fontWeight: 900, letterSpacing: -2, textAlign: "center" }}>
          {siteConfig.brandName}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 30, opacity: 0.85 }}>
          {`Free ${siteConfig.shippingCarrier} shipping · ${siteConfig.trialPeriod}-day guarantee`}
        </div>
      </div>
    ),
    { ...size }
  );
}
