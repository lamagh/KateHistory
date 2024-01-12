import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import fourteenth from '../images/fourteen.png'
import Intro_Ani from '../elements/two/intro_ani';

function Fourteen_Section() {
  return (
    <div>
        <Parallax className='start'>

    <Layer className="fourteen_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={fourteenth} />
        
      </Layer>
    </Layer>
   
    </Parallax>
    </div>
  )
}

export default Fourteen_Section
