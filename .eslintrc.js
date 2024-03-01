module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
    browser: true,
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsx: true,
    useJSXTextNode: true,
    ecmaVersion: 2018,
    sourceType: "module",
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "plugin:storybook/recommended",
  ],

  plugins: ["@typescript-eslint", "import", "prettier", "react", "react-hooks"],

  settings: {
    "import/resolver": { typescript: {} },
  },

  rules: {
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],

    "no-implicit-coercion": "error",
    "no-undef": "off",
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "no-var": "error",
    "prefer-const": "error",
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "keyword-spacing": ["error", { before: true, after: true }],
    "no-multi-spaces": "error",
    "space-before-blocks": ["error", "always"],
    camelcase: ["error", { properties: "always" }],
    "new-cap": ["error", { newIsCap: true }],
    "no-unused-vars": ["error", { args: "none" }],
    "no-use-before-define": ["error", { functions: false, classes: true }],
    "comma-dangle": ["error", "always-multiline"],
    "no-console": "off",
    "no-debugger": "error",
    "no-trailing-spaces": "error",
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "space-infix-ops": "error",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],

    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-extra-boolean-cast": "off",

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    "react/prop-types": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unknown-property": "off",

    "import/newline-after-import": ["error"],
  },
};
