<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import type { NewsArticle } from '@/types/news';

const props = defineProps<{
    articles: NewsArticle[];
}>();

const categories = Array.from(
    props.articles.reduce((items, article) => {
        const category = article.category ?? 'News';
        items.set(category, (items.get(category) ?? 0) + 1);

        return items;
    }, new Map<string, number>()),
);

const recentArticles = props.articles.slice(0, 3);
const sidebarImages = [
    '/public-site/images/blog/sidebar/sidebar-thumb-01.webp',
    '/public-site/images/blog/sidebar/sidebar-thumb-02.webp',
    '/public-site/images/blog/sidebar/sidebar-thumb-03.webp',
];
</script>

<template>
    <div class="rs-sidebar-wrapper rs-sidebar-sticky">
        <div class="sidebar-widget mb-30">
            <h5 class="sidebar-widget-title">Search</h5>
            <div class="sidebar-search">
                <form action="#">
                    <div class="sidebar-search-input">
                        <input type="text" placeholder="Searching..." />
                        <button type="submit">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M16.9995 17L13.1328 13.1333"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="sidebar-widget widget-categories mb-30">
            <h5 class="sidebar-widget-title">Categories</h5>
            <div class="sidebar-widget-content">
                <div class="list">
                    <ul>
                        <li v-for="[category, count] in categories" :key="category">
                            <a href="javascript:void(0)" aria-disabled="true" @click.prevent>
                                {{ category }}
                                <span>({{ count }})</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="sidebar-widget">
            <h5 class="sidebar-widget-title">Recent Posts</h5>
            <div class="sidebar-widget-content">
                <div class="sidebar-blog-item-wrapper">
                    <div
                        v-for="(article, index) in recentArticles"
                        :key="article.id"
                        class="sidebar-blog-item"
                    >
                        <div class="sidebar-blog-thumb">
                            <Link :href="`/news/${article.slug}`">
                                <img :src="sidebarImages[index]" alt="image" />
                            </Link>
                        </div>
                        <div class="sidebar-blog-content">
                            <div class="sidebar-blog-meta">
                                <i class="ri-calendar-line" />
                                <span>{{ article.publishedAt }}</span>
                            </div>
                            <h6 class="sidebar-blog-title">
                                <Link :href="`/news/${article.slug}`">{{ article.title }}</Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
