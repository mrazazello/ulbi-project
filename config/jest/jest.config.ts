import path from "path";

export default {
  globals: { IS_DEV: true, API_URL: "" },
  clearMocks: true,
  // The test environment that will be used for testing
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ["node_modules"],
  modulePaths: ["<rootDir>src"],
  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  rootDir: "../../",
  setupFilesAfterEnv: ["<rootDir>config/jest/setupTest.ts"],
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg": path.resolve(__dirname, "JestEmptyComponent.tsx"),
    axios: "axios/dist/node/axios.cjs", // костыль против axios который падает в тестах в ошибку
  },

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: ["node_modules/(?!axios)"],
};
