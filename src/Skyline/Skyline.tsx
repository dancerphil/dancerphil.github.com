import {ThreeCanvas} from '@/Skyline/ThreeCanvas';
import {css} from '@emotion/css';

const containerCss = css`
    width: 100vw;
    height: 100vh;
`;

export const Skyline = () => {
    return (
        <div className={containerCss}>
            <ThreeCanvas />
        </div>
    );
};
