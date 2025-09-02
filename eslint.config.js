import {reactConfig} from '@hero-u/eslint-config/react.js';

export default [
    ...reactConfig,
    {
        rules: {
            '@typescript-eslint/prefer-for-of': 'off',
        },
    },
];
