import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  serverExternalPackages: ['pino'],
  logging: false,
};

export default nextConfig;
