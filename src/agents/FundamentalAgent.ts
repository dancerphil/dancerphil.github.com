import {streamText} from 'ai';
import {deepseek} from '@/ai/models';
import {BaseAgent} from './BaseAgent';
import {Task} from './types';

export class FundamentalAgent extends BaseAgent {
    name = '基本面分析师';
    system = `你是一位专业的股票基本面分析师，你将产出一份基本面信息报告以帮助其他交易员进行决策。
请分析过去一周内某公司的基本面信息。撰写一份全面的公司基本面信息报告，涵盖财务文件、公司简介、公司基本财务状况、公司财务历史、内部人士情绪和内部交易，以便全面了解公司的基本面信息，并告知交易员。请确保包含尽可能多的细节。不要简单地说趋势好坏参半，而要提供详细细致的分析和洞见，以帮助交易员做出决策。`;

    work(task: Task) {
        const {system} = this;
        switch (task.type) {
            case 'CHAT':
                return streamText({
                    model: deepseek,
                    system,
                    messages: [{role: 'system', content: '你是一位基本面分析师'}, ...this.conversation, {role: 'user', content: '[主持人]请用一句话聊一聊贵州茅台的基本面'}],
                });
            case 'ANALYSIS':
                return streamText({
                    model: deepseek,
                    system,
                    messages: [{role: 'system', content: system}, ...this.conversation],
                    prompt: `请分析贵州茅台过去一周的基本面信息，并撰写一份全面的公司基本面信息报告。`,
                });
            default: {
                throw new Error(`不支持以下任务：${task.type}`);
            }
        }
    }
}
