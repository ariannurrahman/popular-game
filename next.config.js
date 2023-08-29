/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'media.rawg.io' }],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
