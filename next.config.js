/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   forceSwcTransforms: true
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**'
      }
    ]
  },
  compiler: {
    removeConsole: { exclude: ['info', 'error'] },
    reactRemoveProperties: { properties: ['^data-testid$'] }
  },
  env: {
    STRAPI_URL: 'http://localhost:1337'
  }
};

module.exports = nextConfig;
