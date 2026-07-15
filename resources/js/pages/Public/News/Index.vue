<script setup lang="ts">
import NewsBreadcrumb from '@/components/public/news/NewsBreadcrumb.vue';
import NewsGrid from '@/components/public/news/NewsGrid.vue';
import { newsArticles } from '@/data/news';
import type { NewsArticle } from '@/types/news';

const props = withDefaults(
    defineProps<{
        articles?: NewsArticle[];
    }>(),
    {
        articles: () => newsArticles,
    },
);
</script>

<template>
    <NewsBreadcrumb
        title="News"
        current="News"
        description="News, research updates, campus stories, and institutional announcements from our academic community."
    />
    <NewsGrid :articles="props.articles" />
</template>
