import React from 'react'
import * as THREE from 'three'

export default function App(props) {

  // props.camera1.position.set(props.camera1.position.x, props.camera1.position.y, props.camera1.position.z +1)
  return (
    <div className='bg-blue-500 text-white absolute z-50 w-500 h-500' onClick={() => { props.tween.start(); console.log('clicked') }}>
      App
    </div>
  )
}
