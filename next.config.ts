import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local placeholder cover/gallery SVGs are swapped for real screenshots
    // before launch; SVG optimization is scoped to local /public assets only.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
