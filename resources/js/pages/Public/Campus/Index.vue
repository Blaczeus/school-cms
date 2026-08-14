<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';

import CampusEventsPreview from '@/components/public/campus/CampusEventsPreview.vue';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import {
    campusExperiences,
    campusGalleryItems,
    campusInfoStats,
    campusResourceLinks,
} from '@/data/campus';
import { events as eventData } from '@/data/events';
import { publicInstitution } from '@/data/publicSite';
import type { Event } from '@/types/event';

const props = withDefaults(
    defineProps<{
        events?: Event[];
    }>(),
    {
        events: () => eventData,
    },
);

const campusEvents = computed(() => props.events.slice(0, 3));
const hasCampusAddress = computed(() => publicInstitution.address.trim().length > 0);
const campusInfoIcons = ['ri-group-line', 'ri-run-line', 'ri-community-line', 'ri-calendar-event-line'];
</script>

<template>
    <div class="public-campus-page bg-primary">
        <PublicBreadcrumb
            title="Campus Life"
            current="Campus Life"
            column-class="col-xl-6 col-lg-10"
            background="/public-site/images/bg/breadcrumb-bg-thumb-05.webp"
            :show-shape="false"
            description="Discover the experiences, activities, spaces and community that make campus life an important part of the university experience."
        />

        <!-- campus intro area start -->
        <section class="rs-campus-life pt-40 pb-30 bg-primary rs-campus-life-six public-campus-intro">
            <div class="container">
                <div class="row align-items-end g-5">
                    <div class="col-xl-7 col-lg-8">
                        <div class="section-wrapper">
                            <span class="section-subtitle has-theme-red is-uppercase">
                                <i class="ri-graduation-cap-line" aria-hidden="true" />
                                Campus Life
                            </span>
                            <h2 class="section-title mb-15 has-theme-red">Experience Life Beyond the Classroom</h2>
                            <p class="section-desc">
                                University life is about more than lectures and examinations. Campus is where students learn,
                                connect, take part in activities, build friendships and create experiences that become part of
                                their university journey.
                            </p>
                            <p class="section-desc">
                                Explore the spaces, activities and opportunities that shape everyday student life across the
                                university community.
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-4">
                        <div class="public-campus-intro-thumb">
                            <img
                                src="/public-site/images/campus-life/campus-life-thumb-08.webp"
                                alt="Students experiencing campus life"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- campus intro area end -->

        <!-- campus experience area start -->
        <section class="rs-campus-life pb-30 bg-primary rs-campus-life-six public-campus-experiences">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-campus-life-wrapper">
                            <div v-for="experience in campusExperiences" :key="experience.id" class="rs-campus-life-item">
                                <div class="rs-campus-life-shape">
                                    <img src="/public-site/images/shape/three-line-shape.webp" alt="" />
                                </div>
                                <h5 class="rs-campus-life-title">
                                    {{ experience.title }}
                                </h5>
                                <p class="rs-campus-life-desc">{{ experience.description }}</p>
                                <div class="rs-campus-life-thumb">
                                    <img :src="experience.image" :alt="experience.alt" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- campus experience area end -->

        <!-- campus info area start -->
        <div class="rs-counter-area section-space-bottom rs-counter-three bg-primary public-campus-info">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-counter-wrapper">
                            <div v-for="(stat, index) in campusInfoStats" :key="stat.id" class="rs-counter-item">
                                <div class="rs-counter-content">
                                    <div class="rs-counter-number-wrapper public-campus-info-icon" aria-hidden="true">
                                        <i :class="campusInfoIcons[index]" />
                                    </div>
                                    <h5 class="rs-counter-title">{{ stat.title }}</h5>
                                    <span class="rs-counter-desc">{{ stat.description }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- campus info area end -->

        <!-- campus visual area start -->
        <section class="rs-campus-life-area rs-campus-life-three bg-primary section-space-bottom no-bg public-campus-visual">
            <div class="rs-campus-life-wrapper">
                <div
                    class="rs-campus-life-bg-thumb include-bg"
                    data-background="/public-site/images/bg/campus-bg-thumb-01.webp"
                />
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-8 col-lg-10">
                            <div class="section-title-wrapper text-center section-title-space">
                                <h2 class="rs-campus-life-title">A Visual Look at Campus Life</h2>
                                <p class="section-desc">
                                    See the everyday spaces and shared moments that help shape the student experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-11">
                            <div class="rs-campus-life-item-wrapper">
                                <div class="rs-campus-life-item">
                                    <div class="rs-campus-life-thumb">
                                        <img src="/public-site/images/campus-life/campus-life-thumb-08.webp" alt="Campus life space" />
                                    </div>
                                </div>
                                <div class="rs-campus-life-item has-video">
                                    <div class="rs-campus-life-thumb">
                                        <img src="/public-site/images/campus-life/campus-life-thumb-09.webp" alt="Students on campus" />
                                    </div>
                                    <div class="rs-campus-life-video">
                                        <button
                                            class="rs-play-btn is-large has-transparent-btn has-blur hover-yellow public-campus-video-placeholder"
                                            type="button"
                                            disabled
                                            aria-label="Campus video is not available"
                                        >
                                            <i class="ri-play-large-fill" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div class="rs-campus-life-item">
                                    <div class="rs-campus-life-thumb">
                                        <img src="/public-site/images/campus-life/campus-life-thumb-10.webp" alt="Campus community activity" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- campus visual area end -->

        <CampusEventsPreview :events="campusEvents" />

        <!-- gallery area start -->
        <section class="rs-gallery-area rs-gallery-three section-space-bottom bg-primary public-campus-gallery-preview">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-10">
                        <div class="section-title-wrapper text-center section-title-space">
                            <span class="section-subtitle has-theme-red is-uppercase">
                                <i class="ri-image-line" aria-hidden="true" />
                                Campus in Pictures
                            </span>
                            <h2 class="section-title rs-split-text-enable split-in-left has-theme-red mb-10">
                                Explore Campus Life
                            </h2>
                            <p class="section-desc">
                                A preview of the people, activities and spaces that give campus life its character.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-gallery-wrapper">
                            <div v-for="item in campusGalleryItems" :key="item.id" class="rs-gallery-item">
                                <div class="rs-gallery-thumb">
                                    <a class="popup-image" :href="item.image" :aria-label="`Open ${item.alt}`">
                                        <img :src="item.image" :alt="item.alt" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- gallery area end -->

        <!-- map area start -->
        <section class="rs-map-area section-space bg-primary rs-map-one public-campus-map">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-xl-5 col-lg-6">
                        <div class="rs-map-wrapper">
                            <span class="section-subtitle has-theme-red is-uppercase">
                                <i class="ri-map-pin-line" aria-hidden="true" />
                                Find Us
                            </span>
                            <h2 class="section-title has-theme-red mb-20">Explore Our Campus</h2>
                            <p class="section-desc">
                                Whether you are visiting for the first time or returning to campus, finding your way around
                                should be simple. Use the campus location information below to plan your visit and explore the
                                university environment.
                            </p>
                            <div v-if="hasCampusAddress" class="public-campus-address">
                                <i class="ri-map-pin-2-line public-campus-location-icon" aria-hidden="true" />
                                <span class="public-campus-location-copy">
                                    <strong>Campus Location</strong>
                                    <span>{{ publicInstitution.address }}</span>
                                </span>
                            </div>
                            <div v-else class="public-campus-location-placeholder">
                                <i class="ri-map-pin-2-line public-campus-location-icon" aria-hidden="true" />
                                <span class="public-campus-location-copy">
                                    <strong>Campus Location</strong>
                                    <span>Campus location details will be shared through official university channels.</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6">
                        <div class="public-campus-map-visual">
                            <img src="/public-site/images/gallery/gallery-thumb-05.webp" alt="Students walking through campus" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- map area end -->

        <!-- cta area start -->
        <section class="rs-cta-area rs-cta-two p-relative bg-theme-red public-campus-final-cta">
            <div class="container">
                <div class="rs-cta-wrapper">
                    <div class="row align-items-center g-5">
                        <div class="col-xl-5 col-lg-5">
                            <div class="rs-cta-content">
                                <span class="section-subtitle has-theme-red is-uppercase">
                                    <i class="ri-compass-3-line" aria-hidden="true" />
                                    Next Steps
                                </span>
                                <h2 class="rs-cta-title">Make the Most of Campus Life</h2>
                                <p class="rs-cta-desc">
                                    Explore the services, activities and opportunities available across the university community.
                                </p>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-7">
                            <div class="public-campus-resource-links">
                                <Link
                                    v-for="resource in campusResourceLinks"
                                    :key="resource.id"
                                    class="public-campus-resource-link"
                                    :href="resource.href"
                                >
                                    <span>
                                        <strong>{{ resource.label }}</strong>
                                        <small>{{ resource.description }}</small>
                                    </span>
                                    <i class="ri-arrow-right-up-line" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- cta area end -->
    </div>
</template>
