import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import eighth from '../images/eight.png'

function Eight_Section() {
  return (
    <div>
    <Parallax className='start'>
    <Layer className="eight_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={eighth} />
        
      </Layer>
    </Layer>

    </Parallax>
    </div>
  )
}

export default Eight_Section
