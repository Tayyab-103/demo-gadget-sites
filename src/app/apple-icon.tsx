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
          background: siteConfig.theme.primaryColor || "#ff4370",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 100,
        }}
      >
        🧸
      </div>
    ),
    { ...size }
  );
}
