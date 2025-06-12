import styled from '@emotion/styled';

const bias = 4;

const Line = styled.div`
    position: absolute;
    width: 1px;
    background-color: #f2f2f2;
    top: 0;
    bottom: 0;
    z-index: -1;
`;

export const Lines = () => {
    return (
        <>
            {[0, 1, 2, 3, 4, 5].map((i) => {
                const left = bias + i * 20;
                return <Line key={i} style={{left}} />;
            })}
        </>
    );
};
