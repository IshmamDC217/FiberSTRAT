import { Environment, OrbitControls, useGLTF, Text, useFont } from '@react-three/drei'

export default function Stratocaster() {
    const strat = useGLTF('./JFstratocaster.glb');
    const font = useFont('Windsong_Regular.json');

    console.log(font)
    return (
        <>
            <OrbitControls />

            <primitive
                object={strat.scene}
                position={[3, -1.8, 1]}
                rotation={[1.6, 0, 0.8]}
            />

            <Environment preset='warehouse' />

        </>
    );
}