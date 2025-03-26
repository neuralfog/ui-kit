import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
    build: {
        minify: 'terser',
        terserOptions: {
            keep_classnames: true,
        },
        lib: {
            entry: [resolve('index.ts')],
            name: 'ui-kit',
            fileName: (_, entryName) => `${entryName}.js`,
            formats: ['cjs'],
        },
        rollupOptions: {
            external: ['@neuralfog/elemix', '@neuralfog/elemix-renderer'],
        },
    },
});
