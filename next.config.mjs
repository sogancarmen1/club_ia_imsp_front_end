/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // S'assurer que Next.js supporte bien les fichiers dans "app"
  },
  // reactStrictMode: false,
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
