<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import type { Event } from '@/types/event';

defineProps<{
    events: Event[];
}>();
</script>

<template>
    <!-- event area start -->
    <section class="rs-event-area rs-event-two bg-primary section-space public-events-listing">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-event-wrapper">
                        <div v-for="event in events" :key="event.id" class="rs-event-item">
                            <div class="rs-event-shape">
                                <img src="/public-site/images/shape/three-line-shape.webp" alt="image" />
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
