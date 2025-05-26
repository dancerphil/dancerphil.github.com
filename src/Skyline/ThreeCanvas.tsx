// @ts-nocheck
import {Canvas, useThree} from '@react-three/fiber';
import {OrbitControls, Text3D} from '@react-three/drei';
import {getBoxData} from './getBoxData';
import {TrapezoidalPrism} from './Trapezoid';

const boxSize = 1; // 假设每个Box的基础大小为1单位

const boxData = getBoxData();

const Boxes = () => {
    return (
        <>
            {boxData.map(({height, xPos, zPos, color}, index) => {
                return (
                    <mesh
                        key={index}
                        position={[xPos, height / 2, zPos]}
                    >
                        <boxGeometry args={[boxSize, height, boxSize]} />
                        <meshStandardMaterial color={color} />
                    </mesh>
                );
            })}
        </>
    );
};

interface TextContentProps {
    size?: number;
    position?: [number, number, number];
    children: string;
}

const Text = (props: TextContentProps) => {
    return (
        <Text3D
            font="https://unpkg.com/three@0.77.0/examples/fonts/helvetiker_regular.typeface.json" // 替换为你想要的字体链接
            size={1.5}
            position={[-31, 0, 6]}
            rotation={[-Math.PI / 2, 0, 0]}
            {...props}
        />
    );
};

const Controls = () => {
    // const orbitRef = useRef();
    const {camera, gl} = useThree();

    return (
        <OrbitControls
            // ref={orbitRef}
            args={[camera, gl.domElement]}
            minDistance={40}
            maxDistance={100}
            enablePan
            enableZoom
            enableRotate
        />
    );
};

export const ThreeCanvas = () => {
    return (
        <Canvas color="black">
            <Controls />
            <ambientLight intensity={1.5} />
            <pointLight castShadow position={[0, 20, 40]} decay={0} distance={0} intensity={1.5} />
            <Boxes />
            <Text position={[-31, 0, 6]}>zhangcong06@icode</Text>
            <Text position={[26, 0, 6]}>2023</Text>
            <TrapezoidalPrism />
        </Canvas>
    );
};
