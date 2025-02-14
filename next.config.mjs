/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "src/config/saveFilesInDiskServer/images",
      },
    ],
  },
};

export default nextConfig;
