import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { easing } from 'maath'
import * as TWEEN from '@tweenjs/tween.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

//UseState
// const [moveCamera, setMoveCamera] = useState(false);

//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 3.5, 5);






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

renderer.render(scene, camera);



// const axesHelper = new THREE.AxesHelper(8);
// scene.add(axesHelper)

//Target: 
const target = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshStandardMaterial({ color: 0xFF6347, wireframe: false}).transparent = false)
target.position.set(0, 1, 0)
scene.add(target)

// //Target 2: 
// const target2 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshStandardMaterial({ color: 0xFF6349, wireframe: false }))
// target2.position.set(-5, 2.5, -0.5)
// scene.add(target2)

// //Target 3: 
// const target3 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshStandardMaterial({ color: 0xFF6349, wireframe: false }))
// target3.position.set(-5, 2.5, -0.5)
// scene.add(target3)

// //Target 4: 
// const target4 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshStandardMaterial({ color: 0xFF6347, wireframe: false }))
// target4.position.set(-5, 1, 3)
// scene.add(target4)

// //Target 5: 
// const target5 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshStandardMaterial({ color: 0xFF6347, wireframe: false }))
// target5.position.set(0, 1, 0)
// scene.add(target5)




//Add a light to the scene:
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20)
//Ambient light is like a flood light (it will light up everything in the scene equally):
const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.intensity = 3.5;

//Add the light to the scene
scene.add(pointLight, ambientLight);

//Light helper shows where the light is and its position:
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);
//Grid helper creates a 2D grid:
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper)


//Room Model:
const gltfLoader = new GLTFLoader();
gltfLoader.load('../public/bedroomToExport.gltf', (gltfscene) => {
  scene.add(gltfscene.scene);
});
//OrbitControls: This listens to DOM events on the mouse and positions the camera accordingly:
// const controls = new OrbitControls(camera, renderer.domElement)


//ensure tween is running
const animate = (t) => {
  TWEEN.update(t);
  requestAnimationFrame(animate);
  camera.lookAt(target.position)
  renderer.render(scene, camera);
}
animate();

const tweenLaptop = new TWEEN.Tween({ x: 5.5, y: 3, z: 6 })
  .to({ x: -2, y: 2.5, z: 3 }, 3000)
  .onUpdate((coords) => {
    camera.position.x = coords.x
    camera.position.y = coords.y
    camera.position.z = coords.z
  })
  .easing(TWEEN.Easing.Exponential.InOut)
  .repeat(0)
  .delay(10);

const tweenShelf = new TWEEN.Tween({ x: 5.5, y: 3, z: 6 })
  .to({ x: -2, y: 3.8, z: -0.5 }, 3000)
  .onUpdate((coords) => {
    camera.position.x = coords.x
    camera.position.y = coords.y
    camera.position.z = coords.z
  })
  .easing(TWEEN.Easing.Exponential.InOut)
  .repeat(0)
  .delay(10);

const tweenMe = new TWEEN.Tween({ x: 5.5, y: 3, z: 6 })
  .to({ x: -1.3, y: 2.5, z: 1 }, 3000)
  .onUpdate((coords) => {
    camera.position.x = coords.x
    camera.position.y = coords.y
    camera.position.z = coords.z
  })
  .easing(TWEEN.Easing.Exponential.InOut)
  .repeat(0)
  .delay(10);


const tweenDrawer = new TWEEN.Tween({ x: 5.5, y: 3, z: 6 })
  .to({ x: 1, y: 3.5, z: -1.5 }, 3000)
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
    <App mainCamera={camera} target={target} tweenLaptop={tweenLaptop} tweenShelf={tweenShelf} tweenMe={tweenMe} tweenDrawer={tweenDrawer} />
  </React.StrictMode>,
)