import React from 'react'
//Import all the differnt views:
import LaptopView from './FocusViews/LaptopView'
import ShelfView from './FocusViews/ShelfView'
import MeView from './FocusViews/MeView'
import DrawerView from './FocusViews/DrawerView'
import { useSelector } from 'react-redux'


export default function FocusedInScreen(props) {

  const currentViewReducer = useSelector(store => store.currentViewReducer);

  //Conditionally render views based on passed (currentView) prop:
  const renderCurrentView = () => {
    switch (currentViewReducer) {
      case 'laptop':
        return <LaptopView camera={props.camera} target={props.target} />;
        break;
      case 'shelf':
        return <ShelfView camera={props.camera} target={props.target} />;
        break;
      case 'me':
        return <MeView camera={props.camera} target={props.target} />;
        break;
      case 'drawer':
        return <DrawerView camera={props.camera} target={props.target} />;
        break;
      default:
        console.log("Error: Unknown currentView prop passed in.")
        break;
    }
  }


  return (
    <>
      {renderCurrentView()}
    </>
  )
}