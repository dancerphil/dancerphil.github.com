import {TruthTable} from './TruthTable';
import styled from '@emotion/styled';
import {CustomCube, CustomSight} from './CustomSvg';
import {CustomDiagram1, CustomDiagram2, CustomDiagram3, CustomDiagram4, CustomDiagram5} from './CustomDiagram';
import {Centered} from './Components';
import {marginLeft} from '@panda-design/components';
import {codeFamily, responsive} from '@/Tlp/styles';

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    padding: ${responsive.contentPadding};
`;

const FlexSecondary = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`;

const ListContainer = styled.div`
    font-size: 13px;
    font-family: ${codeFamily};
    padding: ${responsive.contentPadding};
`;

const FlexCentered = styled.div`
    width: ${responsive.contentWidth};
    display: flex;
    justify-content: center;
`;

const AlignRight = styled.div`
    text-align: right;
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
    index?: string;
}

export const Custom = ({dataKey, index}: Props) => {
    if (dataKey === '4.31') {
        return (
            <FlexContainer>
                <FlexSecondary>
                    <TruthTable col={3} values={values431_1} />
                    ，
                </FlexSecondary>
                <FlexSecondary>
                    <TruthTable col={2} values={values431_2} />
                    ，
                </FlexSecondary>
                <FlexSecondary>
                    <TruthTable col={1} values={values431_3} />
                    。
                </FlexSecondary>
            </FlexContainer>
        );
    }
    if (dataKey === '4.442') {
        return <FlexContainer><TruthTable col={3} values={values4442} /></FlexContainer>;
    }
    if (dataKey === '5.101') {
        return (
            <ListContainer>
                {values5101.map((value, index) => (<div key={index}>{value}</div>))}
            </ListContainer>
        );
    }
    if (dataKey === '5.5423') {
        return <Centered><CustomCube /></Centered>;
    }
    if (dataKey === '5.6331') {
        return <Centered><CustomSight /></Centered>;
    }
    if (dataKey === '6.02') {
        return (
            <FlexCentered>
                <AlignRight>
                    0 ＋ 1 ＝ 1 <span className={marginLeft(20)}>Def.</span><br />
                    0 ＋ 1 ＋ 1 ＝ 2 <span className={marginLeft(20)}>Def.</span><br />
                    0 ＋ 1 ＋ 1 ＋ 1 ＝ 3 <span className={marginLeft(20)}>Def.</span>
                </AlignRight>
            </FlexCentered>
        );
    }
    if (dataKey === '6.1203') {
        if (index === '1') {
            return <Centered><CustomDiagram1 /></Centered>;
        }
        if (index === '2') {
            return <Centered><CustomDiagram2 /></Centered>;
        }
        if (index === '3') {
            return <Centered><CustomDiagram3 /></Centered>;
        }
        if (index === '4') {
            return <Centered><CustomDiagram4 /></Centered>;
        }
        if (index === '5') {
            return <Centered><CustomDiagram5 /></Centered>;
        }
    }
};
