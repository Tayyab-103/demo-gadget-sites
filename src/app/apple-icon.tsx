import { ImageResponse } from "next/og";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 36,
          background: siteConfig.theme.primaryColor,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: siteConfig.theme.secondaryColor,
          border: `2px solid ${siteConfig.theme.secondaryColor}`,
        }}
      >
        <div style={{ fontSize: 72 }}>👕</div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: 2,
            color: "#F8FAFC",
            marginTop: 4,
            textTransform: "uppercase",
          }}
        >
          Everyday
        </div>
      </div>
    ),
    { ...size }
  );
}
