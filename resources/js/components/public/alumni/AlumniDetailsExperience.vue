<script setup lang="ts">
import type { Alumni } from '@/types/alumni';

defineProps<{
    alumni: Alumni;
}>();
</script>

<template>
    <!-- experience area start -->
    <div class="rs-experience-area rs-experience-one section-space-bottom public-alumni-details-experience">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-experience-wrapper">
                        <div class="rs-experience-content-wrapper">
                            <div class="rs-experience-content has-border">
                                <div class="rs-section-title-wrapper mb-10">
                                    <h5 class="rs-section-title has-theme-red">Professional Experience</h5>
                                </div>
                                <p class="rs-experience-desc">{{ alumni.professionalExperience }}</p>
                            </div>

                            <div class="rs-certification-content has-border">
                                <div class="rs-section-title-wrapper mb-10">
                                    <h5 class="rs-section-title has-theme-red">Certification</h5>
                                </div>
                                <div class="rs-certification-item-wrapper">
                                    <div
                                        v-for="certification in alumni.certifications"
                                        :key="certification"
                                        class="rs-certificate-item"
                                    >
                                        <a
                                            class="rs-btn has-icon has-bg-white hover-red"
                                            href="javascript:void(0)"
                                            aria-disabled="true"
                                            @click.prevent
                                        >
                                            <span class="btn-text-wrap">
                                                <span class="text-default">{{ certification }}</span>
                                                <span class="text-hover">{{ certification }}</span>
                                            </span>
                                            <span class="icon-box">
                                                <svg class="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14">
                                                    <path
                                                        d="M11.5908 13.8593H10.5176C10.3122 10.089 12.6466 8.11151 13.8261 7.53333H0V6.37722H13.8261C10.9952 4.82655 10.2975 1.82452 10.5191 0H11.5819C11.1221 4.49988 15.8553 6.37148 17.8797 6.37722V7.52259C12.0065 8.19889 11.3576 12.4215 11.5908 13.8593Z"
                                                    />
                                                </svg>

                                                <svg class="icon-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14">
                                                    <path
                                                        d="M11.5908 13.8593H10.5176C10.3122 10.089 12.6466 8.11151 13.8261 7.53333H0V6.37722H13.8261C10.9952 4.82655 10.2975 1.82452 10.5191 0H11.5819C11.1221 4.49988 15.8553 6.37148 17.8797 6.37722V7.52259C12.0065 8.19889 11.3576 12.4215 11.5908 13.8593Z"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rs-experience-thumb">
                            <img :src="alumni.experienceImage" :alt="`${alumni.name} professional experience`" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- experience area end -->
</template>
