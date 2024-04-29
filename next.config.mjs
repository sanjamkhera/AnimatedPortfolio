// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'cdn.pixabay.com'],
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images.pexels.com",
      },
      {
        protocol:"https",
        hostname:"cdn.pixabay.com",
      }
    ]
  },

  basePath: '/AnimatedPortfolio',
};

export default nextConfig;
