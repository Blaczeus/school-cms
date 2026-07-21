<script setup lang="ts">
import type { Faculty } from '@/types/faculty';

defineProps<{
    faculty: Faculty;
}>();
</script>

<template>
    <!-- feature area start -->
    <section class="rs-feature-area rs-feature-one section-space-top pb-60">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-feature-wrapper">
                        <div class="rs-feature-content">
                            <h3 class="rs-feature-title">{{ faculty.name }}</h3>
                            <p class="rs-feature-desc">{{ faculty.description }}</p>
                            <div class="rs-feature-list">
                                <div
                                    v-for="highlight in faculty.highlights.slice(0, 2)"
                                    :key="highlight"
                                    class="rs-feature-item"
                                >
                                    <div class="rs-feature-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
                                            <path
                                                d="M28 4.667C15.113 4.667 4.667 15.113 4.667 28S15.113 51.333 28 51.333 51.333 40.887 51.333 28 40.887 4.667 28 4.667Zm10.523 18.69-12.25 12.25a2.333 2.333 0 0 1-3.3 0l-5.496-5.497a2.333 2.333 0 1 1 3.3-3.3l3.847 3.847 10.6-10.6a2.333 2.333 0 1 1 3.3 3.3Z"
                                            />
                                        </svg>
                                    </div>
                                    <div class="rs-feature-list-info">
                                        <h5 class="rs-feature-list-title">{{ faculty.shortName }}</h5>
                                        <p class="rs-feature-text">{{ highlight }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="rs-feature-btn">
                                <a
                                    class="rs-btn has-icon has-theme-red hover-yellow"
                                    href="javascript:void(0)"
                                    aria-disabled="true"
                                    @click.prevent
                                >
                                    <span class="btn-text-wrap">
                                        <span class="text-default">Apply Now</span>
                                        <span class="text-hover">Apply Now</span>
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
                        <div class="rs-feature-thumb">
                            <img :src="faculty.image" :alt="faculty.name" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- feature area end -->
</template>
