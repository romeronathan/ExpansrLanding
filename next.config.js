/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    path: 'http://localhost:3000/assets'
  }
}

module.exports = nextConfig
