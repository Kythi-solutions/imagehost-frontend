/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",

        // path: "/uploads/",
      },
    ],
  },
};

export default nextConfig;
