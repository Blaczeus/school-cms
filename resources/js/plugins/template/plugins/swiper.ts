import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

type SwiperAutoplay = {
    start: () => void;
    stop: () => void;
};

type SwiperInstance = {
    autoplay?: SwiperAutoplay;
    destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void;
};

type SwiperConstructor = new (element: Element, options: Record<string, unknown>) => SwiperInstance;

declare global {
    interface Window {
        Swiper?: SwiperConstructor;
    }
}

type InitializedSwiper = {
    cleanup: Cleanup;
    instance: SwiperInstance;
};

const initializedSwipers = new WeakMap<Element, InitializedSwiper>();

function dataValue(element: HTMLElement, name: string): string | undefined {
    return element.dataset[name];
}

function booleanData(element: HTMLElement, name: string, fallback: boolean): boolean {
    const value = dataValue(element, name);

    if (value === undefined) {
        return fallback;
    }

    return value === 'true';
}

function numberData(element: HTMLElement, name: string, fallback: number): number {
    const value = dataValue(element, name);

    if (value === undefined || value === '') {
        return fallback;
    }

    const parsed = Number(value);

    return Number.isNaN(parsed) ? fallback : parsed;
}

function stringData(element: HTMLElement, name: string, fallback: string): string {
    const value = dataValue(element, name);

    if (value === undefined || value === '' || value === 'false') {
        return fallback;
    }

    return value;
}

function optionalNumberData(element: HTMLElement, name: string): number | undefined {
    const value = dataValue(element, name);

    if (value === undefined || value === '') {
        return undefined;
    }

    const parsed = Number(value);

    return Number.isNaN(parsed) ? undefined : parsed;
}

function destroySwiper(element: Element): void {
    const initialized = initializedSwipers.get(element);

    if (!initialized) {
        return;
    }

    initialized.cleanup();
    initialized.instance.destroy(true, true);
    initializedSwipers.delete(element);
}

function initializeSwiper(element: HTMLElement, index: number): Cleanup | undefined {
    if (!window.Swiper) {
        return undefined;
    }

    destroySwiper(element);

    const noPause = booleanData(element, 'noPause', false);
    const autoplay = booleanData(element, 'autoplay', true);
    const hoverAutoplay = !noPause;
    const loop = booleanData(element, 'loop', true);
    const centeredSlides = booleanData(element, 'centerMode', false);
    const dynamicBullets = booleanData(element, 'dotsDynamic', true);
    const direction = dataValue(element, 'direction') === 'vertical' ? 'vertical' : 'horizontal';
    const enabled = booleanData(element, 'playSlide', true);
    const effect = stringData(element, 'effect', 'slide');
    const grabCursor = booleanData(element, 'grabCursor', false);
    const oneWayMovement = booleanData(element, 'oneWay', false);
    const startAt = numberData(element, 'startAt', 0);
    const slidesPerView = numberData(element, 'item', 1);
    const speed = numberData(element, 'speed', 500);
    const margin = numberData(element, 'margin', booleanData(element, 'noGap', false) ? 0 : 30);
    const autoHeight = booleanData(element, 'autoHeight', false);
    const observer = booleanData(element, 'observer', false);
    const observeParents = booleanData(element, 'observeParents', false);
    const slidesPerViewXl = optionalNumberData(element, 'itemXl');
    const slidesPerViewLg = optionalNumberData(element, 'itemLg');
    const slidesPerViewMd = optionalNumberData(element, 'itemMd');
    const slidesPerViewSm = optionalNumberData(element, 'itemSm');
    const slidesPerViewXs = optionalNumberData(element, 'itemXs');
    const slidesPerViewMobile = optionalNumberData(element, 'itemMobile');
    const marginXl = numberData(element, 'marginXl', margin);
    const marginLg = numberData(element, 'marginLg', marginXl);
    const marginMd = numberData(element, 'marginMd', marginLg);
    const marginSm = numberData(element, 'marginSm', marginMd);
    const marginXs = numberData(element, 'marginXs', marginSm);
    const marginMobile = numberData(element, 'marginMobile', marginXs);
    const wrapper = element.closest('.rs-swiper');
    const previousClass = `rs-nav-prev-${index}`;
    const nextClass = `rs-nav-next-${index}`;
    const paginationClass = `rs-pagination-${index}`;

    wrapper?.querySelectorAll('.swiper-button-prev').forEach((control) => {
        control.classList.add(previousClass);
    });

    wrapper?.querySelectorAll('.swiper-button-next').forEach((control) => {
        control.classList.add(nextClass);
    });

    wrapper?.querySelectorAll('.swiper-pagination').forEach((pagination) => {
        pagination.classList.add(paginationClass);
    });

    const instance = new window.Swiper(element, {
        autoHeight,
        autoplay,
        breakpoints: {
            10: {
                slidesPerView: slidesPerViewMobile ?? 1,
                spaceBetween: marginMobile,
            },
            481: {
                slidesPerView: slidesPerViewXs ?? 1,
                spaceBetween: marginXs,
            },
            576: {
                slidesPerView: slidesPerViewSm ?? 1,
                spaceBetween: marginSm,
            },
            768: {
                slidesPerView: slidesPerViewMd ?? 1,
                spaceBetween: marginMd,
            },
            992: {
                slidesPerView: slidesPerViewLg ?? 1,
                spaceBetween: marginLg,
            },
            1025: {
                slidesPerView: slidesPerViewXl ?? 1,
                spaceBetween: marginXl,
            },
            1201: {
                slidesPerView,
                spaceBetween: margin,
            },
        },
        centeredSlides,
        direction,
        effect,
        enabled,
        fadeEffect: effect === 'fade' ? { crossFade: true } : undefined,
        grabCursor,
        initialSlide: startAt,
        loop,
        navigation: {
            nextEl: `.${previousClass}`,
            prevEl: `.${nextClass}`,
        },
        observeParents,
        observer,
        oneWayMovement,
        pagination: {
            clickable: true,
            dynamicBullets,
            el: `.${paginationClass}`,
        },
        slidesPerView,
        spaceBetween: margin,
        speed,
    });

    const hoverCleanups: Cleanup[] = [];

    if (hoverAutoplay && autoplay && instance.autoplay) {
        const stopAutoplay = () => instance.autoplay?.stop();
        const startAutoplay = () => instance.autoplay?.start();

        element.addEventListener('mouseenter', stopAutoplay);
        element.addEventListener('mouseleave', startAutoplay);
        hoverCleanups.push(() => element.removeEventListener('mouseenter', stopAutoplay));
        hoverCleanups.push(() => element.removeEventListener('mouseleave', startAutoplay));
    }

    const cleanup = () => {
        hoverCleanups.forEach((removeHoverListener) => removeHoverListener());
        wrapper?.querySelectorAll('.swiper-button-prev').forEach((control) => {
            control.classList.remove(previousClass);
        });
        wrapper?.querySelectorAll('.swiper-button-next').forEach((control) => {
            control.classList.remove(nextClass);
        });
        wrapper?.querySelectorAll('.swiper-pagination').forEach((pagination) => {
            pagination.classList.remove(paginationClass);
        });
    };

    initializedSwipers.set(element, { cleanup, instance });

    return () => destroySwiper(element);
}

export function createSwiperPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'swiper',
        init: ({ root }) => {
            const cleanups = Array.from(root.querySelectorAll<HTMLElement>('.rs-swiper .swiper'))
                .map((element, index) => initializeSwiper(element, index))
                .filter((cleanup): cleanup is Cleanup => typeof cleanup === 'function');

            return () => cleanups.forEach((cleanup) => cleanup());
        },
    };
}
