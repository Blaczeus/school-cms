<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

defineProps<{
    title: string;
}>();

const stylesheets = [
    'https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Prata&display=swap',
    '/public-site/css/vendor/bootstrap.min.css',
    '/public-site/css/vendor/animate.min.css',
    '/public-site/css/plugins/swiper.min.css',
    '/public-site/css/plugins/nice-select.css',
    '/public-site/css/plugins/flatpickr.min.css',
    '/public-site/css/plugins/nouislider.min.css',
    '/public-site/css/vendor/magnific-popup.css',
    '/public-site/css/vendor/odometer.min.css',
    '/public-site/css/vendor/spacing.css',
    '/public-site/css/vendor/remixicon.css',
    '/public-site/css/main.css',
];
</script>

<template>
    <Head :title="title">
        <meta name="template-version" content="1.0.1" />
        <link rel="shortcut icon" type="image/x-icon" href="/public-site/images/favicon.webp" />
        <link
            v-for="stylesheet in stylesheets"
            :key="stylesheet"
            rel="stylesheet"
            :href="stylesheet"
        />
    </Head>
</template>
