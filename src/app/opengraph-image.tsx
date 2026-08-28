import { ImageResponse } from "next/og";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export const alt = siteConfig.brandName;
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
          background: siteConfig.theme.primaryColor,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -90,
            left: -90,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: siteConfig.theme.secondaryColor,
            opacity: 0.15,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -110,
            right: -70,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: siteConfig.theme.secondaryColor,
            opacity: 0.2,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "24px 48px",
            borderRadius: 999,
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <div
            style={{
              fontSize: 48,
              color: siteConfig.theme.secondaryColor,
            }}
          >
            ⚡
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 900,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            {siteConfig.brandName}
          </div>
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: siteConfig.theme.secondaryColor,
          }}
        >
          Pro-Grade Sporting Goods &amp; Athletic Gear
        </div>

        <div
          style={{
            marginTop: 24,
            width: 140,
            height: 6,
            borderRadius: 999,
            background: siteConfig.theme.secondaryColor,
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
