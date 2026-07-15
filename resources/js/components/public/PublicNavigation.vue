<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { publicNavigation } from '@/data/publicSite';

defineProps<{
    id?: string;
}>();
</script>

<template>
    <nav :id="id" class="main-menu">
        <ul class="multipage-menu">
            <li
                v-for="item in publicNavigation"
                :key="item.label"
                :class="{ 'menu-item-has-children': item.items }"
            >
                <Link v-if="item.href" :href="item.href">{{ item.label }}</Link>
                <a v-else href="javascript:void(0)" aria-disabled="true" @click.prevent>
                    {{ item.label }}
                </a>
                <ul v-if="item.items" class="submenu last-children">
                    <li v-for="child in item.items" :key="child.label">
                        <Link v-if="child.href" :href="child.href">{{ child.label }}</Link>
                        <a v-else href="javascript:void(0)" aria-disabled="true" @click.prevent>
                            {{ child.label }}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
