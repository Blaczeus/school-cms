import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

type JQueryGlobal = ((selector: string | Element | Document | Window) => JQueryCollection) & {
    fn?: {
        meanmenu?: (options: Record<string, unknown>) => JQueryCollection;
    };
};

type JQueryCollection = {
    addClass: (className: string) => JQueryCollection;
    find: (selector: string) => JQueryCollection;
    length: number;
    meanmenu?: (options: Record<string, unknown>) => JQueryCollection;
    off: (eventName: string) => JQueryCollection;
    on: (eventName: string, handler: (event?: Event) => void) => JQueryCollection;
    parents: (selector: string) => JQueryCollection;
    remove: () => JQueryCollection;
    removeClass: (className: string) => JQueryCollection;
    slideToggle: (speed?: string | number) => JQueryCollection;
    toggleClass: (className: string) => JQueryCollection;
};

const namespace = '.schoolCmsTemplate';

export function createMenuPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'navigation',
        init: () => {
            const $ = (window as Window & { jQuery?: JQueryGlobal }).jQuery;

            if (!$) {
                return;
            }

            $('.offcanvas-close,.offcanvas-overlay')
                .off(`click${namespace}`)
                .on(`click${namespace}`, () => {
                    $('.offcanvas-area').removeClass('info-open');
                    $('.offcanvas-overlay').removeClass('overlay-open');
                });

            $('.sidebar-toggle')
                .off(`click${namespace}`)
                .on(`click${namespace}`, () => {
                    $('.offcanvas-area').addClass('info-open');
                    $('.offcanvas-overlay').addClass('overlay-open');
                });

            $('.body-overlay')
                .off(`click${namespace}`)
                .on(`click${namespace}`, () => {
                    $('.offcanvas-area').removeClass('opened');
                    $('.body-overlay').removeClass('opened');
                });

            $('.header-search-icon')
                .off(`click${namespace}`)
                .on(`click${namespace}`, function (this: Element) {
                    $('.rs-stickys-form').slideToggle('show');
                    $(this).toggleClass('icon-close');
                });

            $('.onepage-menu li a')
                .off(`click${namespace}`)
                .on(`click${namespace}`, function (this: Element) {
                    $('.onepage-menu li a.active').removeClass('active');
                    $(this).addClass('active');
                    $('.offcanvas-area').removeClass('info-open');
                    $('.offcanvas-overlay').removeClass('overlay-open');
                });

            $('.mobile-menu').find('.mean-bar').remove();

            if ($.fn?.meanmenu && $('#mobile-menu').length > 0) {
                $('#mobile-menu').meanmenu?.({
                    meanExpand: ['<i class="ri-add-large-line"></i>'],
                    meanMenuContainer: '.mobile-menu',
                    meanScreenWidth: '1399',
                });
            }

            return (() => {
                $('.offcanvas-close,.offcanvas-overlay').off(namespace);
                $('.sidebar-toggle').off(namespace);
                $('.body-overlay').off(namespace);
                $('.header-search-icon').off(namespace);
                $('.onepage-menu li a').off(namespace);
                $('.offcanvas-area').removeClass('info-open opened');
                $('.offcanvas-overlay').removeClass('overlay-open');
                $('.body-overlay').removeClass('opened');
                $('.header-search-icon').removeClass('icon-close');
                $('.mobile-menu').find('.mean-bar').remove();
            }) satisfies Cleanup;
        },
    };
}
