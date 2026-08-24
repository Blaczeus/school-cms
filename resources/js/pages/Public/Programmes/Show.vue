<script setup lang="ts">
import { computed } from 'vue';
import ProgrammeDetails from '@/components/public/programmes/ProgrammeDetails.vue';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import { findDepartment } from '@/data/departments';
import { findFaculty } from '@/data/faculties';
import { findProgramme, programmes } from '@/data/programmes';
import type { ProgrammeStudyLevel } from '@/types/programme';

const props = defineProps<{
    slug: string;
}>();

const studyLevelLabels: Record<ProgrammeStudyLevel, string> = {
    undergraduate: 'Undergraduate',
    postgraduate: 'Postgraduate',
};

const programme = computed(() => findProgramme(props.slug));

const faculty = computed(() =>
    programme.value ? findFaculty(programme.value.facultySlug) : undefined,
);

const department = computed(() =>
    programme.value ? findDepartment(programme.value.departmentSlug) : undefined,
);

const facultyName = computed(() => faculty.value?.name ?? 'Faculty to be confirmed');
const departmentName = computed(() => department.value?.name ?? 'Department to be confirmed');
const facultyHref = computed(() => (faculty.value ? `/faculties/${faculty.value.slug}` : '/faculties'));
const departmentHref = computed(() => (department.value ? `/departments/${department.value.slug}` : '/departments'));

const relatedProgrammes = computed(() => {
    if (!programme.value) {
        return [];
    }

    return programmes
        .filter(
            (candidate) =>
                candidate.slug !== programme.value?.slug &&
                (candidate.departmentSlug === programme.value?.departmentSlug ||
                    candidate.facultySlug === programme.value?.facultySlug),
        )
        .slice(0, 4);
});
</script>

<template>
    <div v-if="programme" class="public-programme-details-page bg-primary">
        <PublicBreadcrumb
            :title="programme.name"
            :current="programme.name"
            :breadcrumbs="[{ label: 'Programmes', href: '/programmes' }]"
            column-class="col-xl-6 col-lg-10"
            :description="programme.summary"
        />

        <ProgrammeDetails
            :programme="programme"
            :faculty-name="facultyName"
            :faculty-href="facultyHref"
            :department-name="departmentName"
            :department-href="departmentHref"
            :related-programmes="relatedProgrammes"
            :study-level-label="studyLevelLabels[programme.studyLevel]"
        />
    </div>
    <div v-else class="public-programme-details-page bg-primary">
        <PublicBreadcrumb
            title="Programme Not Found"
            current="Programme Not Found"
            :breadcrumbs="[{ label: 'Programmes', href: '/programmes' }]"
            column-class="col-xl-6 col-lg-10"
            description="The requested programme could not be found."
        />
    </div>
</template>
