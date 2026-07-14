import type { Cleanup } from '../helpers/events';
import type { TemplateLifecyclePlugin } from '../lifecycle';

type WowInstance = {
    init: () => void;
};

type WowConstructor = new (options: {
    animateClass: string;
    boxClass: string;
    live: boolean;
    mobile: boolean;
    offset: number;
}) => WowInstance;

type GsapTimeline = {
    clear?: () => void;
};

type GsapGlobal = {
    globalTimeline?: GsapTimeline;
    registerPlugin?: (...plugins: unknown[]) => void;
};

type JQueryGlobal = ((selector: Window) => {
    triggerHandler: (eventName: string) => void;
}) & {
    fn?: Record<string, unknown>;
};

type ScrollTriggerGlobal = {
    clearMatchMedia?: () => void;
    getAll?: () => Array<{ kill: (revert?: boolean) => void }>;
    refresh?: () => void;
};

type SplitTextInstance = {
    revert: () => void;
};

type SplitTextConstructor = {
    new (element: Element, options: Record<string, unknown>): SplitTextInstance;
    create?: (element: Element, options: Record<string, unknown>) => SplitTextInstance;
    default?: SplitTextConstructor;
    prototype: SplitTextInstance;
    version?: string;
};

declare global {
    interface Window {
        gsap?: GsapGlobal;
        jQuery?: JQueryGlobal;
        ScrollTrigger?: ScrollTriggerGlobal;
        SplitText?: SplitTextConstructor;
        WOW?: WowConstructor;
    }
}

const splitTextInstances: SplitTextInstance[] = [];
let originalSplitText: SplitTextConstructor | undefined;

function initWow(): void {
    if (!window.WOW) {
        return;
    }

    const wow = new window.WOW({
        animateClass: 'animated',
        boxClass: 'wow',
        live: true,
        mobile: false,
        offset: 0,
    });

    wow.init();
}

function installTrackedSplitText(): void {
    if (!window.SplitText || originalSplitText) {
        return;
    }

    originalSplitText = window.SplitText;

    const TrackedSplitText = function (element: Element, options: Record<string, unknown>) {
        const instance = new originalSplitText!(element, options);

        splitTextInstances.push(instance);

        return instance;
    } as unknown as SplitTextConstructor;

    TrackedSplitText.prototype = originalSplitText.prototype;
    TrackedSplitText.version = originalSplitText.version;
    TrackedSplitText.default = TrackedSplitText;
    TrackedSplitText.create = (element: Element, options: Record<string, unknown>) => {
        return new TrackedSplitText(element, options);
    };

    window.SplitText = TrackedSplitText;
}

function initGsap(): void {
    if (!window.gsap || !window.ScrollTrigger) {
        return;
    }

    window.gsap.registerPlugin?.(window.ScrollTrigger);

    if (window.SplitText) {
        window.gsap.registerPlugin?.(window.SplitText);
    }

    window.ScrollTrigger.refresh?.();
}

function initRsAnimations(): void {
    window.jQuery?.(window).triggerHandler('load');
}

function cleanupGsap(): void {
    while (splitTextInstances.length > 0) {
        splitTextInstances.pop()?.revert();
    }

    window.ScrollTrigger?.getAll?.().forEach((trigger) => {
        trigger.kill(true);
    });
    window.ScrollTrigger?.clearMatchMedia?.();
    window.gsap?.globalTimeline?.clear?.();
}

export function createAnimationPlugin(): TemplateLifecyclePlugin {
    return {
        name: 'animations',
        init: () => {
            cleanupGsap();
            installTrackedSplitText();
            initWow();
            initGsap();
            initRsAnimations();

            return (() => {
                cleanupGsap();
            }) satisfies Cleanup;
        },
    };
}
