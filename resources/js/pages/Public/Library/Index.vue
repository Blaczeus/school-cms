<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import {
    libraryAccessSteps,
    libraryCollections,
    libraryDigitalResources,
    libraryHighlights,
    librarySchedule,
    libraryStudySpaces,
} from '@/data/library';

const digitalResourceIcons: Record<string, string> = {
    'E-Books': 'ri-book-open-line',
    'Electronic Journals': 'ri-article-line',
    'Research Databases': 'ri-database-2-line',
    'Digital Reference Materials': 'ri-book-2-line',
};

const digitalResourceIcon = (title: string) => digitalResourceIcons[title] ?? 'ri-book-open-line';
</script>

<template>
    <div class="public-library-page bg-primary">
        <PublicBreadcrumb
            title="University Library"
            current="Library"
            column-class="col-xl-7 col-lg-10"
            description="Explore the collections, digital resources, study spaces and services that support learning, teaching and research across the university."
            background="/public-site/images/bg/breadcrumb-bg-thumb-01.webp"
        />

        <!-- libraries area start -->
        <section class="rs-libraries-area section-space-top public-library-intro">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 col-lg-10">
                        <span class="section-subtitle has-theme-red is-uppercase">
                            <i class="ri-book-open-line" aria-hidden="true" />
                            University Library
                        </span>
                        <h2 class="section-title">Resources for Learning, Study and Research</h2>
                        <p class="mt-15">
                            The University Library provides access to learning materials, study spaces and digital
                            resources that support students throughout their academic journey.
                        </p>
                        <p>
                            Whether you are looking for books, journals, reference materials or a quiet place to study,
                            the Library is designed to help you find and use the resources you need.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- libraries area end -->

        <!-- counter area start -->
        <div class="rs-counter-area rs-counter-three pt-40 public-library-highlights">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-counter-wrapper">
                            <div v-for="highlight in libraryHighlights" :key="highlight.id" class="rs-counter-item">
                                <div class="rs-counter-content">
                                    <div class="rs-counter-number-wrapper">
                                        <span class="rs-counter-number public-library-highlight-label">{{ highlight.label }}</span>
                                    </div>
                                    <h5 class="rs-counter-title">{{ highlight.title }}</h5>
                                    <span class="rs-counter-desc">{{ highlight.description }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- counter area end -->

        <!-- thumb area start -->
        <div class="rs-section-thumb-area rs-thumb-one bg-primary public-library-featured-thumb">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-thumb">
                            <img src="/public-site/images/bg/video-bg-thumb-03.webp" alt="Students studying in the university library" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- thumb area end -->

        <!-- libraries area start -->
        <section class="rs-libraries-area rs-libraries-one section-space-bottom public-library-collections">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 col-lg-10">
                        <span class="section-subtitle has-theme-red is-uppercase">
                            <i class="ri-archive-line" aria-hidden="true" />
                            Collections
                        </span>
                        <h3 class="section-title mb-15">Library Collections</h3>
                        <p>
                            Browse the main categories of learning materials available to support assignments, projects,
                            research preparation and independent study.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-libraries-wrapper">
                            <article v-for="collection in libraryCollections" :key="collection.id" class="rs-libraries-item">
                                <div class="rs-libraries-thumb">
                                    <img :src="collection.image" :alt="collection.alt" />
                                </div>
                                <div class="rs-libraries-content">
                                    <h5 class="rs-libraries-title">{{ collection.title }}</h5>
                                    <p class="rs-libraries-desc">{{ collection.description }}</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- libraries area end -->

        <!-- digital resources area start -->
        <section class="rs-scholarships-area rs-scholarships-three section-space-bottom public-library-digital">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-10">
                        <div class="section-title-wrapper text-center">
                            <span class="section-subtitle has-theme-red justify-content-center">
                                <i class="ri-global-line" aria-hidden="true" />
                                Digital Resources
                            </span>
                            <h2 class="section-title">Digital Support for Academic Work</h2>
                            <p class="section-intro">
                                These categories show the kinds of online materials and research support the Library can
                                guide students toward.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row g-5">
                    <div v-for="resource in libraryDigitalResources" :key="resource.id" class="col-xl-3 col-lg-6 col-md-6">
                        <article class="rs-scholarships-item public-library-digital-card">
                            <div class="public-library-digital-meta">
                                <span class="public-library-digital-icon">
                                    <i :class="digitalResourceIcon(resource.title)" aria-hidden="true" />
                                </span>
                                <span>{{ resource.category }}</span>
                            </div>
                            <h5>{{ resource.title }}</h5>
                            <p>{{ resource.description }}</p>
                            <small>{{ resource.accessNote }}</small>
                            <Link v-if="resource.url" :href="resource.url" class="public-library-resource-link">
                                Open Resource
                            </Link>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        <!-- digital resources area end -->

        <!-- campus life area start -->
        <section class="rs-campus-life-area rs-campus-life-three section-space-bottom no-bg public-library-study-spaces">
            <div class="rs-campus-life-wrapper">
                <div class="public-library-reading-bg" aria-hidden="true" />
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <span class="section-subtitle has-theme-red justify-content-center">
                                <i class="ri-door-open-line" aria-hidden="true" />
                                Study Spaces
                            </span>
                            <h2 class="rs-campus-life-title">Open Reading Hall</h2>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-11">
                            <div class="rs-campus-life-item-wrapper">
                                <article v-for="space in libraryStudySpaces" :key="space.id" class="rs-campus-life-item">
                                    <div class="rs-campus-life-thumb">
                                        <img :src="space.image" :alt="space.alt" />
                                    </div>
                                    <div class="public-library-study-copy">
                                        <h5>{{ space.title }}</h5>
                                        <p>{{ space.description }}</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- campus life area end -->

        <!-- access area start -->
        <section class="rs-process-area rs-process-one section-space-bottom public-library-access">
            <div class="container">
                <div class="row align-items-center g-5">
                    <div class="col-xl-5 col-lg-5">
                        <div class="section-title-wrapper">
                            <span class="section-subtitle has-theme-red">
                                <i class="ri-compass-3-line" aria-hidden="true" />
                                Access Guidance
                            </span>
                            <h2 class="section-title">How to Use Library Resources</h2>
                            <p class="section-intro">
                                Follow these simple steps when you need to find, borrow, consult or return learning
                                materials.
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-7">
                        <div class="public-library-access-steps">
                            <article v-for="step in libraryAccessSteps" :key="step.id" class="public-library-access-step">
                                <h5>{{ step.title }}</h5>
                                <p>{{ step.description }}</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- access area end -->

        <!-- visit area start -->
        <section class="rs-tuition-area rs-tuition-three section-space-bottom public-library-visit">
            <div class="container">
                <div class="row g-5 align-items-stretch">
                    <div class="col-xl-7 col-lg-7">
                        <div class="public-library-visit-card">
                            <span class="section-subtitle has-theme-red">
                                <i class="ri-time-line" aria-hidden="true" />
                                Visit Information
                            </span>
                            <h2 class="section-title">Plan Your Library Visit</h2>
                            <p>
                                Library access can vary during examination periods, holidays and special university
                                schedules. Students should check current notices before planning visits that depend on
                                extended access or specialist support.
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-5">
                        <div class="public-library-schedule">
                            <div v-for="item in librarySchedule" :key="item.id" class="public-library-schedule-row">
                                <strong>{{ item.day }}</strong>
                                <span>{{ item.status }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- visit area end -->

        <!-- cta area start -->
        <section class="rs-cta-area section-space-bottom public-library-service-link">
            <div class="container">
                <div class="rs-cta-two">
                    <div class="rs-cta-bg-thumb include-bg" data-background="/public-site/images/bg/cta-bg-thumb-01.webp" />
                    <div class="rs-cta-content">
                        <div class="rs-cta-icon">
                            <img src="/public-site/images/shape/badge-shape.webp" alt="" />
                        </div>
                        <h6 class="rs-cta-title">Need Library Support?</h6>
                        <p class="rs-cta-desc">
                            For registration guidance, official contact information and Library service procedures, visit
                            the University Library service page.
                        </p>
                        <div class="rs-cta-btn">
                            <Link class="rs-btn has-icon has-bg-white hover-red" href="/service-units/university-library">
                                <span class="btn-text-wrap">
                                    <span class="text-default">View Library Services</span>
                                    <span class="text-hover">View Library Services</span>
                                </span>
                                <span class="icon-box has-rotate">
                                    <i class="ri-arrow-right-up-line" aria-hidden="true" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- cta area end -->
    </div>
</template>
