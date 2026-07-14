import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

type JarallaxGlobal = (
    elements: Element[] | NodeListOf<Element>,
    optionsOrMethod: { speed: number } | 'destroy',
) => void;

declare global {
    interface Window {
        jarallax?: JarallaxGlobal;
    }
}

export function createJarallaxPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'jarallax',
        init: ({ root }) => {
            const elements = root.querySelectorAll<Element>('.jarallax');

            if (!window.jarallax || elements.length === 0) {
                return;
            }

            window.jarallax(elements, {
                speed: 0.5,
            });

            return (() => {
                window.jarallax?.(elements, 'destroy');
            }) satisfies Cleanup;
        },
    };
}
