module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb-typescript",
    "prettier",
    "plugin:storybook/recommended",
  ],
  globals: {
    IS_DEV: true,
    API_URL: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  ignorePatterns: [".eslintrc.*", "./json-server/*.js", ".fttemplates/*"],
  plugins: ["import", "react", "prettier", "react-hooks", "fsd-check-paths"],
  rules: {
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": "warn",
    // webpack config errors
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "fsd-check-paths/path-checker": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
