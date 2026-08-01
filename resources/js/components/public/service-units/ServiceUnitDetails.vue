<script setup lang="ts">
import { computed } from 'vue';

import { defaultServiceUnitAccessSteps } from '@/data/serviceUnits';
import type { ServiceUnit, ServiceUnitDownload } from '@/types/serviceUnit';

import ServiceUnitContactSidebar from './ServiceUnitContactSidebar.vue';

const props = defineProps<{
    unit: ServiceUnit;
}>();

const accessSteps = computed(() =>
    props.unit.accessSteps?.length ? props.unit.accessSteps : defaultServiceUnitAccessSteps,
);

const hasRequirements = computed(() => Boolean(props.unit.requiredDocuments?.length));
const hasTables = computed(() => Boolean(props.unit.informationTables?.length));
const hasDownloads = computed(() => Boolean(props.unit.downloads?.length));
const hasHighlights = computed(() => Boolean(props.unit.highlights?.length));

const isExternalUrl = (url: string) => /^https?:\/\//i.test(url);
const downloadTarget = (download: ServiceUnitDownload) =>
    download.url && isExternalUrl(download.url) ? '_blank' : undefined;
const downloadRel = (download: ServiceUnitDownload) =>
    download.url && isExternalUrl(download.url) ? 'noopener noreferrer' : undefined;
</script>

<template>
    <section class="rs-service-unit-details-area section-space public-service-unit-detail-content">
        <div class="container">
            <div class="row g-5">
                <div class="col-xl-8 col-lg-8">
                    <div class="public-service-unit-detail-main">
                        <div class="public-service-unit-detail-section">
                            <span class="section-subtitle has-theme-red">
                                <i class="ri-customer-service-2-line" aria-hidden="true" />
                                About The Unit
                            </span>
                            <h3 class="section-title mb-20">How {{ unit.name }} Supports the University</h3>
                            <p class="section-desc">{{ unit.description }}</p>
                        </div>

                        <div v-if="unit.services?.length" class="rs-scholarships-three public-service-unit-services">
                            <h3 class="section-title text has-theme-red mb-30">Services Offered</h3>
                            <div class="rs-scholarships-wrapper">
                                <div class="rs-scholarships-item-wrapper">
                                    <div
                                        v-for="service in unit.services ?? []"
                                        :key="service.title"
                                        class="rs-scholarships-item public-service-unit-service-card"
                                    >
                                        <h6 class="rs-scholarships-title">{{ service.title }}</h6>
                                        <p class="public-service-unit-card-desc">{{ service.description }}</p>
                                        <div v-if="service.items?.length" class="rs-scholarships-list-wrapper">
                                            <div v-for="item in service.items" :key="item" class="rs-scholarships-list">
                                                {{ item }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="public-service-unit-access-process">
                            <h3 class="section-title text has-theme-red mb-30">How to Access This Service</h3>
                            <div class="rs-process-content-wrapper">
                                <div
                                    v-for="(step, index) in accessSteps"
                                    :key="step.title"
                                    :class="['rs-process-item', `is-step-${index + 1}`]"
                                >
                                    <h6 class="rs-process-title">{{ step.title }}</h6>
                                    <div class="rs-process-content">
                                        <div class="rs-process-inner">
                                            <p class="rs-process-desc">{{ step.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="hasRequirements" class="rs-scholarships-three public-service-unit-requirements">
                            <h3 class="section-title text has-theme-red mb-30">Required Documents / Eligibility</h3>
                            <div class="rs-scholarships-wrapper">
                                <div class="rs-scholarships-item-wrapper">
                                    <div v-for="group in unit.requiredDocuments ?? []" :key="group.title" class="rs-scholarships-item">
                                        <h6 class="rs-scholarships-title">{{ group.title }}</h6>
                                        <div class="rs-scholarships-list-wrapper">
                                            <div v-for="item in group.items" :key="item" class="rs-scholarships-list">
                                                {{ item }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="hasTables" class="public-service-unit-tables">
                            <div v-for="table in unit.informationTables ?? []" :key="table.title" class="rs-tuition-three">
                                <h3 class="section-title text has-theme-red mb-30">{{ table.title }}</h3>
                                <div class="rs-tuition-table-wrapper table-responsive">
                                    <div class="rs-tuition-table-item">
                                        <table class="rs-tuition-table-inner">
                                            <thead>
                                                <tr>
                                                    <th v-for="column in table.columns" :key="column">{{ column }}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(row, rowIndex) in table.rows" :key="`${table.title}-${rowIndex}`">
                                                    <td v-for="(cell, cellIndex) in row" :key="`${table.title}-${rowIndex}-${cellIndex}`">
                                                        {{ cell }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="hasDownloads" class="public-service-unit-downloads">
                            <h3 class="section-title text has-theme-red mb-30">Downloads / Forms</h3>
                            <div class="public-service-unit-download-list">
                                <div v-for="download in unit.downloads ?? []" :key="download.title" class="rs-certificate-item">
                                    <div class="rs-certificate-content">
                                        <h5 class="rs-certificate-title">{{ download.title }}</h5>
                                        <p v-if="download.description" class="rs-certificate-desc">
                                            {{ download.description }}
                                        </p>
                                    </div>
                                    <a
                                        v-if="download.url"
                                        class="rs-btn has-icon has-theme-red hover-black"
                                        :href="download.url"
                                        :target="downloadTarget(download)"
                                        :rel="downloadRel(download)"
                                    >
                                        <span class="btn-text-wrap">
                                            <span class="text-default">Open</span>
                                            <span class="text-hover">Open</span>
                                        </span>
                                    </a>
                                    <button v-else type="button" class="rs-btn has-theme-red" disabled>Pending</button>
                                </div>
                            </div>
                        </div>

                        <div v-if="hasHighlights" class="rs-award-one public-service-unit-highlights">
                            <h3 class="section-title text has-theme-red mb-30">Highlights / Important Notes</h3>
                            <div class="rs-award-wrapper">
                                <div class="rs-award-list">
                                    <div v-for="highlight in unit.highlights ?? []" :key="highlight.title" class="rs-award-list-item">
                                        <div class="rs-award-list-icon">
                                            <i class="ri-information-line" aria-hidden="true" />
                                        </div>
                                        <div class="rs-award-list-content">
                                            <h5 class="rs-award-list-title">{{ highlight.title }}</h5>
                                            <p v-if="highlight.description" class="public-service-unit-highlight-desc">
                                                {{ highlight.description }}
                                            </p>
                                        </div>
                                        <span v-if="highlight.year" class="rs-award-list-year">{{ highlight.year }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4">
                    <ServiceUnitContactSidebar :unit="unit" />
                </div>
            </div>
        </div>
    </section>
</template>
