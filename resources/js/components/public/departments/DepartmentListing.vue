<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import DepartmentCard from '@/components/public/departments/DepartmentCard.vue';
import type { Department, DepartmentLevel } from '@/types/department';

const props = defineProps<{
    departments: Department[];
}>();

type FilterOption = {
    label: string;
    value: string;
};

const search = ref('');
const selectedFaculties = ref<string[]>([]);
const selectedDepartments = ref<string[]>([]);
const selectedLevels = ref<DepartmentLevel[]>([]);
const initialVisibleCount = 7;
const visibleCount = ref(initialVisibleCount);
const visibleDepartmentFilterCount = ref(5);

const facultyOptions = computed<FilterOption[]>(() =>
    Array.from(
        new Map(
            props.departments.map((department) => [
                department.facultySlug,
                {
                    label: department.facultyName,
                    value: department.facultySlug,
                },
            ]),
        ).values(),
    ),
);

const departmentOptions = computed<FilterOption[]>(() =>
    props.departments.map((department) => ({
        label: department.name,
        value: department.slug,
    })),
);

const filteredDepartments = computed(() => {
    const query = search.value.trim().toLowerCase();

    return props.departments.filter((department) => {
        const matchesSearch =
            !query ||
            [
                department.name,
                department.shortName,
                department.facultyName,
                department.summary,
                ...department.undergraduateProgrammes,
                ...department.postgraduateProgrammes,
                ...department.highlights,
            ]
                .join(' ')
                .toLowerCase()
                .includes(query);

        const matchesFaculty =
            selectedFaculties.value.length === 0 || selectedFaculties.value.includes(department.facultySlug);
        const matchesDepartment =
            selectedDepartments.value.length === 0 || selectedDepartments.value.includes(department.slug);
        const matchesLevel =
            selectedLevels.value.length === 0 ||
            selectedLevels.value.some((level) =>
                level === 'undergraduate'
                    ? department.undergraduateProgrammes.length > 0
                    : department.postgraduateProgrammes.length > 0,
            );

        return matchesSearch && matchesFaculty && matchesDepartment && matchesLevel;
    });
});

const visibleDepartments = computed(() => filteredDepartments.value.slice(0, visibleCount.value));
const hasMoreDepartments = computed(() => visibleCount.value < filteredDepartments.value.length);
const visibleDepartmentOptions = computed(() =>
    departmentOptions.value.slice(0, visibleDepartmentFilterCount.value),
);
const hasMoreDepartmentOptions = computed(
    () => visibleDepartmentFilterCount.value < departmentOptions.value.length,
);

function showMore(): void {
    visibleCount.value += 5;
}

function showMoreDepartmentOptions(): void {
    visibleDepartmentFilterCount.value += 5;
}

watch(
    [search, selectedFaculties, selectedDepartments, selectedLevels],
    () => {
        visibleCount.value = initialVisibleCount;
    },
    { deep: true },
);
</script>

<template>
    <!-- program area start -->
    <section class="rs-program-area section-space rs-program-five public-departments-program">
        <div class="container">
            <div class="row g-5">
                <div class="col-xl-3 col-lg-4">
                    <div class="filter-sidebar rs-filter-two rs-sidebar-sticky">
                        <h2 class="filter-main-title">Filter By</h2>
                        <div class="filter-item">
                            <h6 class="filter-title">Faculties</h6>
                            <div
                                v-for="faculty in facultyOptions"
                                :key="faculty.value"
                                class="filter-option"
                            >
                                <input
                                    :id="`faculty-${faculty.value}`"
                                    v-model="selectedFaculties"
                                    type="checkbox"
                                    name="faculty"
                                    :value="faculty.value"
                                />
                                <label :for="`faculty-${faculty.value}`">{{ faculty.label }}</label>
                            </div>
                        </div>
                        <div class="filter-item">
                            <h6 class="filter-title">Departments</h6>
                            <div
                                v-for="department in visibleDepartmentOptions"
                                :key="department.value"
                                class="filter-option"
                            >
                                <input
                                    :id="`dept-${department.value}`"
                                    v-model="selectedDepartments"
                                    type="checkbox"
                                    name="department"
                                    :value="department.value"
                                />
                                <label :for="`dept-${department.value}`">{{ department.label }}</label>
                            </div>
                            <button
                                v-if="hasMoreDepartmentOptions"
                                type="button"
                                class="show-more-btn"
                                @click="showMoreDepartmentOptions"
                            >
                                Show More
                            </button>
                        </div>
                        <div class="filter-item">
                            <h6 class="filter-title">Program Level</h6>
                            <div class="filter-option">
                                <input
                                    id="level-undergraduate"
                                    v-model="selectedLevels"
                                    type="checkbox"
                                    name="level"
                                    value="undergraduate"
                                />
                                <label for="level-undergraduate">Undergraduate</label>
                            </div>
                            <div class="filter-option">
                                <input
                                    id="level-postgraduate"
                                    v-model="selectedLevels"
                                    type="checkbox"
                                    name="level"
                                    value="postgraduate"
                                />
                                <label for="level-postgraduate">Postgraduate</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-8">
                    <div class="rs-program margin-10">
                        <div class="rs-filter-wrapper rs-filter-three">
                            <span class="rs-filter-result">
                                Total
                                <span class="rs-result-count">{{ filteredDepartments.length }}</span>
                                results found
                            </span>
                            <div class="rs-filter-search">
                                <form action="#" @submit.prevent>
                                    <input
                                        v-model="search"
                                        type="search"
                                        placeholder="Enter Keyword"
                                        aria-label="Search departments"
                                    />
                                    <button type="submit" aria-label="Search departments">
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
                        <div class="rs-program-item-wrapper">
                            <DepartmentCard
                                v-for="department in visibleDepartments"
                                :key="department.id"
                                :department="department"
                            />
                            <div v-if="visibleDepartments.length === 0" class="rs-program-item">
                                <div class="rs-program-content">
                                    <h5 class="rs-program-title">No departments found</h5>
                                    <p class="rs-program-desc">
                                        Adjust your search or filters to explore available departments.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div v-if="hasMoreDepartments" class="row">
                            <div class="col-xl-12">
                                <div class="rs-load-more-btn text-center mt-50">
                                    <button class="rs-btn" type="button" @click="showMore">
                                        Load More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- program area end -->
</template>
