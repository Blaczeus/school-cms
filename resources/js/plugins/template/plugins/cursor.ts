import type { TemplateLifecyclePlugin } from '../lifecycle';

export function createCursorPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'cursor',
        init: () => {
            // The template renders cursor markup globally, but the copied global script does not
            // provide a standalone cursor initializer. Shape-follow effects remain deferred.
        },
    };
}
