import React from 'react'
import { useSelector, useDispatch } from "react-redux";

//The purpose of this component is to display invisible divs over parts of the room;
//Which when clicked zooms the camera to focus in on that thing. Ex: the Shelf.
export default function SelectToFocusScreen(props) {

    const target = props.target;
    const tweenLaptop = props.tweenLaptop;
    const tweenShelf = props.tweenShelf;
    const tweenMe = props.tweenMe;
    const tweenDrawer = props.tweenDrawer;

    const cameraReset = props.cameraReset;
    // const setIsFocused = props.setIsFocused;
    const dispatch = useDispatch();
    const setIsFocused = (bool) => {
        dispatch({ type: 'SET_IS_FOCUSED',  payload: bool });
        return;
    }

    return (
        <div className=' flex flex-row justify-center items-center gap-1 pb-16 bg-red-200 w-full h-full z-10 opacity-20'>
            <div className='bg-blue-500 text-white  z-20 w-24 h-44 -ml-12 opacity-100' onClick={() => { target.position.set(-5, 1, 3); tweenLaptop.start(); setIsFocused(true); console.log('clicked'); }}>
                Laptop
            </div>
            <div className='bg-blue-500 text-white  z-50 w-24 h-44  ' onClick={() => { target.position.set(-6, 1.5, -0.5); tweenShelf.start();setIsFocused(true);  console.log('clicked') }}>
                Shelf
            </div>
            <div className='bg-blue-500 text-white  z-50 w-24 h-44 ' onClick={() => { target.position.set(-1.3, 0.5, -5); tweenMe.start(); setIsFocused(true); console.log('clicked') }}>
                Me
            </div>
            <div className='bg-blue-500 text-white  z-50 w-24 h-44 mr-6' onClick={() => { target.position.set(1, 1, -5); tweenDrawer.start(); setIsFocused(true); console.log('clicked') }}>
                Drawer
            </div>
            {/* <div className='bg-blue-500 text-white  z-50 w-500 h-500' onClick={() => { cameraReset(); }}>
                Reset Camera
            </div> */}
        </div>
    )
}
