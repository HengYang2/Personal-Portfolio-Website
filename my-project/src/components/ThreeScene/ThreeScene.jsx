// import { useRef, useState, Suspense } from 'react'
// import { Canvas, useFrame, useThree } from '@react-three/fiber'
// import { useControls } from 'leva'
// import * as THREE from 'three';


// import { OrbitControls, useHelper } from '@react-three/drei';
// // import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import BedRoomToExport from "./BedroomToExport"
// import { BoxGeometry, GridHelper, Material, PerspectiveCamera, PointLightHelper, SpotLightHelper } from 'three';
// import { degToRad } from 'three/src/math/MathUtils';


// export default function ThreeScene() {
//     // function gltfModel() {
//     // const gltf = useLoader(GLTFLoader, 'my-project/src/components/tyrannosarus_rex_free_model/scene.gltf')

//     // }


//     // function Box() {
//     //     const boxRef = useRef();

//     //     useFrame(() => {
//     //       if (!boxRef.current) {
//     //         return;
//     //       }
//     //       boxRef.current.rotation.x += 0.01;
//     //       boxRef.current.rotation.y += 0.01;
//     //     });

//     //     return (
//     //       <mesh ref={boxRef}>
//     //         <boxGeometry args={[1, 1, 1]} />
//     //         <meshStandardMaterial color="orange" />
//     //       </mesh>
//     //     )
//     //   }

//     const { intensity } = useControls({ intensity: { value: 1, min: 0, max: 5 } })
//     // const { playhead } = useControls({ position: [1,1,1] })
//     // const pointLightRef = useRef();
//     // useHelper(pointLightRef, PointLightHelper, 1, 'red')

//     //Create a target for the camera to look at:
//     function Target() {
//         const myMesh = useRef()
//         //Animate the target
//         useFrame(() => {
//             // console.log("Hey, I'm executing every frame!")
//             //Move target
//             myMesh.current.rotation.z  += 0.1;
//             //Move Camera

//         })
//         return (
//             <mesh ref={myMesh} visible position={[1,1,1]} rotation={[Math.PI / 2, 0, 0]} >
//                 <boxGeometry args={[1, 1, 1]} />
//                 <meshStandardMaterial color="hotpink" transparent />
//             </ mesh>

//         )
//     }


//     // const { position } = useControls({ position: { value: 1, min: 0, max: 5 } })
//     // function CameraHelper() {
//     //     const camera = new PerspectiveCamera(60,1,1,20)
//     //     const cameraRef = useRef();
//     //     useFrame(() => {
//     //         cameraRef.current.rotation.z += 1;
      
//     //     })
//     //     return(
//     //         <group position={[6,3,6]}>
//     //                 <cameraHelper ref={cameraRef} args={[camera]}/>
//     //         </group>
    
//     //     )
//     // }

//     function Camer() {
//         return(<orthographicCamera/>)
//     }

//     // function Camera1() {
//     //     const cameraRef = useRef();

//     //     useFrame(() => {
//     //         cameraRef.current.rotation.x += 1;
//     //     })
//     //     return(
//     //         <perspectiveCamera ref={cameraRef}/>
//     //     )
//     // }

//     // useThree(({ camera }) => {
//     //     camera.rotation.set(THREE.MathUtils.degToRad(30), 0, 0);
//     //   });

//     return (
//         <>
//             <Canvas style={{ background: "lightblue" }} camera={args={Camer()}}>
//                 <hemisphereLight args={['#fff', "#333", intensity]} />
//                 <OrbitControls />
//                 <BedRoomToExport />
//                 <gridHelper />
//                 <ambientLight intensity={0.5} />
//                 <Target />
//                 <CameraHelper/>
//                 {/* <Camera1/> */}



//             </Canvas>
//             <div className='absolute w-36 h-36 ml-48 bg-red-400' onClick={() => { setCameraPosition([6, 3, 0]) }}>  hello</div>

//         </>

//     )
// }
