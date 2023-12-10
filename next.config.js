/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "freesvg.org",
      },
    ],
  },
};

module.exports = nextConfig;
