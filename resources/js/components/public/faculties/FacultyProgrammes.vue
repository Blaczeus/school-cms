<script setup lang="ts">
import type { Faculty } from '@/types/faculty';

defineProps<{
    faculty: Faculty;
}>();
</script>

<template>
    <!-- program area start -->
    <section class="rs-program-area section-space rs-program-three rs-swiper has-theme-blue public-faculty-programs bg-primary">
        <div class="rs-program-shape">
            <img src="/public-site/images/shape/book-shape.webp" alt="image" />
        </div>
        <div class="container">
            <div class="row align-items-center g-5 section-title-space">
                <div class="col-xl-7 col-lg-7">
                    <div class="section-title-wrapper">
                        <span class="section-subtitle is-white is-uppercase">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M5.21484 12.8949V16.6564C5.21484 16.6564 8.82175 15.1537 12.0198 15.1537C15.2178 15.1537 18.8255 16.6564 18.8255 16.6564V12.8424C18.8255 12.8424 15.3844 11.0225 11.9665 11.0225C8.55018 11.021 5.21484 12.8949 5.21484 12.8949Z"
                                />
                                <path
                                    d="M22.6467 11.9993L24 11.2716L22.6467 10.5222V10.1666C22.6467 10.1666 23.0278 8.23413 20.862 9.24464C20.7517 9.30465 20.6924 9.36542 20.6684 9.42468L11.7367 4.47119L0 11.1884L4.43211 13.2019V12.5485C4.43211 12.5485 8.15079 10.4607 11.9625 10.4607C15.7734 10.4607 19.6092 12.4899 19.6092 12.4899V13.631L22.0563 12.3167V17.6377H21.2416V19.529L22.3248 18.7803L23.5274 19.529V17.637H22.6467V11.9993Z"
                                />
                            </svg>
                            Programs & Study
                        </span>
                        <h2 class="section-title rs-split-text-enable split-in-left is-white">
                            Academics & Programs
                        </h2>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5">
                    <div class="rs-program-sec-meta">
                        <div class="rs-program-sec-icon">
                            <img src="/public-site/images/shape/cap-shape-two.webp" alt="image" />
                        </div>
                        <div class="rs-program-sec-meta-info">
                            <div class="rs-program-sec-meta-thumb">
                                <img src="/public-site/images/user/client-group-two.webp" alt="image" />
                            </div>
                            <div class="rs-program-sec-counter">
                                <div class="rs-counter-number-wrapper">
                                    <span class="rs-counter-number odometer" :data-count="faculty.programmes.length">00</span>
                                    <span class="prefix">+</span>
                                </div>
                                <span class="rs-counter-title">Programmes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-program-wrapper">
                        <div
                            class="swiper"
                            data-clone-slides="false"
                            data-loop="true"
                            data-speed="1500"
                            data-autoplay="true"
                            data-dots-dynamic="false"
                            data-effect="false"
                            data-delay="2000"
                            data-item="3"
                            data-item-xl="2"
                            data-item-lg="2"
                            data-item-md="2"
                            data-item-sm="1"
                            data-item-xs="1"
                            data-margin="30"
                        >
                            <div class="swiper-wrapper">
                                <div
                                    v-for="programme in faculty.programmes"
                                    :key="programme.id"
                                    class="swiper-slide"
                                >
                                    <div class="rs-program-item">
                                        <div class="rs-program-thumb">
                                            <a href="javascript:void(0)" aria-disabled="true" @click.prevent>
                                                <img :src="programme.image" :alt="programme.name" />
                                            </a>
                                        </div>
                                        <div class="rs-program-content">
                                            <div class="rs-program-icon">
                                                <img :src="programme.icon" alt="image" />
                                            </div>
                                            <div class="rs-program-info">
                                                <h5 class="rs-program-title">
                                                    <a href="javascript:void(0)" aria-disabled="true" @click.prevent>
                                                        {{ programme.name }}
                                                    </a>
                                                </h5>
                                                <p class="rs-program-desc">
                                                    {{ programme.shortDescription }}
                                                </p>
                                                <div class="rs-program-feature">
                                                    <div
                                                        v-for="highlight in programme.highlights.slice(0, 3)"
                                                        :key="highlight"
                                                        class="rs-program-list-item"
                                                    >
                                                        <div class="rs-program-list-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13">
                                                                <path
                                                                    d="M6.39959 12.3594C6.35715 12.3594 6.31517 12.3506 6.27629 12.3336C6.2374 12.3166 6.20246 12.2917 6.17365 12.2606L0.0817469 5.67088C0.0411367 5.62695 0.0142147 5.57213 0.00427583 5.51313C-0.00566304 5.45414 0.00181231 5.39352 0.0257871 5.33871C0.0497619 5.2839 0.0891961 5.23726 0.139263 5.20452C0.189331 5.17177 0.247859 5.15433 0.307685 5.15432H3.23999C3.28402 5.15433 3.32753 5.16378 3.3676 5.18203C3.40766 5.20029 3.44334 5.22692 3.47224 5.26014L5.50818 7.60242C5.72821 7.13208 6.15415 6.34894 6.90159 5.39466C8.00658 3.98389 10.0619 1.90909 13.5783 0.0361075C13.6463 -8.57115e-05 13.7254 -0.00947928 13.7999 0.00978174C13.8745 0.0290428 13.9391 0.0755582 13.981 0.140143C14.023 0.204728 14.0392 0.282687 14.0264 0.358628C14.0137 0.434568 13.9729 0.502968 13.9122 0.550323C13.8988 0.560815 12.5429 1.62851 10.9826 3.58417C9.54652 5.38386 7.63753 8.32663 6.69818 12.1257C6.68168 12.1925 6.6433 12.2517 6.58916 12.2941C6.53503 12.3365 6.46835 12.3594 6.39959 12.3594Z"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <p>{{ highlight }}</p>
                                                    </div>
                                                </div>
                                                <div class="rs-program-btn">
                                                    <a
                                                        class="rs-btn has-icon has-theme-red hover-yellow"
                                                        href="javascript:void(0)"
                                                        aria-disabled="true"
                                                        @click.prevent
                                                    >
                                                        <span class="btn-text-wrap">
                                                            <span class="text-default">Apply Now</span>
                                                            <span class="text-hover">Apply Now</span>
                                                        </span>
                                                        <span class="icon-box has-rotate">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                                                                <path
                                                                    d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z"
                                                                />
                                                                <path
                                                                    d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z"
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
                            <div class="rs-program-pagination">
                                <div class="swiper-pagination rs-pagination has-before-none has-theme-red has-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- program area end -->
</template>
