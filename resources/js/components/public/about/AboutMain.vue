<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import type { AboutPageContent } from '@/types/about';

defineProps<{
    content: AboutPageContent;
}>();
</script>

<template>
    <!-- about area start -->
    <section class="rs-about-area section-space bg-primary rs-about-seven public-about-page-main">
        <div class="container">
            <div class="row g-5">
                <div class="col-xl-3 col-lg-4">
                    <div class="page-sidebar rs-sidebar-sticky">
                        <div class="page-sidebar-item">
                            <h6 class="page-sidebar-title">{{ content.sidebarTitle }}</h6>
                            <span class="page-sidebar-line" />
                            <ul class="page-sidebar-list">
                                <li
                                    v-for="link in content.sidebarLinks"
                                    :key="link.label"
                                    :class="{ 'page-sidebar-active': link.active }"
                                >
                                    <Link v-if="link.href" :href="link.href">
                                        {{ link.label }}
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14">
                                                <path
                                                    d="M11.5908 13.8593H10.5176C10.3122 10.089 12.6466 8.11151 13.8261 7.53333H0V6.37722H13.8261C10.9952 4.82655 10.2975 1.82452 10.5191 0H11.5819C11.1221 4.49988 15.8553 6.37148 17.8797 6.37722V7.52259C12.0065 8.19889 11.3576 12.4215 11.5908 13.8593Z"
                                                />
                                            </svg>
                                        </span>
                                    </Link>
                                    <a v-else href="javascript:void(0)" aria-disabled="true" @click.prevent>
                                        {{ link.label }}
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14">
                                                <path
                                                    d="M11.5908 13.8593H10.5176C10.3122 10.089 12.6466 8.11151 13.8261 7.53333H0V6.37722H13.8261C10.9952 4.82655 10.2975 1.82452 10.5191 0H11.5819C11.1221 4.49988 15.8553 6.37148 17.8797 6.37722V7.52259C12.0065 8.19889 11.3576 12.4215 11.5908 13.8593Z"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <div class="rs-sidebar-page-thumb">
                                <img :src="content.sidebarImage" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-8">
                    <div class="rs-about-wrapper margin-15">
                        <h2 class="section-title has-theme-red mb-20">{{ content.title }}</h2>
                        <p class="section-desc">{{ content.intro }}</p>
                        <div class="rs-quote-wrapper">
                            <div class="rs-quote-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
                                    <path d="M0 0V24L12 12V0H0Z" />
                                    <path d="M20 0V24L32 12V0H20Z" />
                                </svg>
                            </div>
                            <p class="rs-quote-desc">"{{ content.quote }}"</p>
                            <h5 class="rs-quote-author">- {{ content.quoteAuthor }}</h5>
                        </div>
                        <p class="section-desc desc-two">{{ content.body }}</p>
                        <div class="rs-about-thumb-wrapper">
                            <div v-for="image in content.images" :key="image.src" class="rs-about-thumb">
                                <img :src="image.src" :alt="image.alt" />
                            </div>
                            <div class="rs-about-badge">
                                <img :src="content.badgeImage" alt="image" />
                            </div>
                        </div>
                        <div class="rs-counter-wrapper rs-counter-two">
                            <div class="rs-counter-bg-thumb include-bg" :data-background="content.counterBackground" />
                            <div class="rs-counter-item-wrapper">
                                <div v-for="statistic in content.statistics" :key="statistic.label" class="rs-counter-item">
                                    <div class="rs-counter-icon">
                                        <i :class="statistic.icon" />
                                    </div>
                                    <div class="rs-counter-content">
                                        <div class="rs-counter-number-wrapper">
                                            <span class="rs-counter-number odometer" :data-count="statistic.value">00</span>
                                            <span class="prefix">{{ statistic.suffix }}</span>
                                        </div>
                                        <span class="rs-counter-title">{{ statistic.label }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rs-why-choose-one public-about-features">
                            <div class="rs-why-choose-wrapper">
                                <div v-for="feature in content.features" :key="feature.title" class="rs-why-choose-item">
                                    <div class="rs-why-choose-icon">
                                        <i :class="feature.icon" />
                                    </div>
                                    <h5 class="rs-why-choose-title">{{ feature.title }}</h5>
                                    <p class="rs-why-choose-desc">{{ feature.description }}</p>
                                </div>
                            </div>
                        </div>
                        <h3 class="section-title has-theme-red mb-15">{{ content.campusTourTitle }}</h3>
                        <p class="section-desc">{{ content.campusTourDescription }}</p>
                        <div class="rs-video-wrapper rs-video-one">
                            <div class="rs-video-bg-thumb include-bg" :data-background="content.videoBackground" />
                            <div class="rs-video-wrapper text-center">
                                <div class="rs-video-play-btn rs-tween_max_btn-yes gsap-move-no">
                                    <a
                                        :href="content.videoUrl"
                                        class="rs-play-btn popup-video is-large is-white has-bg-gradient"
                                    >
                                        <i class="ri-play-large-fill" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h3 class="section-title has-theme-red mt-30 mb-15">{{ content.testimonialTitle }}</h3>
                        <p class="section-desc">{{ content.testimonialDescription }}</p>
                        <div class="rs-testimonial-three has-bg-white rs-swiper">
                            <div class="rs-testimonial-slider-wrapper">
                                <div
                                    class="swiper"
                                    data-clone-slides="false"
                                    data-loop="true"
                                    data-speed="1500"
                                    data-autoplay="true"
                                    data-dots-dynamic="false"
                                    data-effect="false"
                                    data-delay="2000"
                                    data-item="2"
                                    data-item-xl="2"
                                    data-item-lg="2"
                                    data-item-md="2"
                                    data-item-sm="1"
                                    data-item-xs="1"
                                    data-margin="30"
                                >
                                    <div class="swiper-wrapper">
                                        <div
                                            v-for="testimonial in content.testimonials"
                                            :key="testimonial.name"
                                            class="swiper-slide"
                                        >
                                            <div class="rs-testimonial-item">
                                                <div class="rs-testimonial-avater-wrapper">
                                                    <div class="rs-testimonial-avater-info">
                                                        <h5 class="rs-testimonial-avater-title">{{ testimonial.name }}</h5>
                                                        <span class="rs-testimonial-avater-designation">{{ testimonial.role }}</span>
                                                    </div>
                                                    <div class="rs-testimonial-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 44">
                                                            <path
                                                                d="M0.228171 11.5356C1.61659 3.91031 8.93392 -1.15945 16.5592 0.228969C24.1843 1.61757 29.2304 9.22121 28.6354 16.604C27.9522 25.1769 22.4433 35.8439 9.88149 43.1606C8.82381 43.7776 7.61132 42.5656 8.20571 41.4858C9.70432 38.709 11.6003 34.2348 12.7243 28.02C4.54547 27.239 -1.04913 19.7736 0.165671 11.9096L0.228171 11.5356ZM31.5446 11.5356C32.933 3.91046 40.2495 -1.15917 47.8747 0.228969C55.4999 1.61739 60.5468 9.2211 59.9518 16.604C59.2686 25.1769 53.7588 35.8438 41.1969 43.1606C40.1393 43.777 38.9278 42.5654 39.5221 41.4858C41.0207 38.709 42.9167 34.2348 44.0407 28.02C35.8619 27.239 30.2664 19.7736 31.4811 11.9096L31.5446 11.5356Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="rs-testimonial-rating-wrapper">
                                                    <span class="rs-testimonial-rating">{{ testimonial.rating }}</span>
                                                    <div class="rs-testimonial-rating-icon">
                                                        <i class="ri-star-fill" />
                                                        <i class="ri-star-fill" />
                                                        <i class="ri-star-fill" />
                                                        <i class="ri-star-fill" />
                                                        <i class="ri-star-line" />
                                                    </div>
                                                </div>
                                                <p class="rs-testimonial-desc">{{ testimonial.quote }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="rs-testimonial-pagination">
                                        <div
                                            class="swiper-pagination rs-pagination has-before-none has-theme-red has-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- about area end -->
</template>
