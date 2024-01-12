import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import fifth from '../images/five.png'
import ScrollAnimation from 'react-animate-on-scroll';

function Five_Section() {
  return (
    <div>
    <Parallax className='start'>
    <Layer className="five_wrapper five_bg"settings={{ speed: 0.15 }}>
    <div className='w-100 d-flex justify-content-center'>
        <div className='w-50 text-center'>
        <ScrollAnimation animateIn='fadeIn'>
        <span className='fs-2 text-white fw-bold'>
        Sheikh Mohammed bin Rashid Al Maktoum - Vice President of the United Arab Emirates, Prime Minister, Ruler of Dubai, 
        Minister of Defense in the United Arab Emirates, and during that period, he was also the Chief of Dubai Police Security. 
        </span>
        </ScrollAnimation> 
        </div>
    </div>
    </Layer>
    <Layer className="five_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={fifth} />
        
      </Layer>
    </Layer>
    </Parallax>
    </div>
  )
}

export default Five_Section
