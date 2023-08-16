import React from 'react'
import { useDispatch } from "react-redux";
import cameraTween from '../../../tween/cameraTween';
import bookTween from '../../../tween/bookTween';

export default function ShelfView(props) {

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
      <div className='w-full h-full absolute flex flex-col justify-center items-center'>
        <div className='w-3/4 h-full  flex flex-col justify-center items-center bg-blue-500 opacity-25'>
          <div className='w-full h-1/2 mt-5 flex flex-row justify-center items-center bg-red-500 opacity-60'>
            <div className='h-full w-1/5 bg-black'>

            </div>
            <div className='h-full w-1/5 bg-green-500'>

            </div>
            <div className='h-full w-1/5 bg-black'>

            </div>
            <div className='h-full w-1/5 bg-green-500'>

            </div>
            <div className='h-full w-1/5 bg-black'>

            </div>
          </div>
          <div className='w-full h-1/3 mt-5 flex flex-row justify-center items-center gap-2 bg-green-500 opacity-60 pb-8'>
            <div className='w-80 h-3/4 mt-5 flex flex-row justify-center items-center bg-black opacity-90'>

              <div className='h-full w-1/12 bg-white'></div>
              <div className='h-full w-1/12'></div>
              <div className='h-full w-1/12 bg-white'></div>
              <div className='h-full w-1/12 '></div>
              <div className='h-full w-1/12 bg-white'></div>
              <div className='h-full w-1/12 '></div>
              <div className='h-full w-1/12 bg-white'></div>
              <div className='h-full w-1/12 '></div>
              <div className='h-full w-1/12 bg-white'></div>
              <div className='h-full w-1/12'></div>
              <div className='h-full w-1/12 bg-white'></div>
              <div className='h-full w-1/12 '></div>




            </div>
            <div className='w-1/4 h-3/4 mt-5 flex flex-row justify-center items-center mr-10 bg-blue-500 opacity-60'>

            </div>
          </div>
        </div>
      </div>


      {/* <div className='bg-green-500 w-20 h-20' onMouseEnter={() => {  bookTween(window.globalVariable); console.log("Entered Div"); }}> move book</div> */}
      <button className='w-24 h-24 bg-green-400 absolute mt-96' onClick={() => { setIsFocused(false); setCurrentView(''); cameraTween(props.camera, props.target, '') }}>{"<-"}</button>
    </div>
  )
}
