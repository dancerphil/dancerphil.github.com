import {StreamTextResult, ToolSet, Message} from 'ai';
import {Task} from './types';

export abstract class BaseAgent {
    // 通用
    conversation: Message[] = [];

    // 智能体
    abstract name: string;
    abstract system: string;
    abstract work(task: Task): StreamTextResult<ToolSet, never>;
}
