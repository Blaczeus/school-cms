import type { TemplateLifecyclePlugin } from '../lifecycle';

type JQueryGlobal = ((selector: string) => JQueryCollection) & {
    fn?: Record<string, unknown>;
};

type JQueryCollection = {
    delay: (duration: number) => JQueryCollection;
    fadeOut: (duration: number) => JQueryCollection;
};

export function createPreloaderPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'preloader',
        init: () => {
            const $ = (window as Window & { jQuery?: JQueryGlobal }).jQuery;

            if ($) {
                $('#pre-load').delay(600).fadeOut(500);
                $('.pre-loader').delay(600).fadeOut(500);
            }
        },
    };
}
