import { loadTemplateFoundationScripts } from './bootstrap';
import { cleanupAll } from './helpers/events';
import type { Cleanup } from './helpers/events';
import { createBackToTopPlugin } from './plugins/back-to-top';
import { createCursorPlugin } from './plugins/cursor';
import { createMenuPlugin } from './plugins/menu';
import { createPreloaderPlugin } from './plugins/preloader';
import { createScrollPlugin } from './plugins/scroll';
import { createUtilitiesPlugin } from './plugins/utilities';

export type TemplateLifecycleContext = {
    root: ParentNode;
};

export type TemplateLifecyclePlugin = {
    name: string;
    init: (context: TemplateLifecycleContext) => Cleanup | void;
};

const foundationPlugins: TemplateLifecyclePlugin[] = [
    createUtilitiesPlugin(),
    createPreloaderPlugin(),
    createCursorPlugin(),
    createMenuPlugin(),
    createBackToTopPlugin(),
    createScrollPlugin(),
];

let activeCleanups: Cleanup[] = [];
let initialized = false;

export async function initializeTemplateLifecycle(root: ParentNode = document): Promise<void> {
    if (typeof document === 'undefined') {
        return;
    }

    await loadTemplateFoundationScripts();
    cleanupTemplateLifecycle();

    activeCleanups = foundationPlugins
        .map((plugin) => plugin.init({ root }))
        .filter((cleanup): cleanup is Cleanup => typeof cleanup === 'function');

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
