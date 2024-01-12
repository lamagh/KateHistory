import React from "react";
import { useState } from "react";
import "../css/main.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import law from "../images/law.png";

function LawBanner({ lawText, lawBtn }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="law_banner">
      <span className="text-black fw-bold fs-4">{lawText}</span>
      <Button
        variant=""
        onClick={handleShow}
        className="rounded-pill fw-bold text-white fs-5 mt-2 secondary-btn"
      >
        {lawBtn}
      </Button>

      <Modal
        show={show}
        centered
        size="lg"
        onHide={handleClose}
        className="modalblur"
        backdropClassName="blur"
      >
        <Modal.Body>
          <div className="">
            <img src={law} />
          </div>
        </Modal.Body>
        <div></div>
      </Modal>
    </div>
  );
}

export default LawBanner;
