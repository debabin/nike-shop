/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en'
  }
};

module.exports = nextConfig;
