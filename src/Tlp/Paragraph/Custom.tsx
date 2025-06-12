import {TruthTable} from './TruthTable';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    max-width: 1200px;
`;

const values442_1 = [
    'p', 'q', 'r',
    'W', 'W', 'W',
    'F', 'W', 'W',
    'W', 'F', 'W',
    'W', 'W', 'F',
    'F', 'F', 'W',
    'F', 'W', 'F',
    'W', 'F', 'F',
    'F', 'F', 'F',
];

const values442_2 = [
    'p', 'q',
    'W', 'W',
    'F', 'W',
    'W', 'F',
    'F', 'F',
];

const values442_3 = [
    'p',
    'W',
    'F',
];

const values4442 = [
    'p', 'q', '',
    'W', 'W', 'W',
    'F', 'W', 'W',
    'W', 'F', '',
    'F', 'F', 'W',
];

interface Props {
    dataKey: string;
}

export const Custom = ({dataKey}: Props) => {
    if (dataKey === '4.42') {
        return (
            <Container>
                <TruthTable col={3} values={values442_1} />
                ，
                <TruthTable col={2} values={values442_2} />
                ，
                <TruthTable col={1} values={values442_3} />
                。
            </Container>
        );
    }
    if (dataKey === '4.442') {
        return <Container><TruthTable col={3} values={values4442} /></Container>;
    }
};
