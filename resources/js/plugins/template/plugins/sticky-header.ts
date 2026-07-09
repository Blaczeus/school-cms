import { listen } from '../helpers/events';
import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

function updateStickyHeader(): void {
    document.getElementById('rs-sticky-header')?.classList.toggle('active', window.scrollY > 200);
}

export function createStickyHeaderPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'sticky-header',
        init: () => {
            updateStickyHeader();

            const cleanup = listen(window, 'scroll', updateStickyHeader, { passive: true });

            return (() => {
                cleanup();
                document.getElementById('rs-sticky-header')?.classList.remove('active');
            }) satisfies Cleanup;
        },
    };
}
