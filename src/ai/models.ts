import {createFireworks} from '@ai-sdk/fireworks';

const fireworks = createFireworks({
    apiKey: import.meta.env.VITE_FIREWORKS_API_KEY,
});

export const deepseek = fireworks('accounts/fireworks/models/deepseek-v3');
