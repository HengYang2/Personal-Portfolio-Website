import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { easing } from 'maath'
import * as TWEEN from '@tweenjs/tween.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

//UseState
// const [moveCamera, setMoveCamera] = useState(false);

//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, -10);






import * as THREE from 'three'
//Import orbit controls to make the scene more interactive:
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


//Scene - like a containter that holds all objects, cameras and lights
const scene = new THREE.Scene();




//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);



const axesHelper = new THREE.AxesHelper(8);
scene.add(axesHelper)

//Target 1: 
const target1 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshStandardMaterial({ color: 0xFF6347, wireframe: false }))
scene.add(target1)

//Target 2: 
const target2 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshStandardMaterial({ color: 0xFF6348, wireframe: false }))
target2.position.set(10, 3, 3)
scene.add(target2)

//Target 3: 
const target3 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshStandardMaterial({ color: 0xFF6349, wireframe: false }))
target3.position.set(-10, 3, 3)
scene.add(target3)

//Room Model:



//Add a light to the scene:
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20)
//Ambient light is like a flood light (it will light up everything in the scene equally):
const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.intensity = 5;

//Add the light to the scene
scene.add(pointLight, ambientLight);

//Light helper shows where the light is and its position:
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);
//Grid helper creates a 2D grid:
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper)



//OrbitControls: This listens to DOM events on the mouse and positions the camera accordingly:
// const controls = new OrbitControls(camera, renderer.domElement)


//Create a game loop that wil re-render everytime the page is re-painted
// function animate() {

//   requestAnimationFrame(animate);
//   // const ref = useRef();
//   // useFrame((state) => {
//   //   const time = state.clock.getElapsedTime();
//   //   time.current += 0.03;
//   //   ref.current.rotation.y += 0.01;
//   //   ref.current.rotation.x += 0.001;
//   //   ref.current.material.uniforms.u_time.value = state.clock.elapsedTime;
//   // });

//   // target3.position.set(target3.position.x, target3.position.y+0.1, target3.position.z);
//   // controls.update();
//   // camera.lookAt( new THREE.Vector3(target1.position.x, target1.position.y, target1.position.z));

//   camera.lookAt(target3.position);
//   renderer.render(scene, camera);
// }

// animate();
//ensure tween is running
const animate = (t) => {
  TWEEN.update(t);
  requestAnimationFrame(animate);
  camera.lookAt(target3.position)
  renderer.render(scene, camera);
}
animate();

//et up basic tweenjs
const tween = new TWEEN.Tween({ x: 30, y: 3, z: 50 })
  .to({ x: 5, y: 4, z: 0 }, 3000)
  .onUpdate((coords) => {
    camera.position.x = coords.x
    camera.position.y = coords.y
    camera.position.z = coords.z
  })
  .easing(TWEEN.Easing.Exponential.InOut)
  .repeat(0)
  .delay(10);
  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tween={tween} />
  </React.StrictMode>,
)