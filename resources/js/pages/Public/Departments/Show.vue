<script setup lang="ts">
import { computed } from 'vue';

import DepartmentDetails from '@/components/public/departments/DepartmentDetails.vue';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import { departments as departmentData, findDepartment } from '@/data/departments';
import type { Department } from '@/types/department';

const props = withDefaults(
    defineProps<{
        department?: Department;
        departments?: Department[];
        slug?: string;
    }>(),
    {
        department: undefined,
        departments: () => departmentData,
        slug: '',
    },
);

const department = computed(
    () =>
        props.department ??
        props.departments.find((item) => item.slug === props.slug) ??
        findDepartment(props.slug) ??
        props.departments[0],
);
</script>

<template>
    <div class="public-departments-page public-department-details-page bg-primary">
        <PublicBreadcrumb
            title="Department Details"
            :current="department.shortName"
            :breadcrumbs="[{ label: 'Departments', href: '/departments' }]"
            column-class="col-xl-5 col-lg-10"
            :description="department.summary"
        />
        <DepartmentDetails :department="department" />
    </div>
</template>
