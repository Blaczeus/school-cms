<script setup lang="ts">
import FacultyBreadcrumb from '@/components/public/faculties/FacultyBreadcrumb.vue';
import FacultyGrid from '@/components/public/faculties/FacultyGrid.vue';
import { faculties as facultyData } from '@/data/faculties';
import type { Faculty } from '@/types/faculty';

const props = withDefaults(
    defineProps<{
        faculties?: Faculty[];
    }>(),
    {
        faculties: () => facultyData,
    },
);
</script>

<template>
    <div class="public-faculty-page bg-primary">
        <FacultyBreadcrumb
            title="Faculties"
            current="Faculties"
            description="Explore the academic faculties that support teaching, research, professional preparation, and student success."
        />
        <FacultyGrid :faculties="props.faculties" />
    </div>
</template>
