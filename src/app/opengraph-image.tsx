import { ImageResponse } from "next/og";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export const alt = `${siteConfig.brandName} - Precision Electrical Parts & Industrial Equipments`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "#0F1217",
          position: "relative",
        }}
      >
        {/* Ambient Glowing Background Accents */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "#5B6BF0",
            opacity: 0.15,
            filter: "blur(80px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "#5B6BF0",
            opacity: 0.2,
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        {/* Brand Container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "24px 48px",
            borderRadius: 24,
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 900,
              letterSpacing: -2,
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            ⚡ {siteConfig.brandName}
          </div>
        </div>

        {/* Subtitle / Category */}
        <div
          style={{
            marginTop: 32,
            fontSize: 32,
            fontWeight: 700,
            color: "#A0AEC0",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Electrical Parts &amp; Industrial Equipments
        </div>

        <div
          style={{
            marginTop: 24,
            width: 140,
            height: 6,
            borderRadius: 999,
            background: "#5B6BF0",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
