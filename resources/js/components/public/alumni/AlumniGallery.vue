<script setup lang="ts">
import type { AlumniGalleryImage } from '@/types/alumni';

defineProps<{
    images: AlumniGalleryImage[];
}>();
</script>

<template>
    <!-- gallery area start -->
    <section class="rs-gallery-area section-space rs-gallery-two public-alumni-gallery">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <div class="section-title-wrapper text-center section-title-space">
                        <h2 class="section-title rs-split-text-enable split-in-left mb-10 has-theme-red">
                            Alumni Photo Gallery
                        </h2>
                        <p class="section-desc">Moments from alumni gatherings, campus visits, and community events.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-gallery-wrapper">
                        <div v-for="image in images" :key="image.id" class="rs-gallery-item">
                            <div class="rs-gallery-thumb">
                                <img :src="image.image" :alt="image.alt" />
                                <div class="rs-gallery-btn">
                                    <a class="popup-image rs-btn-circle" :href="image.image" :aria-label="`Open ${image.alt}`">
                                        <i class="ri-add-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- gallery area end -->
</template>
