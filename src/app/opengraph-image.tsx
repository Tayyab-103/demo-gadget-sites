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
          background: siteConfig.theme.neutralBgColor,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -90,
            left: -90,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: siteConfig.theme.primaryColor,
            opacity: 0.08,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -110,
            right: -70,
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: siteConfig.theme.secondaryColor,
            opacity: 0.14,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "28px 56px",
            borderRadius: 24,
            background: "#ffffff",
            boxShadow: "0 12px 32px rgba(14, 16, 19, 0.12)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 900,
              letterSpacing: -2,
              textTransform: "uppercase",
              color: siteConfig.theme.neutralTextColor,
            }}
          >
            {siteConfig.brandName}
          </div>
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 32,
            fontWeight: 600,
            color: siteConfig.theme.neutralTextColor,
          }}
        >
          {siteConfig.Product || "Automotive Parts and Accessories"}
        </div>

        <div
          style={{
            marginTop: 28,
            width: 120,
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
