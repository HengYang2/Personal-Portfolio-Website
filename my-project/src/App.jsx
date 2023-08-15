import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as THREE from 'three'
import SelectToFocusScreen from './components/SelectToFocusScreen';
import FocusedInScreen from './components/FocusedInScreen/FocusedInScreen';


export default function App(props) {

  const [divId, setDivId] = useState("About Me")


  const isFocusedReducer = useSelector(store => store.isFocusedReducer);
  const currentViewReducer = useSelector(store => store.currentViewReducer);

  //For cursor following:
  window.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("cursor");
    // const divImOn = cursor.;
    // console.log('coords', e.clientX + " + " + e.clientY )
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = x + 25 + "px";
    cursor.style.top = y + "px";
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
      {renderFocusView()}
    </>
  )
}
