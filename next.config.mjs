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
  // Use the prefix for GitHub Pages
  basePath: '/AnimatedPortfolio',
  assetPrefix: '/AnimatedPortfolio/',
};

export default nextConfig;