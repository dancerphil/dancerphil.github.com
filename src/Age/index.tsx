import {useState, useEffect} from 'react';
import {createRegion} from 'region-core';
import {css, injectGlobal} from '@emotion/css';
import {DatePicker} from '@/components/DatePicker';
import {width} from '@panda-design/components';

const birthRegion = createRegion<number>(undefined, {
    withLocalStorageKey: 'birth',
});

injectGlobal`
    body {
        width: 100vw;
        height: 100vh;
        background: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
`;

const containerCss = css`
    font-family: 'Monaco', monospace;
    font-size: 120px;
    color: rgb(255, 255, 255);
`;

export const useLoopRerender = () => {
    const [, setTick] = useState(0);

    useEffect(
        () => {
            const timer = setInterval(() => {
                setTick(tick => tick + 1);
            }, 300);
            return () => clearInterval(timer);
        },
        [],
    );
};

const View = () => {
    useLoopRerender();
    const birth = birthRegion.useValue();
    const diff = ((Date.now() - birth) / 1000 / 31556926).toFixed(7);
    return (
        <div className={containerCss}>
            {diff}
        </div>
    );
};

export const Age = () => {
    const birth = birthRegion.useValue();
    if (!birth) {
        return (
            <DatePicker
                showTime
                className={width(457)}
                onChange={(date) => {
                    if (date) {
                        birthRegion.set(date.getTime());
                    }
                }}
                placeholder="请选择出生日期"
            />
        );
    }
    return <View />;
};
