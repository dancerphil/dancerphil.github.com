import {CloseOutlined} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown-light.css';
import remarkGfm from 'remark-gfm';
import {useEffect, useState} from 'react';
import {Button, Skeleton} from 'antd';
import {StreamParams, streamSentence} from '@/Tlp/utils';
import styled from '@emotion/styled';
import {useActiveNodeKey, getNodes, resetActiveNodeKey} from '@/Tlp/region';

const Container = styled.div`
    padding: 20px;
    position: sticky;
    top: 0;
    font-size: 14px;
    line-height: 1.5;
    height: 100vh;
    overflow-y: auto;
`;

const remarkPlugins = [remarkGfm];

export const Stream = () => {
    const activeNodeKey = useActiveNodeKey();
    const [content, setContent] = useState<string>('');

    useEffect(
        () => {
            const asyncEffect = async () => {
                setContent('');

                const nodes = getNodes();
                const params: StreamParams = {};

                nodes?.forEach((node) => {
                    if (node.dataset.key === activeNodeKey) {
                        params['sentence'] = node.textContent || '';
                    }
                    if (node.dataset.key.startsWith(activeNodeKey) && node.dataset.key !== activeNodeKey) {
                        params['children'] = params['children'] || [];
                        params['children'].push(node.textContent || '');
                    }
                    if (node.dataset.key === activeNodeKey.slice(0, -1)) {
                        params['parent'] = node.textContent || '';
                    }
                });

                const {textStream} = streamSentence(params);

                for await (const textPart of textStream) {
                    setContent(v => v + textPart);
                }
            };

            asyncEffect();
        },
        [activeNodeKey],
    );

    return (
        <Container>
            <Button color="default" variant="filled" icon={<CloseOutlined />} onClick={resetActiveNodeKey} />
            {content ? (
                <ReactMarkdown remarkPlugins={remarkPlugins}>
                    {content}
                </ReactMarkdown>
            ) : <Skeleton active />}
        </Container>
    );
};
