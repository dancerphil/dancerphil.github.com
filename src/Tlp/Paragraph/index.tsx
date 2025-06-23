import styled from '@emotion/styled';
import {Segment} from './Segment';
import {Footnote} from './Components';
import {codeFamily} from '@/Tlp/styles';

const Container = styled.div`
    display: flex;
    padding: 8px 15px;
    border: 1px solid transparent;
    overflow: hidden;

    &.active {
        background-color: #f0f8ff;
        border-color: #d0e7ff;
        border-radius: 4px;
    }
    
    &.related {
        background-color: #f4faff;
    }
    
    &.hide {
        display: none;
    }
    
    &.collapsed {
        border-bottom: 4px solid #f2f2f2;
    }
`;

const Key = styled.div`
    width: clamp(100px, calc(50vw - 300px), 200px);
    font-family: ${codeFamily};
    flex-shrink: 0;
`;

const tip = <Footnote>标记各个命题的十进数表明这些命题的逻辑重要性和在我的叙述中对它们的强调。命题 n.1，n.2，n.3 等等是对命题 n 的评述；命题 n.m1，n.m2 等等是对命题 n.m 的评述；余类推。</Footnote>;

const parser = new DOMParser();

interface Props {
    item: string;
}

export const Paragraph = ({item}: Props) => {
    const [dataKey, content] = item.split('\t');

    const document = parser.parseFromString(`<container>${content}</container>`, 'application/xml');

    return (
        <Container data-key={dataKey ?? '0'}>
            <Key>
                {dataKey}
                {dataKey === '1' && tip}
            </Key>
            <div>{[...document.documentElement.childNodes].map((node, index) => (
                <Segment key={index} node={node} dataKey={dataKey} />
            ))}
            </div>
        </Container>
    );
};
