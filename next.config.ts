const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/new-portfolio' : '',
  assetPrefix: isProd ? '/new-portfolio/' : '',
}

module.exports = nextConfig
