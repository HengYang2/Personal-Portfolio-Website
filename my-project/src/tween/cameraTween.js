import React from 'react'
import * as TWEEN from '@tweenjs/tween.js'
import { useSelector } from 'react-redux';


//Needs to accept: 
//Camera position
//reducer state is given:
export default function cameraTween(camera, target, selectedTarget) {

  // const targetReducer = useSelector((store) => {store.targetReducer});

  const tweenLaptop = () => {

    const tweenCamera = new TWEEN.Tween({ x: 5.5, y: 3, z: 6 })
      .to({ x: -2, y: 2.5, z: 3 }, 3000)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: -5, y: 1, z: 3 }, 1500)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    tweenCamera.start();
    tweenTarget.start();
  }


  const tweenShelf = () => {

    const tweenCamera = new TWEEN.Tween({ x: 5.5, y: 3, z: 6 })
      .to({ x: -2.5, y: 3.8, z: -0.64 }, 3000)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({  x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: -6, y: 2, z: -0.64}, 3000)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);


    tweenCamera.start();
    tweenTarget.start();
  }


  const tweenMe = () => {

    const tweenCamera = new TWEEN.Tween({ x: 5.5, y: 3, z: 6 })
      .to({ x: -1.3, y: 2.5, z: 1 }, 3000)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: -1.3, y: 0.5, z: -5 }, 3000)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);


    tweenCamera.start();
    tweenTarget.start();
  }


  const tweenDrawer = () => {

    const tweenCamera = new TWEEN.Tween({ x: 5.5, y: 3, z: 6 })
    .to({ x: 1, y: 3.5, z: -1.5 }, 3000)
    .onUpdate((coords) => {
      camera.position.x = coords.x
      camera.position.y = coords.y
      camera.position.z = coords.z
    })
    .easing(TWEEN.Easing.Exponential.InOut)
    .repeat(0)
    .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: 1, y: 1, z: -5 }, 3000)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);


    tweenCamera.start();
    tweenTarget.start();
  }


  const tweenBack = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
    .to({x: 5.5, y: 3, z: 6  }, 3000)
    .onUpdate((coords) => {
      camera.position.x = coords.x
      camera.position.y = coords.y
      camera.position.z = coords.z
    })
    .easing(TWEEN.Easing.Exponential.InOut)
    .repeat(0)
    .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: 0, y: 1, z: 0 }, 3000)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);


    tweenCamera.start();
    tweenTarget.start();
  }
  


  switch (selectedTarget) {
    case 'laptop':
      return tweenLaptop();
      break;
    case 'shelf':
      return tweenShelf();
      break;
    case 'me':
      return tweenMe();
      break;
    case 'drawer':
      return tweenDrawer();
      break;
    default:
      return tweenBack();
      break;
  }
}
