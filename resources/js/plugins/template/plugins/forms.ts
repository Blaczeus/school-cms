import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

type JQueryAjaxFailure = {
    responseText?: string;
};

type JQueryCollection = {
    addClass: (className: string) => JQueryCollection;
    attr: (name: string) => string | undefined;
    length: number;
    niceSelect?: (method?: 'destroy') => JQueryCollection;
    off: (eventName: string) => JQueryCollection;
    on: (eventName: string, handler: (event: Event) => void) => JQueryCollection;
    removeClass: (className: string) => JQueryCollection;
    serialize: () => string;
    text: (value: string | undefined) => JQueryCollection;
    val: (value: string) => JQueryCollection;
};

type JQueryGlobal = ((selector: string | Element) => JQueryCollection) & {
    ajax?: (options: {
        data: string;
        type: 'POST';
        url: string | undefined;
    }) => {
        done: (handler: (response: string) => void) => {
            fail: (handler: (data: JQueryAjaxFailure) => void) => void;
        };
    };
    fn?: {
        niceSelect?: unknown;
    };
};

type FlatpickrInstance = {
    destroy: () => void;
};

type NoUiSliderInstance = {
    destroy: () => void;
    on: (eventName: 'update', handler: (values: string[], handle: number) => void) => void;
};

type NoUiSliderGlobal = {
    create: (
        element: HTMLElement,
        options: {
            connect: boolean;
            range: {
                max: number;
                min: number;
            };
            start: [number, number];
        },
    ) => void;
};

type SliderElement = HTMLElement & {
    noUiSlider?: NoUiSliderInstance;
};

declare global {
    interface Window {
        flatpickr?: (
            selector: string,
            options: Record<string, unknown>,
        ) => FlatpickrInstance | FlatpickrInstance[];
        noUiSlider?: NoUiSliderGlobal;
    }
}

const namespace = '.schoolCmsTemplateForms';
const vueOwnedSelectSelector = '.public-programme-filter-control';

function initNiceSelect($: JQueryGlobal): Cleanup | undefined {
    if (!$.fn?.niceSelect) {
        return undefined;
    }

    $(vueOwnedSelectSelector).niceSelect?.('destroy');

    const selects = $(`select:not(${vueOwnedSelectSelector})`);

    if (selects.length === 0) {
        return undefined;
    }

    selects.niceSelect?.();

    return () => {
        selects.niceSelect?.('destroy');
    };
}

function collectFlatpickrInstances(instance: FlatpickrInstance | FlatpickrInstance[]): FlatpickrInstance[] {
    return Array.isArray(instance) ? instance : [instance];
}

function initFlatpickr(): Cleanup | undefined {
    if (!window.flatpickr) {
        return undefined;
    }

    const instances: FlatpickrInstance[] = [];

    if (document.getElementById('rs-date')) {
        const instance = window.flatpickr('#rs-date', {
            dateFormat: 'F j, Y',
        });

        instances.push(...collectFlatpickrInstances(instance));
    }

    if (document.getElementById('rs-time')) {
        const instance = window.flatpickr('#rs-time', {
            dateFormat: 'h:i K',
            enableTime: true,
            noCalendar: true,
            time_24hr: false,
        });

        instances.push(...collectFlatpickrInstances(instance));
    }

    if (instances.length === 0) {
        return undefined;
    }

    return () => instances.forEach((instance) => instance.destroy());
}

function initNoUiSlider(): Cleanup | undefined {
    const slider = document.getElementById('slider-range') as SliderElement | null;
    const amount = document.getElementById('amount') as HTMLInputElement | null;

    if (!window.noUiSlider || !slider || !amount) {
        return undefined;
    }

    slider.noUiSlider?.destroy();
    window.noUiSlider.create(slider, {
        connect: true,
        range: {
            max: 2500,
            min: 0,
        },
        start: [0, 1100],
    });

    slider.noUiSlider?.on('update', (values) => {
        amount.value = `$${values[0]} - $${values[1]}`;
    });

    return () => {
        slider.noUiSlider?.destroy();
    };
}

function initAjaxForms($: JQueryGlobal): Cleanup | undefined {
    const form = $('#contact-form');

    if (!$.ajax || form.length === 0) {
        return undefined;
    }

    const formMessages = $('#form-messages');

    form.off('submit').on(`submit${namespace}`, (event) => {
        event.preventDefault();

        const formData = form.serialize();

        $.ajax?.({
            data: formData,
            type: 'POST',
            url: form.attr('action'),
        })
            .done((response) => {
                formMessages.removeClass('error');
                formMessages.addClass('success');
                formMessages.text(response);
                $('#name, #email, #message').val('');

                if ($('#phone').length) {
                    $('#phone').val('');
                }

                if ($('#website').length) {
                    $('#website').val('');
                }

                if ($('#subject').length) {
                    $('#subject').val('');
                }

                if ($('#date').length) {
                    $('#date').val('');
                }

                if ($('#time').length) {
                    $('#time').val('');
                }
            })
            .fail((data) => {
                formMessages.removeClass('success');
                formMessages.addClass('error');

                if (data.responseText !== '') {
                    formMessages.text(data.responseText);
                } else {
                    formMessages.text('Oops! An error occurred and your message could not be sent.');
                }
            });
    });

    return () => {
        form.off(`submit${namespace}`);
    };
}

export function createFormWidgetsPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'form-widgets',
        init: () => {
            const $ = (window as Window & { jQuery?: JQueryGlobal }).jQuery;

            if (!$) {
                return;
            }

            const cleanups = [
                initNiceSelect($),
                initFlatpickr(),
                initNoUiSlider(),
                initAjaxForms($),
            ].filter((cleanup): cleanup is Cleanup => typeof cleanup === 'function');

            return () => cleanups.forEach((cleanup) => cleanup());
        },
    };
}
