<script setup lang="ts">
import { computed } from 'vue';
import NewsArticle from '@/components/public/news/NewsArticle.vue';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import { findNewsArticle, newsArticles } from '@/data/news';
import type { NewsArticle as NewsArticleType } from '@/types/news';

const props = withDefaults(
    defineProps<{
        article?: NewsArticleType;
        articles?: NewsArticleType[];
        slug?: string;
    }>(),
    {
        article: undefined,
        articles: () => newsArticles,
        slug: undefined,
    },
);

const article = computed(() => props.article ?? findNewsArticle(props.slug));
</script>

<template>
    <PublicBreadcrumb
        title="News Details"
        :current="article.title"
        :breadcrumbs="[{ label: 'News', href: '/news' }]"
        :description="article.excerpt"
    />
    <!-- postbox area start -->
    <section class="rs-postbox-area section-space">
        <div class="container">
            <div class="row g-5">
                <div class="col-xl-8 col-lg-9 col-md-10 mx-auto">
                    <NewsArticle :article="article" />
                </div>
            </div>
        </div>
    </section>
    <!-- rs-postbox area end -->
</template>
