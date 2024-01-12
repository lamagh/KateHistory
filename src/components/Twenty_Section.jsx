import React from "react";
import "../css/main.css";
import Parallax, { Layer } from "react-parallax-scroll";
import { AppearLayer } from "react-parallax-scroll";
import twenty from "../images/twenty.png";
import ScrollAnimation from "react-animate-on-scroll";

function Twenty_Section() {
  return (
    <div>
      <Parallax className="start">
        <Layer className="twenty_wrapper twenty_bg" settings={{ speed: 0.15 }}>
          <div className="w-100 d-flex justify-content-center">
            <div className="w-50 text-center">
              <ScrollAnimation animateIn="fadeIn">
                <span className="fs-2 text-white fw-bold">
                  H.H Sheikh Mohammed bin Rashid Al Maktoum - Vice President,
                  Prime Minister and Ruler of Dubai, and H.H Sheikh Saif bin
                  Zayed Al Nahyan, Deputy Prime Minister and Minister of
                  Interior, attended the “50th Graduation Ceremony”, which
                  included the graduation of the first and second batches of
                  Female cadet officers.
                </span>
              </ScrollAnimation>
            </div>
          </div>
        </Layer>
        <Layer className="twenty_wrapper" settings={{ speed: 0.15 }}>
          <Layer
            className="d-flex flex-column justify-content-end"
            settings={{ speed: 0.5, type: ["translateY"] }}
          >
            <img src={twenty} />
          </Layer>
        </Layer>
      </Parallax>
    </div>
  );
}

export default Twenty_Section;
