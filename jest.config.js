module.exports = {
  rootDir: './',
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)test.[jt]s?(x)'],
  moduleNameMapper: {
    '@/utils/helpers': '<rootDir>/src/utils/helpers'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js']
};
