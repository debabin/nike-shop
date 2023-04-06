/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   forceSwcTransforms: true
  // },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en'
  },
  compiler: {
    removeConsole: { exclude: ['info', 'error'] },
    reactRemoveProperties: { properties: ['^data-testid$'] }
  }
};

module.exports = nextConfig;
