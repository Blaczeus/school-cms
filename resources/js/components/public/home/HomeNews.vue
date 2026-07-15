<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';
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

const homeNewsArticles = computed(() => props.articles.slice(0, 3));
const animationDelays = ['.3s', '.5s', '.7s'];
</script>

<template>
        <!-- blog area start -->
        <section class="rs-blog-area section-space rs-blog-two secondary-bg">
            <div class="container">
                <div class="row align-items-center g-5 section-title-space">
                    <div class="col-xl-7 col-lg-7">
                        <div class="section-title-wrapper">
                            <span class="section-subtitle has-theme-red is-uppercase is-text-red">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                           <path
                              d="M5.21484 12.8949V16.6564C5.21484 16.6564 8.82175 15.1537 12.0198 15.1537C15.2178 15.1537 18.8255 16.6564 18.8255 16.6564V12.8424C18.8255 12.8424 15.3844 11.0225 11.9665 11.0225C8.55018 11.021 5.21484 12.8949 5.21484 12.8949Z">
                           </path>
                           <path
                              d="M22.6467 11.9993L24 11.2716L22.6467 10.5222V10.1666C22.6467 10.1666 23.0278 8.23413 20.862 9.24464C20.7517 9.30465 20.6924 9.36542 20.6684 9.42468L11.7367 4.47119L0 11.1884L4.43211 13.2019V12.5485C4.43211 12.5485 8.15079 10.4607 11.9625 10.4607C15.7734 10.4607 19.6092 12.4899 19.6092 12.4899V13.631L22.0563 12.3167V17.6377H21.2416V19.529L22.3248 18.7803L23.5274 19.529V17.637H22.6467V11.9993ZM22.0555 9.83803V10.1944L21.3413 9.79827C21.6017 9.62573 22.0555 9.38642 22.0555 9.83803ZM21.814 11.9251C21.737 11.9279 21.6603 11.9152 21.5883 11.8877C21.5164 11.8602 21.4507 11.8185 21.3952 11.7651C21.3398 11.7117 21.2956 11.6476 21.2655 11.5768C21.2353 11.5059 21.2198 11.4297 21.2197 11.3527C21.2197 11.2757 21.2351 11.1994 21.2652 11.1285C21.2953 11.0576 21.3393 10.9935 21.3947 10.94C21.4501 10.8865 21.5157 10.8447 21.5876 10.8172C21.6595 10.7896 21.7362 10.7768 21.8132 10.7795C21.9615 10.7848 22.102 10.8474 22.2051 10.9542C22.3082 11.0609 22.3659 11.2035 22.366 11.3519C22.3661 11.5003 22.3086 11.643 22.2056 11.7499C22.1027 11.8568 21.9623 11.9196 21.814 11.9251Z">
                           </path>
                        </svg>
                        Blog & News
                     </span>
                            <h2 class="section-title rs-split-text-enable split-in-left">Read Our Latest News
                            </h2>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-5">
                        <div class="rs-event-btn d-flex justify-content-lg-end">
                            <Link class="rs-btn has-icon has-theme-red radius-15 hover-black" href="/news">
                                <span class="btn-text-wrap">
                           <span class="text-default">View All Post</span>
                                <span class="text-hover">View All Post</span>
                                </span>
                                <span class="icon-box has-rotate">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                              <path
                                 d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z">
                              </path>
                              <path
                                 d="M10.5 13.5C10.5 14.3284 9.82843 15 9 15C8.17157 15 7.5 14.3284 7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82843 12 10.5 12.6716 10.5 13.5Z">
                              </path>
                              <path
                                 d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z">
                              </path>
                              <path
                                 d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z">
                              </path>
                              <path
                                 d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z">
                              </path>
                           </svg>
                        </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-blog-wrapper">
                            <div
                                v-for="(article, index) in homeNewsArticles"
                                :key="article.slug"
                                class="rs-blog-item wow fadeInUp"
                                :data-wow-delay="animationDelays[index]"
                                data-wow-duration="1s"
                            >
                                <div class="rs-blog-thumb">
                                    <Link :href="`/news/${article.slug}`">
                                        <img :src="article.image" :alt="article.category ?? article.title">
                                    </Link>
                                </div>
                                <div class="rs-blog-content">
                                    <div class="rs-blog-meta">
                                        <span v-if="article.category" class="rs-blog-meta-item">
                                 <i class="ri-price-tag-3-line"></i>{{ article.category }}
                              </span>
                                        <span class="rs-blog-meta-item">
                                 <i class="ri-calendar-line"></i>{{ article.publishedAt }}
                              </span>
                                    </div>
                                    <h5 class="rs-blog-title">
                                        <Link :href="`/news/${article.slug}`">{{ article.title }}</Link>
                                    </h5>
                                    <div class=" rs-blog-meta-author">
                                        <div v-if="article.authorImage" class="rs-blog-meta-author-thumb">
                                            <img :src="article.authorImage" :alt="article.author ?? 'Author'">
                                        </div>
                                        <div v-if="article.author" class="rs-blog-meta-author-content">
                                            <a href="javascript:void(0)" aria-disabled="true" @click.prevent> {{ article.author }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- blog area end -->
</template>

