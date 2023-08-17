import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import cameraTween from '../tween/cameraTween';
import ReactDom from 'react-dom';

//The purpose of this component is to display invisible divs over parts of the room;
//Which when clicked zooms the camera to focus in on that thing. Ex: the Shelf.
export default function SelectToFocusScreen(props) {

    const setDivId = props.setDivId;

    const isPortalOpenReducer = useSelector(store => store.isPortalOpenReducer);


    const dispatch = useDispatch();
    const setIsFocused = (bool) => {
        dispatch({ type: 'SET_IS_FOCUSED', payload: bool });
        return;
    }
    const setCurrentView = (selectedView) => {
        dispatch({ type: 'SET_CURRENT_VIEW', payload: selectedView });
        return;
    }
    const setIsOrbitScreenOpen = (bool) => {
      props.controls.enabled = true; 
      dispatch({ type: 'SET_ORBIT_SCREEN_OPEN', payload: bool });
      return;
    }
    const setIsPortalOpenReducer = (bool) => {
        dispatch({ type: 'SET_PORTAL_OPEN', payload: bool });
        return;
    }

 
    if (isPortalOpenReducer == false) {
        return ReactDom.createPortal(
            <>
                <div className=' fixed flex flex-row justify-center items-center gap-1 pb-16 w-screen h-screen bg-blue-500 opacity-30'>
    
                    <div id="laptop" className='z-20 w-24 h-44 -ml-12 bg-red-500' onMouseEnter={(e) => { setDivId("Get In Touch") }} onMouseLeave={(e) => { setDivId("") }} onClick={() => { setIsFocused(true); setCurrentView('laptop'); cameraTween(props.camera, props.target, 'laptop'); window.globalVariable.position.set(0, 2, 0); }}>
    
                    </div>
                    <div id="shelf" className='z-50 w-24 h-44 bg-red-500' onMouseEnter={(e) => { setDivId("Portfolio") }} onMouseLeave={(e) => { setDivId("") }} onClick={() => { setIsFocused(true); setCurrentView('shelf'); cameraTween(props.camera, props.target, 'shelf'); }}>
    
                    </div>
                    <div id="me" className='z-50 w-24 h-44 bg-red-500' onMouseEnter={(e) => { setDivId("About Me") }} onMouseLeave={(e) => { setDivId("") }} onClick={() => { setIsFocused(true); setCurrentView('me'); cameraTween(props.camera, props.target, 'me'); }}>
    
                    </div>
                    <div id="drawer" className='z-50 w-24 h-44 mr-6 bg-red-500' onMouseEnter={(e) => { setDivId("Misc") }} onMouseLeave={(e) => { setDivId("") }} onClick={() => { setIsFocused(true); setCurrentView('drawer'); cameraTween(props.camera, props.target, 'drawer'); }}>
    
                    </div>
                </div>
                <div className=" w-24 h-16 ml-103 mt-103 text-option absolute flex justify-center items-center" onClick={() => { setIsOrbitScreenOpen(true); setIsPortalOpenReducer(false); cameraTween(props.camera, props.target, 'freeLook')}}>Free-Look</div>;
            </>, document.getElementById('portal')
        )
    } else {
       return <></>
    }
 
}
