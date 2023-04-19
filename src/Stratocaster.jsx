import { Environment, OrbitControls, useGLTF, Text } from '@react-three/drei';

export default function Stratocaster() {
    const strat = useGLTF('./JFstratocaster.glb');

    return (
        <>
            <OrbitControls />
            <primitive
                object={strat.scene}
                position={[3, -1.8, 1]}
                rotation={[1.6, 0, 0.8]}
            />

            <group position={[-3, 1, 0]}>
                <Text
                    font={'Arial'}
                    color='black'
                    fontSize={0.5}
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                >
                    FENDER STRATOCASTER
                </Text>

                <Text
                    font={'Arial'}
                    color='black'
                    fontSize={0.3}
                    position={[0.2, -2, 0]}
                    rotation={[0, 0, 0]}
                    maxWidth={6}
                    lineHeight={1}
                >
                    The Fender Stratocaster is the quintessential guitar that has stood the test of time, loved by generations of guitarists for its versatility and iconic design. From Jimi Hendrix and Eric Clapton to John Mayer and Ed Sheeran, the Stratocaster has been the weapon of choice for some of the most legendary guitarists of all time. Its signature sound, playability, and stylish aesthetics make it the perfect guitar for any genre of music.
                </Text>
            </group>

            <Environment preset='warehouse' />
        </>
    );
}
