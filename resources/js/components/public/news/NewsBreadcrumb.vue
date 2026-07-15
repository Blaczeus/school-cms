<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

defineProps<{
    title: string;
    current: string;
    description?: string;
}>();
</script>

<template>
    <!-- breadcrumb area start -->
    <section class="rs-breadcrumb-area rs-breadcrumb-one p-relative section-space">
        <div
            class="rs-breadcrumb-bg-thumb include-bg"
            data-background="/public-site/images/bg/breadcrumb-bg-thumb-01.webp"
        />
        <div class="rs-breadcrumb-shape">
            <img src="/public-site/images/shape/arrow-shape-two.webp" alt="image" />
        </div>
        <div class="container-fluid g-0">
            <div class="row">
                <div class="col-xl-6 col-lg-10">
                    <div class="rs-breadcrumb-wrapper">
                        <div class="rs-breadcrumb-menu">
                            <nav>
                                <ul>
                                    <li class="rs-breadcumb-item">
                                        <Link href="/">Home</Link>
                                        <span class="rs-breadcrumb-icon">
                                            <svg
                                                class="e-font-icon-svg e-fas-angle-double-right"
                                                viewBox="0 0 448 512"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li class="rs-breadcumb-item">{{ current }}</li>
                                </ul>
                            </nav>
                        </div>
                        <div class="rs-breadcrumb-title-wrapper">
                            <h1 class="rs-breadcrumb-title">{{ title }}</h1>
                            <span class="rs-breadcrumb-line" />
                        </div>
                        <p class="rs-breadcrumb-desc">
                            {{
                                description ??
                                'Education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions and challenge conventions.'
                            }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- breadcrumb area end -->
</template>
