/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to make a static site
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: '/testwebsite', // Replace with your repo name!
  assetPrefix: '/testwebsite/', // Replace with your repo name!
};

module.exports = nextConfig;
