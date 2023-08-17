import React from 'react'
import { useDispatch } from "react-redux";
import cameraTween from '../../../tween/cameraTween';

export default function DrawerView(props) {

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
    <div className='w-full h-full text-yellow-300'>
      <button className=' text-black w-24 h-24  border border-black rounded-md bg-yellow-300 absolute mt-107 ml-8 z-20 hover:border hover:border-white hover:text-white button-hover-effect' onClick={() => { setIsFocused(false); setCurrentView(''); cameraTween(props.camera, props.target, '') }}>{"<-"}</button>
    </div>
  )
}

