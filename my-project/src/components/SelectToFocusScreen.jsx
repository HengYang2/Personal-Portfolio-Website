import React from 'react'
import { useDispatch } from "react-redux";
import cameraTween from '../tween/cameraTween';

//The purpose of this component is to display invisible divs over parts of the room;
//Which when clicked zooms the camera to focus in on that thing. Ex: the Shelf.
export default function SelectToFocusScreen(props) {

    const dispatch = useDispatch();
    const setIsFocused = (bool) => {
        dispatch({ type: 'SET_IS_FOCUSED', payload: bool });
        return;
    }
    const setCurrentView = (selectedView) => {
        dispatch({ type: 'SET_CURRENT_VIEW', payload: selectedView });
        return;
    }

    return (
        <div className=' flex flex-row justify-center items-center gap-1 pb-16 w-full h-full z-10'>

            <div className='z-20 w-24 h-44 -ml-12' onClick={() => { setIsFocused(true); setCurrentView('laptop'); cameraTween(props.camera, props.target, 'laptop'); }}>
                {/* Laptop */}
            </div>
            <div className='z-50 w-24 h-44' onClick={() => { setIsFocused(true); setCurrentView('shelf'); cameraTween(props.camera, props.target, 'shelf'); }}>
                {/* Shelf */}
            </div>
            <div className='z-50 w-24 h-44 ' onClick={() => { setIsFocused(true); setCurrentView('me'); cameraTween(props.camera, props.target, 'me'); }}>
                {/* Me */}
            </div>
            <div className='z-50 w-24 h-44 mr-6' onClick={() => { setIsFocused(true); setCurrentView('drawer'); cameraTween(props.camera, props.target, 'drawer'); }}>
                {/* Drawer */}
            </div>
            {/* <div className='bg-blue-500 text-white  z-50 w-500 h-500' onClick={() => { cameraReset(); }}>
                Reset Camera
            </div> */}
        </div>
    )
}
