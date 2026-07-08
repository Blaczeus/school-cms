import { loadScript } from './helpers/dom';

export const templateFoundationScriptSources = [
    '/public-site/js/vendor/jquery-3.7.1.min.js',
    '/public-site/js/vendor/bootstrap.bundle.min.js',
    '/public-site/js/plugins/meanmenu.min.js',
    '/public-site/js/plugins/lenis.min.js',
] as const;

export const templateDeferredScriptSources = [
    '/public-site/js/plugins/swiper.min.js',
    '/public-site/js/plugins/wow.min.js',
    '/public-site/js/plugins/jarallax.min.js',
    '/public-site/js/vendor/magnific-popup.min.js',
    '/public-site/js/vendor/isotope.pkgd.min.js',
    '/public-site/js/vendor/imagesloaded.pkgd.min.js',
    '/public-site/js/vendor/ajax-form.js',
    '/public-site/js/plugins/gsap.min.js',
    '/public-site/js/plugins/rs-anim-int.js',
    '/public-site/js/plugins/rs-scroll-trigger.min.js',
    '/public-site/js/plugins/rs-splitText.min.js',
    '/public-site/js/plugins/jquery.appear.min.js',
    '/public-site/js/plugins/nice-select.min.js',
    '/public-site/js/plugins/flatpickr.min.js',
    '/public-site/js/plugins/nouislider.min.js',
    '/public-site/js/vendor/odometer.min.js',
    '/public-site/js/main.js',
] as const;

export const templateScriptSources = [
    ...templateFoundationScriptSources,
    ...templateDeferredScriptSources,
] as const;

export async function loadTemplateFoundationScripts(): Promise<void> {
    for (const source of templateFoundationScriptSources) {
        await loadScript(source);
    }
}

export const templatePluginBootstrap = {
    loadFoundationScripts: loadTemplateFoundationScripts,
    scripts: templateScriptSources,
};
