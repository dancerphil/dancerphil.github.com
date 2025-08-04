import {FundamentalAgent} from '@/agents/FundamentalAgent';
import {appendContent} from './content';

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
    appendContent('[主持人]：现在开始。\n');
    const fundamentalAgent = new FundamentalAgent();
    const {textStream} = fundamentalAgent.work({type: 'CHAT'});

    appendContent(`# ${fundamentalAgent.name}\n\n`);
    for await (const textPart of textStream) {
        appendContent(textPart);
    }
};
