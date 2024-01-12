import React from 'react'
import '../css/main.css'
import Parallax, { Layer } from 'react-parallax-scroll'; 
import { AppearLayer } from 'react-parallax-scroll'
import thirteenth from '../images/thirteen.png'
import Intro_Ani from '../elements/two/intro_ani';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Thirteen_Section() {
    const [open, setOpen] = useState(false);
  return (
    <div>
       <Parallax className='start'>
    <Layer className="thirteen_wrapper thirteen_bg"settings={{ speed: 0.15 }}>
        <div>
        <div className='d-flex w-100 justify-content-between'>
          <div class="border-start border-2 tab-line"></div>
          </div>
          <div className='d-flex'>
          <div className='tab_button'>
          <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='rounded-circle tab fw-bold fs-3'
         >
        A
        </Button>
          </div>

         <div>
        <Collapse in={open} dimension="width">
          <div className=' w-75'>
            <span className='text-white fw-bold fs-4'>
            By virtue of this law, a college named ‘Police College’ shall be established in the Emirate of Dubai. 
            Its purpose is to instill principles of education and military training for the preparation, qualification, 
            and training of students to become officers in the police force, holding a Bachelor’s degree in Law and Police. 
            </span>
          </div>
        </Collapse>
          </div>
        </div>

          <div className='d-flex w-100 justify-content-between'>
          <div class="border-start border-2 tab-line"></div>
          </div>
          <div className='d-flex'>
          <div className='tab_button'>
          <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='rounded-circle tab fw-bold fs-3'
         >
        B
        </Button>
          </div>

         <div>
        <Collapse in={open} dimension="width">
          <div className=' w-75'>
            <span className='text-white fw-bold fs-4'>
            Preparing and qualifying the members, including officers, non-commissioned officers, and individuals, to obtain 
            a Bachelor’s degree in Law. 
            </span>
          </div>
        </Collapse>
          </div>
        </div>

          <div className=''>
          <div class="border-start border-2 tab-line"></div>
          </div>
          <div className='d-flex'>
          <div className='tab_button'>
          <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='rounded-circle tab fw-bold fs-3'
         >
        C
        </Button>
          </div>

         <div>
        <Collapse in={open} dimension="width">
          <div className=' w-75'>
            <span className='text-white fw-bold fs-4'>
            Preparing and qualifying holders of university qualifications from various specified disciplines, 
            as determined by the General Commander, to obtain a Diploma in Police Sciences. 

            </span>
          </div>
        </Collapse>
          </div>
        </div>
          <div className=''>
          <div class="border-start border-2 tab-line"></div>
          </div>
        </div>
    </Layer>
    
    <Layer className="thirteen_wrapper thirteen_bg"settings={{ speed: 0.15 }}>
        <div>
        <div className='d-flex w-100 justify-content-between'>
          <div class="border-start border-2 tab-line"></div>
          </div>
          <div className='d-flex'>
          <div className='tab_button'>
          <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='rounded-circle tab fw-bold fs-3'
         >
        D
        </Button>
          </div>

         <div>
        <Collapse in={open} dimension="width">
          <div className=' w-75'>
            <span className='text-white fw-bold fs-4'>
            By virtue of this law, a college named ‘Police College’ shall be established in the Emirate of Dubai. 
            Its purpose is to instill principles of education and military training for the preparation, qualification, 
            and training of students to become officers in the police force, holding a Bachelor’s degree in Law and Police. 
            </span>
          </div>
        </Collapse>
          </div>
        </div>

          <div className='d-flex w-100 justify-content-between'>
          <div class="border-start border-2 tab-line"></div>
          </div>
          <div className='d-flex'>
          <div className='tab_button'>
          <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='rounded-circle tab fw-bold fs-3'
         >
        E
        </Button>
          </div>

         <div>
        <Collapse in={open} dimension="width">
          <div className=' w-75'>
            <span className='text-white fw-bold fs-4'>
            Preparing and qualifying the members, including officers, non-commissioned officers, and individuals, to obtain 
            a Bachelor’s degree in Law. 
            </span>
          </div>
        </Collapse>
          </div>
        </div>

          <div className=''>
          <div class="border-start border-2 tab-line"></div>
          </div>
          <div className='d-flex'>
          <div className='tab_button'>
          <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='rounded-circle tab fw-bold fs-3'
         >
        F
        </Button>
          </div>

         <div>
        <Collapse in={open} dimension="width">
          <div className=' w-75'>
            <span className='text-white fw-bold fs-4'>
            Preparing and qualifying holders of university qualifications from various specified disciplines, 
            as determined by the General Commander, to obtain a Diploma in Police Sciences. 

            </span>
          </div>
        </Collapse>
          </div>
        </div>
          <div className=''>
          <div class="border-start border-2 tab-line"></div>
          </div>
        </div>
    </Layer>

    <Layer className="thirteen_wrapper" settings={{ speed: 0.15 }}>
    <Layer
        className="d-flex flex-column justify-content-end"
        settings={{ speed: 0.5, type: ["translateY"] }}
        
      >
        <img src={thirteenth} />
        
      </Layer>
    </Layer>
  
    </Parallax>
    </div>
  )
}

export default Thirteen_Section
