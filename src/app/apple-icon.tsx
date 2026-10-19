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
        }}
      >
        <div
          style={{
            color: siteConfig.theme.secondaryColor,
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 1,
            display: "flex",
          }}
        >
          ▲
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 2,
            marginTop: 8,
            display: "flex",
          }}
        >
          JOURNEY
        </div>
      </div>
    ),
    { ...size }
  );
}
