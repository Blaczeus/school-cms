import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: true,
            fonts: [
                bunny('Instrument Sans', {
                    weights: [400, 500, 600],
                }),
            ],
        }),
        inertia(),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        wayfinder({
            formVariants: true,
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
            '@admin': fileURLToPath(new URL('./resources/js/pages/Admin', import.meta.url)),
            '@components': fileURLToPath(new URL('./resources/js/components', import.meta.url)),
            '@composables': fileURLToPath(new URL('./resources/js/composables', import.meta.url)),
            '@layouts': fileURLToPath(new URL('./resources/js/layouts', import.meta.url)),
            '@pages': fileURLToPath(new URL('./resources/js/pages', import.meta.url)),
            '@plugins': fileURLToPath(new URL('./resources/js/plugins', import.meta.url)),
            '@public': fileURLToPath(new URL('./resources/js/pages/Public', import.meta.url)),
            '@services': fileURLToPath(new URL('./resources/js/services', import.meta.url)),
            '@types': fileURLToPath(new URL('./resources/js/types', import.meta.url)),
            '@utils': fileURLToPath(new URL('./resources/js/utils', import.meta.url)),
        },
    },
});
