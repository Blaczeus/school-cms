<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import type { Alumni } from '@/types/alumni';

defineProps<{
    alumni: Alumni[];
}>();
</script>

<template>
    <!-- team area start -->
    <section class="rs-team-area section-space rs-team-three public-alumni-profiles">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-team-sec-wrapper">
                        <h3 class="section-title text has-theme-red mb-20">Our Alumni</h3>
                        <p class="section-desc">
                            Our distinguished alumni represent excellence across industries, leading innovation, research,
                            creativity, and public service. Their achievements inspire future generations and continue to
                            elevate the institution's reputation through meaningful contributions.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-team-wrapper">
                        <div v-for="profile in alumni" :key="profile.id" class="rs-team-item">
                            <div class="rs-team-thumb">
                                <Link :href="`/alumni/${profile.slug}`">
                                    <img :src="profile.image" :alt="profile.name" />
                                </Link>
                            </div>
                            <div class="rs-team-content">
                                <h5 class="rs-team-title">
                                    <Link :href="`/alumni/${profile.slug}`">{{ profile.name }}</Link>
                                </h5>
                                <span class="rs-team-desig">{{ profile.role }}</span>
                                <p class="rs-team-bio">{{ profile.summary }}</p>
                                <div class="rs-team-btn">
                                    <Link class="rs-btn has-icon has-theme-red hover-black" :href="`/alumni/${profile.slug}`">
                                        <span class="btn-text-wrap">
                                            <span class="text-default">View Profile</span>
                                            <span class="text-hover">View Profile</span>
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
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- team area end -->
</template>
