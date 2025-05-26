import {createRegion} from 'region-core';

const personalityRegion = createRegion<string>(
    '',
    {withLocalStorageKey: 'mbti/personality'},
);

export const usePersonality = personalityRegion.useValue;

export const setPersonality = personalityRegion.set;
