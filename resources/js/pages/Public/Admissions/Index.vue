<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';

type AdmissionsCard = {
    title: string;
    description: string;
    image?: string;
    alt?: string;
    href: string;
    cta: string;
};

type ResourceLink = {
    title: string;
    description: string;
    icon: string;
    href: string;
    cta: string;
};

const howToApplyHref = '/admissions/how-to-apply';
const requirementsHref = '/admissions/requirements';
const tuitionHref = '/admissions/tuition-and-fees';

const pathways: AdmissionsCard[] = [
    {
        title: 'Undergraduate Admissions',
        description: 'For applicants preparing to begin a first degree programme at the university.',
        image: '/public-site/images/overview/overview-thumb-03.webp',
        alt: 'Undergraduate students on campus',
        href: howToApplyHref,
        cta: 'View Pathway',
    },
    {
        title: 'Postgraduate Admissions',
        description: 'For applicants planning advanced study after completing a first degree.',
        image: '/public-site/images/overview/overview-thumb-04.webp',
        alt: 'Postgraduate student reviewing academic materials',
        href: howToApplyHref,
        cta: 'View Pathway',
    },
    {
        title: 'International Applicants',
        description: 'For applicants who may need additional guidance before joining from outside the country.',
        image: '/public-site/images/admission/admssion-thumb-01.webp',
        alt: 'International students discussing admissions',
        href: howToApplyHref,
        cta: 'View Pathway',
    },
];

const processSteps = [
    {
        title: '01. Explore Your Options',
        description: 'Review the academic areas available and identify the programme that fits your goals.',
    },
    {
        title: '02. Check Requirements',
        description: 'Confirm the general and programme-specific information you may need before applying.',
    },
    {
        title: '03. Prepare Your Application',
        description: 'Gather the academic and personal information required for your intended route.',
    },
    {
        title: '04. Submit and Follow Up',
        description: 'Use the official application instructions and monitor university communication for updates.',
    },
];

const resources: ResourceLink[] = [
    {
        title: 'Admission Requirements',
        description: 'Understand the general requirement categories and where programme-specific guidance may apply.',
        icon: 'ri-file-list-3-line',
        href: requirementsHref,
        cta: 'View Requirements',
    },
    {
        title: 'How to Apply',
        description: 'Follow the practical steps applicants should take before and during the application process.',
        icon: 'ri-list-check-3',
        href: howToApplyHref,
        cta: 'View Process',
    },
    {
        title: 'Tuition & Fees',
        description: 'Review tuition guidance, additional study costs, payment information and financial support.',
        icon: 'ri-wallet-3-line',
        href: tuitionHref,
        cta: 'View Fees',
    },
];
</script>

<template>
    <div class="public-admissions-page bg-primary">
        <PublicBreadcrumb
            title="Admissions"
            current="Admissions"
            column-class="col-xl-7 col-lg-10"
            description="Find the admissions information you need to choose a pathway, understand requirements, prepare your application and plan for study costs."
        />

        <!-- admission area start -->
        <section class="rs-admission-area rs-admission-two section-space-top pb-50 public-admissions-intro">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-admission-wrapper">
                            <div class="rs-admission-content">
                                <span class="section-subtitle has-theme-red">
                                    <i class="ri-graduation-cap-line" aria-hidden="true" />
                                    Admissions Overview
                                </span>
                                <h2 class="rs-admission-title">Start Your Admissions Journey</h2>
                                <p class="rs-admission-desc">
                                    The Admissions section helps prospective students understand the available pathways,
                                    the requirements they may need to meet, the application process and the tuition or
                                    financial information they should review before applying.
                                </p>
                                <div class="rs-admission-btn public-admissions-actions">
                                    <Link class="rs-btn has-icon has-theme-red hover-black" :href="howToApplyHref">
                                        <span class="btn-text-wrap">
                                            <span class="text-default">How to Apply</span>
                                            <span class="text-hover">How to Apply</span>
                                        </span>
                                        <span class="icon-box has-rotate">
                                            <i class="ri-arrow-right-line" aria-hidden="true" />
                                        </span>
                                    </Link>
                                    <Link class="rs-btn has-icon has-bg-white hover-red" :href="requirementsHref">
                                        <span class="btn-text-wrap">
                                            <span class="text-default">View Requirements</span>
                                            <span class="text-hover">View Requirements</span>
                                        </span>
                                        <span class="icon-box has-rotate">
                                            <i class="ri-arrow-right-line" aria-hidden="true" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div class="rs-admission-thumb">
                                <img
                                    src="/public-site/images/admission/admssion-thumb-01.webp"
                                    alt="Prospective students receiving admissions guidance"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- admission area end -->

        <!-- admission area start -->
        <section class="rs-admission-area bg-primary rs-admission-one public-admissions-pathways">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="section-title-wrapper section-title-space text-center">
                            <span class="section-subtitle has-theme-red justify-content-center">
                                <i class="ri-road-map-line" aria-hidden="true" />
                                Application Pathways
                            </span>
                            <h2 class="section-title has-theme-red mb-15">Find the Route That Fits You</h2>
                            <p class="section-desc">
                                Choose the applicant category closest to your situation, then continue to the guidance
                                that explains how to prepare.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-admission-wrapper">
                            <div v-for="pathway in pathways" :key="pathway.title" class="rs-admission-item">
                                <div class="rs-admission-content">
                                    <div class="rs-admission-info">
                                        <h3 class="rs-admission-title">{{ pathway.title }}</h3>
                                        <p class="rs-admission-desc">{{ pathway.description }}</p>
                                        <div class="rs-admission-btn">
                                            <Link class="rs-btn has-icon has-theme-red hover-black" :href="pathway.href">
                                                <span class="btn-text-wrap">
                                                    <span class="text-default">{{ pathway.cta }}</span>
                                                    <span class="text-hover">{{ pathway.cta }}</span>
                                                </span>
                                                <span class="icon-box has-rotate">
                                                    <i class="ri-arrow-right-line" aria-hidden="true" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="rs-admission-thumb">
                                    <img :src="pathway.image" :alt="pathway.alt" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- admission area end -->

        <!-- process area start -->
        <section class="rs-process-area rs-process-one section-space public-admissions-process">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-progress-wrapper">
                            <div class="rs-process-thumb">
                                <img src="/public-site/images/process/process-thumb-01.webp" alt="Admissions process discussion" />
                                <div class="rs-process-badge">
                                    <img src="/public-site/images/shape/badge-shape.webp" alt="" />
                                </div>
                            </div>
                            <div class="rs-process-content-wrapper">
                                <span class="section-subtitle has-theme-red">
                                    <i class="ri-list-check-3" aria-hidden="true" />
                                    Journey Preview
                                </span>
                                <h2 class="section-title has-theme-red mb-30">A Short View of the Admissions Journey</h2>
                                <div v-for="step in processSteps" :key="step.title" class="rs-process-item">
                                    <h3 class="rs-process-title">{{ step.title }}</h3>
                                    <div class="rs-process-content">
                                        <div class="rs-process-inner">
                                            <p class="rs-process-desc">{{ step.description }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="public-admissions-process-btn">
                                    <Link class="rs-btn has-icon has-theme-red hover-black" :href="howToApplyHref">
                                        <span class="btn-text-wrap">
                                            <span class="text-default">View Full Application Process</span>
                                            <span class="text-hover">View Full Application Process</span>
                                        </span>
                                        <span class="icon-box has-rotate">
                                            <i class="ri-arrow-right-line" aria-hidden="true" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- process area end -->

        <!-- resources area start -->
        <section class="rs-scholarships-area rs-scholarships-three public-admissions-resources">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="section-title-wrapper text-center public-admissions-resources-title">
                            <span class="section-subtitle has-theme-red justify-content-center">
                                <i class="ri-compass-3-line" aria-hidden="true" />
                                Admissions Resources
                            </span>
                            <h2 class="section-title has-theme-red mb-15">Go Directly to the Information You Need</h2>
                            <p class="section-desc">
                                Use these admissions resources to continue from orientation into the details that matter
                                for your intended programme and applicant pathway.
                            </p>
                        </div>
                        <div class="public-admissions-resource-grid">
                            <article v-for="resource in resources" :key="resource.title" class="public-admissions-resource-card">
                                <span class="public-admissions-resource-icon">
                                    <i :class="resource.icon" aria-hidden="true" />
                                </span>
                                <h3>{{ resource.title }}</h3>
                                <p>{{ resource.description }}</p>
                                <Link :href="resource.href">
                                    {{ resource.cta }}
                                    <i class="ri-arrow-right-line" aria-hidden="true" />
                                </Link>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- resources area end -->
    </div>
</template>
