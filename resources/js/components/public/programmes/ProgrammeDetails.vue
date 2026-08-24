<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';
import type { Programme } from '@/types/programme';

const props = defineProps<{
    programme: Programme;
    facultyName: string;
    facultyHref: string;
    departmentName: string;
    departmentHref: string;
    relatedProgrammes: Programme[];
    studyLevelLabel: string;
}>();

type ProgrammeFact = {
    label: string;
    value: string;
    icon: string;
    href?: string;
};

const tabIds = computed(() => ({
    overview: `${props.programme.slug}-overview`,
    curriculum: `${props.programme.slug}-curriculum`,
    admissions: `${props.programme.slug}-admissions`,
}));

const facts = computed<ProgrammeFact[]>(() => {
    const items: (ProgrammeFact | undefined)[] = [
        {
            label: 'Qualification',
            value: props.programme.qualification,
            icon: 'ri-award-line',
        },
        {
            label: 'Study Level',
            value: props.studyLevelLabel,
            icon: 'ri-graduation-cap-line',
        },
        {
            label: 'Duration',
            value: props.programme.duration,
            icon: 'ri-time-line',
        },
        {
            label: 'Faculty',
            value: props.facultyName,
            icon: 'ri-building-4-line',
            href: props.facultyHref,
        },
        {
            label: 'Department',
            value: props.departmentName,
            icon: 'ri-community-line',
            href: props.departmentHref,
        },
        props.programme.studyMode
            ? {
                  label: 'Mode',
                  value: props.programme.studyMode,
                  icon: 'ri-calendar-check-line',
              }
            : undefined,
    ];

    return items.filter((fact): fact is ProgrammeFact => Boolean(fact));
});

const featuredOutcomes = computed(() => props.programme.learningOutcomes.slice(0, 2));
const featuredCareers = computed(() => props.programme.careerOpportunities.slice(0, 4));
</script>

<template>
    <!-- program details area start -->
    <section class="rs-program-details-area bg-primary rs-program-details section-space public-programme-details">
        <div class="container">
            <div class="rs-program-details-wrapper">
                <div class="public-programme-details-summary">
                    <div class="row g-5 align-items-center">
                        <div class="col-xl-7 col-lg-7">
                            <div class="section-title-wrapper">
                                <span class="section-subtitle">
                                    <i class="ri-book-open-line" aria-hidden="true" />
                                    Programme Details
                                </span>
                                <h2 class="section-title">{{ programme.name }}</h2>
                                <p class="description">{{ programme.description }}</p>
                            </div>
                            <div class="public-programme-details-links">
                                <Link :href="facultyHref">{{ facultyName }}</Link>
                                <span aria-hidden="true">/</span>
                                <Link :href="departmentHref">{{ departmentName }}</Link>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-5">
                            <div class="public-programme-details-thumb">
                                <img :src="programme.image" :alt="`${programme.name} students`" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rs-program-details-tab-wrapper">
                    <nav aria-label="Programme detail sections">
                        <ul class="nav nav-pills" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button
                                    :id="`${tabIds.overview}-tab`"
                                    class="nav-link active"
                                    data-bs-toggle="pill"
                                    :data-bs-target="`#${tabIds.overview}`"
                                    type="button"
                                    role="tab"
                                    :aria-controls="tabIds.overview"
                                    aria-selected="true"
                                >
                                    Overview
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button
                                    :id="`${tabIds.curriculum}-tab`"
                                    class="nav-link"
                                    data-bs-toggle="pill"
                                    :data-bs-target="`#${tabIds.curriculum}`"
                                    type="button"
                                    role="tab"
                                    :aria-controls="tabIds.curriculum"
                                    aria-selected="false"
                                >
                                    Curriculum
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button
                                    :id="`${tabIds.admissions}-tab`"
                                    class="nav-link"
                                    data-bs-toggle="pill"
                                    :data-bs-target="`#${tabIds.admissions}`"
                                    type="button"
                                    role="tab"
                                    :aria-controls="tabIds.admissions"
                                    aria-selected="false"
                                >
                                    Admissions
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="rs-program-details-tab-content-wrapper">
                    <div class="tab-content rs-program-details-tab-anim" :id="`${programme.slug}-tab-content`">
                        <div
                            :id="tabIds.overview"
                            class="tab-pane fade active show"
                            role="tabpanel"
                            :aria-labelledby="`${tabIds.overview}-tab`"
                            tabindex="0"
                        >
                            <div class="rs-program-details-tab-item mt-40">
                                <p class="rs-program-details-desc">{{ programme.description }}</p>
                                <div class="rs-program-details-feature">
                                    <h3 class="section-title text has-theme-red mb-30">Programme Highlight</h3>
                                    <div class="rs-program-details-feature-item-wrapper">
                                        <div v-for="fact in facts" :key="fact.label" class="rs-program-details-feature-item">
                                            <div class="rs-program-details-feature-shape">
                                                <img src="/public-site/images/shape/three-line-shape.webp" alt="" />
                                            </div>
                                            <div class="rs-program-details-feature-icon">
                                                <i :class="fact.icon" aria-hidden="true" />
                                            </div>
                                            <div class="rs-program-details-feature-content">
                                                <h5 class="rs-program-details-feature-title">{{ fact.label }}</h5>
                                                <p class="rs-program-details-feature-desc">
                                                    <Link v-if="fact.href" :href="fact.href">{{ fact.value }}</Link>
                                                    <template v-else>{{ fact.value }}</template>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="rs-program-details-about public-programme-about">
                                    <h3 class="section-title text has-theme-red mb-15">About This Programme</h3>
                                    <p class="rs-program-details-desc">{{ programme.description }}</p>
                                    <div class="rs-program-details-about-wrapper">
                                        <div class="row g-5 align-items-start">
                                            <div class="col-xl-7 col-lg-7">
                                                <div class="rs-program-details-about-content mt-30">
                                                    <h5 class="rs-program-details-title">Academic Focus</h5>
                                                    <p class="rs-program-details-about-desc mt-20">
                                                        Students engage with {{ programme.highlights.join(', ') }} through guided coursework, practical learning, and supervised academic development. The pathway is designed to help students understand the discipline, communicate technical ideas, and apply knowledge responsibly.
                                                    </p>
                                                    <h6 class="rs-program-details-title mt-20 mb-20">Learning Direction</h6>
                                                    <ul class="rs-program-details-about-list public-programme-about-list">
                                                        <li v-for="outcome in featuredOutcomes" :key="outcome">
                                                            {{ outcome }}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-xl-5 col-lg-5">
                                                <aside class="public-programme-about-panel">
                                                    <span class="public-programme-about-panel-label">Pathway Snapshot</span>
                                                    <h5>{{ programme.name }}</h5>
                                                    <p>{{ programme.summary }}</p>
                                                    <div class="public-programme-about-panel-list">
                                                        <div>
                                                            <span>Core Areas</span>
                                                            <strong>{{ programme.highlights.join(' / ') }}</strong>
                                                        </div>
                                                        <div>
                                                            <span>Possible Pathways</span>
                                                            <strong>{{ featuredCareers.join(' / ') }}</strong>
                                                        </div>
                                                    </div>
                                                </aside>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            :id="tabIds.curriculum"
                            class="tab-pane fade"
                            role="tabpanel"
                            :aria-labelledby="`${tabIds.curriculum}-tab`"
                            tabindex="0"
                        >
                            <div class="rs-program-details-tab-item mt-40">
                                <div class="rs-program-details-curriculum public-programme-study-stages">
                                    <h3 class="section-title text has-theme-red mb-15">Curriculum Overview</h3>
                                    <p class="rs-program-details-desc">
                                        The curriculum is organised as a progression of study stages rather than a fixed public course list. Exact course registration and credit rules should be confirmed through approved academic channels.
                                    </p>
                                    <div class="public-programme-stage-list">
                                        <article
                                            v-for="stage in programme.studyStages"
                                            :key="stage.title"
                                            class="public-programme-stage"
                                        >
                                            <div class="public-programme-stage-marker" aria-hidden="true" />
                                            <div class="public-programme-stage-content">
                                                <h3 class="section-title text has-theme-red mb-15">{{ stage.title }}</h3>
                                                <p class="rs-program-details-desc">{{ stage.description }}</p>
                                                <span v-if="stage.creditLoad" class="public-programme-stage-meta">
                                                    {{ stage.creditLoad }}
                                                </span>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            :id="tabIds.admissions"
                            class="tab-pane fade"
                            role="tabpanel"
                            :aria-labelledby="`${tabIds.admissions}-tab`"
                            tabindex="0"
                        >
                            <div class="rs-program-details-tab-item mt-40">
                                <div class="row g-5 align-items-start">
                                    <div class="col-xl-7 col-lg-7">
                                        <div class="section-wrapper mb-30">
                                            <h3 class="section-title mb-20">Requirements and Guidance</h3>
                                            <p class="section-desc">{{ programme.admissionSummary }}</p>
                                        </div>
                                        <div class="rs-scholarships-three">
                                            <h3 class="section-title text has-theme-red mb-30">Admissions Requirements</h3>
                                            <div class="rs-scholarships-wrapper">
                                                <div class="rs-scholarships-item-wrapper public-programme-requirements-grid">
                                                    <div
                                                        v-for="(requirement, index) in programme.admissionRequirements"
                                                        :key="requirement"
                                                        class="rs-scholarships-item"
                                                    >
                                                        <h6 class="rs-scholarships-title">
                                                            {{ index + 1 }}. Requirement
                                                        </h6>
                                                        <div class="rs-scholarships-list-wrapper">
                                                            <div class="rs-scholarships-list">{{ requirement }}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-5 col-lg-5">
                                        <div class="public-programme-admissions-card">
                                            <h3 class="section-title text has-theme-red mb-20">Cost & Financial Aid</h3>
                                            <p>{{ programme.costGuidance }}</p>
                                            <div class="public-programme-admissions-actions">
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
                                                <div class="public-programme-secondary-links">
                                                    <Link class="public-programme-text-link" href="/admissions/requirements">
                                                        <span>Admission Requirements</span>
                                                        <i class="ri-arrow-right-up-line" aria-hidden="true" />
                                                    </Link>
                                                    <Link class="public-programme-text-link" href="/admissions/tuition-and-fees">
                                                        <span>Tuition & Fees</span>
                                                        <i class="ri-arrow-right-up-line" aria-hidden="true" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="relatedProgrammes.length > 0" class="public-programme-related">
                    <div class="section-title-wrapper">
                        <span class="section-subtitle">
                            <i class="ri-links-line" aria-hidden="true" />
                            Related Programmes
                        </span>
                        <h3 class="section-title">Explore Similar Pathways</h3>
                    </div>
                    <div class="public-programme-related-list">
                        <Link
                            v-for="related in relatedProgrammes"
                            :key="related.slug"
                            class="public-programme-related-link"
                            :href="`/programmes/${related.slug}`"
                        >
                            <span>{{ related.name }}</span>
                            <small>{{ related.qualification }} / {{ related.duration }}</small>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- program details area end -->
</template>
