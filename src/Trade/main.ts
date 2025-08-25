import {createFundamentalAgent, createMarketAgent} from './agents';
import {hostSpeak} from './conversation';

export const main = async () => {
    // const result = await generateText({
    //     model: deepseek,
    //     maxSteps: 5,
    //     tools: {
    //         weather: tool({
    //             description: 'Get the weather in a location',
    //             parameters: z.object({
    //                 location: z.string().describe('The location to get the weather for'),
    //             }),
    //             execute: async ({location}) => {
    //                 console.log(`🔧 执行天气工具，位置: ${location}`);
    //                 return ({
    //                     location,
    //                     temperature: 72 + Math.floor(Math.random() * 21) - 10,
    //                 });
    //             },
    //         }),
    //     },
    //     prompt: 'What is the weather in San Francisco?',
    // });
    // console.log('Generated text:', result.text);
    // console.log('Tool calls:', result.toolCalls);
    // console.log('Tool results:', result.toolResults);
    // console.log('Steps:', result.steps); // 查看完整的执行步骤
    // appendContent(result.text);
    hostSpeak('此次会议主要分析贵州茅台交易策略。分为三个阶段：产出分析报告、交易策略讨论、总结。');
    hostSpeak('现在请基本面分析师用一句话聊一聊贵州茅台的基本面。');
    const fundamentalAgent = createFundamentalAgent();
    await fundamentalAgent.speak({type: '闲聊'});
    hostSpeak('现在请基本面分析师分析贵州茅台过去一周的基本面信息，并撰写一份全面的公司基本面信息报告。');
    await fundamentalAgent.speak({type: '分析'});
    hostSpeak('现在请技术分析师用一句话聊一聊贵州茅台的技术面。');
    const marketAgent = createMarketAgent();
    await marketAgent.speak({type: '闲聊'});
    hostSpeak('现在请技术分析师分析贵州茅台过去一周的市场数据，并撰写一份全面的技术分析报告。');
    await marketAgent.speak({type: '分析'});
};
