const formatTrait = (chat = '', available: string[]) => {
    const upper = chat.toUpperCase();
    if (available.includes(upper)) {
        return upper;
    }
    return 'X';
};

const match = (current: string, target: string) => {
    for (let i = 0; i < current.length; i++) {
        if (target[i] === 'X') {
            // nothing
        }
        else if (current[i] !== target[i]) {
            return false;
        }
    }
    return true;
};

const flipMap: Record<string, string> = {
    I: 'E',
    E: 'I',
    N: 'S',
    S: 'N',
    F: 'T',
    T: 'F',
    J: 'P',
    P: 'J',
    X: 'X',
    i: 'e',
    e: 'i',
    x: 'x',
};

export const getCognition = (personality: string): string[] => {
    const IE = formatTrait(personality[0], ['I', 'E']);
    const NS = formatTrait(personality[1], ['N', 'S']);
    const FT = formatTrait(personality[2], ['F', 'T']);
    const JP = formatTrait(personality[3], ['J', 'P']);
    const _NS = flipMap[NS];
    const _FT = flipMap[FT];
    const format = `${IE}${NS}${FT}${JP}`;

    if (match(format, 'IXXJ')) {
        return [`${NS}i`, `${FT}e`, `${_FT}i`, `${_NS}e`, `${NS}e`, `${FT}i`, `${_FT}e`, `${_NS}i`];
    }
    if (match(format, 'IXXP')) {
        return [`${FT}i`, `${NS}e`, `${_NS}i`, `${_FT}e`, `${FT}e`, `${NS}i`, `${_NS}e`, `${_FT}i`];
    }
    if (match(format, 'EXXJ')) {
        return [`${FT}e`, `${NS}i`, `${_NS}e`, `${_FT}i`, `${FT}i`, `${NS}e`, `${_NS}i`, `${_FT}e`];
    }
    if (match(format, 'EXXP')) {
        return [`${NS}e`, `${FT}i`, `${_FT}e`, `${_NS}i`, `${NS}i`, `${FT}e`, `${_FT}i`, `${_NS}e`];
    }
    return [];
};
