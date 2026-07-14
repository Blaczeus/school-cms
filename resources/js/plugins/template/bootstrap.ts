import { loadScript } from './helpers/dom';

export const templateFoundationScriptSources = [
    '/public-site/js/vendor/jquery-3.7.1.min.js',
    '/public-site/js/vendor/bootstrap.bundle.min.js',
    '/public-site/js/plugins/meanmenu.min.js',
    '/public-site/js/plugins/lenis.min.js',
] as const;

export const templatePageWidgetScriptSources = [
    '/public-site/js/plugins/swiper.min.js',
] as const;

export const templateAnimationScriptSources = [
    '/public-site/js/plugins/wow.min.js',
    '/public-site/js/plugins/gsap.min.js',
    '/public-site/js/plugins/rs-scroll-trigger.min.js',
    '/public-site/js/plugins/rs-splitText.min.js',
    '/public-site/js/plugins/rs-anim-int.js',
] as const;

export const templateMediaWidgetScriptSources = [
    '/public-site/js/plugins/jarallax.min.js',
    '/public-site/js/vendor/magnific-popup.min.js',
    '/public-site/js/vendor/imagesloaded.pkgd.min.js',
    '/public-site/js/vendor/isotope.pkgd.min.js',
    '/public-site/js/plugins/jquery.appear.min.js',
    '/public-site/js/vendor/odometer.min.js',
] as const;

export const templateFormWidgetScriptSources = [
    '/public-site/js/vendor/ajax-form.js',
    '/public-site/js/plugins/nice-select.min.js',
    '/public-site/js/plugins/flatpickr.min.js',
    '/public-site/js/plugins/nouislider.min.js',
] as const;

export const templateDeferredScriptSources = [
    '/public-site/js/main.js',
] as const;

export const templateScriptSources = [
    ...templateFoundationScriptSources,
    ...templatePageWidgetScriptSources,
    ...templateAnimationScriptSources,
    ...templateMediaWidgetScriptSources,
    ...templateFormWidgetScriptSources,
    ...templateDeferredScriptSources,
] as const;

export async function loadTemplateFoundationScripts(): Promise<void> {
    for (const source of templateFoundationScriptSources) {
        await loadScript(source);
    }
}

export async function loadTemplatePageWidgetScripts(): Promise<void> {
    for (const source of templatePageWidgetScriptSources) {
        await loadScript(source);
    }
}

export async function loadTemplateAnimationScripts(): Promise<void> {
    for (const source of templateAnimationScriptSources) {
        await loadScript(source);
    }
}

export async function loadTemplateMediaWidgetScripts(): Promise<void> {
    for (const source of templateMediaWidgetScriptSources) {
        await loadScript(source);
    }
}

export async function loadTemplateFormWidgetScripts(): Promise<void> {
    for (const source of templateFormWidgetScriptSources) {
        await loadScript(source);
    }
}

export const templatePluginBootstrap = {
    loadAnimationScripts: loadTemplateAnimationScripts,
    loadFoundationScripts: loadTemplateFoundationScripts,
    loadFormWidgetScripts: loadTemplateFormWidgetScripts,
    loadMediaWidgetScripts: loadTemplateMediaWidgetScripts,
    loadPageWidgetScripts: loadTemplatePageWidgetScripts,
    scripts: templateScriptSources,
};
