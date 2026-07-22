<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

import { publicNavigation } from '@/data/publicSite';
import type { PublicNavItem } from '@/data/publicSite';

defineProps<{
    id?: string;
}>();

const page = usePage();
const currentPath = computed(() => page.url.split('?')[0] || '/');

const normalizePath = (href: string) => (href === '/' ? href : href.replace(/\/$/, ''));

const isHrefActive = (href?: string) => {
    if (!href) {
        return false;
    }

    const target = normalizePath(href);
    const current = normalizePath(currentPath.value);

    if (target === '/') {
        return current === '/';
    }

    return current === target || current.startsWith(`${target}/`);
};

const isItemActive = (item: PublicNavItem): boolean =>
    isHrefActive(item.href) || Boolean(item.items?.some((child) => isItemActive(child)));
</script>

<template>
    <nav :id="id" class="main-menu">
        <ul class="multipage-menu">
            <li
                v-for="item in publicNavigation"
                :key="item.label"
                :class="{ 'menu-item-has-children': item.items, active: isItemActive(item) }"
            >
                <Link v-if="item.href" :href="item.href" :class="{ active: isHrefActive(item.href) }">
                    {{ item.label }}
                </Link>
                <a
                    v-else
                    href="javascript:void(0)"
                    aria-disabled="true"
                    :class="{ active: isItemActive(item) }"
                    @click.prevent
                >
                    {{ item.label }}
                </a>
                <ul v-if="item.items" class="submenu last-children">
                    <li v-for="child in item.items" :key="child.label" :class="{ active: isItemActive(child) }">
                        <Link v-if="child.href" :href="child.href" :class="{ active: isHrefActive(child.href) }">
                            {{ child.label }}
                        </Link>
                        <a
                            v-else
                            href="javascript:void(0)"
                            aria-disabled="true"
                            :class="{ active: isItemActive(child) }"
                            @click.prevent
                        >
                            {{ child.label }}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
