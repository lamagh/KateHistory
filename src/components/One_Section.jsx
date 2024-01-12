import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import Intro_Ani from '../elements/one/intro_ani'

import first from '../images/one.png'




function One_Section() {
  return (
    <div>
    <Parallax className='start'>
    <Layer className="one_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
    <div className='intro-one'>
    <Intro_Ani/>
    </div>
        <img src={first} />
        
      </Layer>
    </Layer>
  
    </Parallax>

    </div>
   
  )
}

export default One_Section
