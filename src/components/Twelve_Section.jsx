import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import twelveth from '../images/twelve.png'
import ScrollAnimation from 'react-animate-on-scroll';

function Twelve_Section() {
  return (
    <div>
    <Parallax className='start'>
    <Layer className="twelve_wrapper twelve_bg"settings={{ speed: 0.15 }}>
    <div className='w-100 d-flex justify-content-center'>
        <div className='w-75 text-center'>
        <ScrollAnimation animateIn='fadeIn'>
        <span className='fs-2 text-white fw-bold'>
        Dubai Police Academy began implementing a unique legal program in 1987, specifically designed 
        for aspiring students seeking a Bachelor’s degree in Law and a Diploma in Police Sciences. Subsequently, 
        employees who wished to pursue their university studies and obtain a Bachelor’s degree in Law were allowed 
        to enroll, with the aim of making the Student Officer Program the core foundation of this initiative
        </span>
        </ScrollAnimation> 
        </div>
    </div>
    </Layer>
    <Layer className="twelve_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={twelveth} />
        
      </Layer>
    </Layer>
  
    </Parallax>
    </div>
  )
}

export default Twelve_Section
