/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'content2.onliner.by',
        port: '',
        pathname: '/catalog/device/header/**',
      },
    ],
  },};

module.exports = nextConfig;
