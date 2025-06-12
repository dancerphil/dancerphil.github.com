import {defineConfig} from 'vite';
import {resolve, extname} from 'path';
import {readdirSync} from 'fs';
import react from '@vitejs/plugin-react';

const getInput = () => {
    const htmlFiles = readdirSync(__dirname).filter(file => extname(file) === '.html');
    const input: Record<string, string> = {
        main: resolve(__dirname, 'index.html'),
    };
    htmlFiles.forEach((file) => {
        const name = file.slice(0, -5);
        input[name] = resolve(__dirname, file);
    });
    return input;
};

export default defineConfig(() => {
    return {
        build: {
            outDir: 'dist',
            rollupOptions: {
                input: getInput(),
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
