<script setup lang="ts">
import { router, usePage } from '@inertiajs/vue3';
import { computed, nextTick, onBeforeUnmount, onMounted } from 'vue';
import PublicBackToTop from '@/components/public/PublicBackToTop.vue';
import PublicCursor from '@/components/public/PublicCursor.vue';
import PublicPreloader from '@/components/public/PublicPreloader.vue';
import PublicTemplateAssets from '@/components/public/PublicTemplateAssets.vue';
import SiteFooter from '@/components/public/SiteFooter.vue';
import SiteHeader from '@/components/public/SiteHeader.vue';
import SiteOffcanvas from '@/components/public/SiteOffcanvas.vue';
import { publicInstitution } from '@/data/publicSite';
import {
    cleanupTemplateLifecycle,
    initializeTemplateLifecycle,
    reinitializeTemplateLifecycle,
} from '@/plugins/template/lifecycle';

type PublicHeaderVariant = 'standard' | 'overlay';

const props = withDefaults(
    defineProps<{
        title?: string;
        theme?: 'blue' | 'red';
        headerVariant?: PublicHeaderVariant;
    }>(),
    {
        title: publicInstitution.name,
        theme: 'red',
        headerVariant: undefined,
    },
);

const page = usePage();

const resolvedHeaderVariant = computed<PublicHeaderVariant>(() => {
    if (props.headerVariant) {
        return props.headerVariant;
    }

    return page.component.startsWith('Public/About/') ||
        page.component.startsWith('Public/Admissions/') ||
        page.component.startsWith('Public/Alumni/') ||
        page.component.startsWith('Public/Campus/') ||
        page.component.startsWith('Public/Contact/') ||
        page.component.startsWith('Public/Departments/') ||
        page.component.startsWith('Public/Events/') ||
        page.component.startsWith('Public/Faculties/') ||
        page.component.startsWith('Public/Library/') ||
        page.component.startsWith('Public/News/') ||
        page.component.startsWith('Public/ServiceUnits/')
        ? 'overlay'
        : 'standard';
});

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
    <SiteHeader :theme="theme" :variant="resolvedHeaderVariant" />
    <SiteOffcanvas :theme="theme" />

    <main>
        <slot />
    </main>

    <SiteFooter :theme="theme" />
    <PublicBackToTop :theme="theme" />
</template>
