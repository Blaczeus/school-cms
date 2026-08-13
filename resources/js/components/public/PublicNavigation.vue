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
const mobileHomeItem: PublicNavItem = { label: 'Home', href: '/', activeMatch: 'exact' };
const mobileNavigation = computed(() => [mobileHomeItem, ...publicNavigation]);

const normalizePath = (href: string) => (href === '/' ? href : href.replace(/\/$/, ''));

const isHrefActive = (href?: string, activeMatch: PublicNavItem['activeMatch'] = 'section') => {
    if (!href) {
        return false;
    }

    const target = normalizePath(href);
    const current = normalizePath(currentPath.value);

    if (target === '/') {
        return current === '/';
    }

    return activeMatch === 'exact' ? current === target : current === target || current.startsWith(`${target}/`);
};

const isItemActive = (item: PublicNavItem): boolean =>
    isHrefActive(item.href, item.activeMatch) || Boolean(item.items?.some((child) => isItemActive(child)));

const activeHrefAttributes = (item: PublicNavItem) => ({
    'aria-current': isHrefActive(item.href, item.activeMatch) ? 'page' : undefined,
});

const dropdownAttributes = (item: PublicNavItem) => ({
    'aria-haspopup': item.items ? ('menu' as const) : undefined,
});
</script>

<template>
    <nav :id="id" class="main-menu">
        <ul class="multipage-menu">
            <li
                v-for="item in mobileNavigation"
                :key="item.label"
                :class="{
                    'menu-item-has-children': item.items,
                    'public-nav-mobile-only': item === mobileHomeItem,
                    active: isItemActive(item),
                }"
            >
                <Link
                    v-if="item.href"
                    :href="item.href"
                    :class="{ active: isHrefActive(item.href, item.activeMatch) }"
                    v-bind="activeHrefAttributes(item)"
                >
                    {{ item.label }}
                </Link>
                <a
                    v-else
                    href="javascript:void(0)"
                    :class="{ active: isItemActive(item) }"
                    v-bind="dropdownAttributes(item)"
                    @click.prevent
                >
                    {{ item.label }}
                </a>
                <ul v-if="item.items" class="submenu last-children">
                    <li v-for="child in item.items" :key="child.label" :class="{ active: isItemActive(child) }">
                        <Link
                            v-if="child.href"
                            :href="child.href"
                            :class="{ active: isHrefActive(child.href, child.activeMatch) }"
                            v-bind="activeHrefAttributes(child)"
                        >
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
