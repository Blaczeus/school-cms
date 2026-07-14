import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

type JQueryCollection = {
    addClass: (className: string) => JQueryCollection;
    css: (propertyName: string, value: string) => JQueryCollection;
    data: (name: string) => unknown;
    each: (handler: (this: Element, index: number) => void) => JQueryCollection;
    find: (selector: string) => JQueryCollection;
    html: (value: string) => JQueryCollection;
    length: number;
    off: (eventName: string) => JQueryCollection;
    on: (eventName: string, handler: (event?: Event) => void) => JQueryCollection;
    parents: (selector: string) => JQueryCollection;
    removeClass: (className: string) => JQueryCollection;
    slideToggle: (speed?: string | number) => JQueryCollection;
    text: () => string;
    toggleClass: (className: string) => JQueryCollection;
};

type JQueryGlobal = (selector: string | Element) => JQueryCollection;

const namespace = '.schoolCmsTemplateShared';

function initCircleText($: JQueryGlobal): Cleanup | undefined {
    const elements = $('.rs-text-circle');
    const originals: Array<{ element: Element; html: string }> = [];

    if (elements.length === 0) {
        return undefined;
    }

    elements.each(function (this: Element) {
        originals.push({
            element: this,
            html: this.innerHTML,
        });

        const sentence = $(this).text().replace(/\s+/g, ' ').trim();
        let wrappedSentence = '';

        for (let index = 0; index < sentence.length; index += 1) {
            wrappedSentence += `<span>${sentence[index]}</span>`;
        }

        $(this).html(wrappedSentence);

        const rotateDegree = Number($(this).data('rotate-degree')) || 20;

        $(this)
            .find('span')
            .each(function (this: Element, index: number) {
                (this as HTMLElement).style.transform = `rotate(${(index + 1) * rotateDegree}deg)`;
            });
    });

    return () => {
        originals.forEach(({ element, html }) => {
            element.innerHTML = html;
        });
    };
}

function initActiveMenuStates(): Cleanup | undefined {
    const currentPath = window.location.pathname.split('/').pop();
    const addedActiveElements: Element[] = [];
    const addedSidebarElements: Element[] = [];

    document.querySelectorAll<HTMLAnchorElement>('.multipage-menu a').forEach((link) => {
        const linkPath = link.getAttribute('href');

        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            if (!link.classList.contains('active')) {
                link.classList.add('active');
                addedActiveElements.push(link);
            }

            let parentLi = link.parentElement;

            while (parentLi) {
                if (parentLi.tagName === 'LI' && !parentLi.classList.contains('active')) {
                    parentLi.classList.add('active');
                    addedActiveElements.push(parentLi);
                }

                parentLi = parentLi.parentElement;
            }
        }
    });

    document.querySelectorAll<HTMLAnchorElement>('.page-sidebar-list a').forEach((link) => {
        const parent = link.closest('li');

        if (!parent) {
            return;
        }

        if (link.getAttribute('href') === currentPath) {
            if (!parent.classList.contains('page-sidebar-active')) {
                parent.classList.add('page-sidebar-active');
                addedSidebarElements.push(parent);
            }
        } else {
            parent.classList.remove('page-sidebar-active');
        }
    });

    if (addedActiveElements.length === 0 && addedSidebarElements.length === 0) {
        return undefined;
    }

    return () => {
        addedActiveElements.forEach((element) => element.classList.remove('active'));
        addedSidebarElements.forEach((element) => element.classList.remove('page-sidebar-active'));
    };
}

function initJQuerySharedBehaviors($: JQueryGlobal): Cleanup {
    $('.social-trigger-btn')
        .off(`click${namespace}`)
        .on(`click${namespace}`, function (this: Element) {
            $(this).parents('.team-info-inner').toggleClass('is-open');
        });

    $('.active-item-wrapper .active-item')
        .off(`mouseenter${namespace}`)
        .on(`mouseenter${namespace}`, function (this: Element) {
            $('.active-item-wrapper .active-item').removeClass('active');
            $(this).addClass('active');
        });

    $('#filter-btn')
        .off(`click${namespace}`)
        .on(`click${namespace}`, () => {
            $('.filter-widget').slideToggle(1000);
        });

    $('.rs-button-wrapper .rs-btn')
        .off(`mouseenter${namespace}`)
        .on(`mouseenter${namespace}`, function (this: Element) {
            $(this).find('.rs-icon').css('animation', 'btnHoverEffect 0.5s');
        })
        .off(`mouseleave${namespace}`)
        .on(`mouseleave${namespace}`, function (this: Element) {
            $(this).find('.rs-icon').css('animation', 'btnHoverEffectReverse 0.5s');
        });

    return () => {
        $('.social-trigger-btn').off(namespace);
        $('.active-item-wrapper .active-item').off(namespace);
        $('#filter-btn').off(namespace);
        $('.rs-button-wrapper .rs-btn').off(namespace);
        $('.rs-button-wrapper .rs-btn .rs-icon').css('animation', '');
    };
}

export function createSharedBehaviorsPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'shared-behaviors',
        init: () => {
            const $ = (window as Window & { jQuery?: JQueryGlobal }).jQuery;
            const cleanups: Cleanup[] = [initActiveMenuStates()].filter(
                (cleanup): cleanup is Cleanup => typeof cleanup === 'function',
            );

            if ($) {
                const circleTextCleanup = initCircleText($);

                if (circleTextCleanup) {
                    cleanups.push(circleTextCleanup);
                }

                cleanups.push(initJQuerySharedBehaviors($));
            }

            return () => cleanups.forEach((cleanup) => cleanup());
        },
    };
}
