import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import nineteenth from '../images/nineteen.png'
import Intro_Ani from '../elements/two/intro_ani';

function Nineteen_Section() {
  return (
    <div>
          <Parallax  className='start'>
    <Layer className="nineteen_wrapper nineteen_bg"settings={{ speed: 0.15 }}>
    <div className='intro-three'>
        <Intro_Ani/>
    </div>
    </Layer>
    <Layer className="nineteen_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={nineteenth} />
        
      </Layer>
    </Layer>
  
    </Parallax>
    </div>
  )
}

export default Nineteen_Section
