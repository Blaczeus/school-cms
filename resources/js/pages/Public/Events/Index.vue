<script setup lang="ts">
import EventListing from '@/components/public/events/EventListing.vue';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import { events as eventData } from '@/data/events';
import type { Event } from '@/types/event';

const props = withDefaults(
    defineProps<{
        events?: Event[];
    }>(),
    {
        events: () => eventData,
    },
);
</script>

<template>
    <div class="public-events-page bg-primary">
        <PublicBreadcrumb
            title="Event"
            current="Event"
            column-class="col-xl-5 col-lg-6"
            background="/public-site/images/bg/breadcrumb-bg-thumb-01.webp"
            :show-shape="false"
            description="Education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions and challenge conventions."
        />
        <EventListing :events="props.events" />
    </div>
</template>
