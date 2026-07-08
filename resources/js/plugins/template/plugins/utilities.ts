import { setDataAttributeStyles } from '../helpers/dom';
import type { TemplateLifecyclePlugin } from '../lifecycle';

export function createUtilitiesPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'template-utilities',
        init: ({ root }) => {
            const yearElement = document.getElementById('year');

            if (yearElement) {
                yearElement.textContent = String(new Date().getFullYear());
            }

            setDataAttributeStyles(root);
        },
    };
}
