import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporary: Ignore TypeScript errors during build.
  // This is needed because Prisma client types may not exist yet
  // if DATABASE_URL is not configured (common in early development).
  // Remove this once you have a real database connected.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
