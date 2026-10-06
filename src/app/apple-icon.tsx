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
          background: "linear-gradient(135deg, #061A14 0%, #0B2920 50%, #059669 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontSize: 105,
          fontWeight: 900,
          fontFamily: "sans-serif",
          fontStyle: "italic",
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
