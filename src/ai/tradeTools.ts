import {tool} from 'ai';
import {z} from 'zod';

interface ParamsWeather {
    location: string;
}

interface ResultWeather {
    location: string;
    temperature: number;
}

const weather = tool<ParamsWeather, ResultWeather>({
    description: 'Get the weather in a location',
    inputSchema: z.object({
        location: z.string().describe('The location to get the weather for'),
    }),
    execute: async ({location}) => {
        console.log(`🔧 执行天气工具，位置: ${location}`);
        return ({
            location,
            temperature: 72 + Math.floor(Math.random() * 21) - 10,
        });
    },
});

export const tradeTools = {
    weather,
};
