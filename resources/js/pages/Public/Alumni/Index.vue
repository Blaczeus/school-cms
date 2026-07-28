<script setup lang="ts">
import AlumniEvents from '@/components/public/alumni/AlumniEvents.vue';
import AlumniGallery from '@/components/public/alumni/AlumniGallery.vue';
import AlumniIntro from '@/components/public/alumni/AlumniIntro.vue';
import AlumniNews from '@/components/public/alumni/AlumniNews.vue';
import AlumniProfiles from '@/components/public/alumni/AlumniProfiles.vue';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import {
    alumniEvents,
    alumniGalleryImages,
    alumniIntroduction,
    alumniProfiles,
    alumniStoryBlocks,
    alumniStoryImages,
    alumniStoryIntro,
} from '@/data/alumni';
import { newsArticles } from '@/data/news';
import type { Alumni } from '@/types/alumni';

const props = withDefaults(
    defineProps<{
        alumni?: Alumni[];
    }>(),
    {
        alumni: () => alumniProfiles,
    },
);

const alumniTaggedNews = newsArticles.filter((article) => article.category === 'Alumni' || article.tags?.includes('Alumni'));
const alumniNews = [
    ...alumniTaggedNews,
    ...newsArticles.filter((article) => !alumniTaggedNews.some((alumniArticle) => alumniArticle.id === article.id)),
].slice(0, 4);
</script>

<template>
    <div class="public-alumni-page bg-primary">
        <PublicBreadcrumb
            title="Alumni"
            current="Alumni"
            background="/public-site/images/bg/breadcrumb-bg-thumb-05.webp"
            description="Education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions and challenge conventions."
        />
        <AlumniIntro
            :introduction="alumniIntroduction"
            :story-intro="alumniStoryIntro"
            :story-blocks="alumniStoryBlocks"
            :story-images="alumniStoryImages"
        />
        <AlumniProfiles :alumni="props.alumni" />
        <AlumniEvents :events="alumniEvents" />
        <AlumniGallery :images="alumniGalleryImages" />
        <AlumniNews :articles="alumniNews" />
    </div>
</template>
