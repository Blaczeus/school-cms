<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { computed, ref, watch } from 'vue';
import ProgrammeCard from '@/components/public/programmes/ProgrammeCard.vue';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import { departments } from '@/data/departments';
import { faculties } from '@/data/faculties';
import { programmes as programmeData } from '@/data/programmes';
import type { Programme, ProgrammeStudyLevel } from '@/types/programme';

const props = withDefaults(
    defineProps<{
        programmes?: Programme[];
    }>(),
    {
        programmes: () => programmeData,
    },
);

type FilterValue = 'all';
type StudyLevelFilter = ProgrammeStudyLevel | FilterValue;

type FilterOption = {
    label: string;
    value: string;
};

const selectedStudyLevel = ref<StudyLevelFilter>('all');
const selectedFaculty = ref<string>('all');
const selectedDepartment = ref<string>('all');

const studyLevelLabels: Record<ProgrammeStudyLevel, string> = {
    undergraduate: 'Undergraduate',
    postgraduate: 'Postgraduate',
};

function getDepartmentDisplayLabel(name: string): string {
    return name.replace(/^Department of\s+/u, '');
}

const facultyBySlug = computed(
    () => new Map(faculties.map((faculty) => [faculty.slug, faculty])),
);

const departmentBySlug = computed(
    () => new Map(departments.map((department) => [department.slug, department])),
);

const facultyOptions = computed<FilterOption[]>(() =>
    faculties
        .filter((faculty) => props.programmes.some((programme) => programme.facultySlug === faculty.slug))
        .map((faculty) => ({
            label: faculty.name,
            value: faculty.slug,
        })),
);

const departmentOptions = computed<FilterOption[]>(() =>
    departments
        .filter(
            (department) =>
                props.programmes.some((programme) => programme.departmentSlug === department.slug) &&
                (selectedFaculty.value === 'all' || department.facultySlug === selectedFaculty.value),
        )
        .map((department) => ({
            label: getDepartmentDisplayLabel(department.name),
            value: department.slug,
        })),
);

const filteredProgrammes = computed(() =>
    props.programmes.filter((programme) => {
        const matchesStudyLevel =
            selectedStudyLevel.value === 'all' || programme.studyLevel === selectedStudyLevel.value;
        const matchesFaculty =
            selectedFaculty.value === 'all' || programme.facultySlug === selectedFaculty.value;
        const matchesDepartment =
            selectedDepartment.value === 'all' || programme.departmentSlug === selectedDepartment.value;

        return matchesStudyLevel && matchesFaculty && matchesDepartment;
    }),
);

const programmeCards = computed(() =>
    filteredProgrammes.value.map((programme) => {
        const faculty = facultyBySlug.value.get(programme.facultySlug);
        const department = departmentBySlug.value.get(programme.departmentSlug);

        return {
            programme,
            facultyName: faculty?.name ?? 'Faculty to be confirmed',
            departmentName: department ? getDepartmentDisplayLabel(department.name) : 'Department to be confirmed',
            studyLevelLabel: studyLevelLabels[programme.studyLevel],
        };
    }),
);

const hasActiveFilters = computed(
    () =>
        selectedStudyLevel.value !== 'all' ||
        selectedFaculty.value !== 'all' ||
        selectedDepartment.value !== 'all',
);

function resetFilters(): void {
    selectedStudyLevel.value = 'all';
    selectedFaculty.value = 'all';
    selectedDepartment.value = 'all';
}

watch(selectedFaculty, () => {
    if (
        selectedDepartment.value !== 'all' &&
        !departmentOptions.value.some((department) => department.value === selectedDepartment.value)
    ) {
        selectedDepartment.value = 'all';
    }
});
</script>

<template>
    <div class="public-programmes-page bg-primary">
        <PublicBreadcrumb
            title="Programmes"
            current="Programmes"
            column-class="col-xl-5 col-lg-10"
            description="Explore academic pathways by study level, faculty, and department so you can find a programme that fits your goals."
        />

        <section class="rs-program-area section-space rs-program-five public-programmes-listing">
            <div class="container public-programmes-container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-10">
                        <div class="section-title-wrapper text-center public-programmes-intro">
                            <span class="section-subtitle">
                                <i class="ri-graduation-cap-line" aria-hidden="true" />
                                What Can I Study?
                            </span>
                            <h2 class="section-title">
                                Find a Programme That Fits Your Goals
                            </h2>
                            <p class="description">
                                Browse undergraduate and postgraduate pathways across the institution. Use the filters to narrow programmes by faculty, department, or study level.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row g-5 public-programmes-discovery-row">
                    <div class="col-xl-3 col-lg-4">
                        <aside class="filter-sidebar rs-filter-two rs-sidebar-sticky" aria-label="Programme filters">
                            <h2 class="filter-main-title">Filter By</h2>
                            <div class="filter-item">
                                <label class="filter-title" for="programme-study-level">Study Level</label>
                                <select id="programme-study-level" v-model="selectedStudyLevel" class="public-programme-filter-control">
                                    <option value="all">All Levels</option>
                                    <option value="undergraduate">Undergraduate</option>
                                    <option value="postgraduate">Postgraduate</option>
                                </select>
                            </div>
                            <div class="filter-item">
                                <label class="filter-title" for="programme-faculty">Faculty</label>
                                <select id="programme-faculty" v-model="selectedFaculty" class="public-programme-filter-control">
                                    <option value="all">All Faculties</option>
                                    <option
                                        v-for="faculty in facultyOptions"
                                        :key="faculty.value"
                                        :value="faculty.value"
                                    >
                                        {{ faculty.label }}
                                    </option>
                                </select>
                            </div>
                            <div class="filter-item">
                                <label class="filter-title" for="programme-department">Department</label>
                                <select id="programme-department" v-model="selectedDepartment" class="public-programme-filter-control">
                                    <option value="all">All Departments</option>
                                    <option
                                        v-for="department in departmentOptions"
                                        :key="department.value"
                                        :value="department.value"
                                    >
                                        {{ department.label }}
                                    </option>
                                </select>
                            </div>
                            <button
                                v-if="hasActiveFilters"
                                type="button"
                                class="show-more-btn public-programme-reset"
                                @click="resetFilters"
                            >
                                Reset Filters
                            </button>
                        </aside>
                    </div>
                    <div class="col-xl-9 col-lg-8">
                        <div class="rs-program margin-10">
                            <div class="rs-filter-wrapper rs-filter-three public-programme-results-header">
                                <span class="rs-filter-result">
                                    <span class="rs-result-count">{{ filteredProgrammes.length }}</span>
                                    programmes found
                                </span>
                            </div>
                            <div class="rs-program-item-wrapper">
                                <ProgrammeCard
                                    v-for="card in programmeCards"
                                    :key="card.programme.id"
                                    :programme="card.programme"
                                    :faculty-name="card.facultyName"
                                    :department-name="card.departmentName"
                                    :study-level-label="card.studyLevelLabel"
                                />
                                <div v-if="programmeCards.length === 0" class="rs-program-item public-programme-empty">
                                    <div class="rs-program-content">
                                        <h5 class="rs-program-title">No programmes match these filters</h5>
                                        <p class="rs-program-desc">
                                            Adjust the selected study level, faculty, or department to continue exploring available programmes.
                                        </p>
                                        <div class="rs-program-btn">
                                            <button class="rs-btn has-theme-red" type="button" @click="resetFilters">
                                                Reset Filters
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="public-programmes-admissions">
                                <div>
                                    <span>Ready to apply?</span>
                                    <p>Review admission steps, requirements, and tuition guidance before preparing your application.</p>
                                </div>
                                <Link class="rs-btn has-icon has-theme-red hover-black" href="/admissions/how-to-apply">
                                    <span class="btn-text-wrap">
                                        <span class="text-default">How to Apply</span>
                                        <span class="text-hover">How to Apply</span>
                                    </span>
                                    <span class="icon-box has-rotate">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                                            <path d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z" />
                                            <path d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
