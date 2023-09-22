module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "@typescript-eslint", "react", "import", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "react-refresh/only-export-components": "warn",
    "prefer-const": "warn",
    "no-undef": "off",
    "react/react-in-jsx-scope": "off",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", ["parent", "sibling"], "index"],
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/no-unnecessary-type-constraint": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-empty-interface": "off",
  },
};
