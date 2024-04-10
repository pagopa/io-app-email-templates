module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "ignorePatterns": [
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
        "utils/email_generation_script.ts"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "extends": [
        "@pagopa/eslint-config/strong",
    ],
    "rules": {
        "@typescript-eslint/consistent-type-definitions": ["error", "type"]
    }
}
