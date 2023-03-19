/** @type {import('jest').Config} */
module.exports = {
  rootDir: './',
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  testMatch: ['**/?(*.)test.ts?(x)'],
  moduleNameMapper: {
    '@/utils/helpers': '<rootDir>/src/utils/helpers',
    '@/ui/icons': '<rootDir>/src/components/icons'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js']
};
