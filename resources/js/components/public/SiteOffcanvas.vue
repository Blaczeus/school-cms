<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { publicInstitution } from '@/data/publicSite';

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
                            <Link :class="logoClass" href="/">
                                <img :src="logo" :alt="publicInstitution.name" />
                            </Link>
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
                            Welcome to {{ publicInstitution.name }}. {{ publicInstitution.description }}
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
                    <div
                        v-if="publicInstitution.address || publicInstitution.phone || publicInstitution.email"
                        :class="contactClass"
                    >
                        <h4 class="offcanvas-title-meta">Contact Info</h4>
                        <ul>
                            <li v-if="publicInstitution.address" class="d-flex gap-15">
                                <div class="offcanvas-contact-icon">
                                    <i class="ri-map-pin-line" />
                                </div>
                                <div class="offcanvas-contact-text">
                                    <span>{{ publicInstitution.address }}</span>
                                </div>
                            </li>
                            <li v-if="publicInstitution.phone" class="d-flex gap-15">
                                <div class="offcanvas-contact-icon">
                                    <i class="ri-phone-line" />
                                </div>
                                <div class="offcanvas-contact-text">
                                    <a :href="`tel:${publicInstitution.phone}`">
                                        {{ publicInstitution.phone }}
                                    </a>
                                </div>
                            </li>
                            <li v-if="publicInstitution.email" class="d-flex gap-15">
                                <div class="offcanvas-contact-icon">
                                    <i class="ri-mail-line" />
                                </div>
                                <div class="offcanvas-contact-text">
                                    <a :href="`mailto:${publicInstitution.email}`">
                                        {{ publicInstitution.email }}
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div v-if="publicInstitution.socials.length > 0" :class="socialClass">
                        <h4 class="offcanvas-title-meta">Follow Us</h4>
                        <ul>
                            <li><a href="javascript:void(0)" aria-disabled="true" @click.prevent><i class="ri-facebook-fill" /></a></li>
                            <li><a href="javascript:void(0)" aria-disabled="true" @click.prevent><i class="ri-twitter-x-fill" /></a></li>
                            <li><a href="javascript:void(0)" aria-disabled="true" @click.prevent><i class="ri-youtube-fill" /></a></li>
                            <li><a href="javascript:void(0)" aria-disabled="true" @click.prevent><i class="ri-linkedin-box-fill" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="offcanvas-overlay" />
    <div class="offcanvas-overlay-white" />
</template>
