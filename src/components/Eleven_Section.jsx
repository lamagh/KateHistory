import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import eleventh from '../images/eleven.png'
import ScrollAnimation from 'react-animate-on-scroll';

function Eleven_Section() {
  return (
    <div>
         <Parallax className='start'>
    <Layer className="eleven_wrapper eleven_bg"settings={{ speed: 0.15 }}>
    <div className='w-100 d-flex justify-content-center'>
        <div className='w-50 text-center'>
        <ScrollAnimation animateIn='fadeIn'>
        <span className='fs-2 text-white fw-bold'>
        This year 1988, H.H Sheikh Maktoum bin Rashid Al Maktoum, Crown Prince of Dubai, 
        inaugurated the Dubai Police College, heralding a new era in the field of education 
        and security skills. The ceremony witnessed the presence of prominent figures, 
        including H.H Sheikh Khalifa bin Zayed Al Nahyan, Crown Prince of Abu Dhabi
        </span>
        </ScrollAnimation> 
        </div>
    </div>
    </Layer>
    <Layer className="eleven_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={eleventh} />
        
      </Layer>
    </Layer>
  
    </Parallax>
    </div>
  )
}

export default Eleven_Section
