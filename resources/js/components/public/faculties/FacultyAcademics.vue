<script setup lang="ts">
import { computed } from 'vue';
import type { Faculty } from '@/types/faculty';

const props = defineProps<{
    faculty: Faculty;
}>();

const accordionId = computed(() => `facultyAcademicOverview-${props.faculty.slug}`);
const departmentsId = computed(() => `facultyDepartments-${props.faculty.slug}`);
const departmentsHeadingId = computed(() => `facultyDepartmentsHeading-${props.faculty.slug}`);
const programmesId = computed(() => `facultyProgrammes-${props.faculty.slug}`);
const programmesHeadingId = computed(() => `facultyProgrammesHeading-${props.faculty.slug}`);
</script>

<template>
    <!-- overview area start -->
    <section class="rs-overview-area section-space-bottom rs-overview-two">
        <div class="container">
            <div class="row">
                <div class="rs-overview-wrapper rs-overview-grid">
                    <div class="rs-overview-content-wrapper">
                        <div class="rs-faq-wrapper">
                            <div class="rs-faq-content rs-accordion-two">
                                <div class="accordion-wrapper">
                                    <div class="accordion" :id="accordionId">
                                        <div class="rs-accordion-item">
                                            <h5 class="accordion-header" :id="departmentsHeadingId">
                                                <button
                                                    class="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    :data-bs-target="`#${departmentsId}`"
                                                    aria-expanded="true"
                                                    :aria-controls="departmentsId"
                                                >
                                                    Departments
                                                    <span class="accordion-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 15">
                                                            <path
                                                                d="M0.0175781 9.56403V8.72934C2.97994 8.56955 4.53369 10.3852 4.98798 11.3026V0.54895H5.89635V11.3026C7.11473 9.10081 9.47347 8.55811 10.907 8.73049V9.55706C7.3714 9.19949 5.90086 12.8809 5.89635 14.4554H4.99641C4.46504 9.88737 1.14729 9.38262 0.0175781 9.56403Z"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h5>
                                            <div
                                                :id="departmentsId"
                                                class="accordion-collapse collapse show"
                                                :data-bs-parent="`#${accordionId}`"
                                            >
                                                <div class="accordion-body">
                                                    <div class="rs-overview-desc-wrapper">
                                                        <p>
                                                            The faculty is organised into specialist departments that
                                                            coordinate teaching, research, advising, and academic quality.
                                                        </p>
                                                        <div class="rs-overview-desc-list">
                                                            <div
                                                                v-for="department in faculty.departments"
                                                                :key="department"
                                                                class="rs-overview-desc-list-item"
                                                            >
                                                                {{ department }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rs-accordion-item">
                                            <h5 class="accordion-header" :id="programmesHeadingId">
                                                <button
                                                    class="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    :data-bs-target="`#${programmesId}`"
                                                    aria-expanded="false"
                                                    :aria-controls="programmesId"
                                                >
                                                    Programmes
                                                    <span class="accordion-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 15">
                                                            <path
                                                                d="M0.0175781 9.56403V8.72934C2.97994 8.56955 4.53369 10.3852 4.98798 11.3026V0.54895H5.89635V11.3026C7.11473 9.10081 9.47347 8.55811 10.907 8.73049V9.55706C7.3714 9.19949 5.90086 12.8809 5.89635 14.4554H4.99641C4.46504 9.88737 1.14729 9.38262 0.0175781 9.56403Z"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h5>
                                            <div
                                                :id="programmesId"
                                                class="accordion-collapse collapse"
                                                :data-bs-parent="`#${accordionId}`"
                                            >
                                                <div class="accordion-body">
                                                    <div class="rs-overview-desc-wrapper">
                                                        <p>
                                                            Programmes are designed to support strong foundations,
                                                            practical learning, and progression into professional or
                                                            postgraduate pathways.
                                                        </p>
                                                        <div class="rs-overview-desc-list">
                                                            <div
                                                                v-for="programme in faculty.programmes"
                                                                :key="programme.id"
                                                                class="rs-overview-desc-list-item"
                                                            >
                                                                {{ programme.name }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rs-overview-thumb">
                        <img :src="faculty.image" :alt="faculty.name" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- overview area end -->
</template>
