import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import tenth from '../images/ten.png'

function Ten_Section() {
  return (
    <div>
      <Parallax className='start'>
    <Layer className="ten_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={tenth} />
        
      </Layer>
    </Layer>

    </Parallax>
    </div>
  )
}

export default Ten_Section
