<script setup lang="ts">
import AboutGallery from '@/components/public/about/AboutGallery.vue';
import AboutMain from '@/components/public/about/AboutMain.vue';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import { aboutPageContent } from '@/data/about';
</script>

<template>
    <div class="public-about-page bg-primary">
        <PublicBreadcrumb
            title="About Institution Name"
            current="About Us"
            description="Education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions and challenge conventions."
        />
        <AboutMain :content="aboutPageContent" />
        <AboutGallery :images="aboutPageContent.galleryImages" />
    </div>
</template>
