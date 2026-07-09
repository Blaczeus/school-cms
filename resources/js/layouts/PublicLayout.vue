<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { nextTick, onBeforeUnmount, onMounted } from 'vue';
import PublicBackToTop from '@/components/public/PublicBackToTop.vue';
import PublicCursor from '@/components/public/PublicCursor.vue';
import PublicPreloader from '@/components/public/PublicPreloader.vue';
import PublicTemplateAssets from '@/components/public/PublicTemplateAssets.vue';
import SiteFooter from '@/components/public/SiteFooter.vue';
import SiteHeader from '@/components/public/SiteHeader.vue';
import SiteOffcanvas from '@/components/public/SiteOffcanvas.vue';
import {
    cleanupTemplateLifecycle,
    initializeTemplateLifecycle,
    reinitializeTemplateLifecycle,
} from '@/plugins/template/lifecycle';

withDefaults(
    defineProps<{
        title?: string;
        theme?: 'blue' | 'red';
    }>(),
    {
        title: 'Univet University',
        theme: 'red',
    },
);

const removeInertiaFinishListener = router.on('finish', async () => {
    await nextTick();
    void reinitializeTemplateLifecycle();
});

onMounted(() => {
    void initializeTemplateLifecycle();
});

onBeforeUnmount(() => {
    removeInertiaFinishListener();
    cleanupTemplateLifecycle();
});
</script>

<template>
    <PublicTemplateAssets :title="title" />
    <PublicPreloader :theme="theme" />
    <PublicCursor />
    <SiteHeader :theme="theme" />
    <SiteOffcanvas :theme="theme" />

    <main>
        <slot />
    </main>

    <SiteFooter :theme="theme" />
    <PublicBackToTop :theme="theme" />
</template>
