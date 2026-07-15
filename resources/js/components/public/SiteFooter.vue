<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import {
    footerCampusLinks,
    footerUsefulLinks,
    publicInstitution,
} from '@/data/publicSite';

const props = defineProps<{
    theme: 'blue' | 'red';
}>();

const isRed = props.theme === 'red';
const footerClass = isRed
    ? 'rs-footer-area rs-footer-one has-theme-red'
    : 'rs-footer-area rs-footer-one';
const socialClass = isRed
    ? 'rs-footer-social theme-social has-radius-none has-medium has-theme-red'
    : 'rs-footer-social theme-social has-radius-none has-medium hover-yellow has-theme-blue';
const linkClass = isRed
    ? 'rs-footer-widget-link has-theme-red'
    : 'rs-footer-widget-link has-theme-yellow';
const copyrightClass = isRed
    ? 'rs-footer-copyright has-theme-red'
    : 'rs-footer-copyright';
const copyrightLinkClass = isRed
    ? 'rs-footer-copyright-link has-theme-red'
    : 'rs-footer-copyright-link';
const appBadges: string[] = [];
</script>

<template>
    <footer :class="footerClass">
        <div v-if="isRed" class="rs-footer-shape">
            <img src="/public-site/images/shape/arrow-shape.webp" alt="image" />
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-footer-wrapper">
                        <div class="rs-footer-left">
                            <div class="rs-footer-widget footer-1-col-1">
                                <div class="rs-footer-widget-logo">
                                    <Link href="/">
                                        <img
                                            src="/public-site/images/logo/logo-white.webp"
                                            :alt="publicInstitution.name"
                                        />
                                    </Link>
                                </div>
                                <div class="rs-footer-widget-content">
                                    <div
                                        v-if="publicInstitution.phone || publicInstitution.email"
                                        class="rs-footer-widget-contact-info"
                                    >
                                        <div v-if="publicInstitution.phone" class="rs-footer-content-item">
                                            <span>Phone:</span>
                                            <a :href="`tel:${publicInstitution.phone}`">
                                                {{ publicInstitution.phone }}
                                            </a>
                                        </div>
                                        <div v-if="publicInstitution.email" class="rs-footer-content-item">
                                            <span>Email:</span>
                                            <a :href="`mailto:${publicInstitution.email}`">
                                                {{ publicInstitution.email }}
                                            </a>
                                        </div>
                                    </div>
                                    <div v-if="appBadges.length > 0" class="rs-footer-app-badges">
                                        <a v-for="badge in appBadges" :key="badge" href="javascript:void(0)" aria-disabled="true">
                                            <img :src="badge" alt="App badge" />
                                        </a>
                                    </div>
                                    <div
                                        v-if="publicInstitution.socials.length > 0"
                                        class="rs-footer-widget-social"
                                    >
                                        <span class="rs-footer-social-title">Social Link:</span>
                                        <div :class="socialClass">
                                            <a href="javascript:void(0)" aria-disabled="true" @click.prevent><i class="ri-facebook-fill" /></a>
                                            <a href="javascript:void(0)" aria-disabled="true" @click.prevent><i class="ri-instagram-line" /></a>
                                            <a href="javascript:void(0)" aria-disabled="true" @click.prevent><i class="ri-twitter-x-fill" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rs-footer-right">
                            <div class="rs-footer-widget-wrapper">
                                <div class="rs-footer-widget footer-1-col-2">
                                    <h5 class="rs-footer-widget-title">Our Campus</h5>
                                    <div :class="linkClass">
                                        <ul>
                                            <li v-for="link in footerCampusLinks" :key="link.label">
                                                <a href="javascript:void(0)" aria-disabled="true" @click.prevent>
                                                    {{ link.label }}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="rs-footer-widget footer-1-col-3">
                                    <h5 class="rs-footer-widget-title">Useful Links</h5>
                                    <div :class="linkClass">
                                        <ul>
                                            <li v-for="link in footerUsefulLinks" :key="link.label">
                                                <a href="javascript:void(0)" aria-disabled="true" @click.prevent>
                                                    {{ link.label }}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="rs-footer-widget footer-1-col-4">
                                    <h5 class="rs-footer-widget-title">Newsletter</h5>
                                    <div class="rs-cta-input">
                                        <input id="email2" name="name" type="text" placeholder="Enter your email" />
                                        <button type="submit" class="rs-square-btn has-icon has-transparent is-white">
                                            <span class="icon-box"><i class="ri-arrow-right-line" /></span>
                                        </button>
                                        <div class="rs-form-check">
                                            <input id="remeber" type="checkbox" />
                                            <label for="remeber">I agree to the privacy policy</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rs-footer-copyright-area rs-copyright-one">
                                <div class="rs-footer-copyright-wrapper">
                                    <div class="rs-footer-copyright-right">
                                        <div class="rs-footer-copyright-item">
                                            <div :class="copyrightClass">
                                                <p class="underline">
                                                    Copyright © <span id="year">2025</span>
                                                    {{ publicInstitution.name }}. All rights reserved.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="rs-footer-copyright-left">
                                        <div class="rs-footer-copyright-item">
                                            <div :class="copyrightLinkClass">
                                                <a href="javascript:void(0)" aria-disabled="true" @click.prevent>
                                                    Terms & Agreements
                                                </a>
                                            </div>
                                        </div>
                                        <div class="rs-footer-copyright-item">
                                            <div :class="copyrightLinkClass">
                                                <a href="javascript:void(0)" aria-disabled="true" @click.prevent>
                                                    Privacy policy
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
        </div>
    </footer>
</template>
