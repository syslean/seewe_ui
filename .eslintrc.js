module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: [],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off"
  }
};
