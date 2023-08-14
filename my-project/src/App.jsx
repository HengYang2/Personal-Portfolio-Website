import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as THREE from 'three'
import SelectToFocusScreen from './components/SelectToFocusScreen';
import FocusedInScreen from './components/FocusedInScreen/FocusedInScreen';


export default function App(props) {



  const isFocusedReducer = useSelector(store => store.isFocusedReducer);


  // const [isFocused, setIsFocused] = useState(false);
  const [currentView, setCurrentView] = useState('laptop');

  const target = props.target;
  const tweenLaptop = props.tweenLaptop;
  const tweenShelf = props.tweenShelf;
  const tweenMe = props.tweenMe;
  const tweenDrawer = props.tweenDrawer;

  const cameraReset = props.cameraReset;

  //Conditionally render the SelectToFocusScreen or the FocusedInScreen:
  const renderFocusView = () => {
    if (isFocusedReducer == true) {
      return <FocusedInScreen currentView={currentView} />
    } else {
      return <SelectToFocusScreen target={target} tweenLaptop={tweenLaptop} tweenShelf={tweenShelf} tweenMe={tweenMe} tweenDrawer={tweenDrawer} cameraReset={cameraReset} />
    }
  }

  return (
    <>
      {renderFocusView()}
    </>
  )
}
