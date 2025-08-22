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
        return streamText({
            model: deepseek,
            system,
            messages: [{role: 'system', content: taskSystem ?? system}, ...getConversation(name)],
        });
    };
    const speak = async (task: Task) => {
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
