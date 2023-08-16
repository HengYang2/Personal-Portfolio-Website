import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as THREE from 'three'
import SelectToFocusScreen from './components/SelectToFocusScreen';
import FocusedInScreen from './components/FocusedInScreen/FocusedInScreen';
import { degToRad } from 'three/src/math/MathUtils';


export default function App(props) {

  let greenBook = props.greenBook;
  // const [greenBook, setGreenBook] = useState(props.greenBook);

  // useEffect(() => {
  //   console.log(greenBook);
  // },[greenBook]);

  const [divId, setDivId] = useState("About Me")
  // const [tempObject, setTempObject] = useState("")

  //RAY CASTING:
  // const pointer = new THREE.Vector2();
  // const raycaster = new THREE.Raycaster();


  //Window event listener on mouse move:

  const isFocusedReducer = useSelector(store => store.isFocusedReducer);
  const currentViewReducer = useSelector(store => store.currentViewReducer);

  //For cursor following:
  window.addEventListener("mousemove", (event) => {
    const cursor = document.getElementById("cursor");
    // const divImOn = cursor.;
    // console.log('coords', e.clientX + " + " + e.clientY )
    const x = event.clientX;
    const y = event.clientY;
    cursor.style.left = x + 25 + "px";
    cursor.style.top = y + "px";


    //Ray casting:
    // pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    // pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // raycaster.setFromCamera(pointer, props.camera);
    // const intersects = raycaster.intersectObjects(props.scene.children);


    // if (intersects.length > 0) {
    //   // intersects[0].object.position.set(intersects[0].object.position.x,intersects[0].object.position.y + 0.1,intersects[0].object.position.z);
    //   if (intersects[0].object.name == "Cylinder076") {
    //     intersects[0].object.rotation.y += 90;
    //     console.log("mesh", intersects[0].object.name);
    //   }
    // }
  })

  const renderToolTip = () => {
    if (divId == '') {
      return <div id="cursor"></div>
    } else {
      return <div id="cursor" className='icon-tooltip'>{divId}</div>
    }
  }

  //Conditionally render the SelectToFocusScreen or the FocusedInScreen:
  const renderFocusView = () => {
    if (isFocusedReducer == true) {
      return (
        <>
          <FocusedInScreen currentView={currentViewReducer} camera={props.camera} target={props.target} />
          <div id="cursor"></div>
        </>
      )
    } else {
      return (
        <>
          <SelectToFocusScreen camera={props.camera} target={props.target} setDivId={setDivId} />
          {renderToolTip()}
        </>
      )


    }
  }


  return (
    <>
      <canvas id="bg" class="z-50 fixed w-full h-full "></canvas>
      {renderFocusView()}
    </>
  )
}
// setGreenBook={props.setGreenBook}