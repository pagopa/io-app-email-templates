import pagopa from "@pagopa/eslint-config";

export default [
  ...pagopa,
  {
    ignores: [
      "node_modules",
      "generated",
      "**/__tests__/*",
      "**/__mocks__/*",
      "*.d.ts",
      "docker",
      "jest.config.js",
      "**/__integrations__/*",
      // index files are generated dinamically and may contain a lot of HTML content inside string literals
      "**/index.ts",
      // template files in this project will certainly contain unused variables
      "**/*.template.ts",
      // ignoring script file
      "utils/email_generation_script.ts",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "max-lines-per-function": "off",
    },
  },
];
