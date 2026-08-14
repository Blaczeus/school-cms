<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import ContactForm from '@/components/public/contact/ContactForm.vue';
import PublicBreadcrumb from '@/components/public/PublicBreadcrumb.vue';
import { contactChannels, contactLocation, contactSupportOptions } from '@/data/contact';
</script>

<template>
    <div class="public-contact-page bg-primary">
        <PublicBreadcrumb
            title="Contact Us"
            current="Contact"
            column-class="col-xl-7 col-lg-10"
            description="Reach the right university office for admissions, student support, academic services, records, visits, and general enquiries."
        />

        <!-- contact intro area start -->
        <section class="rs-about-area rs-about-six section-space-top pb-40 public-contact-intro">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-10">
                        <div class="section-title-wrapper text-center">
                            <span class="section-subtitle has-theme-red justify-content-center">
                                <i class="ri-customer-service-2-line" aria-hidden="true" />
                                Contact Information
                            </span>
                            <h2 class="section-title rs-split-text-enable split-in-fade">How Can We Help?</h2>
                            <p class="section-intro">
                                Use the channels below for general enquiries, or choose the right support path when your
                                request belongs to Admissions or a specific Service Unit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- contact intro area end -->

        <!-- contact area start -->
        <section class="rs-contact-area rs-contact-five pb-30 public-contact-channels">
            <div class="container">
                <div class="rs-contact-wrapper">
                    <div v-for="channel in contactChannels" :key="channel.id" class="rs-contact-item">
                        <div class="rs-contact-shape">
                            <img src="/public-site/images/shape/three-line-shape.webp" alt="" />
                        </div>
                        <div class="rs-contact-icon public-contact-card-icon">
                            <i :class="channel.icon" aria-hidden="true" />
                        </div>
                        <h4 class="rs-contact-title">{{ channel.label }}</h4>
                        <p>{{ channel.description }}</p>
                        <div class="rs-contact-links">
                            <a v-if="channel.href" :href="channel.href">{{ channel.value }}</a>
                            <span v-else>{{ channel.value }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- contact area end -->

        <!-- support area start -->
        <section class="rs-campus-area rs-campus-two section-space-top pb-70 public-contact-support">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-9">
                        <div class="section-title-wrapper text-center">
                            <span class="section-subtitle has-theme-red justify-content-center">
                                <i class="ri-route-line" aria-hidden="true" />
                                Find the Right Support
                            </span>
                            <h2 class="section-title">Choose a Faster Path</h2>
                        </div>
                    </div>
                </div>
                <div class="row g-5 justify-content-center">
                    <div v-for="option in contactSupportOptions" :key="option.id" class="col-xl-5 col-lg-6">
                        <div class="public-contact-support-card">
                            <div class="public-contact-support-icon">
                                <i :class="option.icon" aria-hidden="true" />
                            </div>
                            <div>
                                <h4>{{ option.title }}</h4>
                                <p>{{ option.description }}</p>
                                <Link class="rs-btn has-icon has-theme-red hover-black" :href="option.href">
                                    <span class="btn-text-wrap">
                                        <span class="text-default">{{ option.cta }}</span>
                                        <span class="text-hover">{{ option.cta }}</span>
                                    </span>
                                    <span class="icon-box has-rotate">
                                        <i class="ri-arrow-right-up-line" aria-hidden="true" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- support area end -->

        <!-- contact form area start -->
        <section class="rs-contact-area rs-contact-four section-space-bottom public-contact-form-location">
            <div class="container">
                <div class="rs-contact-wrapper">
                    <div class="rs-contact-form">
                        <h3 class="rs-contact-form-title">Send an Enquiry</h3>
                        <ContactForm />
                    </div>
                    <div class="rs-map-one">
                        <div v-if="contactLocation.mapEmbedUrl" class="rs-google-map">
                            <iframe
                                :src="contactLocation.mapEmbedUrl"
                                :title="contactLocation.title"
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div v-else class="public-contact-location-card">
                            <span class="section-subtitle has-theme-red">
                                <i class="ri-map-pin-line" aria-hidden="true" />
                                Campus Location
                            </span>
                            <h3>{{ contactLocation.title }}</h3>
                            <p>{{ contactLocation.description }}</p>
                            <address>{{ contactLocation.address }}</address>
                            <a
                                v-if="contactLocation.mapUrl"
                                class="rs-btn has-icon has-theme-red hover-black"
                                :href="contactLocation.mapUrl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span class="btn-text-wrap">
                                    <span class="text-default">Open Map</span>
                                    <span class="text-hover">Open Map</span>
                                </span>
                                <span class="icon-box has-rotate">
                                    <i class="ri-arrow-right-up-line" aria-hidden="true" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- contact form area end -->
    </div>
</template>
