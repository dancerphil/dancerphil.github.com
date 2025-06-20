import {TruthTable} from './TruthTable';
import styled from '@emotion/styled';
import {CustomCube, CustomSight} from './CustomSvg';

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 20px;
    max-width: 1200px;
`;

const Container = styled.div`
    font-size: 13px;
    font-family: Consolas, Menlo, Courier, monospace;
    padding: 20px;
    max-width: 1200px;
`;

const values431_1 = [
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

const values431_2 = [
    'p', 'q',
    'W', 'W',
    'F', 'W',
    'W', 'F',
    'F', 'F',
];

const values431_3 = [
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

const values5101 = [
    '（WWWW）（p，q）重言式（如果 p 则 p，且如果 q 则 q。）（p⊃p·q⊃q）',
    '（FWWW）（p，q）用话来说：非 p 且 q 两者。（～（p·q）',
    '（WFWW）（p，q）用话来说：如果 q 则 p。（q⊃p）',
    '（WWFW）（p，q）用话来说：如果 p 则 q。（p⊃q）',
    '（WWWF）（p，q）用话来说：p 或 q。（p V q）',
    '（FFWW）（p，q）用话来说：非 q。（～q）',
    '（FWFW）（p，q）用话来说：非 p。（～p）',
    '（FWWF）（p，q）用话来说：p 或 q，但非 p 且 q。（p·～q：V：q·～p）',
    '（WFFW）（p，q）用话来说：如果 p 则 q，且如果 q 则 p。（p≡q）',
    '（WFWF）（p，q）用话来说：p',
    '（WWFF）（p，q）用话来说：q',
    '（FFFW）（p，q）用话来说：既非 p 亦非 q。（～p·～q 或 p|q）',
    '（FFWF）（p，q）用话来说：p 且非 q。（p·～q）',
    '（FWFF）（p，q）用话来说：q 且非 p。（q·～p）',
    '（WFFF）（p，q）用话来说：p 且 q。（p·q）',
    '（FFFF）（p，q）矛盾式（p 且非 p，和 q 且非 q）（p·～p·q·～q）',
];

interface Props {
    dataKey: string;
}

export const Custom = ({dataKey}: Props) => {
    if (dataKey === '4.31') {
        return (
            <FlexContainer>
                <TruthTable col={3} values={values431_1} />
                ，
                <TruthTable col={2} values={values431_2} />
                ，
                <TruthTable col={1} values={values431_3} />
                。
            </FlexContainer>
        );
    }
    if (dataKey === '4.442') {
        return <FlexContainer><TruthTable col={3} values={values4442} /></FlexContainer>;
    }
    if (dataKey === '5.101') {
        return (
            <Container>
                {values5101.map((value, index) => (<div key={index}>{value}</div>))}
            </Container>
        );
    }
    if (dataKey === '5.5423') {
        return <Container><CustomCube /></Container>;
    }
    if (dataKey === '5.6331') {
        return <Container><CustomSight /></Container>;
    }
};
