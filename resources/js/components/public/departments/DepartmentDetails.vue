<script setup lang="ts">
import { computed } from 'vue';

import type { Department } from '@/types/department';

const props = defineProps<{
    department: Department;
}>();

const programmeTitle = computed(() => props.department.undergraduateProgrammes[0] ?? props.department.name);
const programmeLevels = computed(() =>
    [...props.department.undergraduateProgrammes, ...props.department.postgraduateProgrammes].join(', '),
);
const phoneHref = computed(() => `tel:${props.department.contactPhone.replace(/\s+/g, '')}`);
const emailHref = computed(() => `mailto:${props.department.contactEmail}`);
</script>

<template>
    <!-- program details area start -->
    <section class="rs-program-details-area bg-primary rs-program-details section-space">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-program-details-wrapper">
                        <div class="rs-program-details-tab-wrapper">
                            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button
                                        class="nav-link active"
                                        id="pills-item-one-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-item-one"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-item-one"
                                        aria-selected="true"
                                    >
                                        Overview
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button
                                        class="nav-link"
                                        id="pills-item-two-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-item-two"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-item-two"
                                        aria-selected="false"
                                    >
                                        Curriculum
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button
                                        class="nav-link"
                                        id="pills-item-three-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-item-three"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-item-three"
                                        aria-selected="false"
                                    >
                                        Program Professors
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button
                                        class="nav-link"
                                        id="pills-item-four-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-item-four"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-item-four"
                                        aria-selected="false"
                                    >
                                        Cost & Financial Aid
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button
                                        class="nav-link"
                                        id="pills-item-five-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-item-five"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-item-five"
                                        aria-selected="false"
                                    >
                                        Admissions
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="rs-program-details-tab-content-wrapper">
                            <div class="tab-content rs-program-details-tab-anim" id="pills-tabContent">
                                <div
                                    class="tab-pane fade show active"
                                    id="pills-item-one"
                                    role="tabpanel"
                                    aria-labelledby="pills-item-one-tab"
                                    tabindex="0"
                                >
                                    <div class="rs-program-details-tab-item mt-40">
                                        <p class="rs-program-details-desc">{{ department.overview }}</p>
                                        <div class="rs-program-details-feature">
                                            <h3 class="section-title text has-theme-red mb-30">Program Highlight</h3>
                                            <div class="rs-program-details-feature-item-wrapper">
                                                <div class="rs-program-details-feature-item">
                                                    <div class="rs-program-details-feature-shape">
                                                        <img src="/public-site/images/shape/three-line-shape.webp" alt="" />
                                                    </div>
                                                    <div class="rs-program-details-feature-icon">
                                                        <img :src="department.icon" :alt="`${department.shortName} icon`" />
                                                    </div>
                                                    <div class="rs-program-details-feature-content">
                                                        <h5 class="rs-program-details-feature-title">Faculty</h5>
                                                        <p class="rs-program-details-feature-desc">{{ department.facultyName }}</p>
                                                    </div>
                                                </div>
                                                <div class="rs-program-details-feature-item">
                                                    <div class="rs-program-details-feature-shape">
                                                        <img src="/public-site/images/shape/three-line-shape.webp" alt="" />
                                                    </div>
                                                    <div class="rs-program-details-feature-icon">
                                                        <i class="ri-time-line" />
                                                    </div>
                                                    <div class="rs-program-details-feature-content">
                                                        <h5 class="rs-program-details-feature-title">Duration</h5>
                                                        <p class="rs-program-details-feature-desc">{{ department.duration }}</p>
                                                    </div>
                                                </div>
                                                <div class="rs-program-details-feature-item">
                                                    <div class="rs-program-details-feature-shape">
                                                        <img src="/public-site/images/shape/three-line-shape.webp" alt="" />
                                                    </div>
                                                    <div class="rs-program-details-feature-icon">
                                                        <i class="ri-dashboard-line" />
                                                    </div>
                                                    <div class="rs-program-details-feature-content">
                                                        <h5 class="rs-program-details-feature-title">Credits</h5>
                                                        <p class="rs-program-details-feature-desc">{{ department.credits }}</p>
                                                    </div>
                                                </div>
                                                <div class="rs-program-details-feature-item">
                                                    <div class="rs-program-details-feature-shape">
                                                        <img src="/public-site/images/shape/three-line-shape.webp" alt="" />
                                                    </div>
                                                    <div class="rs-program-details-feature-icon">
                                                        <i class="ri-translate-2" />
                                                    </div>
                                                    <div class="rs-program-details-feature-content">
                                                        <h5 class="rs-program-details-feature-title">Language</h5>
                                                        <p class="rs-program-details-feature-desc">{{ department.language }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rs-program-details-about">
                                            <h3 class="section-title text has-theme-red mb-15">About Programs</h3>
                                            <p class="rs-program-details-desc">{{ department.about }}</p>
                                        </div>
                                        <div class="rs-program-details-about-wrapper">
                                            <div class="row g-5">
                                                <div class="col-xl-8 col-lg-8">
                                                    <div class="rs-program-details-about-content mt-30">
                                                        <h5 class="rs-program-details-title text-red">
                                                            {{ programmeTitle }} ({{ department.duration }})
                                                        </h5>
                                                        <h6 class="rs-program-details-title text-red mt-20 mb-20">
                                                            Session: {{ department.session }}
                                                        </h6>
                                                        <h6 class="rs-program-details-title text-red">Typical Program Structure</h6>
                                                        <p class="rs-program-details-about-desc mt-20">
                                                            {{ department.structureSummary }}
                                                        </p>
                                                        <ul class="rs-program-details-about-list">
                                                            <li><span>Duration:</span> {{ department.duration }} (Full-Time)</li>
                                                            <li><span>Total Credits:</span> {{ department.credits }} credits.</li>
                                                            <li><span>Programmes:</span> {{ programmeLevels }}</li>
                                                        </ul>
                                                        <div class="curriculum-wrapper">
                                                            <h6 class="curriculum-sec-title">Core Curriculum Topics</h6>
                                                            <div class="curriculum-item-wrapper">
                                                                <div
                                                                    v-for="topic in department.curriculumTopics"
                                                                    :key="topic.title"
                                                                    class="curriculum-item"
                                                                >
                                                                    <h6 class="curriculum-title">{{ topic.title }}</h6>
                                                                    <p class="curriculum-content">{{ topic.content }}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4 col-lg-4">
                                                    <div class="rs-sidebar-sticky">
                                                        <div class="rs-cta-two">
                                                            <div
                                                                class="rs-cta-bg-thumb include-bg"
                                                                data-background="/public-site/images/bg/cta-bg-thumb-01.webp"
                                                            />
                                                            <div class="rs-cta-content">
                                                                <div class="rs-cta-icon">
                                                                    <img src="/public-site/images/shape/badge-shape.webp" alt="image" />
                                                                </div>
                                                                <h6 class="rs-cta-title">Do Your Need Help?</h6>
                                                                <div class="rs-cta-contact">
                                                                    <a :href="phoneHref" class="contact-phone">
                                                                        {{ department.contactPhone }}
                                                                    </a>
                                                                    <a :href="emailHref" class="contact-email">
                                                                        {{ department.contactEmail }}
                                                                    </a>
                                                                </div>
                                                                <div class="rs-cta-btn">
                                                                    <a class="rs-btn has-icon has-bg-white hover-yellow" :href="emailHref">
                                                                        <span class="btn-text-wrap">
                                                                            <span class="text-default">Contact Now</span>
                                                                            <span class="text-hover">Contact Now</span>
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="tab-pane fade"
                                    id="pills-item-two"
                                    role="tabpanel"
                                    aria-labelledby="pills-item-two-tab"
                                    tabindex="0"
                                >
                                    <div class="rs-program-details-tab-item mt-40">
                                        <div class="rs-program-details-curriculum">
                                            <h3 class="section-title text has-theme-red mb-15">Curriculum Overview</h3>
                                            <p class="rs-program-details-desc">{{ department.structureSummary }}</p>
                                            <div
                                                v-for="group in department.curriculum"
                                                :key="group.title"
                                                class="rs-program-details-curriculum-item"
                                            >
                                                <h5 class="rs-program-details-title text-red">{{ group.title }}</h5>
                                                <p class="rs-program-details-desc">{{ group.description }}</p>
                                                <div class="rs-curriculum-table-one table-responsive">
                                                    <table class="rs-curriculum-table-inner">
                                                        <thead>
                                                            <tr>
                                                                <th>Course Code</th>
                                                                <th>Course Title</th>
                                                                <th>Credits</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="course in group.courses" :key="course.code">
                                                                <td>{{ course.code }}</td>
                                                                <td>{{ course.title }}</td>
                                                                <td>{{ course.credits }}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="tab-pane fade"
                                    id="pills-item-three"
                                    role="tabpanel"
                                    aria-labelledby="pills-item-three-tab"
                                    tabindex="0"
                                >
                                    <div class="rs-program-details-tab-item rs-team-four mt-40">
                                        <div class="rs-team-wrapper">
                                            <div
                                                v-for="professor in department.professors"
                                                :key="professor.name"
                                                class="rs-team-item"
                                            >
                                                <div class="rs-team-thumb">
                                                    <a href="#">
                                                        <img :src="professor.image" :alt="professor.name" />
                                                    </a>
                                                    <div class="rs-team-social theme-social has-medium has-bg-white has-theme-red">
                                                        <a href="#" target="_blank" aria-label="Facebook"><i class="ri-facebook-fill" /></a>
                                                        <a href="#" target="_blank" aria-label="X"><i class="ri-twitter-x-fill" /></a>
                                                        <a href="#" target="_blank" aria-label="Instagram"><i class="ri-instagram-line" /></a>
                                                        <a href="#" target="_blank" aria-label="LinkedIn"><i class="ri-linkedin-fill" /></a>
                                                    </div>
                                                </div>
                                                <div class="rs-team-content-wrapper">
                                                    <div class="rs-team-content-info">
                                                        <h5 class="rs-team-title underline">
                                                            <a href="#">{{ professor.name }}</a>
                                                        </h5>
                                                        <span class="rs-team-designation">{{ professor.title }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="tab-pane fade"
                                    id="pills-item-four"
                                    role="tabpanel"
                                    aria-labelledby="pills-item-four-tab"
                                    tabindex="0"
                                >
                                    <div class="rs-program-details-tab-item rs-process-two mt-40">
                                        <div class="rs-process-wrapper">
                                            <div class="rs-process-table-wrapper table-responsive">
                                                <div class="rs-process-table-item">
                                                    <table class="rs-process-table-inner">
                                                        <thead>
                                                            <tr>
                                                                <th>Fee Item</th>
                                                                <th>First Semester</th>
                                                                <th>Second Semester</th>
                                                                <th>Annual Note</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="row in department.costRows" :key="row.item">
                                                                <td>{{ row.item }}</td>
                                                                <td>{{ row.firstSemester }}</td>
                                                                <td>{{ row.secondSemester }}</td>
                                                                <td>{{ row.annual }}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rs-scholarships-three mt-40">
                                            <h3 class="section-title text has-theme-red mb-30">Financial Aid</h3>
                                            <div class="rs-scholarships-wrapper">
                                                <div class="rs-scholarships-item-wrapper">
                                                    <div
                                                        v-for="scholarship in department.scholarships"
                                                        :key="scholarship.title"
                                                        class="rs-scholarships-item"
                                                    >
                                                        <h6 class="rs-scholarships-title">{{ scholarship.title }}</h6>
                                                        <div class="rs-scholarships-list-wrapper">
                                                            <div class="rs-scholarships-list">{{ scholarship.description }}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="tab-pane fade"
                                    id="pills-item-five"
                                    role="tabpanel"
                                    aria-labelledby="pills-item-five-tab"
                                    tabindex="0"
                                >
                                    <div class="rs-program-details-tab-item mt-40">
                                        <div class="section-wrapper mb-30">
                                            <h3 class="section-title mb-20">Requirements and Deadlines</h3>
                                            <p class="section-desc">
                                                Admissions into {{ department.name }} are reviewed through the university admissions
                                                process and the department's academic requirements. Applicants should confirm
                                                programme-specific requirements before submitting final documents.
                                            </p>
                                        </div>
                                        <div class="rs-scholarships-three">
                                            <h3 class="section-title text has-theme-red mb-30">Admissions Requirements</h3>
                                            <div class="rs-scholarships-wrapper">
                                                <div class="rs-scholarships-item-wrapper">
                                                    <div
                                                        v-for="requirement in department.admissionRequirements"
                                                        :key="requirement.title"
                                                        class="rs-scholarships-item"
                                                    >
                                                        <h6 class="rs-scholarships-title">{{ requirement.title }}</h6>
                                                        <div class="rs-scholarships-list-wrapper">
                                                            <div
                                                                v-for="item in requirement.items"
                                                                :key="item"
                                                                class="rs-scholarships-list"
                                                            >
                                                                {{ item }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rs-requirement-one mt-40">
                                            <div class="rs-requirement-wrapper">
                                                <div class="rs-requirement-thumb-wrapper">
                                                    <div class="rs-requirement-thumb">
                                                        <img src="/public-site/images/requirement/requirement-thumb-01.webp" alt="image" />
                                                    </div>
                                                    <div class="rs-requirement-badge">
                                                        <img src="/public-site/images/shape/badge-shape.webp" alt="image" />
                                                    </div>
                                                    <div class="rs-requirement-thumb">
                                                        <img src="/public-site/images/requirement/requirement-thumb-02.webp" alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rs-deadline-one">
                                            <div class="rs-deadline-wrapper">
                                                <h3 class="rs-deadline-title mb-30"> Apply Deadlines </h3>
                                                <div class="rs-deadline-table-wrapper table-responsive">
                                                    <div class="rs-deadline-table-item">
                                                        <table class="rs-deadline-table-inner">
                                                            <thead>
                                                                <tr>
                                                                    <th>Program Level</th>
                                                                    <th>Admissions Session</th>
                                                                    <th>Applications Open</th>
                                                                    <th>Application Deadline</th>
                                                                    <th>Classes Begin</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr v-for="row in department.deadlineRows" :key="`${row.level}-${row.session}`">
                                                                    <td>{{ row.level }}</td>
                                                                    <td>{{ row.session }}</td>
                                                                    <td>{{ row.opens }}</td>
                                                                    <td>{{ row.deadline }}</td>
                                                                    <td>{{ row.begins }}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rs-sec-wrapper mb-40 mt-40">
                                            <h3 class="section-title mb-20 has-theme-red">Start Your Application</h3>
                                            <p class="section-desc">
                                                Share your contact details with the admissions team. This temporary form preserves
                                                the template presentation and does not submit until backend handling is introduced.
                                            </p>
                                        </div>
                                        <div class="row g-5">
                                            <div class="col-xl-8 col-lg-8">
                                                <div class="rs-contact-three">
                                                    <div class="rs-contact-form-wrapper">
                                                        <h5 class="form-title mb-20">Personal Information</h5>
                                                        <form id="contact-form" @submit.prevent>
                                                            <div class="row g-5">
                                                                <div class="col-md-6">
                                                                    <div class="rs-contact-input">
                                                                        <input type="text" name="firstName" placeholder="First Name" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="rs-contact-input">
                                                                        <input type="text" name="lastName" placeholder="Last Name" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="rs-contact-input">
                                                                        <input type="email" name="email" placeholder="Email Address" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="rs-contact-input">
                                                                        <input type="tel" name="phone" placeholder="Phone Number" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12">
                                                                    <div class="rs-contact-input">
                                                                        <input type="text" name="programme" :value="programmeTitle" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12">
                                                                    <div class="rs-contact-input">
                                                                        <textarea
                                                                            name="message"
                                                                            placeholder="Tell us about your academic interest"
                                                                        ></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12">
                                                                    <div class="rs-contact-btn">
                                                                        <button type="submit" class="rs-btn has-icon has-theme-red">
                                                                            <span class="btn-text-wrap">
                                                                                <span class="text-default">Submit Request</span>
                                                                                <span class="text-hover">Submit Request</span>
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
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-lg-4">
                                                <div class="rs-sidebar-sticky">
                                                    <div class="rs-cta-two">
                                                        <div
                                                            class="rs-cta-bg-thumb include-bg"
                                                            data-background="/public-site/images/bg/cta-bg-thumb-01.webp"
                                                        />
                                                        <div class="rs-cta-content">
                                                            <div class="rs-cta-icon">
                                                                <img src="/public-site/images/shape/badge-shape.webp" alt="image" />
                                                            </div>
                                                            <h6 class="rs-cta-title">Admissions Help</h6>
                                                            <div class="rs-cta-contact">
                                                                <a :href="phoneHref" class="contact-phone">{{ department.contactPhone }}</a>
                                                                <a :href="emailHref" class="contact-email">{{ department.contactEmail }}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- program details area end -->
</template>
