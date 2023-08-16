import React, { useEffect, useReducer, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { easing } from 'maath'
import * as TWEEN from '@tweenjs/tween.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three';
//Import orbit controls to make the scene more interactive:
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//redux
import { Provider } from 'react-redux';
import store from './redux/store';
// (8, 4.25, 8);
// (3, 4.25, 3);
//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(10, 6, 10);


//Scene - like a containter that holds all objects, cameras and lights
const scene = new THREE.Scene();

//Load background:
const backgroundTexture = new THREE.TextureLoader().load('../public/backgroundTexture.jpg');
scene.background = backgroundTexture;
scene.backgroundIntensity = 0.2;
scene.backgroundBlurriness = 0.9;


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
const target = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshStandardMaterial({ color: 0xFF6347, wireframe: false }).transparent = false)
target.position.set(0, 2, 0)
scene.add(target)


//Add a light to the scene:
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 3, 0)
pointLight.intensity = 2;
//Ambient light is like a flood light (it will light up everything in the scene equally):
const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.intensity = 2;

//Add the light to the scene
scene.add(pointLight, ambientLight);

//Light helper shows where the light is and its position:
// const lightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(lightHelper);
//Grid helper creates a 2D grid:
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper)


//Room Model:
const gltfLoader = new GLTFLoader();
gltfLoader.load('../public/bedroomMODIFIED.gltf', (gltfscene) => {
  // GLTFSCENE =  gltfscene;
  scene.add(gltfscene.scene);
  // console.log(gltfscene.scene);
  // window.globalVariable = scene.getObjectByName("Scene").getObjectByName("Cube042");
  // greenBook = scene.getObjectByName("Scene").getObjectByName("Cube042");
  // greenBook = scene.getObjectByName("Scene").getObjectByName("Cube042");
});



//OrbitControls: This listens to DOM events on the mouse and positions the camera accordingly:
const controls = new OrbitControls(camera, renderer.domElement).target(new THREE.Vector3(0,4,0));


//ensure tween is running
const animate = (t) => {
  controls.update();
  // TWEEN.update(t);
  requestAnimationFrame(animate);
  // camera.lookAt(target.position);
  renderer.render(scene, camera);
  // scene.getObjectByName("Scene").getObjectByName("Cube042").position.set(0,0,0);
  // console.log("window var", window.globalVariable);
  
}
animate();




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App target={target} camera={camera} scene={scene} />
    </Provider>
  </React.StrictMode>,
)

//In the index.js, load only the react root div.
  //inside the root div, render the canvas and other elements.
  //have the canvas have regular z-index.
  //load other compontnetns conditionally, with higher z-index when I need to press on other divs.
