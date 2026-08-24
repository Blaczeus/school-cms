<script setup lang="ts">
import { computed } from 'vue';

import AlumniDetailsExperience from '@/components/public/alumni/AlumniDetailsExperience.vue';
import AlumniDetailsProfile from '@/components/public/alumni/AlumniDetailsProfile.vue';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import { alumniProfiles as alumniProfileData, findAlumni } from '@/data/alumni';
import type { Alumni } from '@/types/alumni';

const props = withDefaults(
    defineProps<{
        alumni?: Alumni;
        alumniProfiles?: Alumni[];
        slug?: string;
    }>(),
    {
        alumni: undefined,
        alumniProfiles: () => alumniProfileData,
        slug: undefined,
    },
);

const alumni = computed(
    () =>
        props.alumni ??
        props.alumniProfiles.find((profile) => profile.slug === props.slug) ??
        findAlumni(props.slug) ??
        props.alumniProfiles[0],
);
</script>

<template>
    <div class="public-alumni-page public-alumni-details-page bg-primary">
        <PublicBreadcrumb
            :title="alumni.name"
            :current="alumni.name"
            :breadcrumbs="[{ label: 'Alumni', href: '/alumni' }]"
            background="/public-site/images/bg/breadcrumb-bg-thumb-05.webp"
            :show-shape="false"
            :description="alumni.summary"
        />
        <AlumniDetailsProfile :alumni="alumni" />
        <AlumniDetailsExperience :alumni="alumni" />
    </div>
</template>
