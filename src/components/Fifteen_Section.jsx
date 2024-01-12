import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import fifteenth from '../images/fifteen.png'
import Intro_Ani from '../elements/two/intro_ani';

function Fifteen_Section() {
  return (
    <div>
    <Parallax className='start'>
    <Layer className="fifteen_wrapper fifteen_bg"settings={{ speed: 0.15 }}>
    <div className='intro-three'>
        <Intro_Ani/>
    </div>
    </Layer>
    <Layer className="fifteen_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={fifteenth} />
        
      </Layer>
    </Layer>
  
    </Parallax>
    </div>
  )
}

export default Fifteen_Section
