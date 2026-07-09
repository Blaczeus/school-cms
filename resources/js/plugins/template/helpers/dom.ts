const loadedScripts = new Map<string, Promise<void>>();

export function loadScript(src: string): Promise<void> {
    if (typeof document === 'undefined') {
        return Promise.resolve();
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[data-template-script="${src}"]`);

    if (existing) {
        return Promise.resolve();
    }

    const loading = loadedScripts.get(src);

    if (loading) {
        return loading;
    }

    const promise = new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');

        script.src = src;
        script.async = false;
        script.defer = true;
        script.dataset.templateScript = src;
        script.addEventListener(
            'load',
            () => {
                resolve();
            },
            { once: true },
        );

        script.addEventListener(
            'error',
            () => {
                loadedScripts.delete(src);
                reject(new Error(`Failed to load ${src}`));
            },
            { once: true },
        );
        document.head.appendChild(script);
    });

    loadedScripts.set(src, promise);

    return promise;
}

export function setDataAttributeStyles(root: ParentNode = document): void {
    root.querySelectorAll<HTMLElement>('[data-background]').forEach((element) => {
        const background = element.dataset.background;

        if (background) {
            element.style.backgroundImage = `url( ${background}  )`;
        }
    });

    root.querySelectorAll<HTMLElement>('[data-width]').forEach((element) => {
        const width = element.dataset.width;

        if (width) {
            element.style.width = width;
        }
    });

    root.querySelectorAll<HTMLElement>('[data-bg-color]').forEach((element) => {
        const color = element.dataset.bgColor;

        if (color) {
            element.style.backgroundColor = color;
        }
    });
}

export const templateDomHelpers = {
    loadScript,
    setDataAttributeStyles,
};
