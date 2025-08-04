import {Button} from 'antd';
import {useContent} from '@/Trade/content';
import {Markdown} from '@/components/Markdown';
import {main} from './main';

export const Trade = () => {
    const content = useContent();
    return (
        <div>
            <Button onClick={main}>开始</Button>
            <Markdown>{content}</Markdown>
        </div>
    );
};
