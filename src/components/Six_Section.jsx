import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import sixth from '../images/six.png'
import ScrollAnimation from 'react-animate-on-scroll';

const Six_Section = () => {
  return (
    <div>
      <Parallax className='start'>
    <Layer className="six_wrapper six_bg"settings={{ speed: 0.15 }}>
    <div className='w-100 d-flex justify-content-center'>
        <div className='w-50 text-center'>
        <ScrollAnimation animateIn='fadeIn'>
        <span className='fs-2 text-black fw-bold'>
        The first graduation from the Police Training School also included the first graduation of 17 
        police women who contributed to establishing the values of women’s empowerment in Arab society. 
        </span>
        </ScrollAnimation> 
        </div>
    </div>
    </Layer>
    <Layer className="six_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={sixth} />
        
      </Layer>
    </Layer>

    </Parallax>
    </div>
  )
}

export default Six_Section
