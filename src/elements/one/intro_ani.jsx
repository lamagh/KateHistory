import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { Fade, Zoom } from 'react-reveal';


function Intro_Ani() {

  return (
    <div>
       <div className='w-100 d-flex justify-content-center'>
        <div className='w-50 text-center'>
        <ScrollAnimation animateIn='fadeIn'>
        <span className='fs-2 text-white fw-bold'>
        By establishing the Police Training School in 1966, we aimed to 
        qualify police personnel who became the cornerstone in the 
        development and realization of Dubai Police’s vision. 
        </span>
        </ScrollAnimation>
       

       
        </div>

            </div>
    </div>
  )
}

export default Intro_Ani
