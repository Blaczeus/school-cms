<script setup lang="ts">
import ServiceUnitCard from '@/components/public/service-units/ServiceUnitCard.vue';
import type { ServiceUnit } from '@/types/serviceUnit';

defineProps<{
    units: ServiceUnit[];
}>();
</script>

<template>
    <!-- team area start -->
    <section id="service-unit-directory" class="rs-team-area section-space rs-team-four public-service-unit-directory">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-team-sec-wrapper">
                        <span class="section-subtitle has-theme-red justify-content-center">
                            <i class="ri-building-4-line" aria-hidden="true" />
                            Service Directory
                        </span>
                        <h3 class="section-title text-center has-theme-red mb-20">Find the Right Office</h3>
                        <p class="section-desc text-center">
                            Browse the university offices that support records, welfare, technology, health, security,
                            finance, learning resources, and campus operations.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-team-wrapper">
                        <ServiceUnitCard v-for="unit in units" :key="unit.id" :unit="unit" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- team area end -->
</template>
