import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // enable static export for GitHub Pages
  basePath: isProd ? "/mg-elevators" : "",
  assetPrefix: isProd ? "/mg-elevators/" : "",
  trailingSlash: true, // recommended for static hosting
  images: {
    unoptimized: true, // required for GitHub Pages
  },
};

export default nextConfig;
