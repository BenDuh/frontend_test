module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  bail: true,
  verbose: true,
  moduleNameMapper: {
    "^.*(jpe?g|png).*$": "<rootDir>/fileTransform.js",
  },
  collectCoverage: true,
  coverageReporters: ["lcov"],
  coverageDirector: "test-coverage",
};
