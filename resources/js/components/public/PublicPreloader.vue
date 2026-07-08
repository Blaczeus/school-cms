<script setup lang="ts">
const props = defineProps<{
    theme: 'blue' | 'red';
}>();

const loaderClass = props.theme === 'red' ? 'has-theme-red' : '';
const favicon = props.theme === 'red'
    ? '/public-site/images/favicon-red.webp'
    : '/public-site/images/favicon-blue.webp';
</script>

<template>
    <div id="pre-load">
        <div id="loader" class="loader">
            <div class="loader-container" :class="loaderClass">
                <div class="loader-icon">
                    <img :src="favicon" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>
