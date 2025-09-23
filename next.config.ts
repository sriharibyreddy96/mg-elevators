import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/mg-elevators" : "",
  assetPrefix: isProd ? "/mg-elevators/" : "",
};

export default nextConfig;
