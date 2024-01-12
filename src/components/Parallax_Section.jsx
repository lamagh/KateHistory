import React from "react";
import "../css/main.css";
import Parallax, { Layer } from "react-parallax-scroll";
import topImage from "./topImage";
import ScrollAnimation from "react-animate-on-scroll";
import LawBanner from "../elements/LawBanner";
import ImportantModal from "../elements/ImportantModal";

function Parallax_Section({
  sectionClass,
  sectionText,
  innerImage,
  lawButton,
  lawText,
  impImg,
  modalText,
  modalImg,
  lawName,
}) {
  return (
    <div>
      <Parallax>
        <Layer className={"wrapper " + sectionClass} settings={{ speed: 0.15 }}>
          {sectionText && (
            <div className="w-100 d-flex justify-content-center">
              <div className="w-75 text-center">
                <ScrollAnimation animateIn="fadeIn">
                  <span className="fs-2 text-white fw-bold">{sectionText}</span>
                  {lawName && <lawButton lawName={lawName} />}
                </ScrollAnimation>
              </div>
            </div>
          )}

          <Layer
            className="d-flex flex-column justify-content-end"
            settings={{ speed: 0.5, type: ["translateY"] }}
          >
            <div className="markBtn">
              {modalImg && (
                <ImportantModal
                  impImg={impImg}
                  modalImage={modalImg}
                  modalText={modalText}
                />
              )}
            </div>
            <div>
              <img src={innerImage} />
            </div>
            <div className="position-relative">
              {lawText && <LawBanner lawText={lawText} lawBtn={lawButton} />}
            </div>
          </Layer>
        </Layer>
      </Parallax>
    </div>
  );
}

export default Parallax_Section;
