import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import sixteenth from '../images/sixteen.png'
import Intro_Ani from '../elements/two/intro_ani';

function Sixteen_Section() {
  return (
    <div>
       <Parallax className='start'>
    <Layer className="sixteen_wrapper sixteen_bg"settings={{ speed: 0.15 }}>
    <div className='intro-three'>
        <Intro_Ani/>
    </div>
    </Layer>
    <Layer className="sixteen_wrapper sixteen_bg"settings={{ speed: 0.15 }}>
    <div className='intro-three'>
        <Intro_Ani/>
    </div>
    </Layer>
    <Layer className="sixteen_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={sixteenth} />
        
      </Layer>
    </Layer>
  
    </Parallax>
    </div>
  )
}

export default Sixteen_Section
