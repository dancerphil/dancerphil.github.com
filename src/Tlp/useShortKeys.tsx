import {useShortKey} from 'use-short-key';
import {activeTarget} from './region';

const handleKeydown = (e: KeyboardEvent) => {
    e.preventDefault();
    const target = document.querySelector('.active');
    if (!target) {
        return;
    }
    const type = e.code === 'ArrowUp' ? 'previousElementSibling' : 'nextElementSibling';
    const sibling = target[type];
    if (sibling && sibling.dataset.key) {
        activeTarget(sibling);
        sibling.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
};

export const useShortKeys = () => {
    useShortKey({
        code: 'ArrowUp',
        keydown: handleKeydown,
    });
    useShortKey({
        code: 'ArrowDown',
        keydown: handleKeydown,
    });
};
