<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';

type RequirementGroup = {
    title: string;
    description: string;
    items: string[];
};

type DeadlineRow = {
    category: string;
    period: string;
    guidance: string;
};

const requirementGroups: RequirementGroup[] = [
    {
        title: 'Academic Qualifications',
        description: 'Applicants should have the qualifications required for their intended level and programme of study.',
        items: [
            'Entry expectations may differ by programme and study level.',
            'Applicants should review current university guidance before applying.',
        ],
    },
    {
        title: 'Programme-Specific Requirements',
        description:
            'Some programmes may have additional subject, professional, portfolio, practical, interview or other requirements where applicable.',
        items: [
            'Requirements may be set by the relevant academic area.',
            'Professional or practical programmes may request additional information.',
        ],
    },
    {
        title: 'Supporting Information',
        description:
            'Applicants may need to provide relevant academic and personal information during the admissions process.',
        items: [
            'Information requested may depend on the application route.',
            'Applicants should ensure submitted details are accurate and current.',
        ],
    },
    {
        title: 'International Applicants',
        description:
            'International applicants may need additional documentation or qualification assessment depending on university requirements.',
        items: [
            'Additional review may apply to qualifications from outside the country.',
            'Applicants should confirm current guidance for their admission cycle.',
        ],
    },
];

const deadlineRows: DeadlineRow[] = [
    {
        category: 'Undergraduate Admissions',
        period: 'To be announced',
        guidance: 'Check the official admissions notice for the current cycle.',
    },
    {
        category: 'Postgraduate Admissions',
        period: 'To be announced',
        guidance: 'Application periods may vary by programme and study level.',
    },
    {
        category: 'International Applicants',
        period: 'To be announced',
        guidance: 'Applicants should confirm timelines early because additional review may apply.',
    },
];
</script>

<template>
    <div class="public-admission-requirements-page bg-primary">
        <PublicBreadcrumb
            title="Admission Requirements"
            current="Admission Requirements"
            :breadcrumbs="[{ label: 'Admissions', href: '/admissions' }]"
            column-class="col-xl-6 col-lg-10"
            description="Review general requirement categories and understand where programme-specific guidance may apply."
        />

        <!-- requirement area start -->
        <section class="rs-requirement-area rs-requirement-one section-space-top public-admission-requirements-intro">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="rs-requirement-wrapper">
                            <div class="rs-requirement-thumb-wrapper">
                                <div class="rs-requirement-thumb">
                                    <img
                                        src="/public-site/images/requirement/requirement-thumb-01.webp"
                                        alt="Student preparing admission documents"
                                    />
                                </div>
                                <div class="rs-requirement-badge">
                                    <img src="/public-site/images/shape/badge-shape.webp" alt="" />
                                </div>
                                <div class="rs-requirement-thumb">
                                    <img
                                        src="/public-site/images/requirement/requirement-thumb-02.webp"
                                        alt="Admissions officer reviewing application requirements"
                                    />
                                </div>
                            </div>
                            <div class="rs-requirement-content">
                                <span class="section-subtitle has-theme-red">
                                    <i class="ri-file-list-3-line" aria-hidden="true" />
                                    Admission Requirements
                                </span>
                                <h3 class="rs-requirement-title mb-15">Understand What May Be Required</h3>
                                <p class="rs-requirement-desc">
                                    Admission requirements can differ by programme, study level and applicant category.
                                    Applicants should review both the general guidance on this page and any information
                                    published for their intended programme.
                                </p>
                                <p class="rs-requirement-desc">
                                    Meeting general admissions guidance does not mean every programme has identical
                                    requirements. Some academic areas may request additional information where applicable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- requirement area end -->

        <!-- scholarships area start -->
        <section class="rs-scholarships-area rs-scholarships-three pt-50 public-admission-requirements-groups">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="section-title-wrapper public-admissions-section-heading">
                            <span class="section-subtitle has-theme-red">
                                <i class="ri-checkbox-circle-line" aria-hidden="true" />
                                General Guidance
                            </span>
                            <h3 class="section-title text has-theme-red mb-20">Requirement Categories</h3>
                            <p class="section-desc">
                                These categories help applicants understand the kinds of information they may need to
                                prepare. Exact requirements should always be checked against current university guidance.
                            </p>
                        </div>
                        <div class="rs-scholarships-wrapper">
                            <div class="rs-scholarships-item-wrapper">
                                <div v-for="group in requirementGroups" :key="group.title" class="rs-scholarships-item">
                                    <h6 class="rs-scholarships-title">{{ group.title }}</h6>
                                    <p class="public-admission-requirements-card-desc">{{ group.description }}</p>
                                    <div class="rs-scholarships-list-wrapper">
                                        <div v-for="item in group.items" :key="item" class="rs-scholarships-list">
                                            {{ item }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- scholarships area end -->

        <!-- programme callout area start -->
        <section class="public-admission-requirements-callout">
            <div class="container">
                <div class="public-admissions-callout-card">
                    <div>
                        <span class="section-subtitle has-theme-red">
                            <i class="ri-building-4-line" aria-hidden="true" />
                            Programme-Specific Information
                        </span>
                        <h3>Looking for programme-specific information?</h3>
                        <p>
                            Explore Departments to learn more about available academic areas and programme information
                            connected to your intended study route.
                        </p>
                    </div>
                    <Link class="rs-btn has-icon has-theme-red hover-black" href="/departments">
                        <span class="btn-text-wrap">
                            <span class="text-default">Explore Departments</span>
                            <span class="text-hover">Explore Departments</span>
                        </span>
                        <span class="icon-box has-rotate">
                            <i class="ri-arrow-right-line" aria-hidden="true" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
        <!-- programme callout area end -->

        <!-- deadline area start -->
        <div class="rs-deadline-area rs-deadline-one bg-primary pt-30 pb-70 public-admission-requirements-deadlines">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-deadline-wrapper">
                            <h3 class="rs-deadline-title mb-15">Application Deadlines</h3>
                            <p class="section-desc public-admission-requirements-deadline-desc">
                                Applicants should confirm current deadlines from official university admissions notices.
                            </p>
                            <div class="rs-deadline-table-wrapper table-responsive">
                                <div class="rs-deadline-table-item">
                                    <table class="rs-deadline-table-inner">
                                        <thead>
                                            <tr>
                                                <th scope="col">Admission Category</th>
                                                <th scope="col">Application Period</th>
                                                <th scope="col">Status / Guidance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="row in deadlineRows" :key="row.category">
                                                <td>{{ row.category }}</td>
                                                <td>{{ row.period }}</td>
                                                <td>{{ row.guidance }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- deadline area end -->

        <!-- cta area start -->
        <section class="rs-cta-area section-space-bottom public-admission-requirements-cta">
            <div class="container">
                <div class="rs-cta-two">
                    <div class="rs-cta-bg-thumb include-bg" data-background="/public-site/images/bg/cta-bg-thumb-01.webp" />
                    <div class="rs-cta-content">
                        <div class="rs-cta-icon">
                            <img src="/public-site/images/shape/badge-shape.webp" alt="" />
                        </div>
                        <h2 class="rs-cta-title">Continue Your Admissions Journey</h2>
                        <p class="public-admissions-cta-desc">
                            Once you understand the requirement categories, review how to prepare your application and
                            plan for tuition and study costs.
                        </p>
                        <div class="rs-cta-btn public-admissions-cta-actions">
                            <Link class="rs-btn has-icon has-bg-white hover-red" href="/admissions/how-to-apply">
                                <span class="btn-text-wrap">
                                    <span class="text-default">How to Apply</span>
                                    <span class="text-hover">How to Apply</span>
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
        <!-- cta area end -->
    </div>
</template>
