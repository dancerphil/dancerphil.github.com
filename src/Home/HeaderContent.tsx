import {css} from '@emotion/css';

const linkCss = css`
    font-size: 20px;
    opacity: 0.7;
    color: unset;
    text-decoration: unset;
`;

const titleCss = css`
    position: relative;
    font-size: 50px;
    font-weight: bold;
`;

const subTitleCss = css`
    position: relative;
    margin-top: 20px;
    margin-bottom: 40px;
`;

export const HeaderContent = () => {
    return (
        <>
            <div className={titleCss}>张振衣</div>
            <div className={subTitleCss}>
                <a
                    className={linkCss}
                    href="https://zhihu.com/people/dancerphil"
                >
                    https://zhihu.com/people/dancerphil
                </a>
            </div>
        </>
    );
};
