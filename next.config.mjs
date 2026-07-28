/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/posts",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/posts/:slug",
        destination: "/insights/:slug",
        permanent: true,
      },
      {
        source: "/about_me",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/experience",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
