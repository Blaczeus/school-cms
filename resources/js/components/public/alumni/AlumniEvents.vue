<script setup lang="ts">
import type { AlumniEvent } from '@/types/alumni';

defineProps<{
    events: AlumniEvent[];
}>();
</script>

<template>
    <!-- event area start -->
    <section class="rs-event-area section-space rs-event-one bg-primary public-alumni-events">
        <div class="container">
            <div class="row align-items-center g-5 section-title-space">
                <div class="col-xl-7 col-lg-7">
                    <div class="section-title-wrapper">
                        <span class="section-subtitle has-theme-red is-uppercase">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M5.21484 12.8949V16.6564C5.21484 16.6564 8.82175 15.1537 12.0198 15.1537C15.2178 15.1537 18.8255 16.6564 18.8255 16.6564V12.8424C18.8255 12.8424 15.3844 11.0225 11.9665 11.0225C8.55018 11.021 5.21484 12.8949 5.21484 12.8949Z"
                                />
                                <path
                                    d="M22.6467 11.9993L24 11.2716L22.6467 10.5222V10.1666C22.6467 10.1666 23.0278 8.23413 20.862 9.24464C20.7517 9.30465 20.6924 9.36542 20.6684 9.42468L11.7367 4.47119L0 11.1884L4.43211 13.2019V12.5485C4.43211 12.5485 8.15079 10.4607 11.9625 10.4607C15.7734 10.4607 19.6092 12.4899 19.6092 12.4899V13.631L22.0563 12.3167V17.6377H21.2416V19.529L22.3248 18.7803L23.5274 19.529V17.637H22.6467V11.9993Z"
                                />
                            </svg>
                            Upcoming Events
                        </span>
                        <h2 class="section-title rs-split-text-enable split-in-left">
                            Join Our Latest Events
                        </h2>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5">
                    <div class="rs-event-btn d-flex justify-content-lg-end">
                        <a class="rs-btn has-icon has-bg-white hover-red" href="javascript:void(0)" aria-disabled="true" @click.prevent>
                            <span class="btn-text-wrap">
                                <span class="text-default">View More Events</span>
                                <span class="text-hover">View More Events</span>
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
                        </a>
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
                                <a href="javascript:void(0)" aria-disabled="true" @click.prevent>
                                    <img :src="event.image" :alt="event.title" />
                                </a>
                            </div>
                            <div class="rs-event-content">
                                <div class="rs-event-meta">
                                    <span class="rs-event-meta-item">
                                        <i class="ri-calendar-line" />{{ event.date }}
                                    </span>
                                    <span class="rs-event-meta-item">
                                        <i class="ri-time-line" />{{ event.time }}
                                    </span>
                                </div>
                                <h5 class="rs-event-title">
                                    <a href="javascript:void(0)" aria-disabled="true" @click.prevent>{{ event.title }}</a>
                                </h5>
                                <span class="rs-event-meta-item">
                                    <i class="ri-map-2-line" />{{ event.location }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- event area end -->
</template>
