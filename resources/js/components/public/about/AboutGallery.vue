<script setup lang="ts">
import type { AboutGalleryImage } from '@/types/about';

defineProps<{
    images: AboutGalleryImage[];
}>();
</script>

<template>
    <!-- gallery area start -->
    <div class="rs-gallery-area rs-gallery-one public-about-gallery">
        <div class="container-fluid g-0">
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-gallery-wrapper">
                        <div class="rs-gallery-item-wrapper">
                            <div v-for="image in images" :key="image.src" class="rs-gallery-item">
                                <img :src="image.src" :alt="image.alt" />
                            </div>
                        </div>
                        <div class="rs-gallery-btn">
                            <a
                                class="rs-btn has-icon has-theme-red hover-black"
                                href="javascript:void(0)"
                                aria-disabled="true"
                                @click.prevent
                            >
                                <span class="btn-text-wrap">
                                    <span class="text-default">Discover Campus Life</span>
                                    <span class="text-hover">Discover Campus Life</span>
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
    <!-- gallery area end -->
</template>
