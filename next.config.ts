import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // enables static export
  basePath: isProd ? "/mg-elevators" : "",
  assetPrefix: isProd ? "/mg-elevators/" : "",
  trailingSlash: true, // recommended for GitHub Pages
  images: {
    unoptimized: true, // required for GitHub Pages
  },
};

export default nextConfig;
