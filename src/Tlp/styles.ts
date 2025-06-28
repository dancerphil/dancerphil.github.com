const pc = window.innerWidth > window.innerHeight;

export const codeFamily = 'Consolas, Menlo, Courier, monospace';

export const responsive = {
    fontSize: pc ? '16px' : 'clamp(16px, 3vmin, 30px)',
    fontSizeSmall: pc ? '14px' : 'clamp(14px, 2.4vmin, 24px)',
    keyWidth: 'clamp(15vmin, calc(50vw - 400px), 200px)',
    contentPadding: '20px 0 20px clamp(20px, calc(50vw - 400px), 200px)',
    contentWidth: 'clamp(450px, calc(100vw - 400px), 800px)',
};
