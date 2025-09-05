import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações para melhor performance
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Otimização de build
  swcMinify: true,
  // Configurações experimentais para melhor performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
