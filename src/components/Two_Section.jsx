import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import second from '../images/two_img.png'
import Intro_Ani from '../elements/two/intro_ani';

function Two_Section() {
  return (
    <div>
    <Parallax className='start'>
    <Layer className="two_wrapper two_bg"settings={{ speed: 0.15 }}>
    <div className='intro-two'>
        <Intro_Ani/>
    </div>
    </Layer>
    <Layer className="two_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={second} />
        
      </Layer>
    </Layer>
  
    </Parallax>
    </div>
  )
}

export default Two_Section
