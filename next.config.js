/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/yarin-karavani',
  assetPrefix: '/yarin-karavani',
  trailingSlash: true,
}

module.exports = nextConfig