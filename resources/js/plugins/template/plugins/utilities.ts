import { setDataAttributeStyles } from '../helpers/dom';
import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

export function createUtilitiesPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'template-utilities',
        init: ({ root }) => {
            const html = document.documentElement;
            const body = document.body;
            const previousHtmlBackground = html.style.backgroundColor;
            const previousBodyBackground = body.style.backgroundColor;
            const yearElement = document.getElementById('year');

            html.classList.add('public-template-active');
            body.classList.add('public-template-active');
            html.style.backgroundColor = '#ffffff';
            body.style.backgroundColor = '#ffffff';

            if (yearElement) {
                yearElement.textContent = String(new Date().getFullYear());
            }

            setDataAttributeStyles(root);

            return (() => {
                html.classList.remove('public-template-active');
                body.classList.remove('public-template-active');
                html.style.backgroundColor = previousHtmlBackground;
                body.style.backgroundColor = previousBodyBackground;
            }) satisfies Cleanup;
        },
    };
}
