import path from "path";

export default {
  clearMocks: true,
  globals: { IS_DEV: true },

  coveragePathIgnorePatterns: ["/node_modules/"],

  setupFilesAfterEnv: ["<rootDir>config/jest/setupTest.ts"],
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg": path.resolve(__dirname, "JestEmptyComponent.tsx"),
  },

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ["node_modules"],
  rootDir: "../../",
  modulePaths: ["<rootDir>src"],

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ["/node_modules/"],
};
