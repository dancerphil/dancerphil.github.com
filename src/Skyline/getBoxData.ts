import {getDay, getWeek} from 'date-fns';

const mock: any[] = [];

const getHeight = (data: any) => {
    const {code: {commits = 0}, review: {votes = 0, comments = 0, patchSets = 0}} = data;
    return commits + votes + comments + patchSets;
};

function getWeekAndDayOfWeek(dateString: string) {
    const date = new Date(dateString);

    // 获取年份中的周数
    const weekNumber = getWeek(date);

    // 获取星期几，0 表示星期日，6 表示星期六
    const dayOfWeek = getDay(date);

    return {weekNumber, dayOfWeek};
}

const getColor = (sum: number) => {
    if (sum === 0) {
        return '#fafafa';
    }
    if (sum < 10) {
        return '#adcaff';
    }
    if (sum < 20) {
        return '#5c9aff';
    }
    if (sum < 30) {
        return '#1f68cf';
    }
    return '#073e82';
};

const boxSize = 1; // 假设每个Box的基础大小为1单位
const spacing = 0.2; // Box之间的间距

export const getBoxData = () => {
    return mock.map((data) => {
        const height = getHeight(data);
        const {weekNumber, dayOfWeek} = getWeekAndDayOfWeek(data.date);

        // 根据周索引和天索引计算Box的位置
        const xPos = (weekNumber - 26.5) * (boxSize + spacing);
        const zPos = -(dayOfWeek - 2) * (boxSize + spacing);
        const color = getColor(height);

        return {
            height: height + 0.2,
            date: data.date,
            weekNumber,
            dayOfWeek,
            xPos,
            zPos,
            color,
        };
    });
};
