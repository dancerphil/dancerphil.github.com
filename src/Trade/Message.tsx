import styled from '@emotion/styled';
import {useMessage} from '@/Trade/conversation';
import {Markdown} from '@/components/Markdown';
import {flex1, width} from '@panda-design/components';
import {css} from '@emotion/css';

const Container = styled.div`
    display: flex;
    padding: 8px 15px;
`;

const agentMessageCss = css`
    background-color: aliceblue;
    
    .markdown-body {
        background-color: aliceblue;
    }
`;

interface Props {
    round: number;
}

export const Message = ({round}: Props) => {
    const {role, content} = useMessage(round);
    return (
        <Container className={role === '主持人' ? undefined : agentMessageCss}>
            <div className={width(120)}>{role}</div>
            <div className={flex1}><Markdown>{content}</Markdown></div>
        </Container>
    );
};
