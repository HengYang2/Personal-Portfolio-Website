import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import cameraTween from '../tween/cameraTween';

//The purpose of this component is to display invisible divs over parts of the room;
//Which when clicked zooms the camera to focus in on that thing. Ex: the Shelf.
export default function SelectToFocusScreen(props) {

    const setDivId = props.setDivId;


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

            <div id="laptop" className='z-20 w-24 h-44 -ml-12' onMouseEnter={ (e) => {setDivId("Get In Touch")}} onMouseLeave={ (e) => {setDivId("")}}  onClick={() => { setIsFocused(true); setCurrentView('laptop'); cameraTween(props.camera, props.target, 'laptop'); window.globalVariable.position.set(0,2,0)}}>
               
            </div>
            <div id="shelf" className='z-50 w-24 h-44 ' onMouseEnter={ (e) => {setDivId("Portfolio")}} onMouseLeave={ (e) => {setDivId("")}} onClick={() => { setIsFocused(true); setCurrentView('shelf'); cameraTween(props.camera, props.target, 'shelf'); }}>

            </div>
            <div id="me"  className='z-50 w-24 h-44 ' onMouseEnter={ (e) => {setDivId("About Me")}} onMouseLeave={ (e) => {setDivId("")}} onClick={() => { setIsFocused(true); setCurrentView('me'); cameraTween(props.camera, props.target, 'me'); }}>

            </div>
            <div  id="drawer" className='z-50 w-24 h-44 mr-6 ' onMouseEnter={ (e) => {setDivId("Misc")}} onMouseLeave={ (e) => {setDivId("")}} onClick={() => { setIsFocused(true); setCurrentView('drawer'); cameraTween(props.camera, props.target, 'drawer'); }}>

            </div>
        </div>
    )
}
