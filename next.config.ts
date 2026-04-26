import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.cosmicjs.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imgix.cosmicjs.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
