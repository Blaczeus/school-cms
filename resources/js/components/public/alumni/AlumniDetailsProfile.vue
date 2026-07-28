<script setup lang="ts">
import type { Alumni } from '@/types/alumni';

defineProps<{
    alumni: Alumni;
}>();
</script>

<template>
    <!-- alumni details area start -->
    <section class="rs-alumni-details-area rs-alumni-details section-space-top">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-12">
                    <div class="rs-alumni-wrapper">
                        <div class="rs-alumni-thumb-wrapper">
                            <div class="rs-alumni-author-thumb">
                                <img :src="alumni.image" :alt="alumni.name" />
                            </div>
                            <div class="rs-alumni-author-info text-center">
                                <h5 class="rs-alumni-author-name">{{ alumni.name }}</h5>
                                <span class="rs-alumni-author-desig">{{ alumni.role }}</span>
                            </div>
                        </div>
                        <div class="rs-alumni-content-wrapper">
                            <h3 class="rs-alumni-details-title">About: Introduction</h3>
                            <p class="rs-alumni-details-desc">{{ alumni.biography }}</p>
                            <div class="rs-alumni-info">
                                <div class="rs-alumni-info-item">
                                    <h5 class="rs-alumni-info-title">Academic Qualifications</h5>
                                    <ul class="rs-info-list">
                                        <li v-for="qualification in alumni.qualifications" :key="qualification">
                                            {{ qualification }}
                                        </li>
                                    </ul>
                                </div>
                                <div class="rs-alumni-info-item">
                                    <h5 class="rs-alumni-info-title">Research Interests</h5>
                                    <ul class="rs-info-list">
                                        <li v-for="interest in alumni.researchInterests" :key="interest">{{ interest }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- alumni details area end -->
</template>
