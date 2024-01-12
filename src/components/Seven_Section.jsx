import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import seventh from '../images/seven.png'


const Seven_Section = () => {
  return (
    <div>
       <Parallax className='start'>
    <Layer className="seven_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={seventh} />
        
      </Layer>
    </Layer>

    </Parallax>
    </div>
  )
}

export default Seven_Section
