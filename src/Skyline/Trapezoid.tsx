import * as THREE from 'three';

const topWidth = 68;
const bottomWidth = 70;
const height = 2;
const topDepth = 15;
const bottomDepth = 17;
const color = '#adcaff';

// 自定义梯形台几何体
function TrapezoidalPrismGeometry() {
    const geometry = new THREE.BufferGeometry();

    // 定义顶点
    const vertices = new THREE.Float32BufferAttribute([
        // 上底面
        -topWidth / 2, 0, topDepth / 2,
        topWidth / 2, 0, topDepth / 2,
        -topWidth / 2, 0, -topDepth / 2,
        topWidth / 2, 0, -topDepth / 2,
        // 下底面
        -bottomWidth / 2, -height, bottomDepth / 2,
        bottomWidth / 2, -height, bottomDepth / 2,
        -bottomWidth / 2, -height, -bottomDepth / 2,
        bottomWidth / 2, -height, -bottomDepth / 2,
    ], 3);

    // 定义面（顶点索引）
    const indices = [
        // 前面
        0, 1, 2,
        1, 3, 2,

        // 后面
        4, 6, 5,
        5, 6, 7,

        // 左侧
        0, 2, 4,
        4, 2, 6,

        // 右侧
        1, 5, 3,
        5, 7, 3,

        // 顶部
        2, 3, 6,
        6, 3, 7,

        // 底部
        0, 4, 1,
        1, 4, 5,
    ];

    geometry.setAttribute('position', vertices);
    geometry.setIndex(indices);
    geometry.computeVertexNormals(); // 自动计算法线，用于光照效果

    return geometry;
}

// 梯形台组件
export const TrapezoidalPrism = () => {
    const geometry = TrapezoidalPrismGeometry();
    const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        flatShading: true,
    });
    // @ts-expect-error
    return <mesh geometry={geometry} material={material} />;
};
