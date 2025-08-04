import {streamText} from 'ai';
import {deepseek} from '@/ai/models';

export interface StreamParams {
    sentence?: string;
    parent?: string;
    prev?: string;
    next?: string;
    children?: string[];
}

export const streamSentence = ({sentence, parent, prev, next, children}: StreamParams) => {
    let context = '';
    if (parent || prev || next || children?.length) {
        context += `上下文包括：\n\n`;
        if (parent) {
            context += `父命题：${parent}\n`;
        }
        if (prev) {
            context += `上一句：${prev}\n`;
        }
        if (next) {
            context += `下一句：${next}\n`;
        }
        if (children && children.length > 0) {
            context += `子命题：${children.join('\n')}\n`;
        }
    }
    const result = streamText({
        model: deepseek,
        system: `你是《逻辑哲学论》的专家，擅长分析维特根斯坦的哲学思想。而我正在阅读《逻辑哲学论》这本书，在阅读的过程中，我对其中的一些语句不太明白，我需要你为我解释这句话的意思。你只需要重点分析这句话本身，不需要进行整体总结。${context}`,
        prompt: `请你分析这句话的意思：${sentence}`,
    });
    return result;
};
