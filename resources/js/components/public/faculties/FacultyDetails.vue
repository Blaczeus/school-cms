<script setup lang="ts">
import type { Faculty } from '@/types/faculty';

defineProps<{
    faculty: Faculty;
}>();
</script>

<template>
    <!-- faculty area start -->
    <section class="rs-faculty-details-area rs-faculty-details pb-90">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-faculty-details-wrapper">
                        <div class="rs-faculty-details-thumb-wrapper text-center">
                            <div class="rs-faculty-details-thumb">
                                <img :src="faculty.deanImage" :alt="faculty.deanName" />
                            </div>
                            <div class="rs-faculty-details-author-info">
                                <h5 class="rs-faculty-name">{{ faculty.deanName }}</h5>
                                <span class="rs-faculty-desig">{{ faculty.deanTitle }}</span>
                            </div>
                        </div>
                        <div class="rs-faculty-details-content">
                            <div class="rs-faculty-details-info-item">
                                <h3 class="rs-faculty-details-title">Introduction to the Faculty</h3>
                                <p class="rs-faculty-details-desc">{{ faculty.description }}</p>
                            </div>
                            <div class="rs-faculty-details-info-item">
                                <h5 class="rs-faculty-info-title">Academic Leadership</h5>
                                <p class="rs-faculty-details-info-desc">
                                    {{ faculty.deanName }} leads the faculty's academic planning, teaching quality,
                                    research culture, and collaboration with departments and programme teams.
                                </p>
                            </div>
                            <div class="rs-faculty-details-info-item">
                                <h5 class="rs-faculty-info-title">Contact Information</h5>
                                <p class="rs-faculty-details-info-desc">
                                    {{ faculty.location }} - {{ faculty.contactEmail }} -
                                    {{ faculty.contactPhone }}
                                </p>
                            </div>
                            <div v-if="faculty.accreditation" class="rs-faculty-details-info-item">
                                <h5 class="rs-faculty-info-title">Academic Quality</h5>
                                <p class="rs-faculty-details-info-desc">{{ faculty.accreditation }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- faculty area end -->
</template>
