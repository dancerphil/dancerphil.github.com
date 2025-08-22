import {streamText} from 'ai';
import {TaskType, Task, Agent} from './types';
import {appendContent, appendMessage, getConversation} from '@/Trade/conversation';
import {deepseek} from '@/ai/models';

interface Config {
    name: string;
    system: string;
    taskSystemMap: Partial<Record<TaskType, string>>;
}

export const createAgent = (config: Config): Agent => {
    const {name, system, taskSystemMap} = config;
    const work = (task: Task) => {
        const taskSystem = taskSystemMap[task.type];
        const combinedSystem = taskSystem ? `${system}\n\n${taskSystem}` : system;
        return streamText({
            model: deepseek,
            system,
            messages: [{role: 'system', content: combinedSystem}, ...getConversation(name)],
        });
    };
    const speak = async (task: Task) => {
        // 增加 loading 防止第一句出现前的焦虑
        appendMessage(name);
        const {textStream} = work(task);
        for await (const textPart of textStream) {
            appendContent(textPart);
        }
    };
    return {
        name,
        speak,
    };
};

export const createFundamentalAgent = (): Agent => {
    return createAgent({
        name: '基本面分析师',
        system: '你是一位专业的股票基本面分析师。你专注于公司的基本面：分析公司本身优秀与否、确定其内在价值、评估其前景。团队中的其他成员会提供其他方向的专业意见。你主要提供事实，并进行简单的分析，但不提供主观见解。在沟通时保持专业和客观。',
        taskSystemMap: {
            ANALYSIS: '现在你需要产出一份基本面信息报告以帮助其他交易员进行决策。请分析过去一周内某公司的基本面信息。撰写一份全面的公司基本面信息报告，涵盖财务文件、公司简介、公司基本财务状况、公司财务历史、内部人士情绪和内部交易，以便团队可以全面了解公司的基本面信息。请确保包含尽可能多的细节。不要简单地说趋势好坏参半，而要提供详细细致的分析和洞见，以帮助团队做出决策。',
        },
    });
};

export const createMarketAgent = (): Agent => {
    return createAgent({
        name: '技术分析师',
        system: '你是一位专业的股票技术分析师。你专注于股市的技术分析：通过分析技术指标提供决策依据。团队中的其他成员会提供其他方向的专业意见。你主要提供事实，并进行简单的分析，但不提供主观见解。在沟通时保持专业和客观。',
        taskSystemMap: {
            ANALYSIS: '现在你需要产出一份技术分析报告以帮助其他交易员进行决策。请分析过去一周内某股票的市场数据。撰写一份全面的技术分析报告，涵盖技术指标、市场情绪、交易量、价格走势，以便团队可以全面了解该股票技术层面的因素。请确保包含尽可能多的细节。不要简单地说趋势好坏参半，而要提供详细细致的分析和洞见，以帮助团队做出决策。',
        },
    });
};
