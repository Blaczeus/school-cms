export type Cleanup = () => void;

export function listen<K extends keyof WindowEventMap>(
    target: Window,
    type: K,
    listener: (event: WindowEventMap[K]) => void,
    options?: AddEventListenerOptions,
): Cleanup;

export function listen<K extends keyof DocumentEventMap>(
    target: Document,
    type: K,
    listener: (event: DocumentEventMap[K]) => void,
    options?: AddEventListenerOptions,
): Cleanup;

export function listen<K extends keyof HTMLElementEventMap>(
    target: HTMLElement,
    type: K,
    listener: (event: HTMLElementEventMap[K]) => void,
    options?: AddEventListenerOptions,
): Cleanup;

export function listen(
    target: EventTarget,
    type: string,
    listener: EventListener,
    options?: AddEventListenerOptions,
): Cleanup {
    target.addEventListener(type, listener, options);

    return () => target.removeEventListener(type, listener, options);
}

export function cleanupAll(cleanups: Cleanup[]): void {
    while (cleanups.length > 0) {
        cleanups.pop()?.();
    }
}

export const templateEventHelpers = {
    cleanupAll,
    listen,
};
