import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import third from '../images/three.png'
import ScrollAnimation from 'react-animate-on-scroll';


function Three_Section() {
  return (
    <div>
    <Parallax className='start'>
    <Layer className="three_wrapper three_bg"settings={{ speed: 0.15 }}>
    <div className='w-100 d-flex justify-content-center'>
        <div className='w-50 text-center'>
        <ScrollAnimation animateIn='fadeIn'>
        <span className='fs-2 text-white fw-bold'>
        The first training course for Dubai Police officers in 1970 took place in the 
        Hashemite Kingdom of Jordan, among them was His Excellency Dhahi Khalfan Tamim. 
        </span>
        </ScrollAnimation> 
        </div>
    </div>
    </Layer>
    <Layer className="three_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={third} />
        
      </Layer>
    </Layer>
  
    </Parallax>
    </div>
  )
}

export default Three_Section
