<script setup lang="ts">
import NewsCard from '@/components/public/news/NewsCard.vue';
import type { NewsArticle } from '@/types/news';

defineProps<{
    articles: NewsArticle[];
}>();
</script>

<template>
    <!-- blog area start -->
    <section class="rs-blog-area section-space rs-blog-two bg-primary has-theme-green">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-blog-wrapper">
                        <NewsCard
                            v-for="article in articles"
                            :key="article.id"
                            :article="article"
                        />
                    </div>
                </div>
            </div>
            <!-- pagination style -->
            <div class="row justify-content-center">
                <div class="col-xl-6">
                    <div class="pagination-wrapper mt-40">
                        <div class="common-pagination text-center">
                            <nav>
                                <ul>
                                    <li><a class="current">1</a></li>
                                    <li>
                                        <a href="javascript:void(0)" aria-disabled="true" @click.prevent>2</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" aria-disabled="true" @click.prevent>3</a>
                                    </li>
                                    <li>
                                        <a
                                            class="is-next"
                                            href="javascript:void(0)"
                                            aria-disabled="true"
                                            @click.prevent
                                        />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <!-- pagination style end -->
        </div>
    </section>
    <!-- blog area end -->
</template>
