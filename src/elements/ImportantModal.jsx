import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import markSelected from "../images/mark_selected.gif";

function ImportantModal({ impImg, modalImage, modalText }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function over(e) {
    e.currentTarget.src = markSelected;
  }
  function out(e) {
    e.currentTarget.src = impImg;
  }
  return (
    <div>
      <Button variant="" className="imp_btn" onClick={handleShow}>
        <img src={impImg} onMouseOver={over} onMouseOut={out} />
      </Button>

      <Modal show={show} size="lg" centered onHide={handleClose}>
        <Modal.Body>
          <img src={modalImage} />
          <span className="fw-normal fs-6" mt-4>
            {modalText}
          </span>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ImportantModal;
