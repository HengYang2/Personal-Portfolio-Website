import React from 'react'
import { useDispatch } from "react-redux";
import cameraTween from '../../../tween/cameraTween';
import bookTween from '../../../tween/bookTween';
import trophyTween from '../../../tween/trophyTween';

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
    <>
      <button className=' text-black w-24 h-24  border border-black rounded-md bg-yellow-300 absolute mt-107 ml-8 z-20 hover:border hover:border-white hover:text-white button-hover-effect' onClick={() => { setIsFocused(false); setCurrentView(''); cameraTween(props.camera, props.target, '') }}>{"<-"}</button>
      <div className='w-full h-full absolute flex flex-col justify-center items-center'>
        <div className='w-3/5 h-full  flex flex-col justify-center items-center bg-blue-500 opacity-25 pb-28'>
          <div className='w-full h-1/2 mt-5 flex flex-row justify-center items-center bg-red-500 opacity-60'>
            <div className='h-full w-1/5 bg-black' onMouseEnter={(e) => { trophyTween(project1); console.log('entered div');}} onMouseLeave={(e)=>{console.log("left div");}}></div>
            <div className='h-full w-1/5 bg-green-500' onMouseEnter={(e) => { trophyTween(project2); }}></div>
            <div className='h-full w-1/5 bg-black' onMouseEnter={(e) => { trophyTween(project3); }}></div>
            <div className='h-full w-1/5 bg-green-500' onMouseEnter={(e) => { trophyTween(project4); }}></div>
            <div className='h-full w-1/5 bg-black' onMouseEnter={(e) => { trophyTween(project5); }}></div>
          </div>
          <div className='w-4/5 h-1/4 mt-5 flex flex-row justify-center items-center gap-12 bg-green-500 opacity-60 pb-8'>
            <div className='h-full w-60 mt-5 flex flex-row justify-center items-center bg-black opacity-90'>

              {/* books passed into bookTween() are global variables that are attached to the 'window' object */}
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(blueBook); }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(greenBook); }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(redBook); }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(yellowBook); }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(orangeBook); }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(purpleBook); }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(brownBook); }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(blackBook); }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(limeGreenBook); }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(magentaBook); }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(pinkBook); }}></div>
              <div className='h-full w-1/12' onMouseEnter={(e) => { bookTween(cyanBook); }}></div>


            </div>
            <div className='w-1/4 h-full mt-5 flex flex-row justify-center items-center bg-blue-500 opacity-60'>

            </div>
          </div>
        </div>
      </div>

      {/* <div className='bg-green-500 w-20 h-20' onMouseEnter={() => {  bookTween(window.globalVariable); console.log("Entered Div"); }}> move book</div> */}

    </>

  )
}

// For easy copy and paste of colored divs
// <div className='h-full w-1/12 bg-white' onMouseEnter={(e) => { bookTween(blueBook); }}></div>
// <div className='h-full w-1/12'></div>
// <div className='h-full w-1/12 bg-white'></div>
// <div className='h-full w-1/12 '></div>
// <div className='h-full w-1/12 bg-white'></div>
// <div className='h-full w-1/12 '></div>
// <div className='h-full w-1/12 bg-white'></div>
// <div className='h-full w-1/12 '></div>
// <div className='h-full w-1/12 bg-white'></div>
// <div className='h-full w-1/12'></div>
// <div className='h-full w-1/12 bg-white'></div>
// <div className='h-full w-1/12 '></div>

{/* <div className='h-full w-1/5 bg-black' onMouseEnter={(e) => { bookTween(blueBook); }}></div>
<div className='h-full w-1/5 bg-green-500' onMouseEnter={(e) => { bookTween(blueBook); }}></div>
<div className='h-full w-1/5 bg-black' onMouseEnter={(e) => { bookTween(blueBook); }}></div>
<div className='h-full w-1/5 bg-green-500' onMouseEnter={(e) => { bookTween(blueBook); }}></div>
<div className='h-full w-1/5 bg-black' onMouseEnter={(e) => { bookTween(blueBook); }}></div> */}