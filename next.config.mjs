/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/work/y-lift", destination: "/work-experience", permanent: true },
      { source: "/work/blast", destination: "/work-experience", permanent: true },
      { source: "/work/:slug", destination: "/projects/:slug", permanent: true },
      { source: "/work", destination: "/projects", permanent: true },
      { source: "/experience", destination: "/work-experience", permanent: true },
      { source: "/posts", destination: "/writing", permanent: true },
      { source: "/posts/:slug", destination: "/writing/:slug", permanent: true },
      { source: "/about_me", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
