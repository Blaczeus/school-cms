import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

type MagnificPopupOptions = {
    gallery?: {
        enabled: boolean;
    };
    type: 'iframe' | 'image';
};

type JQueryCollection = {
    length: number;
    magnificPopup?: (optionsOrMethod: MagnificPopupOptions | 'destroy') => JQueryCollection;
};

type JQueryGlobal = ((selector: string) => JQueryCollection) & {
    fn?: {
        magnificPopup?: unknown;
    };
    magnificPopup?: {
        close: () => void;
    };
};

export function createMagnificPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'magnific-popup',
        init: () => {
            const $ = (window as Window & { jQuery?: JQueryGlobal }).jQuery;

            if (!$?.fn?.magnificPopup) {
                return;
            }

            const popupImages = $('.popup-image');
            const popupVideos = $('.popup-video');

            if (popupImages.length > 0) {
                popupImages.magnificPopup?.({
                    gallery: {
                        enabled: true,
                    },
                    type: 'image',
                });
            }

            if (popupVideos.length > 0) {
                popupVideos.magnificPopup?.({
                    type: 'iframe',
                });
            }

            return (() => {
                $.magnificPopup?.close();
                popupImages.magnificPopup?.('destroy');
                popupVideos.magnificPopup?.('destroy');
            }) satisfies Cleanup;
        },
    };
}
