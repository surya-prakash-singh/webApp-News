/*
EsLint Override for Test Case
*/
const jest = {
  files: ["src/**/*.test.{ts,tsx}"],
  env: {
    jest: true,
    node: true,
    browser: false,
  },
};
/*
EsLint Override for Configs
*/
const build = {
  files: ["webpack.config.js", "babel.config.js"],
  env: {
    node: true,
    browser: false,
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,
  },
};

/*
Linting Config
parser:- @typescript-eslint/parser
*/
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {},
  overrides: [jest, build],
};
