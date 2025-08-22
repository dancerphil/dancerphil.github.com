import {createMappedRegion, createRegion} from 'region-core';
import {Message, ConversationMessage} from './types';

// round = length -1
const currentRoundRegion = createRegion<number>(-1);

const getRound = currentRoundRegion.getValue;

export const useRound = currentRoundRegion.useValue;

const messageRegion = createMappedRegion<number, Message>();

const getMessage = messageRegion.getValue;

export const useMessage = messageRegion.useValue;

export const getConversation = (currentRole: string) => {
    const round = getRound();
    const conversation: ConversationMessage[] = [];
    for (let i = 0; i <= round; i++) {
        const {role, content} = getMessage(i);
        const isCurrent = role === currentRole;
        conversation.push({
            role: isCurrent ? 'assistant' : 'user',
            content: `[${role}]:\n\n${content}`,
        });
    }
    return conversation;
};

export const appendMessage = (role: string, text?: string) => {
    currentRoundRegion.set(v => v + 1);
    const round = currentRoundRegion.getValue();
    messageRegion.set(round, {loading: true, role, content: text ?? ''});
};

export const appendContent = (textPart: string) => {
    const round = currentRoundRegion.getValue();
    messageRegion.set(round, message => ({
        ...message,
        content: message.content + textPart,
    }));
};

export const hostSpeak = (text: string) => {
    appendMessage('主持人', text);
};

export const resetConversation = () => {
    currentRoundRegion.reset();
    messageRegion.resetAll();
};

if (import.meta.hot) {
    import.meta.hot.accept(() => {
        resetConversation();
    });
}
