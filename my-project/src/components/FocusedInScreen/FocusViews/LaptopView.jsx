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
      <div className='w-full h-full absolute bg-black opacity-50 -z-1'></div>
      <button className=' w-24 h-24 bg-green-400 absolute mt-96 z-20' onClick={() => { setIsFocused(false); setCurrentView(''); cameraTween(props.camera, props.target, '') }}>{"<-"}</button>
       <div className='w-full h-full flex flex-col justify-center items-center'>
         <div className='flex flex-col gap-1 justify-center items-center bg-blue-500 h-1/2 w-1/4 z-20 border-black rounded-md border'>
            <div className='bg-red-500 h-20 w-3/4  flex justify-center items-center border-black rounded-md border'>LinkedIn</div>
            <div className='bg-red-500 h-20 w-3/4 flex justify-center items-center border-black rounded-md border'>Resume</div>
            <div className='bg-red-500 h-20 w-3/4 flex justify-center items-center border-black rounded-md border'>Send Email</div>
         </div>
       </div>

    </>
   )
}
