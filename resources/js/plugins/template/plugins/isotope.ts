import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

type ImagesLoadedInstance = {
    on: (eventName: 'always', handler: () => void) => ImagesLoadedInstance;
};

type ImagesLoadedGlobal = (element: Element, handler?: () => void) => ImagesLoadedInstance;

type IsotopeInstance = {
    destroy: () => void;
    layout: () => void;
};

type IsotopeConstructor = new (
    element: Element,
    options: {
        itemSelector: string;
        layoutMode: 'masonry';
        percentPosition: boolean;
    },
) => IsotopeInstance;

declare global {
    interface Window {
        imagesLoaded?: ImagesLoadedGlobal;
        Isotope?: IsotopeConstructor;
    }
}

function initializeIsotope(element: Element): Cleanup | undefined {
    if (!window.Isotope) {
        return undefined;
    }

    const instance = new window.Isotope(element, {
        itemSelector: '.isotope-item, .grid-item, .masonry-item',
        layoutMode: 'masonry',
        percentPosition: true,
    });

    window.imagesLoaded?.(element).on('always', () => {
        instance.layout();
    });

    return () => instance.destroy();
}

export function createIsotopePlugin(): TemplateLifecyclePlugin {
    return {
        name: 'isotope',
        init: ({ root }) => {
            const cleanups = Array.from(
                root.querySelectorAll<Element>('[data-isotope], .isotope-grid, .filter-grid, .masonry-grid'),
            )
                .map((element) => initializeIsotope(element))
                .filter((cleanup): cleanup is Cleanup => typeof cleanup === 'function');

            return () => cleanups.forEach((cleanup) => cleanup());
        },
    };
}
