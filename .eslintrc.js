module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "airbnb-typescript", "prettier", "plugin:storybook/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"]
  },
  ignorePatterns: [".eslintrc.*"],
  plugins: ["import", "react", "prettier", "react-hooks"],
  rules: {
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": "warn",
    // webpack config errors
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  },
  settings: {
    react:{
      version: "detect",
    }
  }
};