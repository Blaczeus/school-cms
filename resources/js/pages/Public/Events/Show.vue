<script setup lang="ts">
import { computed } from 'vue';

import EventDetails from '@/components/public/events/EventDetails.vue';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import { events as eventData, findEvent } from '@/data/events';
import type { Event } from '@/types/event';

const props = withDefaults(
    defineProps<{
        event?: Event;
        events?: Event[];
        slug?: string;
    }>(),
    {
        event: undefined,
        events: () => eventData,
        slug: undefined,
    },
);

const event = computed(
    () =>
        props.event ??
        props.events.find((item) => item.slug === props.slug) ??
        findEvent(props.slug) ??
        props.events[0],
);
</script>

<template>
    <div class="public-events-page public-event-details-page bg-primary">
        <PublicBreadcrumb
            :title="event.title"
            :current="event.title"
            :breadcrumbs="[{ label: 'Events', href: '/events' }]"
            column-class="col-xl-5 col-lg-6"
            background="/public-site/images/bg/breadcrumb-bg-thumb-01.webp"
            :show-shape="false"
            :description="event.description"
        />
        <EventDetails :event="event" />
    </div>
</template>
