import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["image.tmdb.org", "placehold.co"], // Add domains you use
    unoptimized: true,
  },
  dangerouslyAllowSVG: true,
};

export default nextConfig;
