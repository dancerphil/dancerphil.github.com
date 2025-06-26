/* eslint-disable max-lines */
import styled from '@emotion/styled';
import {add, multiply, vertical, Vector} from './vector';

const Label = styled.text`
    font-size: 12px;
    fill: black;
    user-select: none;
`;

const Line = styled.line`
    stroke: #aaa;
    stroke-width: 1.5;
`;

const Edge = styled.line`
    stroke: black;
    stroke-width: 1.5;
`;

interface Bracket {
    start: Vector;
    end: Vector;
    isLeftBracket?: boolean;
    curveScale?: number;
}

const generateBracket = ({start, end, isLeftBracket, curveScale = 0.05}: Bracket) => {
    const vector: Vector = {
        x: end.x - start.x,
        y: end.y - start.y,
    };

    const verticalVector = vertical(vector, isLeftBracket);
    const p: Vector[] = [start];
    const addVectorToPoints = (v: Vector) => {
        const lastPoint = p[p.length - 1];
        const nextPoint = add(lastPoint, v);
        p.push(nextPoint);
    };
    addVectorToPoints(multiply(verticalVector, curveScale));
    addVectorToPoints(multiply(vector, 0.1));
    addVectorToPoints(multiply(vector, 0.3));
    addVectorToPoints(multiply(vector, 0.1));
    addVectorToPoints(multiply(verticalVector, 0.05));
    addVectorToPoints(multiply(verticalVector, -0.05));
    addVectorToPoints(multiply(vector, 0.1));
    addVectorToPoints(multiply(vector, 0.3));
    addVectorToPoints(multiply(vector, 0.1));
    addVectorToPoints(multiply(verticalVector, -curveScale));

    // 生成SVG路径
    const path = `
        M ${p[0].x} ${p[0].y}
        Q ${p[1].x} ${p[1].y} ${p[2].x} ${p[2].y}
        L ${p[3].x} ${p[3].y}
        Q ${p[4].x} ${p[4].y} ${p[5].x} ${p[5].y}
        Q ${p[6].x} ${p[6].y} ${p[7].x} ${p[7].y}
        L ${p[8].x} ${p[8].y}
        Q ${p[9].x} ${p[9].y} ${p[10].x} ${p[10].y}
    `;

    return path.trim();
};

const points_1 = {
    leftW: {x: 30, y: 70},
    left: {x: 50, y: 70},
    leftF: {x: 70, y: 70},
    rightW: {x: 230, y: 70},
    right: {x: 250, y: 70},
    rightF: {x: 270, y: 70},
};

const points_5 = {
    leftW: {x: 30, y: 100},
    left: {x: 50, y: 100},
    leftF: {x: 70, y: 100},
    leftFW: {x: 50, y: 70},
    leftWF: {x: 50, y: 130},
    rightW: {x: 210, y: 100},
    right: {x: 230, y: 100},
    rightF: {x: 250, y: 100},
};

const diff = {
    up: {x: 0, y: -10},
    down: {x: 0, y: 10},
};

const brackets_1 = {
    ww: {
        start: add(points_1.leftW, diff.up),
        end: add(points_1.rightW, diff.up),
        isLeftBracket: false,
    },
    wf: {
        start: add(points_1.leftW, diff.up),
        end: add(points_1.rightF, diff.up),
        isLeftBracket: false,
        curveScale: 0.12,
    },
    fw: {
        start: add(points_1.leftF, diff.down),
        end: add(points_1.rightW, diff.down),
        isLeftBracket: true,
    },
    ff: {
        start: add(points_1.leftF, diff.down),
        end: add(points_1.rightF, diff.down),
        isLeftBracket: true,
        curveScale: 0.12,
    },
};

const brackets_4 = {
    fw: {
        start: add(points_1.leftF, diff.up),
        end: add(points_1.rightW, diff.up),
        isLeftBracket: false,
    },
    ff: {
        start: add(points_1.leftF, diff.up),
        end: add(points_1.rightF, diff.up),
        isLeftBracket: false,
        curveScale: 0.12,
    },
    ww: {
        start: add(points_1.leftW, diff.down),
        end: add(points_1.rightW, diff.down),
        isLeftBracket: true,
    },
    wf: {
        start: add(points_1.leftW, diff.down),
        end: add(points_1.rightF, diff.down),
        isLeftBracket: true,
        curveScale: 0.12,
    },
};

const brackets_5 = {
    fww: {
        start: add(points_5.leftFW, diff.up),
        end: add(points_5.rightW, diff.up),
        isLeftBracket: false,
    },
    fwf: {
        start: add(points_5.leftFW, diff.up),
        end: add(points_5.rightF, diff.up),
        isLeftBracket: false,
        curveScale: 0.12,
    },
    wfw: {
        start: add(points_5.leftWF, diff.down),
        end: add(points_5.rightW, diff.down),
        isLeftBracket: true,
    },
    wff: {
        start: add(points_5.leftWF, diff.down),
        end: add(points_5.rightF, diff.down),
        isLeftBracket: true,
        curveScale: 0.12,
    },
};

export const CustomDiagram1 = () => {
    return (
        <svg viewBox="0 0 300 150" width="300" height="150">
            <path d={generateBracket(brackets_1.ww)} fill="none" stroke="black" strokeWidth="1.5" />
            <path d={generateBracket(brackets_1.wf)} fill="none" stroke="black" strokeWidth="1.5" />
            <path d={generateBracket(brackets_1.fw)} fill="none" stroke="black" strokeWidth="1.5" />
            <path d={generateBracket(brackets_1.ff)} fill="none" stroke="black" strokeWidth="1.5" />
            <Label x={points_1.leftW.x - 4} y={points_1.leftW.y + 4}>W</Label>
            <Label x={points_1.left.x - 4} y={points_1.left.y + 4}>p</Label>
            <Label x={points_1.leftF.x - 4} y={points_1.leftF.y + 4}>F</Label>
            <Label x={points_1.rightW.x - 4} y={points_1.rightW.y + 4}>W</Label>
            <Label x={points_1.right.x - 4} y={points_1.right.y + 4}>q</Label>
            <Label x={points_1.rightF.x - 4} y={points_1.rightF.y + 4}>F</Label>
        </svg>
    );
};

export const CustomDiagram2 = () => {
    return (
        <svg viewBox="0 0 300 150" width="300" height="150">
            <path d={generateBracket(brackets_1.ww)} fill="none" stroke="black" strokeWidth="1.5" />
            <path d={generateBracket(brackets_1.wf)} fill="none" stroke="black" strokeWidth="1.5" />
            <path d={generateBracket(brackets_1.fw)} fill="none" stroke="black" strokeWidth="1.5" />
            <path d={generateBracket(brackets_1.ff)} fill="none" stroke="black" strokeWidth="1.5" />
            <Label x={points_1.leftW.x - 4} y={points_1.leftW.y + 4}>W</Label>
            <Label x={points_1.left.x - 4} y={points_1.left.y + 4}>p</Label>
            <Label x={points_1.leftF.x - 4} y={points_1.leftF.y + 4}>F</Label>
            <Label x={points_1.rightW.x - 4} y={points_1.rightW.y + 4}>W</Label>
            <Label x={points_1.right.x - 4} y={points_1.right.y + 4}>q</Label>
            <Label x={points_1.rightF.x - 4} y={points_1.rightF.y + 4}>F</Label>
            <Line x1={130} y1={41} x2={145} y2={112} />
            <Line x1={150} y1={95} x2={148} y2={112} />
            <Line x1={170} y1={115} x2={155} y2={118} />
            <Label x={140} y={125}>W</Label>
            <Label x={147} y={14}>F</Label>
        </svg>
    );
};

export const CustomDiagram3 = () => {
    return (
        <svg viewBox="0 0 100 200" width="100" height="200">
            <Label x={points_5.leftW.x - 4} y={points_5.leftW.y + 4}>W</Label>
            <Label x={points_5.left.x - 4} y={points_5.left.y + 4}>ξ</Label>
            <Label x={points_5.leftF.x - 4} y={points_5.leftF.y + 4}>F</Label>
            <Label x={points_5.leftFW.x - 4} y={points_5.leftFW.y + 4}>W</Label>
            <Label x={points_5.leftWF.x - 4} y={points_5.leftWF.y + 4}>F</Label>
            <Edge x1={points_5.leftW.x + 4} y1={points_5.leftW.y + 8} x2={points_5.leftWF.x - 4} y2={points_5.leftWF.y - 8} />
            <Edge x1={points_5.leftF.x - 4} y1={points_5.leftF.y - 8} x2={points_5.leftFW.x + 4} y2={points_5.leftFW.y + 8} />
        </svg>
    );
};

export const CustomDiagram4 = () => {
    return (
        <svg viewBox="0 0 300 150" width="300" height="150">
            <path d={generateBracket(brackets_4.ww)} fill="none" stroke="black" strokeWidth="1.5" />
            <path d={generateBracket(brackets_4.wf)} fill="none" stroke="black" strokeWidth="1.5" />
            <path d={generateBracket(brackets_4.fw)} fill="none" stroke="black" strokeWidth="1.5" />
            <path d={generateBracket(brackets_4.ff)} fill="none" stroke="black" strokeWidth="1.5" />
            <Label x={points_1.leftW.x - 4} y={points_1.leftW.y + 4}>W</Label>
            <Label x={points_1.left.x - 4} y={points_1.left.y + 4}>ξ</Label>
            <Label x={points_1.leftF.x - 4} y={points_1.leftF.y + 4}>F</Label>
            <Label x={points_1.rightW.x - 4} y={points_1.rightW.y + 4}>W</Label>
            <Label x={points_1.right.x - 4} y={points_1.right.y + 4}>η</Label>
            <Label x={points_1.rightF.x - 4} y={points_1.rightF.y + 4}>F</Label>
            <Line x1={130} y1={95} x2={125} y2={24} />
            <Line x1={170} y1={26} x2={162} y2={122} />
            <Line x1={150} y1={45} x2={160} y2={122} />
            <Line x1={150} y1={121} x2={157} y2={124} />
            <Label x={120} y={20}>W</Label>
            <Label x={158} y={135}>F</Label>
        </svg>
    );
};

export const CustomDiagram5 = () => {
    return (
        <svg viewBox="0 0 300 200" width="300" height="200">
            <path d={generateBracket(brackets_5.wfw)} fill="none" stroke="black" strokeWidth="1.5" />
            <path d={generateBracket(brackets_5.wff)} fill="none" stroke="black" strokeWidth="1.5" />
            <path d={generateBracket(brackets_5.fww)} fill="none" stroke="black" strokeWidth="1.5" />
            <path d={generateBracket(brackets_5.fwf)} fill="none" stroke="black" strokeWidth="1.5" />
            <Label x={points_5.leftW.x - 4} y={points_5.leftW.y + 4}>W</Label>
            <Label x={points_5.left.x - 4} y={points_5.left.y + 4}>q</Label>
            <Label x={points_5.leftF.x - 4} y={points_5.leftF.y + 4}>F</Label>
            <Label x={points_5.leftFW.x - 4} y={points_5.leftFW.y + 4}>W</Label>
            <Label x={points_5.leftWF.x - 4} y={points_5.leftWF.y + 4}>F</Label>
            <Label x={points_5.rightW.x - 4} y={points_5.rightW.y + 4}>W</Label>
            <Label x={points_5.right.x - 4} y={points_5.right.y + 4}>p</Label>
            <Label x={points_5.rightF.x - 4} y={points_5.rightF.y + 4}>F</Label>
            <Edge x1={points_5.leftW.x + 4} y1={points_5.leftW.y + 8} x2={points_5.leftWF.x - 4} y2={points_5.leftWF.y - 8} />
            <Edge x1={points_5.leftF.x - 4} y1={points_5.leftF.y - 8} x2={points_5.leftFW.x + 4} y2={points_5.leftFW.y + 8} />
            <Line x1={133} y1={60} x2={142} y2={38} />
            <Line x1={155} y1={40} x2={160} y2={166} />
            <Line x1={133} y1={141} x2={154} y2={167} />
            <Line x1={155} y1={159} x2={157} y2={166} />
            <Label x={140} y={35}>W</Label>
            <Label x={170} y={15}>F</Label>
            <Edge x1={153} y1={25} x2={168} y2={15} />
            <Label x={155} y={179}>F</Label>
            <Label x={175} y={199}>W</Label>
            <Edge x1={163} y1={178} x2={174} y2={188} />
        </svg>
    );
};
