<script setup lang="ts">
const props = defineProps<{
    theme: 'blue' | 'red';
}>();

const isRed = props.theme === 'red';
const offcanvasClass = isRed
    ? 'offcanvas-area has-theme-red'
    : 'offcanvas-area has-theme-yellow';
const closeClass = isRed ? 'offcanvas-close has-theme-red' : 'offcanvas-close';
const logo = isRed
    ? '/public-site/images/logo/logo-red.webp'
    : '/public-site/images/logo/logo-blue.webp';
const logoClass = isRed ? '' : 'logo-black';
const contactClass = isRed
    ? 'offcanvas-contact has-theme-red mb-30'
    : 'offcanvas-contact mb-30';
const socialClass = isRed
    ? 'offcanvas-social has-theme-red'
    : 'offcanvas-social';

const galleryImages = [
    '/public-site/images/gallery/gallery-thumb-01.webp',
    '/public-site/images/gallery/gallery-thumb-02.webp',
    '/public-site/images/gallery/gallery-thumb-03.webp',
    '/public-site/images/gallery/gallery-thumb-04.webp',
    '/public-site/images/gallery/gallery-thumb-05.webp',
    '/public-site/images/gallery/gallery-thumb-06.webp',
];
</script>

<template>
    <div class="fix">
        <div :class="offcanvasClass" data-lenis-prevent>
            <div class="offcanvas-wrapper">
                <div class="offcanvas-content">
                    <div class="offcanvas-top d-flex justify-content-between align-items-center mb-20">
                        <div class="offcanvas-logo">
                            <a :class="logoClass" href="index.html">
                                <img :src="logo" alt="logo" />
                            </a>
                        </div>
                        <div :class="closeClass">
                            <button class="offcanvas-close-icon animation--flip">
                                <span class="offcanvas-m-lines">
                                    <span class="offcanvas-m-line line--1" />
                                    <span class="offcanvas-m-line line--2" />
                                    <span class="offcanvas-m-line line--3" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="offcanvas-about mb-30 d-none d-xl-block">
                        <p>
                            Welcome to Univet University. It was founded in 1966, and Univet University
                            has grown into one of the leading institutions of higher education.
                        </p>
                    </div>
                    <div class="offcanvas-gallery d-none d-xl-block">
                        <div class="offcanvas-gallery-thumb-wrapper">
                            <div
                                v-for="image in galleryImages"
                                :key="image"
                                class="offcanvas-popup-thumb"
                            >
                                <a class="popup-image" :href="image">
                                    <img :src="image" alt="image" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-menu">
                        <div class="rs-offcanvas-menu mb-30">
                            <nav />
                        </div>
                    </div>
                    <div :class="contactClass">
                        <h4 class="offcanvas-title-meta">Contact Info</h4>
                        <ul>
                            <li class="d-flex gap-15">
                                <div class="offcanvas-contact-icon">
                                    <i class="ri-map-pin-line" />
                                </div>
                                <div class="offcanvas-contact-text">
                                    <a href="#">374 William S Canning Blvd, Fall River MA Road 2721, USA</a>
                                </div>
                            </li>
                            <li class="d-flex gap-15">
                                <div class="offcanvas-contact-icon">
                                    <i class="ri-phone-line" />
                                </div>
                                <div class="offcanvas-contact-text">
                                    <a href="tel:+12346691234">+123-4669-1234</a>
                                </div>
                            </li>
                            <li class="d-flex gap-15">
                                <div class="offcanvas-contact-icon">
                                    <i class="ri-mail-line" />
                                </div>
                                <div class="offcanvas-contact-text">
                                    <a href="mailto:univet@gmail.com">univet@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div :class="socialClass">
                        <h4 class="offcanvas-title-meta">Follow Us</h4>
                        <ul>
                            <li><a href="#"><i class="ri-facebook-fill" /></a></li>
                            <li><a href="#"><i class="ri-twitter-x-fill" /></a></li>
                            <li><a href="#"><i class="ri-youtube-fill" /></a></li>
                            <li><a href="#"><i class="ri-linkedin-box-fill" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="offcanvas-overlay" />
    <div class="offcanvas-overlay-white" />
</template>
