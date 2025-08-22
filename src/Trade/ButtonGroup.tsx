import styled from '@emotion/styled';
import {Button} from 'antd';
import {main} from './main';
import {resetConversation} from '@/Trade/conversation';

const Container = styled.div`
    margin-left: 120px;
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
`;

export const ButtonGroup = () => {
    return (
        <Container>
            <Button onClick={main}>开始</Button>
            <Button onClick={resetConversation}>清除</Button>
        </Container>
    );
};
