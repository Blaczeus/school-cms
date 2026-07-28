<script setup lang="ts">
import type { AlumniStoryBlock } from '@/types/alumni';

defineProps<{
    introduction: {
        title: string;
        description: string;
        image: string;
    };
    storyIntro: {
        title: string;
        description: string;
    };
    storyBlocks: AlumniStoryBlock[];
    storyImages: string[];
}>();
</script>

<template>
    <!-- alumni area start -->
    <section class="rs-alumni-area bg-primary section-space-top rs-alumni-one">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-research-wrapper">
                        <h3 class="section-title text has-theme-red mb-20">{{ introduction.title }}</h3>
                        <p class="section-desc">{{ introduction.description }}</p>
                        <div class="rs-alumni-thumb">
                            <img :src="introduction.image" alt="Alumni community gathering" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- alumni area end -->

    <!-- alumni area start -->
    <section class="rs-alumni-area rs-alumni-two bg-primary section-space-bottom">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-alumni-sec-wrapper">
                        <h3 class="section-title text has-theme-red mb-15">{{ storyIntro.title }}</h3>
                        <p class="section-desc">{{ storyIntro.description }}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-alumni-wrapper">
                        <div class="rs-alumni-content-item-wrapper">
                            <div v-for="story in storyBlocks" :key="story.title" class="rs-alumni-item">
                                <h6 class="rs-alumni-title">{{ story.title }}</h6>
                                <div class="rs-alumni-content">
                                    <div class="rs-alumni-inner">
                                        <p class="rs-alumni-desc">{{ story.description }}</p>
                                        <ul>
                                            <li v-for="point in story.points" :key="point">{{ point }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rs-alumni-thumb-wrapper">
                            <div v-for="(image, index) in storyImages" :key="image" class="rs-alumni-thumb">
                                <img :src="image" :alt="`Alumni story image ${index + 1}`" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- alumni area end -->
</template>
