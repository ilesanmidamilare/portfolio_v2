import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['i.ibb.co'], // 👈 allow external images
  },
};

export default nextConfig;
