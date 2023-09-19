/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
  env: {
    serverUri: 'http://localhost:8000'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
      },
    ],
  },
}

module.exports = nextConfig
