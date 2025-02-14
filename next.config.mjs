/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    middleware: {
      requestHeaders: true,
      cookies: true,
    },
  },
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
