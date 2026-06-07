import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Vercel cron to work with App Router
  experimental: {},
};

export default nextConfig;
