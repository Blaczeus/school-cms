<script setup lang="ts">
import { computed } from 'vue';

import type { ServiceUnit } from '@/types/serviceUnit';

const props = defineProps<{
    unit: ServiceUnit;
}>();

const phoneHref = computed(() => (props.unit.contact?.phone ? `tel:${props.unit.contact.phone.replace(/\s+/g, '')}` : ''));
</script>

<template>
    <!-- service unit details area start -->
    <section class="rs-team-details-details-area rs-team-details section-space-top public-service-unit-overview">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-team-details-wrapper">
                        <div class="rs-team-details-thumb-wrapper">
                            <div class="rs-team-details-author-thumb">
                                <img :src="unit.image" :alt="unit.name" />
                            </div>
                            <div class="rs-team-details-author-info text-center">
                                <span class="rs-team-details-author-desig has-theme-red">{{ unit.category }}</span>
                                <h4 class="rs-team-details-author-name">{{ unit.name }}</h4>
                                <span v-if="unit.location" class="public-service-unit-overview-location">
                                    <i class="ri-map-pin-line" aria-hidden="true" />
                                    {{ unit.location }}
                                </span>
                            </div>
                        </div>
                        <div class="rs-team-details-content-wrapper">
                            <h3 class="rs-team-details-details-title">Unit Overview</h3>
                            <p class="rs-team-details-desc">{{ unit.description }}</p>

                            <div class="rs-team-details-info">
                                <div class="rs-team-details-info-item">
                                    <h5 class="rs-team-details-info-title">Primary Support</h5>
                                    <ul class="rs-info-list">
                                        <li>{{ unit.summary }}</li>
                                    </ul>
                                </div>
                                <div class="rs-team-details-info-item">
                                    <h5 class="rs-team-details-info-title">Access Information</h5>
                                    <ul class="rs-info-list">
                                        <li v-if="unit.location">{{ unit.location }}</li>
                                        <li v-if="unit.contact?.officeHours">{{ unit.contact.officeHours }}</li>
                                        <li v-if="unit.contact?.email">{{ unit.contact.email }}</li>
                                    </ul>
                                </div>
                            </div>

                            <h5 class="rs-team-details-contact-title">Official Contact</h5>
                            <div class="rs-contact-wrapper">
                                <a
                                    v-if="unit.contact?.email"
                                    class="rs-contact-info-item"
                                    :href="`mailto:${unit.contact.email}`"
                                >
                                    <i class="ri-mail-line" aria-hidden="true" />
                                    {{ unit.contact.email }}
                                </a>
                                <a
                                    v-if="unit.contact?.phone"
                                    class="rs-contact-info-item"
                                    :href="phoneHref"
                                >
                                    <i class="ri-phone-line" aria-hidden="true" />
                                    {{ unit.contact.phone }}
                                </a>
                                <span v-if="unit.location" class="rs-contact-info-item">
                                    <i class="ri-map-pin-line" aria-hidden="true" />
                                    {{ unit.location }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- service unit details area end -->
</template>
