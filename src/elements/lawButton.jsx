import React from "react";
import { Button, Modal } from "react-bootstrap";

function lawButton({ lawName }) {
  return (
    <div>
      <Button
        variant=""
        onClick={handleShow}
        className="rounded-pill fw-bold text-white fs-5 mt-2 secondary-btn"
      >
        {lawName}
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

export default lawButton;
