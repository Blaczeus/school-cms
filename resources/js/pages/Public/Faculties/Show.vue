<script setup lang="ts">
import { computed } from 'vue';
import FacultyAcademics from '@/components/public/faculties/FacultyAcademics.vue';
import FacultyDetails from '@/components/public/faculties/FacultyDetails.vue';
import FacultyOverview from '@/components/public/faculties/FacultyOverview.vue';
import FacultyProgrammes from '@/components/public/faculties/FacultyProgrammes.vue';
import FacultyStats from '@/components/public/faculties/FacultyStats.vue';
import FacultyTestimonials from '@/components/public/faculties/FacultyTestimonials.vue';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import { faculties as facultyData, findFaculty } from '@/data/faculties';
import type { Faculty } from '@/types/faculty';

const props = withDefaults(
    defineProps<{
        faculty?: Faculty;
        faculties?: Faculty[];
        slug?: string;
    }>(),
    {
        faculty: undefined,
        faculties: () => facultyData,
        slug: undefined,
    },
);

const faculty = computed(() => props.faculty ?? findFaculty(props.slug) ?? props.faculties[0]);
</script>

<template>
    <div class="public-faculty-page bg-primary">
        <PublicBreadcrumb
            :title="faculty.name"
            :current="faculty.name"
            :breadcrumbs="[{ label: 'Faculties', href: '/faculties' }]"
            background="/public-site/images/bg/breadcrumb-bg-thumb-05.webp"
            :description="faculty.summary"
        />
        <FacultyOverview :faculty="faculty" />
        <FacultyDetails :faculty="faculty" />
        <FacultyStats :faculty="faculty" />
        <FacultyAcademics :faculty="faculty" />
        <FacultyProgrammes :faculty="faculty" />
        <FacultyTestimonials :faculty="faculty" />
    </div>
</template>
