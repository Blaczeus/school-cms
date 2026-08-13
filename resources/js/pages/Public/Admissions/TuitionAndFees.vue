<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';

type TuitionCategory = {
    id: string;
    label: string;
    intro: string;
    columns: string[];
    emptyMessage: string;
};

type CostCard = {
    title: string;
    description: string;
    icon: string;
};

type SupportCard = {
    title: string;
    description: string;
    items: string[];
};

const tuitionCategories: TuitionCategory[] = [
    {
        id: 'undergraduate',
        label: 'Undergraduate Tuition',
        intro:
            'Undergraduate tuition may vary by programme and academic session. Some programmes may also include additional practical, laboratory, studio or professional charges.',
        columns: ['Programme', 'Duration', 'Tuition', 'Additional Charges', 'Notes'],
        emptyMessage: 'Current undergraduate tuition schedules will be published here when available.',
    },
    {
        id: 'postgraduate',
        label: 'Postgraduate Tuition',
        intro:
            'Postgraduate fees may differ according to the qualification, programme, study mode and research requirements. Some programmes may also include supervision, research or professional charges.',
        columns: ['Programme', 'Qualification', 'Study Mode', 'Tuition', 'Notes'],
        emptyMessage: 'Current postgraduate tuition schedules will be published here when available.',
    },
    {
        id: 'doctoral',
        label: 'Doctoral Tuition',
        intro:
            'Doctoral study costs may vary by programme, research requirements and duration of study. Additional research, supervision or examination-related charges may apply where required.',
        columns: ['Programme', 'Study Mode', 'Expected Duration', 'Tuition', 'Additional Information'],
        emptyMessage: 'Current doctoral tuition schedules will be published here when available.',
    },
    {
        id: 'international',
        label: 'International Students',
        intro:
            'International applicants should review the tuition information for their intended programme and confirm whether any additional administrative, documentation or international student charges apply. Where separate international tuition rates are applicable, the approved rates will be published here.',
        columns: ['Programme', 'Study Level', 'Tuition', 'Additional Charges', 'Notes'],
        emptyMessage: 'Current international student fee information will be published here when available.',
    },
];

const costCards: CostCard[] = [
    {
        title: 'Accommodation',
        description:
            'Students who require accommodation should plan separately for housing and related living expenses. Costs may vary depending on the accommodation option available.',
        icon: 'ri-home-4-line',
    },
    {
        title: 'Learning Materials',
        description:
            'Some programmes may require textbooks, course materials, software, equipment or other learning resources.',
        icon: 'ri-book-open-line',
    },
    {
        title: 'Practical & Laboratory Costs',
        description:
            'Programmes involving laboratory, studio, fieldwork or other practical activities may include additional programme-specific costs.',
        icon: 'ri-flask-line',
    },
    {
        title: 'Personal & Study Expenses',
        description:
            'Students should also plan for transportation, internet access, meals, printing and other personal or study-related expenses.',
        icon: 'ri-wallet-3-line',
    },
];

const supportCards: SupportCard[] = [
    {
        title: 'Scholarship Opportunities',
        description:
            'Eligible students may have access to scholarship opportunities based on criteria such as academic performance, financial need or other requirements set by the scholarship provider.',
        items: ['Eligibility depends on the scholarship criteria', 'Availability may vary by academic session'],
    },
    {
        title: 'External Funding',
        description:
            'Students may also explore scholarships, grants and sponsorship opportunities offered by government agencies, organisations and other external funding bodies.',
        items: ['External providers set their own requirements', 'Applicants should confirm details with the funding body'],
    },
    {
        title: 'Financial Assistance',
        description:
            'Where university-supported financial assistance programmes are available, eligibility requirements and application information will be published through the appropriate university channels.',
        items: ['University-supported assistance depends on approved policy', 'Application guidance will be published when available'],
    },
];
</script>

<template>
    <div class="public-tuition-fees-page bg-primary">
        <PublicBreadcrumb
            title="Tuition & Fees"
            current="Tuition & Fees"
            :breadcrumbs="[{ label: 'Admissions', href: '/admissions' }]"
            column-class="col-xl-6 col-lg-10"
            description="Understand tuition, additional study costs, payment information and the financial support options available to students."
        />

        <!-- tuition area start -->
        <section class="rs-tuition-area rs-tuition-two section-space-top pb-40 public-tuition-fees-intro">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-tuition-wrapper">
                            <div class="rs-tuition-thumb">
                                <img src="/public-site/images/tuition/tuition-thumb-02.webp" alt="Students reviewing tuition information" />
                            </div>
                            <div class="rs-tuition-content">
                                <span class="section-subtitle has-theme-red">
                                    <i class="ri-wallet-3-line" aria-hidden="true" />
                                    Tuition & Fees
                                </span>
                                <h3 class="rs-tuition-title">How Much Will It Cost You?</h3>
                                <p class="rs-tuition-desc">
                                    The cost of studying at the university may vary depending on your programme, level
                                    of study and other academic requirements. Tuition is only one part of the total cost,
                                    so it is important to understand the other expenses you may need to plan for during
                                    your studies.
                                </p>
                                <p class="rs-tuition-desc">
                                    Use this page to review tuition information, additional study costs, payment guidance
                                    and available financial support.
                                </p>
                                <div class="public-admissions-notice">
                                    Fee information may vary by programme and academic session. Always confirm the
                                    current approved fees for your programme before making payment.
                                </div>
                                <div class="rs-tuition-btn public-tuition-fees-actions">
                                    <Link class="rs-btn has-icon has-theme-red hover-black" href="/admissions/requirements">
                                        <span class="btn-text-wrap">
                                            <span class="text-default">View Requirements</span>
                                            <span class="text-hover">View Requirements</span>
                                        </span>
                                        <span class="icon-box has-rotate">
                                            <i class="ri-arrow-right-line" aria-hidden="true" />
                                        </span>
                                    </Link>
                                    <Link class="rs-btn has-icon has-bg-white hover-red" href="/departments">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- tuition area end -->

        <!-- tuition area start -->
        <section class="rs-tuition-area rs-tuition-three section-space-bottom public-tuition-fees-tables">
            <div class="container">
                <div class="row">
                    <div class="rs-tuition-sec-wrapper">
                        <h3 class="rs-tuition-title">Tuition Fee Categories</h3>
                        <p class="rs-tuition-desc">
                            Tuition information is organised by applicant category so visitors can understand the future
                            fee structure without relying on unsupported figures.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-tuition-wrapper">
                            <div class="rs-tuition-tab-wrapper">
                                <ul class="nav nav-pills" id="tuition-fees-tab" role="tablist">
                                    <li v-for="(category, index) in tuitionCategories" :key="category.id" class="nav-item" role="presentation">
                                        <button
                                            :id="`tuition-fees-${category.id}-tab`"
                                            :class="['nav-link', { active: index === 0 }]"
                                            data-bs-toggle="pill"
                                            :data-bs-target="`#tuition-fees-${category.id}`"
                                            type="button"
                                            role="tab"
                                            :aria-controls="`tuition-fees-${category.id}`"
                                            :aria-selected="index === 0 ? 'true' : 'false'"
                                        >
                                            <span class="rs-tuition-tab-icon">
                                                <i class="ri-graduation-cap-line" aria-hidden="true" />
                                            </span>
                                            {{ category.label }}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="rs-scholarships-tab-content-wrapper">
                                <div class="tab-content rs-tuition-tab-anim" id="tuition-fees-tab-content">
                                    <div
                                        v-for="(category, index) in tuitionCategories"
                                        :id="`tuition-fees-${category.id}`"
                                        :key="category.id"
                                        :class="['tab-pane fade', { 'show active': index === 0 }]"
                                        role="tabpanel"
                                        :aria-labelledby="`tuition-fees-${category.id}-tab`"
                                        tabindex="0"
                                    >
                                        <p class="public-tuition-fees-tab-intro">{{ category.intro }}</p>
                                        <div class="rs-tuition-table-item table-responsive">
                                            <table class="rs-tuition-table-inner">
                                                <thead>
                                                    <tr>
                                                        <th v-for="column in category.columns" :key="column" scope="col">{{ column }}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td :colspan="category.columns.length" class="public-tuition-fees-empty-state">
                                                            {{ category.emptyMessage }}
                                                        </td>
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
            </div>
        </section>
        <!-- tuition area end -->

        <!-- budget area start -->
        <section class="rs-program-cost-area public-tuition-fees-budget">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-program-cost-wrapper">
                            <div class="rs-program-cost-content">
                                <span class="section-subtitle has-theme-red">
                                    <i class="ri-calculator-line" aria-hidden="true" />
                                    Planning Your Budget
                                </span>
                                <h3 class="rs-program-cost-title">Understanding Your Total Cost</h3>
                                <p class="rs-program-cost-desc">
                                    Your tuition fee may not represent the full cost of studying at the university.
                                    Depending on your programme and personal circumstances, you may also need to budget
                                    for learning materials, accommodation, practical activities, transportation and other
                                    study-related expenses.
                                </p>
                                <p class="rs-program-cost-desc">
                                    Planning for these costs early can help you make a more realistic financial plan for
                                    your studies.
                                </p>
                            </div>
                            <div class="rs-program-cost-thumb">
                                <img src="/public-site/images/cost/program-cost-thumb-01.webp" alt="Students discussing programme cost planning" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- budget area end -->

        <!-- other costs area start -->
        <section class="rs-scholarships-area rs-scholarships-three pt-60 pb-70 public-tuition-fees-costs">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="section-title-wrapper text-center public-admissions-section-heading">
                            <span class="section-subtitle has-theme-red justify-content-center">
                                <i class="ri-list-check" aria-hidden="true" />
                                Study Expenses
                            </span>
                            <h3 class="section-title has-theme-red mb-15">Other Costs to Consider</h3>
                            <p class="section-desc">
                                In addition to tuition, students may need to plan for costs connected to housing,
                                learning resources and day-to-day study needs.
                            </p>
                        </div>
                        <div class="public-admissions-card-grid public-tuition-fees-cost-grid">
                            <article v-for="cost in costCards" :key="cost.title" class="public-admissions-info-card">
                                <span class="public-admissions-resource-icon">
                                    <i :class="cost.icon" aria-hidden="true" />
                                </span>
                                <h3>{{ cost.title }}</h3>
                                <p>{{ cost.description }}</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- other costs area end -->

        <!-- scholarships area start -->
        <section class="rs-scholarships-area rs-scholarships-three pt-40 pb-70 public-tuition-fees-aid">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="section-title-wrapper public-admissions-section-heading">
                            <span class="section-subtitle has-theme-red">
                                <i class="ri-hand-heart-line" aria-hidden="true" />
                                Financial Support
                            </span>
                            <h3 class="section-title text has-theme-red mb-20">Scholarships & Financial Support</h3>
                            <p class="section-desc public-tuition-fees-aid-desc">
                                Financial support may be available to eligible students through scholarships, grants or
                                other assistance programmes offered by the university or external organisations.
                            </p>
                        </div>
                        <div class="rs-scholarships-wrapper">
                            <div class="rs-scholarships-item-wrapper">
                                <div v-for="support in supportCards" :key="support.title" class="rs-scholarships-item">
                                    <h6 class="rs-scholarships-title">{{ support.title }}</h6>
                                    <p class="public-tuition-fees-aid-card-desc">{{ support.description }}</p>
                                    <div class="rs-scholarships-list-wrapper">
                                        <div v-for="item in support.items" :key="item" class="rs-scholarships-list">
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

        <!-- payment area start -->
        <section class="public-tuition-fees-payment pb-70">
            <div class="container">
                <div class="public-admissions-callout-card public-tuition-fees-payment-card">
                    <div>
                        <span class="section-subtitle has-theme-red">
                            <i class="ri-secure-payment-line" aria-hidden="true" />
                            Making a Payment
                        </span>
                        <h3>Payment Information</h3>
                        <p>
                            Students should make payments only through payment channels officially approved by the
                            university. Before making a payment, confirm the amount due, payment instructions and any
                            applicable deadline.
                        </p>
                        <p>Keep your payment receipt or transaction record after completing a payment.</p>
                        <div class="public-admissions-warning">
                            Important: Do not make university payments through personal accounts or unofficial payment
                            channels.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- payment area end -->

        <!-- programme link area start -->
        <section class="public-tuition-fees-programme-link pb-60">
            <div class="container">
                <div class="public-admissions-subtle-link">
                    <span>Looking for your programme?</span>
                    <Link href="/departments">
                        Explore Departments
                        <i class="ri-arrow-right-line" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
        <!-- programme link area end -->

        <!-- cta area start -->
        <section class="rs-cta-area section-space-bottom public-tuition-fees-cta">
            <div class="container">
                <div class="rs-cta-two">
                    <div class="rs-cta-bg-thumb include-bg" data-background="/public-site/images/bg/cta-bg-thumb-01.webp" />
                    <div class="rs-cta-content">
                        <div class="rs-cta-icon">
                            <img src="/public-site/images/shape/badge-shape.webp" alt="" />
                        </div>
                        <span class="section-subtitle justify-content-center">
                            <i class="ri-compass-3-line" aria-hidden="true" />
                            Plan Your Next Step
                        </span>
                        <h2 class="rs-cta-title">Ready to Continue Your Admission Journey?</h2>
                        <p class="public-tuition-fees-cta-desc">
                            Review the admission requirements for your intended programme and learn how to prepare for
                            the application process.
                        </p>
                        <div class="rs-cta-btn public-tuition-fees-cta-actions">
                            <Link class="rs-btn has-icon has-bg-white hover-red" href="/admissions/requirements">
                                <span class="btn-text-wrap">
                                    <span class="text-default">View Admission Requirements</span>
                                    <span class="text-hover">View Admission Requirements</span>
                                </span>
                                <span class="icon-box has-rotate">
                                    <i class="ri-arrow-right-line" aria-hidden="true" />
                                </span>
                            </Link>
                            <Link class="rs-btn has-icon has-bg-white hover-red" href="/admissions/how-to-apply">
                                <span class="btn-text-wrap">
                                    <span class="text-default">How to Apply</span>
                                    <span class="text-hover">How to Apply</span>
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
