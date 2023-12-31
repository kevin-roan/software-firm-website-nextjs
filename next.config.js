/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "freesvg.org",
      },
      {
        protocol: "https",
        hostname: "www.webfx.com",
      },
      {
        protocol: "https",
        hostname: "logowik.com",
      },
      {
        protocol: "https",
        hostname: "imaginosolutions.com",
      },
    ],
  },
};

module.exports = nextConfig;
