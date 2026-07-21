<script setup lang="ts">
import type { Faculty } from '@/types/faculty';

defineProps<{
    faculty: Faculty;
}>();
</script>

<template>
    <!-- counter area start -->
    <div class="rs-counter-area pb-60 rs-counter-three bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="rs-counter-wrapper">
                        <div
                            v-for="statistic in faculty.statistics"
                            :key="statistic.label"
                            class="rs-counter-item"
                        >
                            <div class="rs-counter-content">
                                <div class="rs-counter-number-wrapper">
                                    <span class="rs-counter-number odometer" :data-count="statistic.value">00</span>
                                    <span v-if="statistic.suffix" class="prefix">{{ statistic.suffix }}</span>
                                </div>
                                <h5 class="rs-counter-title">{{ statistic.label }}</h5>
                                <span class="rs-counter-desc">{{ statistic.description }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- counter area end -->
</template>
