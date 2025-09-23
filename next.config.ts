import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // output: "export",
  basePath: isProd ? "/mg-elevators" : "",
  assetPrefix: isProd ? "/mg-elevators/" : "",
  trailingSlash: true, // Optional, but good for static sites
  outputFileTracingRoot: __dirname, // Prevents workspace root warnings
};

export default nextConfig;
