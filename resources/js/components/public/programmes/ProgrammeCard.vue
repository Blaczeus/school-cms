<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import type { Programme } from '@/types/programme';

defineProps<{
    programme: Programme;
    facultyName: string;
    departmentName: string;
    studyLevelLabel: string;
}>();
</script>

<template>
    <article class="rs-program-item public-programme-card">
        <div class="rs-program-content">
            <h5 class="rs-program-title">
                <Link :href="`/programmes/${programme.slug}`">{{ programme.name }}</Link>
            </h5>
            <div class="rs-program-tag-wrapper">
                <span class="rs-program-tag">{{ programme.qualification }}</span>
                <span class="rs-program-tag">{{ studyLevelLabel }}</span>
            </div>
            <p class="rs-program-desc">{{ programme.summary }}</p>
            <dl class="public-programme-meta">
                <div>
                    <dt>Faculty</dt>
                    <dd>{{ facultyName }}</dd>
                </div>
                <div>
                    <dt>Department</dt>
                    <dd>{{ departmentName }}</dd>
                </div>
                <div>
                    <dt>Duration</dt>
                    <dd>{{ programme.duration }}</dd>
                </div>
                <div v-if="programme.studyMode">
                    <dt>Mode</dt>
                    <dd>{{ programme.studyMode }}</dd>
                </div>
            </dl>
            <div class="rs-program-btn public-programme-card-action">
                <Link class="rs-btn has-icon has-theme-red hover-black" :href="`/programmes/${programme.slug}`">
                    <span class="btn-text-wrap">
                        <span class="text-default">View Programme</span>
                        <span class="text-hover">View Programme</span>
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
        <div class="rs-program-thumb">
            <Link :href="`/programmes/${programme.slug}`">
                <img :src="programme.image" :alt="`${programme.name} programme`" />
            </Link>
        </div>
    </article>
</template>
