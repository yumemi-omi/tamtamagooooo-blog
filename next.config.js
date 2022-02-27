/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  env: {
    APP_ROOT_URL: process.env.APP_ROOT_URL,
  },
}

module.exports = nextConfig
