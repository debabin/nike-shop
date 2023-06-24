/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**'
      }
    ]
  },
  compiler: {
    reactRemoveProperties: { properties: ['^data-testid$'] }
  },
  env: {
    STRAPI_URL: 'http://127.0.0.1:1337'
  }
};

module.exports = nextConfig;
