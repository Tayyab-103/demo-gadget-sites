import { ImageResponse } from "next/og";
import { siteConfig, brandLead, brandTail } from "@/lib/brandIcon";

export const alt = siteConfig.brandName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const { primaryColor, secondaryColor, neutralBgColor } = siteConfig.theme;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: primaryColor,
          position: "relative",
        }}
      >
        {/* Mountain peak outline in the corner */}
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: 0,
            height: 0,
            borderLeft: "300px solid transparent",
            borderRight: "300px solid transparent",
            borderBottom: `360px solid ${secondaryColor}`,
            opacity: 0.18,
            display: "flex",
          }}
        />
        <div style={{ display: "flex", width: 120, height: 8, borderRadius: 999, background: secondaryColor }} />
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 96,
            fontWeight: 900,
            letterSpacing: -2,
            textTransform: "uppercase",
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          {brandLead}
        </div>
        {brandTail && (
          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: secondaryColor,
            }}
          >
            {brandTail}
          </div>
        )}
        <div style={{ display: "flex", marginTop: 40, fontSize: 28, color: neutralBgColor }}>
          Compression baselayers · Zip training hoodies · Cushioned crew socks
        </div>
      </div>
    ),
    { ...size }
  );
}
