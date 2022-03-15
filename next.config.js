/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'media.cntraveler.com', 'links.papareact.com']
  }
};

module.exports = nextConfig;
