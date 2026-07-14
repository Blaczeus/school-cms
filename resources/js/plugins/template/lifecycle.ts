import {
    loadTemplateAnimationScripts,
    loadTemplateFoundationScripts,
    loadTemplateFormWidgetScripts,
    loadTemplateMediaWidgetScripts,
    loadTemplatePageWidgetScripts,
} from './bootstrap';
import { setDataAttributeStyles } from './helpers/dom';
import { cleanupAll } from './helpers/events';
import type { Cleanup } from './helpers/events';
import { createAnimationPlugin } from './plugins/animations';
import { createBackToTopPlugin } from './plugins/back-to-top';
import { createCounterPlugin } from './plugins/counter';
import { createCursorPlugin } from './plugins/cursor';
import { createFormWidgetsPlugin } from './plugins/forms';
import { createIsotopePlugin } from './plugins/isotope';
import { createJarallaxPlugin } from './plugins/jarallax';
import { createMagnificPlugin } from './plugins/magnific';
import { createMenuPlugin } from './plugins/menu';
import { createPreloaderPlugin } from './plugins/preloader';
import { createScrollPlugin } from './plugins/scroll';
import { createSharedBehaviorsPlugin } from './plugins/shared-behaviors';
import { createStickyHeaderPlugin } from './plugins/sticky-header';
import { createSwiperPlugin } from './plugins/swiper';
import { createUtilitiesPlugin } from './plugins/utilities';

export type TemplateLifecycleContext = {
    root: ParentNode;
};

export type TemplateLifecyclePlugin = {
    name: string;
    init: (context: TemplateLifecycleContext) => Cleanup | Promise<Cleanup | void> | void;
};

const foundationPlugins: TemplateLifecyclePlugin[] = [
    createUtilitiesPlugin(),
    createPreloaderPlugin(),
    createCursorPlugin(),
    createMenuPlugin(),
    createStickyHeaderPlugin(),
    createBackToTopPlugin(),
    createScrollPlugin(),
    createSharedBehaviorsPlugin(),
    createSwiperPlugin(),
    createAnimationPlugin(),
    createMagnificPlugin(),
    createJarallaxPlugin(),
    createIsotopePlugin(),
    createCounterPlugin(),
    createFormWidgetsPlugin(),
];

let activeCleanups: Cleanup[] = [];
let initialized = false;

export async function initializeTemplateLifecycle(root: ParentNode = document): Promise<void> {
    if (typeof document === 'undefined') {
        return;
    }

    await loadTemplateFoundationScripts();
    cleanupTemplateLifecycle();
    setDataAttributeStyles(root);

    await loadTemplatePageWidgetScripts();
    await loadTemplateAnimationScripts();
    await loadTemplateMediaWidgetScripts();
    await loadTemplateFormWidgetScripts();

    activeCleanups = [];

    for (const plugin of foundationPlugins) {
        const cleanup = await plugin.init({ root });

        if (typeof cleanup === 'function') {
            activeCleanups.push(cleanup);
        }
    }

    initialized = true;
}

export async function reinitializeTemplateLifecycle(root: ParentNode = document): Promise<void> {
    await initializeTemplateLifecycle(root);
}

export function cleanupTemplateLifecycle(): void {
    cleanupAll(activeCleanups);
    activeCleanups = [];
    initialized = false;
}

export const templatePluginLifecycle = {
    cleanup: cleanupTemplateLifecycle,
    initialize: initializeTemplateLifecycle,
    plugins: foundationPlugins.map((plugin) => plugin.name),
    reinitialize: reinitializeTemplateLifecycle,
    get initialized() {
        return initialized;
    },
};
