import React from 'react'
import { useDispatch } from "react-redux";
import cameraTween from '../../../tween/cameraTween';

export default function MeView(props) {

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
      <button className='w-24 h-24 bg-green-400 absolute mt-96' onClick={()=>{setIsFocused(false); setCurrentView(''); cameraTween(props.camera, props.target, '')}}>{"<-"}</button>
    </div>
  )
}
