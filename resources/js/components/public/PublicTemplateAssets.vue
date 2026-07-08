<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

defineProps<{
    title: string;
}>();

const stylesheets = [
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

const scripts = [
    '/public-site/js/vendor/jquery-3.7.1.min.js',
    '/public-site/js/vendor/bootstrap.bundle.min.js',
    '/public-site/js/plugins/meanmenu.min.js',
    '/public-site/js/plugins/swiper.min.js',
    '/public-site/js/plugins/wow.min.js',
    '/public-site/js/plugins/jarallax.min.js',
    '/public-site/js/vendor/magnific-popup.min.js',
    '/public-site/js/vendor/isotope.pkgd.min.js',
    '/public-site/js/vendor/imagesloaded.pkgd.min.js',
    '/public-site/js/vendor/ajax-form.js',
    '/public-site/js/plugins/lenis.min.js',
    '/public-site/js/plugins/gsap.min.js',
    '/public-site/js/plugins/rs-anim-int.js',
    '/public-site/js/plugins/rs-scroll-trigger.min.js',
    '/public-site/js/plugins/rs-splitText.min.js',
    '/public-site/js/plugins/jquery.appear.min.js',
    '/public-site/js/plugins/nice-select.min.js',
    '/public-site/js/plugins/flatpickr.min.js',
    '/public-site/js/plugins/nouislider.min.js',
    '/public-site/js/vendor/odometer.min.js',
    '/public-site/js/main.js',
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
        <script
            v-for="script in scripts"
            :key="script"
            :src="script"
            defer
        />
    </Head>
</template>
