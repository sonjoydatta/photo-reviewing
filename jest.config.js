module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': ['@swc/jest', { configFile: '.swcrc' }],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
};
