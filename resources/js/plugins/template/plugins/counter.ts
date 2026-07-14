import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

type JQueryCollection = {
    appear?: (handler: (event?: Event) => void) => JQueryCollection;
    attr: (name: string) => string | undefined;
    each: (handler: (this: Element) => void) => JQueryCollection;
    html: (value: string | undefined) => JQueryCollection;
    length: number;
    off: (eventName: string) => JQueryCollection;
};

type JQueryGlobal = ((selector: string | Element) => JQueryCollection) & {
    fn?: {
        appear?: {
            checks?: Array<() => void>;
        };
    };
};

export function createCounterPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'odometer',
        init: () => {
            const $ = (window as Window & { jQuery?: JQueryGlobal }).jQuery;

            if (!$?.fn?.appear) {
                return;
            }

            const checks = $.fn.appear.checks;
            const checksStart = checks?.length ?? 0;
            const odometers = $('.odometer');

            if (odometers.length === 0) {
                return;
            }

            odometers.appear?.(() => {
                $('.odometer').each(function (this: Element) {
                    const countNumber = $(this).attr('data-count');

                    $(this).html(countNumber);
                });
            });

            return (() => {
                odometers.off('appear');

                if (checks) {
                    checks.splice(checksStart);
                }
            }) satisfies Cleanup;
        },
    };
}
