require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    // root: true,
    ignorePatterns: ["!.*", "dist", "node_modules"],
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.vue'],
            parser: 'vue-eslint-parser',
            plugins: [
                '@typescript-eslint',
            ],
            parserOptions: {
                tsconfigRootDir: __dirname,
                parser: {
                    'ts': '@typescript-eslint/parser',
                    '<template>': 'espree'
                },
                sourceType: 'module',
                ecmaVersion: 'esnext',
                project: ['./tsconfig.json'],
            },
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'airbnb-typescript/base',
                '@vue/eslint-config-typescript/recommended',
                'plugin:import/typescript',
                'prettier',
            ],
            rules: {
                "no-secrets/no-secrets": ["error", { "tolerance": 3.6 }],
                'import/no-unresolved': 'off', // not work with typescript 4.7 ecma
                'import/extensions': 'off', // not work with typescript 4.7 ecma
            },
        },
    ],
    plugins: [
        'simple-import-sort',
        'no-secrets',
        'html',
    ],
    globals: {
        node: true,
        browser: true,
        jest: true,
        chrome: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'airbnb-base',
        'plugin:import/recommended',
        'plugin:unicorn/recommended',
        'plugin:sonarjs/recommended',
        'plugin:security/recommended',
        'plugin:promise/recommended',
        'plugin:optimize-regex/recommended',
        'plugin:no-unsanitized/DOM',
        'plugin:markdown/recommended',
        'plugin:jest/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:jsonc/base',
        'prettier',
    ],
    rules: {
        "no-secrets/no-secrets": ["error", { "tolerance": 3.9 }],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'unicorn/prefer-module': 'off', // vite is already doing this
        'unicorn/filename-case': [
            'error',
            {
                'cases': {
                    'camelCase': true,
                    'pascalCase': true
                }
            }
        ],
    },
};
