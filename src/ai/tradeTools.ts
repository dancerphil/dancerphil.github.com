import {tool} from 'ai';
import {z} from 'zod';

export const tradeTools = {
    weather: tool({
        description: 'Get the weather in a location',
        parameters: z.object({
            location: z.string().describe('The location to get the weather for'),
        }),
        execute: async ({location}) => {
            console.log(`🔧 执行天气工具，位置: ${location}`);
            return ({
                location,
                temperature: 72 + Math.floor(Math.random() * 21) - 10,
            });
        },
    }),
};
