export type TaskType = 'CHAT' | 'ANALYSIS' | 'DEBATE' | 'DECISION';

export interface Task {
    type: TaskType;
}

export interface Agent {
    name: string;
    speak: (task: Task) => Promise<void>;
}
