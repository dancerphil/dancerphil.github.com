import {defineConfig} from 'vite';
import {resolve} from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        build: {
            outDir: 'dist',
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    nested: resolve(__dirname, 'nested/index.html'),
                },
            },
        },
        optimizeDeps: {
            include: [
                '@emotion/react',
                '@emotion/styled',
            ],
        },
        plugins: [
            react({
                jsxImportSource: '@emotion/react',
                babel: {
                    plugins: [
                        '@emotion/babel-plugin',
                    ],
                },
            }),
        ],
        resolve: {
            alias: {
                '@': '/src',
            },
        },
    };
});
