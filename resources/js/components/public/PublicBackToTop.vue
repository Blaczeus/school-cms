<script setup lang="ts">
const props = defineProps<{
    theme: 'blue' | 'red';
}>();

const className = props.theme === 'red' ? 'rs-backtotop has-theme-red' : '';
</script>

<template>
    <div id="backtotop-wrap" :class="className">
        <svg class="arrowicon" viewBox="0 0 24 24" width="18" height="18">
            <path
                d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"
                fill="#000"
            />
        </svg>
        <svg class="scrollprogress" width="40" height="40">
            <circle
                class="progress-circle"
                cx="20"
                cy="20"
                r="18"
                stroke-width="2"
                fill="none"
                stroke="#fff"
                stroke-dasharray="113.1"
                stroke-dashoffset="113.1"
            />
        </svg>
    </div>
</template>
