<script setup lang="ts">
import { computed } from 'vue';

import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import ServiceUnitDetails from '@/components/public/service-units/ServiceUnitDetails.vue';
import ServiceUnitOverview from '@/components/public/service-units/ServiceUnitOverview.vue';
import { findServiceUnit, serviceUnits as serviceUnitData } from '@/data/serviceUnits';
import type { ServiceUnit } from '@/types/serviceUnit';

const props = withDefaults(
    defineProps<{
        serviceUnit?: ServiceUnit;
        serviceUnits?: ServiceUnit[];
        slug?: string;
    }>(),
    {
        serviceUnit: undefined,
        serviceUnits: () => serviceUnitData,
        slug: '',
    },
);

const unit = computed(
    () =>
        props.serviceUnit ??
        props.serviceUnits.find((item) => item.slug === props.slug) ??
        findServiceUnit(props.slug) ??
        props.serviceUnits[0],
);
</script>

<template>
    <div class="public-service-units-page public-service-unit-details-page bg-primary">
        <PublicBreadcrumb
            :title="unit.name"
            :current="unit.name"
            :breadcrumbs="[{ label: 'Service Units', href: '/service-units' }]"
            column-class="col-xl-5 col-lg-10"
            :description="unit.summary"
        />
        <ServiceUnitOverview :unit="unit" />
        <ServiceUnitDetails :unit="unit" />
    </div>
</template>
