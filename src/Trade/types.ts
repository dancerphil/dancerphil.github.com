import {Message as AiMessage} from 'ai';

export type TaskType = 'CHAT' | 'ANALYSIS' | 'DEBATE' | 'DECISION';

export interface Task {
    type: TaskType;
}

export interface Agent {
    name: string;
    speak: (task: Task) => Promise<void>;
}

// 自定义的结构，方便渲染，也方便转换成 ai 对话历史
export interface Message {
    loading: boolean;
    role: string;
    content: string;
}

export type ConversationMessage = Omit<AiMessage, 'id'>;
