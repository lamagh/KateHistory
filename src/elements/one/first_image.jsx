
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'

function First_image() {
  return (
    <div>
       <Parallax pages={1} class="animation">

        <ParallaxLayer offset={0} speed={0.25}>
        <div class="animation_layer parallax" id="one_main"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
        <div class="animation_layer parallax" id="one_img"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
        <div class="animation_layer parallax" id="one_img"></div>
        </ParallaxLayer>

        </Parallax>
    </div>
  )
}

export default First_image
