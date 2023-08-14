import React, { useState } from 'react'
import * as THREE from 'three'


export default function App(props) {

  const target = props.target;
  const tweenLaptop = props.tweenLaptop;
  const tweenShelf = props.tweenShelf;
  const tweenMe = props.tweenMe;
  const tweenDrawer = props.tweenDrawer;

  const mainCamera = props.mainCamera

  // const [isOpen, setIsOpen] = useState(flase);

  // props.camera1.position.set(props.camera1.position.x, props.camera1.position.y, props.camera1.position.z +1)
  return (
    <>
  {/* <Modal setIsOpen={setIsOpen} isOpen={isOpen}> */}
    {/* Fancy Modal */}
    {/* </Modal> */}
      <div className='bg-blue-500 text-white absolute z-50 w-500 h-500' onClick={() => { target.position.set(-5, 1, 3); tweenLaptop.start(); console.log('clicked'); setIsOpen={setIsOpen}}}>
        Laptop
      </div>
      <div className='bg-blue-500 text-white absolute z-50 w-500 h-500 mt-12' onClick={() => { target.position.set(-6, 1.5, -0.5); tweenShelf.start(); console.log('clicked') }}>
        Shelf
      </div>
      <div className='bg-blue-500 text-white absolute z-50 w-500 h-500 mt-24' onClick={() => { target.position.set(-1.3, 0.5, -5); tweenMe.start(); console.log('clicked') }}>
        Me
      </div>
      <div className='bg-blue-500 text-white absolute z-50 w-500 h-500 mt-36' onClick={() => { target.position.set(1, 1, -5); tweenDrawer.start(); console.log('clicked') }}>
        Drawer
      </div>
      <div className='bg-blue-500 text-white absolute z-50 w-500 h-500 mt-48' onClick={() => { props.cameraReset();}}>
        Reset Camera
      </div>
    </>

  )
}
