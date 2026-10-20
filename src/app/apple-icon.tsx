import { renderBrandIcon } from "@/lib/brandIcon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  // iOS applies its own rounded mask, so the square stays full-bleed
  return renderBrandIcon(size.width, { rounded: false });
}
