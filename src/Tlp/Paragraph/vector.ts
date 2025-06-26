export interface Vector {
    x: number;
    y: number;
}

export const add = (v1: Vector, v2: Vector): Vector => {
    return {
        x: v1.x + v2.x,
        y: v1.y + v2.y,
    };
};

export const vertical = (v: Vector, direction: boolean): Vector => {
    if (direction) {
        return {
            x: -v.y,
            y: v.x,
        };
    }
    return {
        x: v.y,
        y: -v.x,
    };
};

export const multiply = (v: Vector, scalar: number): Vector => {
    return {
        x: v.x * scalar,
        y: v.y * scalar,
    };
};
