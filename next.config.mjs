/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.nest.rip",
        // path: "/uploads/",
      },
    ],
  },
};

export default nextConfig;
