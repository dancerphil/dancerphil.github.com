import styled from '@emotion/styled';
import {size} from '@panda-design/components';

const Label = styled.text`
    font-size: 12px;
    fill: black;
    user-select: none;
`;

const Edge = styled.line`
    stroke: black;
    stroke-width: 1.5;
`;

// 定义立方体的顶点坐标
const front = {
    a1: [50 - 10, 130 + 10], // 左下
    a2: [150 - 10, 130 + 10], // 右下
    a3: [150 - 10, 30 + 10], // 右上
    a4: [50 - 10, 30 + 10], // 左上
};
const back = {
    b1: [80, 100], // 左下
    b2: [180, 100], // 右下
    b3: [180, 0], // 右上
    b4: [80, 0], // 左上
};

export const CustomCube = () => {
    return (
        <svg className={size(200)} viewBox="0 0 200 150">
            {/* 前面的边 */}
            <Edge x1={front.a1[0]} y1={front.a1[1]} x2={front.a2[0]} y2={front.a2[1]} />
            <Edge x1={front.a2[0]} y1={front.a2[1]} x2={front.a3[0]} y2={front.a3[1]} />
            <Edge x1={front.a3[0]} y1={front.a3[1]} x2={front.a4[0]} y2={front.a4[1]} />
            <Edge x1={front.a4[0]} y1={front.a4[1]} x2={front.a1[0]} y2={front.a1[1]} />
            {/* 后面的边 */}
            <Edge x1={back.b1[0]} y1={back.b1[1]} x2={back.b2[0]} y2={back.b2[1]} />
            <Edge x1={back.b2[0]} y1={back.b2[1]} x2={back.b3[0]} y2={back.b3[1]} />
            <Edge x1={back.b3[0]} y1={back.b3[1]} x2={back.b4[0]} y2={back.b4[1]} />
            <Edge x1={back.b4[0]} y1={back.b4[1]} x2={back.b1[0]} y2={back.b1[1]} />
            {/* 连接前后的边 */}
            <Edge x1={front.a1[0]} y1={front.a1[1]} x2={back.b1[0]} y2={back.b1[1]} />
            <Edge x1={front.a2[0]} y1={front.a2[1]} x2={back.b2[0]} y2={back.b2[1]} />
            <Edge x1={front.a3[0]} y1={front.a3[1]} x2={back.b3[0]} y2={back.b3[1]} />
            <Edge x1={front.a4[0]} y1={front.a4[1]} x2={back.b4[0]} y2={back.b4[1]} />
            {/* 顶点标签 */}
            <Label x={front.a1[0] - 3} y={front.a1[1] + 12}>a</Label>
            <Label x={front.a2[0] - 3} y={front.a2[1] + 12}>a</Label>
            <Label x={front.a3[0] - 6} y={front.a3[1] - 5}>a</Label>
            <Label x={front.a4[0] - 6} y={front.a4[1] - 5}>a</Label>
            <Label x={back.b1[0] + 1} y={back.b1[1] + 12}>b</Label>
            <Label x={back.b2[0] + 1} y={back.b2[1] + 12}>b</Label>
            <Label x={back.b3[0] - 3} y={back.b3[1] - 5}>b</Label>
            <Label x={back.b4[0] - 3} y={back.b4[1] - 5}>b</Label>
        </svg>
    );
};

const SightSvg = styled.svg`
    width: 300px;
    height: 100px;
`;

const Circle = styled.circle`
    fill: white;
    stroke: black;
    stroke-width: 1.5;
`;

const Curve = styled.path`
    fill: none;
    stroke: black;
    stroke-width: 1.5;
`;

const centerX = 50;
const centerY = 50;
const radius = 4;

// 贝塞尔曲线的控制点
const controlPoint1X = 300;
const controlPoint1Y = -80;
const controlPoint2X = 300;
const controlPoint2Y = 180;

export const CustomSight = () => {
    return (
        <SightSvg viewBox="0 0 300 100">
            <Curve d={`M ${centerX} ${centerY}
                      C ${controlPoint1X} ${controlPoint1Y},
                        ${controlPoint2X} ${controlPoint2Y},
                        ${centerX} ${centerY}`}
            />
            <Circle cx={centerX} cy={centerY} r={radius} />
            <Label x={centerX - 50} y={centerY + 4}>{'眼睛 -'}</Label>
        </SightSvg>
    );
};
