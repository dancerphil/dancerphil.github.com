import {useEffect, useRef} from 'react';
import {Tooltip} from 'antd';
import {render} from 'katex';
import 'katex/dist/katex.css';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {css} from '@emotion/css';
import {useMemo} from 'react';
import {Custom} from './Custom';
import styled from '@emotion/styled';

const dot = css`
    position: relative;

    ::after {
        content: '.';
        position: absolute;
        bottom: 0.15em;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 1.4em;
        color: #333;
        line-height: 0;
    }
`;

interface ChildrenProps {
    children: string;
}

export const Emphasis = ({children}: ChildrenProps) => {
    return children.split('').map((char, index) => (
        <span key={index} className={dot}>
            {char}
        </span>
    ));
};

const iconCss = css`
    font-size: 12px;
    color: #999;
    cursor: help;
    margin: 0 3px 0 1px;
`;

export const Footnote = ({children}: ChildrenProps) => {
    return (
        <Tooltip title={children}>
            <sup><QuestionCircleOutlined className={iconCss} /></sup>
        </Tooltip>
    );
};

export const Katex = ({children}: ChildrenProps) => {
    const ref = useRef(null);

    useEffect(
        () => {
            if (ref.current) {
                try {
                    render(children, ref.current, {throwOnError: false});
                }
                catch (error) {
                    console.error('Katex rendering error:', error);
                }
            }
        },
        [children],
    );

    return <span ref={ref} />;
};

export const KaiTi = styled.span`
    font-family: 'KaiTi', '楷体', 'STKaiti', '华文楷体', 'SimKai', serif;
    font-size: 17px;
`;

interface SegmentProps {
    dataKey: string;
    node: ChildNode;
}

export const Segment = ({dataKey, node}: SegmentProps) => {
    const {nodeName, textContent} = node;
    return useMemo(
        () => {
            switch (nodeName) {
                case 'emphasis':
                    return <Emphasis>{textContent}</Emphasis>;
                case 'footnote':
                    return <Footnote>{textContent}</Footnote>;
                case 'katex':
                    return <Katex>{textContent}</Katex>;
                case 'kaiti':
                    return <KaiTi>{textContent}</KaiTi>;
                case 'custom':
                    return <Custom dataKey={dataKey} />;
                case '#text':
                    return <>{textContent}</>;
                default:
                    console.warn(`Unknown node type: ${nodeName}`);
                    return <>{textContent}</>;
            }
        },
        [dataKey, nodeName, textContent],
    );
};
