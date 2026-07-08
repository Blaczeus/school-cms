import { listen } from '../helpers/events';
import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

type LenisInstance = {
    destroy?: () => void;
    raf: (time: number) => void;
};

type LenisConstructor = new (options: Record<string, unknown>) => LenisInstance;

declare global {
    interface Window {
        Lenis?: LenisConstructor;
    }
}

export function createScrollPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'smooth-scroll',
        init: () => {
            document.body.classList.add('rs-smoother-yes');

            const cleanups: Cleanup[] = [
                () => document.body.classList.remove('rs-smoother-yes'),
            ];

            if (!window.Lenis) {
                return () => cleanups.forEach((cleanup) => cleanup());
            }

            const lenis = new window.Lenis({
                duration: 1.8,
                lerp: 0.05,
                smoothWheel: true,
                wheelMultiplier: 1.2,
            });

            let animationFrame = 0;
            const raf = (time: number) => {
                lenis.raf(time);
                animationFrame = window.requestAnimationFrame(raf);
            };

            animationFrame = window.requestAnimationFrame(raf);
            cleanups.push(() => window.cancelAnimationFrame(animationFrame));
            cleanups.push(() => lenis.destroy?.());

            document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((element) => {
                cleanups.push(
                    listen(element, 'click', (event) => {
                        event.preventDefault();

                        const id = element.getAttribute('href')?.slice(1);

                        if (!id) {
                            return;
                        }

                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }),
                );
            });

            return () => cleanups.forEach((cleanup) => cleanup());
        },
    };
}
