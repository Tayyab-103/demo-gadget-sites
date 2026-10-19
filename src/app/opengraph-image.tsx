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
          background: "#1e293b",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -90,
            left: -90,
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "#ff4370",
            opacity: 0.25,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -110,
            right: -70,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "#ffb703",
            opacity: 0.25,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "20px 44px",
            borderRadius: 999,
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <div
            style={{
              fontSize: 48,
            }}
          >
            🧸
          </div>
          <div
            style={{
              fontSize: 42,
              fontWeight: 900,
              letterSpacing: 1,
              color: "#ffffff",
            }}
          >
            {siteConfig.brandName}
          </div>
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#ffb703",
          }}
        >
          Kids Toys, Puzzles, Board Games &amp; Action Figures
        </div>

        <div
          style={{
            marginTop: 20,
            width: 120,
            height: 6,
            borderRadius: 999,
            background: "#ff4370",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
