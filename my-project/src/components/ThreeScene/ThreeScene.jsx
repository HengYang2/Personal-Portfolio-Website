import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ACESFilmicToneMapping, NoToneMapping, SRGBColorSpace, sRGBEncoding } from 'three';

export default function ThreeScene() {
 
    function Box() {
        const boxRef = useRef();
    
        useFrame(() => {
          if (!boxRef.current) {
            return;
          }
          boxRef.current.rotation.x += 0.01;
          boxRef.current.rotation.y += 0.01;
        });
    
        return (
          <mesh ref={boxRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        )
      }

    return (
        <Canvas gl={ {toneMapping: ACESFilmicToneMapping, outputColorSpace: SRGBColorSpace} }>
            <pointLight position={[5,5,5] }/>
            <ambientLight intensity={10} />
            <Box />
        </Canvas>
    )
}
