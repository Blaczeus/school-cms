<script setup lang="ts">
import type { NewsArticle } from '@/types/news';

withDefaults(
    defineProps<{
        article: NewsArticle;
        showComments?: boolean;
    }>(),
    {
        showComments: false,
    },
);
</script>

<template>
    <div class="rs-postbox-details-wrapper">
        <div class="rs-postbox-details-thumb mb-30">
            <img :src="article.detailImage ?? article.image" alt="image" />
        </div>
        <h3 class="rs-postbox-details-title">{{ article.title }}</h3>
        <div class="rs-postbox-details-content">
            <p v-for="paragraph in article.body?.slice(0, 1) ?? [article.content]" :key="paragraph">
                {{ paragraph }}
            </p>
            <div v-if="article.quote" class="rs-postbox-quote">
                <blockquote>
                    <p>{{ article.quote }}</p>
                    <div class="rs-postbox-quote-info">
                        <cite>{{ article.quoteAuthor }}</cite>
                        <div class="rs-postbox-quote-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 26">
                                <path
                                    d="M15.4287 0.142578V15.5713L10.2861 25.8564H2.57129L7.71387 15.5713H0V0.142578H15.4287ZM35.999 0.142578V15.5713L30.8564 25.8564H23.1416L28.2842 15.5713H20.5703V0.142578H35.999ZM21.5703 14.5713H29.9023L24.7598 24.8564H30.2383L34.999 15.335V1.14258H21.5703V14.5713ZM1 14.5713H9.33203L4.18945 24.8564H9.66797L14.4287 15.335V1.14258H1V14.5713Z"
                                />
                            </svg>
                        </div>
                    </div>
                </blockquote>
            </div>
            <p v-for="paragraph in article.body?.slice(1) ?? []" :key="paragraph">
                {{ paragraph }}
            </p>
            <div class="rs-postbox-details-social">
                <div class="rs-postbox-details-tags tagcloud">
                    <span>Tags:</span>
                    <a
                        v-for="tag in article.tags ?? []"
                        :key="tag"
                        href="javascript:void(0)"
                        aria-disabled="true"
                        @click.prevent
                    >
                        {{ tag }}
                    </a>
                </div>
                <div class="rs-postbox-social">
                    <span>Social:</span>
                    <div class="rs-theme-social theme-social has-transparent">
                        <a href="javascript:void(0)" aria-disabled="true" @click.prevent>
                            <i class="ri-facebook-fill" />
                        </a>
                        <a href="javascript:void(0)" aria-disabled="true" @click.prevent>
                            <i class="ri-twitter-x-fill" />
                        </a>
                        <a href="javascript:void(0)" aria-disabled="true" @click.prevent>
                            <i class="ri-linkedin-fill" />
                        </a>
                        <a href="javascript:void(0)" aria-disabled="true" @click.prevent>
                            <i class="ri-youtube-fill" />
                        </a>
                    </div>
                </div>
            </div>
            <div v-if="showComments" class="rs-postbox-comment-form">
                <div class="rs-postbox-comments-title">
                    <h3 class="rs-postbox-details-title">Leave a Comment</h3>
                </div>
                <form>
                    <div class="row g-4">
                        <div class="col-xl-6">
                            <div class="rs-contact-input-box">
                                <div class="rs-contact-input">
                                    <input id="name" name="name" type="text" placeholder="Your Name" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="rs-contact-input-box">
                                <div class="rs-contact-input">
                                    <input id="email" name="email" type="email" placeholder="Your Email" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="rs-contact-input-box">
                                <div class="rs-contact-input">
                                    <textarea id="message" name="message" placeholder="Write Message"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="rs-postbox-comment-btn">
                                <button type="submit" class="rs-btn">Post Comment</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
