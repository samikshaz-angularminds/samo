import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    buildActivity: false, // removes bottom-left "toast" in dev
  },
};

export default nextConfig;
