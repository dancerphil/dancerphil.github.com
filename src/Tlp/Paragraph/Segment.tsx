import {useMemo} from 'react';
import {Custom} from './Custom';
import {Footnote, Katex, KaiTi, Emphasis, Centered} from './Components';

interface SegmentProps {
    dataKey: string;
    node: ChildNode;
}

export const Segment = ({dataKey, node}: SegmentProps) => {
    const {nodeName, textContent, childNodes} = node;
    return useMemo(
        () => {
            const children = [...childNodes].map((child, index) => (
                <Segment key={index} dataKey={dataKey} node={child} />
            ));
            switch (nodeName) {
                case 'emphasis':
                    return <Emphasis>{textContent}</Emphasis>;
                case 'footnote':
                    return <Footnote>{textContent}</Footnote>;
                case 'katex':
                    return <Katex>{textContent}</Katex>;
                case 'kaiti':
                    return <KaiTi>{textContent}</KaiTi>;
                case 'centered':
                    return <Centered>{children}</Centered>;
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
