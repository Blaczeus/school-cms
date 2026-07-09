import { listen } from '../helpers/events';
import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

function updateShapeMove(event: MouseEvent): void {
    const xPercent = event.clientX / window.innerWidth - 0.5;
    const yPercent = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll<HTMLElement>('.shape-move img').forEach((shape, index) => {
        const multiplier = 40 + index * 2;

        shape.style.transform = `translate(${xPercent * multiplier}px, ${yPercent * multiplier}px)`;
    });
}

export function createCursorPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'cursor',
        init: () => {
            const cleanup = listen(document, 'mousemove', updateShapeMove);

            return (() => {
                cleanup();
                document.querySelectorAll<HTMLElement>('.shape-move img').forEach((shape) => {
                    shape.style.transform = '';
                });
            }) satisfies Cleanup;
        },
    };
}
