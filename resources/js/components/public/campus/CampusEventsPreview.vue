<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import type { Event } from '@/types/event';

defineProps<{
    events: Event[];
}>();
</script>

<template>
    <!-- event area start -->
    <section class="rs-event-area rs-event-two bg-primary section-space public-campus-events">
        <div class="container">
            <div class="row align-items-center g-5 section-title-space">
                <div class="col-xl-7 col-lg-7">
                    <div class="section-title-wrapper">
                        <span class="section-subtitle has-theme-red is-uppercase">
                            <i class="ri-calendar-event-line" aria-hidden="true" />
                            What's Happening
                        </span>
                        <h2 class="section-title rs-split-text-enable split-in-left has-theme-red">
                            Upcoming Campus Events
                        </h2>
                        <p class="section-desc">
                            Discover activities, programmes and events happening across the university community.
                        </p>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5">
                    <div class="rs-event-btn d-flex justify-content-lg-end">
                        <Link class="rs-btn has-icon has-theme-red hover-black" href="/events">
                            <span class="btn-text-wrap">
                                <span class="text-default">View All Events</span>
                                <span class="text-hover">View All Events</span>
                            </span>
                            <span class="icon-box has-rotate">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                                    <path
                                        d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z"
                                    />
                                    <path
                                        d="M10.5 13.5C10.5 14.3284 9.82843 15 9 15C8.17157 15 7.5 14.3284 7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82843 12 10.5 12.6716 10.5 13.5Z"
                                    />
                                    <path
                                        d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z"
                                    />
                                    <path
                                        d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z"
                                    />
                                    <path
                                        d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z"
                                    />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-event-wrapper">
                        <div v-for="event in events" :key="event.id" class="rs-event-item">
                            <div class="rs-event-shape">
                                <img src="/public-site/images/shape/three-line-shape.webp" alt="" />
                            </div>
                            <div class="rs-event-thumb">
                                <Link :href="`/events/${event.slug}`">
                                    <img :src="event.image" :alt="event.title" />
                                </Link>
                                <div class="rs-event-tag">
                                    {{ event.location }}
                                </div>
                            </div>
                            <div class="rs-event-content">
                                <div class="rs-event-meta">
                                    <span class="rs-event-meta-item">{{ event.date }}</span>
                                    <span class="meta-divider" />
                                    <span class="rs-event-meta-item">{{ event.time }}</span>
                                </div>
                                <h5 class="rs-event-title">
                                    <Link :href="`/events/${event.slug}`">{{ event.title }}</Link>
                                </h5>
                                <div class="rs-event-btn">
                                    <Link class="rs-btn is-transparent" :href="`/events/${event.slug}`">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- event area end -->
</template>
