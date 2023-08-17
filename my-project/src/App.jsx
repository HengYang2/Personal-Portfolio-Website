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



  //Conditionally render the SelectToFocusScreen or the FocusedInScreen:
  const renderView = () => {
    //Loads screen where the user can use orbital controls:
    if (isOrbitScreenOpenReudcer == true) {
      // console.log(isOrbitScreenOpenReudcer);
      return <button className=" w-1/2 h-1/2 text-option flex justify-center items-center" onClick={() => { setIsOrbitScreenOpen(false); console.log("SETTING isOrbitScreenOpen to false."); cameraTween(props.camera, props.target, '') }}>Explore Room</button>
    } else {

      //If isOrbitalScreenReducer == false, orbital controls will be disabled and 
      //SelectToFocusScreen will be rendered.
      //If isFocusedReducer == true, the FocusedInScreen will be rendered instead of
      //the SelectToFocusScreen.
      if (isFocusedReducer == true) {
        return (
          <>
            <FocusedInScreen currentView={currentViewReducer} camera={props.camera} target={props.target} />
          </>
        )
      } else {
        return (
          <>
            <SelectToFocusScreen camera={props.camera} target={props.target} setDivId={setDivId} divId={divId} controls={props.controls} />
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