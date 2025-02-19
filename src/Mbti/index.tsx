import styled from '@emotion/styled';
import {Input} from 'antd';
import {usePersonality, setPersonality} from './region';
import {useMemo} from 'react';
import {getCognition} from '@/Mbti/utils';

const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 0;
`;

const Result = styled.div`
    padding: 20px 12px;
`;

export const Mbti = () => {
    const personality = usePersonality();
    const result = useMemo(
        () => getCognition(personality),
        [personality]
    );
    return (
        <Container>
            <div>
                <Input value={personality} onChange={e => setPersonality(e.target.value)} />
            </div>
            <Result>{result.join(' ')}</Result>
        </Container>
    )
};
