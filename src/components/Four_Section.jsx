import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import fourth from '../images/four.png'
import ScrollAnimation from 'react-animate-on-scroll';

function Four_Section() {
  return (
    <div>
    <Parallax className='start'>
    <Layer className="four_wrapper four_bg"settings={{ speed: 0.15 }}>
    <div className='w-100 d-flex justify-content-center'>
        <div className='w-50 text-center'>
        <ScrollAnimation animateIn='fadeIn'>
        <span className='fs-2 text-white fw-bold'>
        The late Sheikh Rashid bin Saeed Al Maktoum, the Ruler of Dubai and Vice 
        President of the United Arab Emirates at that time, witnessed it. 
        </span>
        </ScrollAnimation> 
        </div>
    </div>
    </Layer>
    <Layer className="four_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={fourth} />
        
      </Layer>
    </Layer>
  
    </Parallax>
    </div>
  )
}

export default Four_Section
