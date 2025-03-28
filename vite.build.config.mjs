import { defineConfig } from 'vite';
import { resolve, join } from 'node:path';
import { readdirSync } from 'node:fs';
import elemixPlugin from '@neuralfog/elemix-vite-plugin';

const componentsDir = join(__dirname, 'src', 'components');

const entry = readdirSync(componentsDir)
    .filter((file) => file.endsWith('.ts'))
    .map((file) => resolve(join(componentsDir, file)));

export default defineConfig({
    plugins: [elemixPlugin()],
    build: {
        minify: 'terser',
        terserOptions: {
            keep_classnames: true,
        },
        lib: {
            entry,
            name: 'ui-kit',
            fileName: (_, entryName) => `${entryName}.js`,
            formats: ['cjs'],
        },
        rollupOptions: {
            external: ['@neuralfog/elemix', '@neuralfog/elemix-renderer'],
        },
    },
});
