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
        // index files are generated dinamically and may contain a lot of HTML content inside string literals, we are going to 
        // include the `.template.ts` files instead
        "**/index.ts",
        // template files in this project will certainly contain unused variables
        "**/*.template.ts"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        // we are using a different tsconfig here to let typescript-eslint pick script files.
        // those files are not included in the library artifact but we want the lint to happen.
        // more info -> https://typescript-eslint.io/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file 
        "project": "tsconfig.eslint.json",
        "sourceType": "module"
    },
    "extends": [
        "@pagopa/eslint-config/strong",
    ],
    "rules": {
        "@typescript-eslint/consistent-type-definitions": ["error", "type"]
    }
}
