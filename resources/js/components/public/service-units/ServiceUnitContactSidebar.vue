<script setup lang="ts">
import { computed } from 'vue';

import type { ServiceUnit } from '@/types/serviceUnit';

const props = defineProps<{
    unit: ServiceUnit;
}>();

const emailHref = computed(() => (props.unit.contact?.email ? `mailto:${props.unit.contact.email}` : ''));
const phoneHref = computed(() => (props.unit.contact?.phone ? `tel:${props.unit.contact.phone.replace(/\s+/g, '')}` : ''));
</script>

<template>
    <div class="rs-sidebar-sticky public-service-unit-sidebar">
        <div class="rs-cta-two">
            <div class="rs-cta-bg-thumb include-bg" data-background="/public-site/images/bg/cta-bg-thumb-01.webp" />
            <div class="rs-cta-content">
                <div class="rs-cta-icon">
                    <img src="/public-site/images/shape/badge-shape.webp" alt="" />
                </div>
                <h6 class="rs-cta-title">Need Help?</h6>
                <p class="public-service-unit-sidebar-desc">
                    Contact {{ unit.name }} through the published university channel.
                </p>
                <div class="rs-cta-contact">
                    <a v-if="unit.contact?.phone" :href="phoneHref" class="contact-phone">{{ unit.contact.phone }}</a>
                    <a v-if="unit.contact?.email" :href="emailHref" class="contact-email">{{ unit.contact.email }}</a>
                    <span v-if="unit.location" class="contact-email">{{ unit.location }}</span>
                    <span v-if="unit.contact?.officeHours" class="contact-email">{{ unit.contact.officeHours }}</span>
                </div>
                <div class="rs-cta-btn">
                    <a v-if="unit.contact?.email" class="rs-btn has-icon has-bg-white hover-red" :href="emailHref">
                        <span class="btn-text-wrap">
                            <span class="text-default">Email Unit</span>
                            <span class="text-hover">Email Unit</span>
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
                    <button v-else type="button" class="rs-btn has-bg-white hover-red" disabled>Contact Pending</button>
                </div>
            </div>
        </div>
    </div>
</template>
