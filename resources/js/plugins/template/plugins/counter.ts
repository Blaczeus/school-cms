import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

type JQueryCollection = {
    appear?: (handler: (event?: Event) => void) => JQueryCollection;
    attr: (name: string) => string | undefined;
    data: (name: string, value?: unknown) => JQueryCollection | unknown;
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

            odometers.each(function (this: Element) {
                const element = $(this);

                element.html('00');
                element.data('templateCounterComplete', false);

                element.appear?.(function (this: Element) {
                    const counter = $(this);

                    if (counter.data('templateCounterComplete')) {
                        return;
                    }

                    const countNumber = $(this).attr('data-count');

                    counter.html(countNumber);
                    counter.data('templateCounterComplete', true);
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
