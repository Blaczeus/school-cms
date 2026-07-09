<script setup lang="ts">
const props = defineProps<{
    theme: 'blue' | 'red';
}>();

type MenuItem = {
    label: string;
    href: string;
};

type MenuGroup = {
    label: string;
    href?: string;
    columns?: Array<{
        title: string;
        items: MenuItem[];
    }>;
    items?: MenuItem[];
};

const topLinks: MenuItem[] = [
    { label: 'Campus Life', href: 'campus-life.html' },
    { label: 'Research', href: 'research.html' },
    { label: 'All Programs', href: 'program.html' },
    { label: 'Alumni', href: 'alumni.html' },
];

const menuGroups: MenuGroup[] = [
    {
        label: 'Home',
        items: [
            { label: 'Blue University', href: 'index.html' },
            { label: 'Blue University Two', href: 'blue-two.html' },
            { label: 'Cyan University', href: 'cyan-uni.html' },
            { label: 'Red University', href: 'red-one.html' },
            { label: 'Red University Two', href: 'red-two.html' },
            { label: 'Red school', href: 'red-school.html' },
            { label: 'Green University', href: 'green-one.html' },
            { label: 'Green University Two', href: 'green-two.html' },
        ],
    },
    {
        label: 'Pages',
        columns: [
            {
                title: 'Page Layout 1',
                items: [
                    { label: 'About Us', href: 'about.html' },
                    { label: 'History', href: 'history.html' },
                    { label: 'Administration', href: 'administration.html' },
                    { label: 'Campus Map', href: 'campus-map.html' },
                    { label: 'Mission & Value', href: 'mission-value.html' },
                    { label: 'Vice Chancellor', href: 'vice-chancellor.html' },
                    { label: 'Campus Life', href: 'campus-life.html' },
                ],
            },
            {
                title: 'Page Layout 2',
                items: [
                    { label: 'Research', href: 'research.html' },
                    { label: 'Research Details', href: 'research-details.html' },
                    { label: 'Scholarships', href: 'scholarships.html' },
                    { label: 'Event', href: 'event.html' },
                    { label: 'Event Details', href: 'event-details.html' },
                    { label: 'Libraries', href: 'libraries.html' },
                    { label: 'Alumni', href: 'alumni.html' },
                ],
            },
            {
                title: 'Page Layout 3',
                items: [
                    { label: 'Alumni Details', href: 'alumni-details.html' },
                    { label: 'Faq', href: 'faq.html' },
                    { label: 'Gallery', href: 'gallery.html' },
                    { label: 'Shop', href: 'shop.html' },
                    { label: 'Shop Details', href: 'shop-details.html' },
                    { label: 'Cart', href: 'cart.html' },
                    { label: 'Checkout', href: 'checkout.html' },
                ],
            },
            {
                title: 'Page Layout 4',
                items: [
                    { label: 'Login', href: 'sign-in.html' },
                    { label: 'Register', href: 'sign-up.html' },
                    { label: 'Privacy & Policy', href: 'privacy-policy.html' },
                    { label: 'Terms & Condition', href: 'terms-conditions.html' },
                    { label: 'Forgot Password', href: 'forgot.html' },
                    { label: '404 Error', href: 'error-page.html' },
                ],
            },
        ],
    },
    {
        label: 'Academics',
        items: [
            { label: 'Faculty', href: 'faculty.html' },
            { label: 'Faculty Details', href: 'faculty-details.html' },
            { label: 'Faculty Members One', href: 'faculty-members.html' },
            { label: 'Faculty Members Two', href: 'faculty-members-two.html' },
            { label: 'Member Details', href: 'team-details.html' },
            { label: 'Program', href: 'program.html' },
            { label: 'Program Details', href: 'program-details.html' },
        ],
    },
    {
        label: 'Admission',
        items: [
            { label: 'Tuition & Fee', href: 'tuition-fee.html' },
            { label: 'How to Apply', href: 'how-to-apply.html' },
            { label: 'Admission Requirements', href: 'admission-requirements.html' },
            { label: 'Cost & Financial Aid', href: 'cost-financial-aid.html' },
            { label: 'Apply Now', href: 'apply-now.html' },
        ],
    },
    {
        label: 'Blog',
        items: [
            { label: 'Blog', href: 'blog.html' },
            { label: 'Blog Grid', href: 'blog-grid.html' },
            { label: 'Blog Grid Sidebar', href: 'blog-grid-sidebar.html' },
            { label: 'Blog Details', href: 'blog-details.html' },
        ],
    },
    { label: 'Contact', href: 'contact.html' },
];

const isRed = props.theme === 'red';
const headerAreaClass = isRed
    ? 'rs-header-area rs-header-three has-theme-red'
    : 'rs-header-area rs-header-one';
const headerTopClass = isRed
    ? 'rs-header-top rs-header-top-one has-theme-red'
    : '';
const stickyClass = isRed
    ? 'header-wrapper rs-sticky-header has-space'
    : 'header-wrapper rs-sticky-header';
const logo = isRed
    ? '/public-site/images/logo/logo-red.webp'
    : '/public-site/images/logo/logo-white.webp';
const searchClass = isRed ? 'header-search-icon has-theme-red' : 'header-search-icon';
const buttonClass = isRed
    ? 'rs-btn has-icon has-black hover-red radius-15'
    : 'rs-btn has-icon has-theme-yellow hover-white';
</script>

<template>
    <header>
        <div :class="headerAreaClass">
            <div class="container-fluid g-0">
                <div v-if="isRed" :class="headerTopClass">
                    <div class="header-top-left">
                        <div class="header-top-content">
                            <span class="header-top-title">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M5.21484 12.8949V16.6564C5.21484 16.6564 8.82175 15.1537 12.0198 15.1537C15.2178 15.1537 18.8255 16.6564 18.8255 16.6564V12.8424C18.8255 12.8424 15.3844 11.0225 11.9665 11.0225C8.55018 11.021 5.21484 12.8949 5.21484 12.8949Z"
                                    />
                                    <path
                                        d="M22.6467 11.9993L24 11.2716L22.6467 10.5222V10.1666C22.6467 10.1666 23.0278 8.23413 20.862 9.24464C20.7517 9.30465 20.6924 9.36542 20.6684 9.42468L11.7367 4.47119L0 11.1884L4.43211 13.2019V12.5485C4.43211 12.5485 8.15079 10.4607 11.9625 10.4607C15.7734 10.4607 19.6092 12.4899 19.6092 12.4899V13.631L22.0563 12.3167V17.6377H21.2416V19.529L22.3248 18.7803L23.5274 19.529V17.637H22.6467V11.9993ZM22.0555 9.83803V10.1944L21.3413 9.79827C21.6017 9.62573 22.0555 9.38642 22.0555 9.83803ZM21.814 11.9251C21.737 11.9279 21.6603 11.9152 21.5883 11.8877C21.5164 11.8602 21.4507 11.8185 21.3952 11.7651C21.3398 11.7117 21.2956 11.6476 21.2655 11.5768C21.2353 11.5059 21.2198 11.4297 21.2197 11.3527C21.2197 11.2757 21.2351 11.1994 21.2652 11.1285C21.2953 11.0576 21.3393 10.9935 21.3947 10.94C21.4501 10.8865 21.5157 10.8447 21.5876 10.8172C21.6595 10.7896 21.7362 10.7768 21.8132 10.7795C21.9615 10.7848 22.102 10.8474 22.2051 10.9542C22.3082 11.0609 22.3659 11.2035 22.366 11.3519C22.3661 11.5003 22.3086 11.643 22.2056 11.7499C22.1027 11.8568 21.9623 11.9196 21.814 11.9251Z"
                                    />
                                </svg>
                                Welcome to Univet University
                            </span>
                        </div>
                    </div>
                    <div class="header-top-right">
                        <div class="header-top-menu-wrapper">
                            <div
                                v-for="link in topLinks"
                                :key="link.href"
                                class="header-nav-menu-item"
                            >
                                <a :href="link.href">{{ link.label }}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="rs-sticky-header" :class="stickyClass">
                    <div class="header-left">
                        <div class="header-logo">
                            <a href="index.html"><img :src="logo" alt="logo" /></a>
                        </div>
                    </div>
                    <div class="header-menu">
                        <nav id="mobile-menu" class="main-menu">
                            <ul class="multipage-menu">
                                <li
                                    v-for="group in menuGroups"
                                    :key="group.label"
                                    :class="{
                                        'menu-item-has-children': group.items || group.columns,
                                        'rs-mega-menu': group.columns,
                                    }"
                                >
                                    <a :href="group.href ?? 'javascript:void(0)'">{{ group.label }}</a>
                                    <ul v-if="group.columns" class="mega-menu mega-grid">
                                        <li
                                            v-for="column in group.columns"
                                            :key="column.title"
                                            class="rs-menu-item"
                                        >
                                            <a href="#" class="title">{{ column.title }}</a>
                                            <ul>
                                                <li v-for="item in column.items" :key="item.href">
                                                    <a :href="item.href">{{ item.label }}</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul v-else-if="group.items" class="submenu last-children">
                                        <li v-for="item in group.items" :key="item.href">
                                            <a :href="item.href">{{ item.label }}</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header-right">
                        <div class="header-icon-wrapper">
                            <div class="header-search-wrapper">
                                <div :class="searchClass">
                                    <i class="ri-close-fill has-close" />
                                    <i class="ri-search-line has-search" />
                                </div>
                                <form class="header-search-inner rs-stickys-form" action="#">
                                    <div class="header-search">
                                        <input type="text" placeholder="Searching..." />
                                        <button type="submit"><i class="ri-search-line" /></button>
                                    </div>
                                </form>
                            </div>
                            <div class="header-hamburger">
                                <div class="sidebar-toggle">
                                    <a class="header-bar-icon" href="javascript:void(0)">
                                        <span />
                                        <span />
                                        <span />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="header-btn">
                            <a :class="buttonClass" href="apply-now.html">
                                <span class="btn-text-wrap">
                                    <span class="text-default">Apply Now</span>
                                    <span class="text-hover">Apply Now</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <header v-if="isRed">
        <div :class="headerAreaClass">
            <div class="container-fluid g-0">
                <div class="header-wrapper has-space">
                    <div class="header-left">
                        <div class="header-logo">
                            <a href="index.html"><img :src="logo" alt="logo" /></a>
                        </div>
                    </div>
                    <div class="header-menu">
                        <nav id="mobile-menu-two" class="main-menu">
                            <ul class="multipage-menu">
                                <li
                                    v-for="group in menuGroups"
                                    :key="group.label"
                                    :class="{
                                        'menu-item-has-children': group.items || group.columns,
                                        'rs-mega-menu': group.columns,
                                    }"
                                >
                                    <a :href="group.href ?? 'javascript:void(0)'">{{ group.label }}</a>
                                    <ul v-if="group.columns" class="mega-menu mega-grid">
                                        <li
                                            v-for="column in group.columns"
                                            :key="column.title"
                                            class="rs-menu-item"
                                        >
                                            <a href="#" class="title">{{ column.title }}</a>
                                            <ul>
                                                <li v-for="item in column.items" :key="item.href">
                                                    <a :href="item.href">{{ item.label }}</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul v-else-if="group.items" class="submenu last-children">
                                        <li v-for="item in group.items" :key="item.href">
                                            <a :href="item.href">{{ item.label }}</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header-right">
                        <div class="header-icon-wrapper">
                            <div class="header-search-wrapper">
                                <div :class="searchClass">
                                    <i class="ri-close-fill has-close" />
                                    <i class="ri-search-line has-search" />
                                </div>
                                <form class="header-search-inner rs-stickys-form" action="#">
                                    <div class="header-search">
                                        <input type="text" placeholder="Searching..." />
                                        <button type="submit"><i class="ri-search-line" /></button>
                                    </div>
                                </form>
                            </div>
                            <div class="header-hamburger">
                                <div class="sidebar-toggle">
                                    <a class="header-bar-icon" href="javascript:void(0)">
                                        <span />
                                        <span />
                                        <span />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="header-btn">
                            <a :class="buttonClass" href="apply-now.html">
                                <span class="btn-text-wrap">
                                    <span class="text-default">Apply Now</span>
                                    <span class="text-hover">Apply Now</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
