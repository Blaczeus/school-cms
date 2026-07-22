<script setup lang="ts">
import DepartmentListing from '@/components/public/departments/DepartmentListing.vue';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import { departments as departmentData } from '@/data/departments';
import type { Department } from '@/types/department';

const props = withDefaults(
    defineProps<{
        departments?: Department[];
    }>(),
    {
        departments: () => departmentData,
    },
);
</script>

<template>
    <div class="public-departments-page bg-primary">
        <PublicBreadcrumb
            title="Departments"
            current="Departments"
            column-class="col-xl-5 col-lg-10"
            description="Explore the academic departments that coordinate teaching, research, and student development across the institution."
        />
        <DepartmentListing :departments="props.departments" />
    </div>
</template>
