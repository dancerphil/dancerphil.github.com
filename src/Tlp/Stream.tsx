import {CloseOutlined} from '@ant-design/icons';
import {Markdown} from '@/components/Markdown';
import {useEffect, useState} from 'react';
import {Button, Skeleton} from 'antd';
import {StreamParams, streamSentence} from '@/Tlp/utils';
import styled from '@emotion/styled';
import {useActiveNodeKey, getNodes, resetActiveNodeKey} from '@/Tlp/region';
import {responsive} from '@/Tlp/styles';

const handleClose = () => {
    resetActiveNodeKey();
    window.location.hash = '';
};

const Sticky = styled.div`
    padding: 20px;
    position: sticky;
    top: 0;
    font-size: ${responsive.fontSizeSmall};
    line-height: 1.5;
    height: 100vh;
    overflow-y: auto;
`;

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
        <Sticky>
            <Button color="default" variant="filled" icon={<CloseOutlined />} onClick={handleClose} />
            {content ? (
                <Markdown>{content}</Markdown>
            ) : <Skeleton active />}
        </Sticky>
    );
};
