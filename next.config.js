/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Mandatory for GitHub Pages
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  // If your repo is "my-site", this must be "/my-site"
  basePath: '/testwebsite', 
};

module.exports = nextConfig;
