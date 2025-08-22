import {createMappedRegion, createRegion} from 'region-core';
import {useMemo} from 'react';
import {Message} from 'ai';

type CoreMessage = Omit<Message, 'id'>;

// round = length -1
const currentRoundRegion = createRegion<number>(-1);
const contentRegion = createMappedRegion<number, string>('');

export const getConversation = (roleName: string) => {
    const round = currentRoundRegion.getValue();
    const conversation: CoreMessage[] = [];
    for (let i = 0; i <= round; i++) {
        const text = contentRegion.getValue(i);
        const isCurrent = text.startsWith(`[${roleName}]`);
        conversation.push({role: isCurrent ? 'assistant' : 'user', content: text});
    }
    return conversation;
};

export const useContent = () => {
    const round = currentRoundRegion.useValue();
    const lastContent = contentRegion.useValue(round);
    const content = useMemo(
        () => {
            let content = '';
            for (let i = 0; i < round; i++) {
                content += contentRegion.getValue(i) + '\n\n';
            }
            return content + lastContent;
        },
        [lastContent, round],
    );
    return content;
};

export const appendMessage = (role: string, text?: string) => {
    currentRoundRegion.set(v => v + 1);
    const round = currentRoundRegion.getValue();
    contentRegion.set(round, `[${role}]\n\n${text ?? ''}`); // 每轮对话开始都一样
};

export const appendContent = (textPart: string) => {
    const round = currentRoundRegion.getValue();
    contentRegion.set(round, v => v + textPart);
};

export const hostSpeak = (text: string) => {
    appendMessage('主持人', text);
};

if (import.meta.hot) {
    import.meta.hot.accept(() => {
        currentRoundRegion.reset();
        contentRegion.resetAll();
    });
}
