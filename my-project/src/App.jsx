import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as THREE from 'three'
import SelectToFocusScreen from './components/SelectToFocusScreen';
import FocusedInScreen from './components/FocusedInScreen/FocusedInScreen';
import { degToRad } from 'three/src/math/MathUtils';
import cameraTween from './tween/cameraTween';

export default function App(props) {

  const [divId, setDivId] = useState("");

  const isFocusedReducer = useSelector(store => store.isFocusedReducer);
  const currentViewReducer = useSelector(store => store.currentViewReducer);
  const isOrbitScreenOpenReudcer = useSelector(store => store.isOrbitScreenOpenReudcer);

  //Function for changing isOrbitScreenOpenReducer value and disabling
  //orbitControls that are passed in as props.controls.
  const dispatch = useDispatch();
  const setIsOrbitScreenOpen = (bool) => {
    props.controls.enabled = false; 
    dispatch({ type: 'SET_ORBIT_SCREEN_OPEN', payload: bool });
    return;
  }


  //For cursor following:
  window.addEventListener("mousemove", (event) => {
    const cursor = document.getElementById("cursor");
    // const divImOn = cursor.;
    // console.log('coords', e.clientX + " + " + e.clientY )
    const x = event.clientX;
    const y = event.clientY;
    // cursor.style.left = x + 25 + "px";
    // cursor.style.top = y + "px";
  })

  const renderToolTip = () => {
    if (divId == '') {
      return <div id="cursor"></div>
    } else {
      return <div id="cursor" className='icon-tooltip'>{divId}</div>
    }
  }

  //Conditionally render the SelectToFocusScreen or the FocusedInScreen:
  const renderView = () => {
    //Loads screen where the user can use orbital controls:
    console.log(isOrbitScreenOpenReudcer);
    if (isOrbitScreenOpenReudcer == true) {
      return <div className=" w-1/2 h-1/2 text-option flex justify-center items-center" onClick={() => { setIsOrbitScreenOpen(false); console.log("SETTING isOrbitScreenOpen to false."); cameraTween(props.camera, props.target, '')}}>Explore Room</div>;
    } else {

      //If isOrbitalScreenReducer == false, orbital controls will be disabled and 
      //SelectToFocusScreen will be rendered.
      //If isFocusedReducer == true, the FocusedInScreen will be rendered instead of
      //the SelectToFocusScreen.
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
            <SelectToFocusScreen camera={props.camera} target={props.target} setDivId={setDivId} controls={props.controls} />
            {renderToolTip()}
          </>
        )


      }
    }
  }

  return (
    <>
      {renderView()}
    </>
  )
}


//RAY CASTING:
// const pointer = new THREE.Vector2();
// const raycaster = new THREE.Raycaster();

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