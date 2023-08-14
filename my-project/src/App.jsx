import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as THREE from 'three'
import SelectToFocusScreen from './components/SelectToFocusScreen';
import FocusedInScreen from './components/FocusedInScreen/FocusedInScreen';


export default function App(props) {



  const isFocusedReducer = useSelector(store => store.isFocusedReducer);
  const currentViewReducer = useSelector(store => store.currentViewReducer);

  //Conditionally render the SelectToFocusScreen or the FocusedInScreen:
  const renderFocusView = () => {
    if (isFocusedReducer == true) {
      return <FocusedInScreen currentView={currentViewReducer} camera={props.camera} target={props.target} />
    } else {
      return <SelectToFocusScreen camera={props.camera} target={props.target} />
    }
  }

  return (
    <>
      {renderFocusView()}
    </>
  )
}
