<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import ServiceUnitListing from '@/components/public/service-units/ServiceUnitListing.vue';
import { serviceUnits as serviceUnitData } from '@/data/serviceUnits';
import type { ServiceUnit } from '@/types/serviceUnit';

const props = withDefaults(
    defineProps<{
        serviceUnits?: ServiceUnit[];
    }>(),
    {
        serviceUnits: () => serviceUnitData,
    },
);

const accessSteps = [
    {
        title: '01. Identify the Unit',
        description: 'Find the office responsible for the support, service, record, or campus need you want to resolve.',
    },
    {
        title: '02. Check the Requirements',
        description: 'Review available information, office hours, documents, or service conditions before you visit or write.',
    },
    {
        title: '03. Contact or Visit',
        description: 'Use the official contact details or visit the unit during its published operating hours.',
    },
    {
        title: '04. Follow the Process',
        description: 'Complete the required steps and retain any reference, receipt, ticket, or confirmation provided.',
    },
];
</script>

<template>
    <div class="public-service-units-page bg-primary">
        <PublicBreadcrumb
            title="Service Units"
            current="Service Units"
            column-class="col-xl-6 col-lg-10"
            description="University service offices provide administrative, academic, technical, welfare, health, and operational support for students, staff, applicants, and visitors."
        />

        <!-- admission area start -->
        <section class="rs-admission-area rs-admission-two section-space-top pb-50 public-service-units-intro">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-admission-wrapper">
                            <div class="rs-admission-content">
                                <span class="section-subtitle has-theme-red">
                                    <i class="ri-customer-service-2-line" aria-hidden="true" />
                                    Institutional Support
                                </span>
                                <h3 class="rs-admission-title">Support Offices for Everyday University Needs</h3>
                                <p class="rs-admission-desc">
                                    Service Units help the university community access records, learning resources,
                                    technology support, student welfare services, health guidance, financial assistance,
                                    safety support, and campus operations.
                                </p>
                                <div class="rs-admission-btn">
                                    <a class="rs-btn has-icon has-theme-red hover-black" href="#service-unit-directory">
                                        <span class="btn-text-wrap">
                                            <span class="text-default">Explore Units</span>
                                            <span class="text-hover">Explore Units</span>
                                        </span>
                                        <span class="icon-box has-rotate">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                                                <path
                                                    d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z"
                                                />
                                                <path
                                                    d="M10.5 13.5C10.5 14.3284 9.82843 15 9 15C8.17157 15 7.5 14.3284 7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82843 12 10.5 12.6716 10.5 13.5Z"
                                                />
                                                <path
                                                    d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z"
                                                />
                                                <path
                                                    d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z"
                                                />
                                                <path
                                                    d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="rs-admission-thumb">
                                <img
                                    src="/public-site/images/admission/admssion-thumb-01.webp"
                                    alt="Students receiving support on campus"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- admission area end -->

        <ServiceUnitListing :units="props.serviceUnits" />

        <!-- process area start -->
        <section class="rs-process-area rs-process-one section-space-top pb-70 public-service-units-process">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-progress-wrapper">
                            <div class="rs-process-thumb">
                                <img src="/public-site/images/process/process-thumb-01.webp" alt="Student support process" />
                                <div class="rs-process-badge">
                                    <img src="/public-site/images/shape/badge-shape.webp" alt="" />
                                </div>
                            </div>
                            <div class="rs-process-content-wrapper public-service-units-process-stack">
                                <div
                                    v-for="(step, index) in accessSteps"
                                    :key="step.title"
                                    :class="['rs-process-item', `is-step-${index + 1}`]"
                                >
                                    <h6 class="rs-process-title">{{ step.title }}</h6>
                                    <div class="rs-process-content">
                                        <div class="rs-process-inner">
                                            <p class="rs-process-desc">
                                                {{ step.description }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- process area end -->

        <!-- cta area start -->
        <section class="rs-cta-area section-space-bottom public-service-units-support">
            <div class="container">
                <div class="rs-cta-two">
                    <div class="rs-cta-bg-thumb include-bg" data-background="/public-site/images/bg/cta-bg-thumb-01.webp" />
                    <div class="rs-cta-content">
                        <div class="rs-cta-icon">
                            <img src="/public-site/images/shape/badge-shape.webp" alt="" />
                        </div>
                        <h6 class="rs-cta-title">Need Help Finding the Right Unit?</h6>
                        <p class="rs-cta-desc">
                            Start with the directory above, then use the published unit details to contact or visit the
                            office best suited to your request.
                        </p>
                        <div class="rs-cta-btn">
                            <Link class="rs-btn has-icon has-bg-white hover-red" href="/contact">
                                <span class="btn-text-wrap">
                                    <span class="text-default">Contact the University</span>
                                    <span class="text-hover">Contact the University</span>
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
