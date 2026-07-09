import { listen } from '../helpers/events';
import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

type JQueryGlobal = (selector: string) => {
    animate: (properties: Record<string, number>, duration: number) => void;
    fadeIn: () => void;
    fadeOut: () => void;
};

function updateBackToTop(): void {
    const wrapper = document.getElementById('backtotop-wrap');
    const progressCircle = document.querySelector<SVGCircleElement>('.progress-circle');
    const $ = (window as Window & { jQuery?: JQueryGlobal }).jQuery;

    if (!wrapper) {
        return;
    }

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollableHeight = Math.max(documentHeight - windowHeight, 1);

    if (progressCircle) {
        progressCircle.style.strokeDashoffset = String(113.1 - 113.1 * (scrollTop / scrollableHeight));
    }

    if (scrollTop > 150) {
        wrapper.classList.add('active-progress');

        if ($) {
            $('#backtotop-wrap').fadeIn();
        } else {
            wrapper.style.display = '';
        }
    } else {
        wrapper.classList.remove('active-progress');

        if ($) {
            $('#backtotop-wrap').fadeOut();
        } else {
            wrapper.style.display = 'none';
        }
    }

}

export function createBackToTopPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'back-to-top',
        init: () => {
            const wrapper = document.getElementById('backtotop-wrap');
            const cleanups: Cleanup[] = [];

            updateBackToTop();
            cleanups.push(listen(window, 'scroll', updateBackToTop, { passive: true }));

            if (wrapper) {
                cleanups.push(
                    listen(wrapper, 'click', () => {
                        const $ = (window as Window & { jQuery?: JQueryGlobal }).jQuery;

                        if ($) {
                            $('html,body').animate({ scrollTop: 0 }, 500);

                            return;
                        }

                        window.scrollTo({ behavior: 'smooth', top: 0 });
                    }),
                );
            }

            return () => cleanups.forEach((cleanup) => cleanup());
        },
    };
}
