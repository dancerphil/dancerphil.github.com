import {Divider} from 'antd';
import {Header} from './Header';
import {css} from '@emotion/css';
import {ReactNode} from 'react';

const mainCss = css`
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 0;
    
    a {
        color: #1e6bb8;
        text-decoration: none;
        
        :hover {
            text-decoration: underline;
        }
    }
`;

const textCenterCss = css`
    text-align: center;
`;

const titleCss = css`
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 500;
    color: #159957;
`;

interface TitleProps {
    children: ReactNode;
}

const Title = ({children}: TitleProps) => {
    return <div className={titleCss}>{children}</div>;
};

interface AProps {
    href: string;
    children: ReactNode;
}

const A = ({href, children}: AProps) => {
    return <div><a target="_blank" href={href} rel="noreferrer">{children}</a></div>;
};

const descriptionCss = css`
    margin-top: 4px;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.45);
`;

interface DescriptionProps {
    children: ReactNode;
}

const Description = ({children}: DescriptionProps) => {
    return (
        <div className={descriptionCss}>
            {children}
        </div>
    );
};

export const Home = () => {
    return (
        <>
            <Header />
            <div className={mainCss}>
                <Title>目前正在维护的库</Title>
                <A href="https://github.com/regionjs/region-core">region-core</A>
                <Description>react 状态管理</Description>

                <Title>玩具箱页面导航</Title>
                <A href="./coder">coder</A>
                <Description>一个基于 localStorage 的在线的编辑器</Description>
                <A href="./10/once.html">10 随机迷宫</A>
                <A href="./b">base64 背景图</A>
                <A href="https://codepen.io/dancerphil/pen/POdeWy">纯 css 动画：bees</A>
                <A href="https://codepen.io/dissimulate/pen/eZxEBO">窗帘动画 from codepen</A>
                <A href="./d">任务管理</A>
                <A href="https://codepen.io/dancerphil/pen/dRmLza">自动旋转的画图工具</A>
                <a>
                    <del>恋与制作人卡牌收集计算</del>
                </a>
                <A href="./l">逻辑哲学论-维特根斯坦</A>
                <A href="./lrc-generator">
                    <del>歌词生成工具</del>
                </A>
                <A href="./m">material-design v0 颜色分析</A>
                <A href="https://vincentgarreau.com/particles.js/">particles 动画</A>
                <A href="./qrcode-generator">二维码生成</A>
                <A href="./react-children-type">React Children Type</A>
                <A href="https://seenjs.io/demo-2048.html">3d 2048 游戏</A>
                <A href="./spiral-path">单词向量游戏</A>
                <A href="./t">网页天气插件</A>
                <A href="./w">纯 css 动画</A>
                <Divider />
                <div className={textCenterCss}>
                    {'With Love. '}
                    <a target="_blank" href="https://github.com/dancerphil" rel="noreferrer">Dancerphil</a>
                </div>
            </div>
        </>
    );
};
