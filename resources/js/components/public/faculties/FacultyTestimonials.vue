<script setup lang="ts">
import type { Faculty } from '@/types/faculty';

defineProps<{
    faculty: Faculty;
}>();

const ratings = ['5.0', '4.5', '5.0'];
</script>

<template>
    <!-- testimonial area start -->
    <section class="rs-testimonial-area rs-testimonial-three section-space-bottom rs-swiper has-bg-white">
        <div class="rs-testimonial-shape">
            <img src="/public-site/images/shape/wave-line-shape-two.webp" alt="image" />
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-7 col-lg-8 col-md-10">
                    <div class="section-title-wrapper section-title-space text-center">
                        <span class="section-subtitle has-theme-red is-uppercase justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M5.21484 12.8949V16.6564C5.21484 16.6564 8.82175 15.1537 12.0198 15.1537C15.2178 15.1537 18.8255 16.6564 18.8255 16.6564V12.8424C18.8255 12.8424 15.3844 11.0225 11.9665 11.0225C8.55018 11.021 5.21484 12.8949 5.21484 12.8949Z"
                                />
                                <path
                                    d="M22.6467 11.9993L24 11.2716L22.6467 10.5222V10.1666C22.6467 10.1666 23.0278 8.23413 20.862 9.24464C20.7517 9.30465 20.6924 9.36542 20.6684 9.42468L11.7367 4.47119L0 11.1884L4.43211 13.2019V12.5485C4.43211 12.5485 8.15079 10.4607 11.9625 10.4607C15.7734 10.4607 19.6092 12.4899 19.6092 12.4899V13.631L22.0563 12.3167V17.6377H21.2416V19.529L22.3248 18.7803L23.5274 19.529V17.637H22.6467V11.9993Z"
                                />
                            </svg>
                            Students Feedback
                        </span>
                        <h2 class="section-title rs-split-text-enable split-in-left mb-15">Learning Experience</h2>
                        <p class="section-desc">
                            Students learn through academic guidance, practical preparation, and faculty support.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row g-5">
                <div class="col-xl-12">
                    <div class="rs-testimonial-slider-wrapper">
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
                            data-item-xl="3"
                            data-item-lg="2"
                            data-item-md="2"
                            data-item-sm="1"
                            data-item-xs="1"
                            data-margin="30"
                        >
                            <div class="swiper-wrapper">
                                <div
                                    v-for="(highlight, index) in faculty.highlights"
                                    :key="highlight"
                                    class="swiper-slide"
                                >
                                    <div class="rs-testimonial-item">
                                        <div class="rs-testimonial-avater-wrapper">
                                            <div class="rs-testimonial-avater-info">
                                                <h5 class="rs-testimonial-avater-title">{{ faculty.shortName }} Student</h5>
                                                <span class="rs-testimonial-avater-designation">Undergraduate Learner</span>
                                            </div>
                                            <div class="rs-testimonial-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 44">
                                                    <path
                                                        d="M0.228171 11.5356C1.61659 3.91031 8.93392 -1.15945 16.5592 0.228969C24.1843 1.61757 29.2304 9.22121 28.6354 16.604C27.9522 25.1769 22.4433 35.8439 9.88149 43.1606C8.82381 43.7776 7.61132 42.5656 8.20571 41.4858C9.70432 38.709 11.6003 34.2348 12.7243 28.02C4.54547 27.239 -1.04913 19.7736 0.165671 11.9096L0.228171 11.5356ZM31.5446 11.5356C32.933 3.91046 40.2495 -1.15917 47.8747 0.228969C55.4999 1.61739 60.5468 9.2211 59.9518 16.604C59.2686 25.1769 53.7588 35.8438 41.1969 43.1606C40.1393 43.777 38.9278 42.5654 39.5221 41.4858C41.0207 38.709 42.9167 34.2348 44.0407 28.02C35.8619 27.239 30.2664 19.7736 31.4811 11.9096L31.5446 11.5356ZM16.3795 1.21334C9.29829 -0.0759754 2.50218 4.63179 1.21255 11.7143C-0.138603 19.1462 5.10186 26.2879 12.819 27.0249L13.902 27.1274L13.7077 28.1977C12.5634 34.5247 10.6311 39.0985 9.08657 41.9604L9.08169 41.9682C9.0459 42.0333 9.04637 42.0776 9.05239 42.1108C9.06014 42.1532 9.08422 42.2061 9.13052 42.2524C9.17688 42.2988 9.22578 42.3198 9.25942 42.3256C9.28285 42.3297 9.31856 42.3308 9.37759 42.2964L9.94887 41.9585C21.8425 34.8084 26.9942 24.6188 27.6393 16.5249V16.5239C28.1982 9.58922 23.4387 2.49869 16.3795 1.21334ZM47.6959 1.21334C40.6146 -0.0760251 33.8176 4.63172 32.528 11.7143C31.1769 19.1462 36.4183 26.288 44.1354 27.0249L45.2184 27.1274L45.0241 28.1977C43.8798 34.5247 41.9475 39.0985 40.403 41.9604L40.3981 41.9682C40.3623 42.0333 40.3618 42.0776 40.3678 42.1108C40.3755 42.1533 40.4005 42.206 40.4469 42.2524C40.4933 42.2988 40.5422 42.3198 40.5758 42.3256C40.5993 42.3297 40.635 42.3308 40.694 42.2964L41.2653 41.9585C53.1588 34.8084 58.3106 24.6188 58.9557 16.5249V16.5239C59.5146 9.58924 54.7551 2.49872 47.6959 1.21334Z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="rs-testimonial-rating-wrapper">
                                            <span class="rs-testimonial-rating">{{ ratings[index % ratings.length] }}</span>
                                            <div class="rs-testimonial-rating-icon">
                                                <i class="ri-star-fill" />
                                                <i class="ri-star-fill" />
                                                <i class="ri-star-fill" />
                                                <i class="ri-star-fill" />
                                                <i class="ri-star-line" />
                                            </div>
                                        </div>
                                        <p class="rs-testimonial-desc">{{ highlight }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="rs-testimonial-pagination">
                                <div class="swiper-pagination rs-pagination has-before-none has-theme-red has-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- testimonial area end -->
</template>
