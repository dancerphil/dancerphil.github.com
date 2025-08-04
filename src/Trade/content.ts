import {createRegion} from 'region-core';

const contentRegion = createRegion('');

export const useContent = contentRegion.useValue;

export const appendContent = (textPart: string) => contentRegion.set(v => v + textPart);

if (import.meta.hot) {
    import.meta.hot.accept(() => {
        contentRegion.reset();
    });
}
