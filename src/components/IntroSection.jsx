import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import '../css/main.css'
import 'bootstrap/dist/css/bootstrap.css'

function IntroSection() {
  return (
    <div className='screen_section bg-black min-vh-100 d-flex justify-content-center flex-column align-items-center'>
      <div className='welcome_wrapper w-75'>
      <TypeAnimation
        splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
        sequence={[
          '“We met on this historic day, the second of December 1971, to fulfill the aspirations of our will and the will of our people in declaring the establishment of the United Arab Emirates as an independent” and sovereign state.',
          20000,
          '',
        ]}
        speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
        omitDeletionAnimation={true}
        style={{ fontSize: '2.1rem', display: 'block', minHeight: '200px' }}
        repeat={Infinity}
        className='text-white text-center w-75 fw-bold'
      />


            </div>
    
    </div>
  )
}

export default IntroSection
