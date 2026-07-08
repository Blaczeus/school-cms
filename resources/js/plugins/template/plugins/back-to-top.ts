import { listen } from '../helpers/events';
import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

function updateBackToTop(): void {
    const wrapper = document.getElementById('backtotop-wrap');
    const progressCircle = document.querySelector<SVGCircleElement>('.progress-circle');

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
        wrapper.style.display = '';
    } else {
        wrapper.classList.remove('active-progress');
        wrapper.style.display = 'none';
    }

    document.getElementById('rs-sticky-header')?.classList.toggle('active', scrollTop > 200);
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
                        window.scrollTo({ behavior: 'smooth', top: 0 });
                    }),
                );
            }

            return () => cleanups.forEach((cleanup) => cleanup());
        },
    };
}
