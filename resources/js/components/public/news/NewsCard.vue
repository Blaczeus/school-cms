<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import type { NewsArticle } from '@/types/news';

defineProps<{
    article: NewsArticle;
}>();
</script>

<template>
    <div class="rs-blog-item">
        <div class="rs-blog-thumb">
            <Link :href="`/news/${article.slug}`">
                <img :src="article.image" :alt="article.category ?? article.title" />
            </Link>
        </div>
        <div class="rs-blog-content">
            <div class="rs-blog-meta">
                <span v-if="article.category" class="rs-blog-meta-item">
                    <i class="ri-price-tag-3-line" />{{ article.category }}
                </span>
                <span class="rs-blog-meta-item">
                    <i class="ri-calendar-line" />{{ article.publishedAt }}
                </span>
            </div>
            <h5 class="rs-blog-title">
                <Link :href="`/news/${article.slug}`">{{ article.title }}</Link>
            </h5>
            <div class="rs-blog-meta-author">
                <div v-if="article.authorImage" class="rs-blog-meta-author-thumb">
                    <img :src="article.authorImage" :alt="article.author ?? 'Author'" />
                </div>
                <div v-if="article.author" class="rs-blog-meta-author-content">
                    <a href="javascript:void(0)" aria-disabled="true" @click.prevent>
                        {{ article.author }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
