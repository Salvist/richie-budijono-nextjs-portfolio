/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/about_me", destination: "/about", permanent: true },
      { source: "/experience", destination: "/about#experience", permanent: true },
      { source: "/work-experience", destination: "/about#experience", permanent: true },
      { source: "/posts", destination: "/writing", permanent: true },
      { source: "/posts/:slug", destination: "/writing/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
