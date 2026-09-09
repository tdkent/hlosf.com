import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        port: "",
        protocol: "https",
        search: "",
      },
    ],
  },
};

export default nextConfig;
