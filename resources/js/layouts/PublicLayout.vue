<script setup lang="ts">
import PublicBackToTop from '@/components/public/PublicBackToTop.vue';
import PublicCursor from '@/components/public/PublicCursor.vue';
import PublicPreloader from '@/components/public/PublicPreloader.vue';
import PublicTemplateAssets from '@/components/public/PublicTemplateAssets.vue';
import SiteFooter from '@/components/public/SiteFooter.vue';
import SiteHeader from '@/components/public/SiteHeader.vue';
import SiteOffcanvas from '@/components/public/SiteOffcanvas.vue';

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
