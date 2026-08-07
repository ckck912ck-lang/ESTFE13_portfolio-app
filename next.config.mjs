/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yfdznncqaeaaygrertyi.supabase.co",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
