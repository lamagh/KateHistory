import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import ninth from '../images/nine.png'
import ScrollAnimation from 'react-animate-on-scroll';

function Nine_Section() {
  return (
    <div>
       <Parallax className='start'>
    <Layer className="nine_wrapper"settings={{ speed: 0.15 }}>
    <div className='w-100 d-flex justify-content-center'>
        <div className='w-50 text-center'>
        <ScrollAnimation animateIn='fadeIn'>
        <span className='fs-2 text-white fw-bold'>
        The general graduation at the General Department of Security 
        of Entities, Facilities, and Emergencies. 
        </span>
        </ScrollAnimation> 
        </div>
    </div>
    </Layer>
    <Layer className="nine_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={ninth} />
        
      </Layer>
    </Layer>
  
    </Parallax>
    </div>
  )
}

export default Nine_Section
