import { ImageResponse } from "next/og";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 8,
          background: siteConfig.theme.primaryColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: siteConfig.theme.secondaryColor,
          fontWeight: 900,
          fontSize: 18,
          border: `1px solid ${siteConfig.theme.secondaryColor}`,
        }}
      >
        R
      </div>
    ),
    { ...size }
  );
}
