import React from 'react'
//Import all the differnt views:
import LaptopView from './FocusViews/LaptopView'
import ShelfView from './FocusViews/ShelfView'
import MeView from './FocusViews/MeView'
import DrawerView from './FocusViews/DrawerView'


export default function FocusedInScreen(props) {

  const setIsFocused = props.setIsFocused;
  const currentView = props.currentView

  //Conditionally render views based on passed (currentView) prop:
  const renderCurrentView = () => {
    switch (currentView) {
      case 'laptop':
        return <LaptopView/>;
        break;
      case 'shelf':
        return <ShelfView/>;
        break;
      case 'me':
        return <MeView/>;
        break;
      case 'drawer':
        return <DrawerView/>;
        break;
      default:
        console.log("Error: Unknown currentView prop passed in.")
        break;
    }
  }


  return (
    <div className='w-full h-full text-white opacity-100'>
      {renderCurrentView()}
    </div>
  )
}
