<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';

type ProcessStep = {
    title: string;
    description: string;
    href?: string;
    linkText?: string;
};

type PrepItem = {
    title: string;
    description: string;
    icon: string;
    href?: string;
    cta?: string;
};

const processSteps: ProcessStep[] = [
    {
        title: '01. Choose Your Programme',
        description:
            'Identify the programme you wish to study and review the academic information available for that area.',
        href: '/departments',
        linkText: 'Explore Departments',
    },
    {
        title: '02. Review Admission Requirements',
        description:
            'Check the requirement categories that may apply to your programme, level of study and applicant pathway.',
        href: '/admissions/requirements',
        linkText: 'View Requirements',
    },
    {
        title: '03. Prepare Your Application',
        description:
            'Gather the academic and personal information requested for the relevant admission process before submitting.',
    },
    {
        title: '04. Submit Through the Official Application Channel',
        description:
            'Use the university\'s officially published application instructions when applications are open.',
    },
    {
        title: '05. Follow Your Application',
        description:
            'Monitor official university communication for updates, additional requests or admission decisions.',
    },
];

const prepItems: PrepItem[] = [
    {
        title: 'Know Your Programme',
        description: 'Start by identifying the department or academic area connected to your intended programme.',
        icon: 'ri-building-4-line',
        href: '/departments',
        cta: 'Explore Departments',
    },
    {
        title: 'Review Requirements',
        description: 'Check the general admission requirement categories before preparing your application information.',
        icon: 'ri-file-list-3-line',
        href: '/admissions/requirements',
        cta: 'View Requirements',
    },
    {
        title: 'Check Current Notices',
        description: 'Confirm current admissions notices, application periods and official instructions before you apply.',
        icon: 'ri-notification-3-line',
    },
];

const nextSteps = [
    'Monitor official university communication after submission.',
    'Respond to requests for additional information where applicable.',
    'Check admission updates through approved university channels.',
    'Follow enrolment instructions if you are offered admission.',
];
</script>

<template>
    <div class="public-how-to-apply-page bg-primary">
        <PublicBreadcrumb
            title="How to Apply"
            current="How to Apply"
            :breadcrumbs="[{ label: 'Admissions', href: '/admissions' }]"
            column-class="col-xl-6 col-lg-10"
            description="Understand how to prepare for admission and move through the university application process."
        />

        <!-- admission area start -->
        <section class="rs-admission-area rs-admission-two section-space-top pb-50">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-admission-wrapper">
                            <div class="rs-admission-content">
                                <span class="section-subtitle has-theme-red">
                                    <i class="ri-edit-box-line" aria-hidden="true" />
                                    Application Guidance
                                </span>
                                <h3 class="rs-admission-title">Prepare Before You Apply</h3>
                                <p class="rs-admission-desc">
                                    A strong application begins with understanding your intended programme, reviewing the
                                    relevant requirements and preparing the information requested through the official
                                    admissions process.
                                </p>
                                <div class="rs-admission-btn">
                                    <Link class="rs-btn has-icon has-theme-red hover-black" href="/admissions/requirements">
                                        <span class="btn-text-wrap">
                                            <span class="text-default">Review Requirements</span>
                                            <span class="text-hover">Review Requirements</span>
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

        <!-- preparation area start -->
        <section class="rs-scholarships-area rs-scholarships-three pt-50 pb-70 public-how-to-apply-prep">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="section-title-wrapper text-center public-admissions-section-heading">
                            <span class="section-subtitle has-theme-red justify-content-center">
                                <i class="ri-check-double-line" aria-hidden="true" />
                                Before You Apply
                            </span>
                            <h3 class="section-title has-theme-red mb-15">Get the Right Information First</h3>
                            <p class="section-desc">
                                Before beginning an application, make sure you understand the programme you want to study,
                                the requirements that may apply and the current admissions notices.
                            </p>
                        </div>
                        <div class="public-admissions-resource-grid">
                            <article v-for="item in prepItems" :key="item.title" class="public-admissions-resource-card">
                                <span class="public-admissions-resource-icon">
                                    <i :class="item.icon" aria-hidden="true" />
                                </span>
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.description }}</p>
                                <Link v-if="item.href" :href="item.href">
                                    {{ item.cta }}
                                    <i class="ri-arrow-right-line" aria-hidden="true" />
                                </Link>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- preparation area end -->

        <!-- process area start -->
        <section class="rs-process-area rs-process-one pb-70 public-how-to-apply-process">
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
                            <div class="rs-process-content-wrapper gsap-fixed-yes" data-stop-under="mobile">
                                <div v-for="step in processSteps" :key="step.title" class="rs-process-item">
                                    <h6 class="rs-process-title">{{ step.title }}</h6>
                                    <div class="rs-process-content">
                                        <div class="rs-process-inner">
                                            <p class="rs-process-desc">{{ step.description }}</p>
                                            <Link v-if="step.href" class="public-admissions-inline-link" :href="step.href">
                                                {{ step.linkText }}
                                            </Link>
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

        <!-- next steps area start -->
        <section class="rs-scholarships-area rs-scholarships-three pt-40 pb-70 public-how-to-apply-next">
            <div class="container">
                <div class="row align-items-center g-5">
                    <div class="col-xl-5 col-lg-5">
                        <div class="rs-requirement-area rs-requirement-one">
                            <div class="rs-requirement-wrapper">
                                <div class="rs-requirement-thumb-wrapper">
                                    <div class="rs-requirement-thumb">
                                        <img src="/public-site/images/overview/overview-thumb-04.webp" alt="Student reviewing application steps" />
                                    </div>
                                    <div class="rs-requirement-badge">
                                        <img src="/public-site/images/shape/badge-shape.webp" alt="" />
                                    </div>
                                    <div class="rs-requirement-thumb">
                                        <img src="/public-site/images/overview/overview-thumb-03.webp" alt="Students preparing for admission" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-7">
                        <span class="section-subtitle has-theme-red">
                            <i class="ri-arrow-right-circle-line" aria-hidden="true" />
                            What Happens Next
                        </span>
                        <h3 class="section-title has-theme-red mb-20">After You Submit</h3>
                        <p class="section-desc mb-25">
                            After submitting through the official application channel, applicants should stay attentive
                            to university communication and respond to any further instructions.
                        </p>
                        <div class="rs-scholarships-wrapper">
                            <div class="rs-scholarships-item-wrapper public-how-to-apply-next-list">
                                <div v-for="item in nextSteps" :key="item" class="rs-scholarships-list">
                                    {{ item }}
                                </div>
                            </div>
                        </div>
                        <div class="public-admissions-cta-actions">
                            <Link class="rs-btn has-icon has-theme-red hover-black" href="/admissions/requirements">
                                <span class="btn-text-wrap">
                                    <span class="text-default">View Admission Requirements</span>
                                    <span class="text-hover">View Admission Requirements</span>
                                </span>
                                <span class="icon-box has-rotate">
                                    <i class="ri-arrow-right-line" aria-hidden="true" />
                                </span>
                            </Link>
                            <Link class="rs-btn has-icon has-bg-white hover-red" href="/admissions/tuition-and-fees">
                                <span class="btn-text-wrap">
                                    <span class="text-default">View Tuition & Fees</span>
                                    <span class="text-hover">View Tuition & Fees</span>
                                </span>
                                <span class="icon-box has-rotate">
                                    <i class="ri-arrow-right-line" aria-hidden="true" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- next steps area end -->
    </div>
</template>
