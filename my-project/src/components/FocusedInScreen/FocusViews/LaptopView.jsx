import React from 'react'
import { useDispatch } from "react-redux";
import cameraTween from '../../../tween/cameraTween';
import ReactDOM from "react-dom";

export default function LaptopView(props) {

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
    <>
      <div className='w-screen h-screen fixed mt-0 ml-0 bg-black opacity-50 -z-1'></div>
      <button className=' text-black w-24 h-24  border border-black rounded-md bg-yellow-300 absolute mt-107 ml-8 z-20 hover:border hover:border-white hover:text-white button-hover-effect' onClick={() => { setIsFocused(false); setCurrentView(''); cameraTween(props.camera, props.target, '') }}>{"<-"}</button>
       <div className='w-full h-full absolute flex flex-col justify-center items-center'>
         <div className='flex flex-col gap-1 justify-center items-center bg-gray-500 h-1/2 w-1/4 z-20 border-black rounded-md border'>
            <div className='bg-white h-20 w-3/4  flex justify-center items-center border-black rounded-md border hover:border hover:border-white hover:text-white text-sm box-shadow button-hover-effect'>LinkedIn</div>
            <div className='bg-white h-20 w-3/4  flex justify-center items-center border-black rounded-md border hover:border hover:border-white hover:text-white text-sm box-shadow button-hover-effect'>Resume</div>
            <div className='bg-white h-20 w-3/4  flex justify-center items-center border-black rounded-md border hover:border hover:border-white hover:text-white text-sm box-shadow button-hover-effect'>Send Email</div>
         </div>
       </div>
    </>
   )
}
