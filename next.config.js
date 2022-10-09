/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'test-bucket.8abc56773aa5b1058ad63b6257739939.r2.cloudflarestorage.com',
    ],
  },
};

module.exports = nextConfig;
