module.exports = {
    root: true,
    env: {
        browser: false,
        node: true,
        es2022: true
    },
    extends: [
        "eslint:recommended",
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "semi": ["warn", "always"],
        "semi-spacing": ["warn", {"after": true, "before": false}],
        "semi-style": ["warn", "last"],
        "no-extra-semi": "warn",
        "no-unexpected-multiline": "warn",
        "no-unreachable": "warn"
    }
};