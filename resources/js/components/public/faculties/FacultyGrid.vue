<script setup lang="ts">
import { computed, ref } from 'vue';
import FacultyCard from '@/components/public/faculties/FacultyCard.vue';
import type { Faculty } from '@/types/faculty';

const props = defineProps<{
    faculties: Faculty[];
}>();

const search = ref('');

const filteredFaculties = computed(() => {
    const query = search.value.trim().toLowerCase();

    if (!query) {
        return props.faculties;
    }

    return props.faculties.filter((faculty) =>
        [
            faculty.name,
            faculty.shortName,
            faculty.summary,
            ...faculty.departments,
            ...faculty.programmes.map((programme) => programme.name),
        ]
            .join(' ')
            .toLowerCase()
            .includes(query),
    );
});
</script>

<template>
    <!-- filter area start -->
    <div class="rs-filter-area rs-filter-one">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-12">
                    <div class="rs-filter-wrapper">
                        <div class="rs-section-title-wrapper">
                            <h3 class="rs-section-title">Study Areas:</h3>
                        </div>
                        <div class="rs-filter-search">
                            <form action="#" @submit.prevent>
                                <input
                                    v-model="search"
                                    type="text"
                                    placeholder="Enter faculty name.."
                                />
                                <button type="submit">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M16.9995 17L13.1328 13.1333"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- filter area end -->

    <!-- faculty area start -->
    <section class="rs-faulty-area rs-faculty-four section-space-bottom">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div v-if="filteredFaculties.length > 0" class="rs-faculty-wrapper">
                        <FacultyCard
                            v-for="faculty in filteredFaculties"
                            :key="faculty.id"
                            :faculty="faculty"
                        />
                    </div>
                    <div v-else class="rs-load-more-btn text-center mt-50">
                        <h5 class="rs-faculty-title">No faculties are available yet.</h5>
                        <p>Faculty information will be published here as academic records are added.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- faculty area end -->
</template>
