import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import NewGameForm from "./NewGameForm";

export default function NewGameModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Dodaj nową grę
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nowa gra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewGameForm />
        </Modal.Body>
      </Modal>
    </>
  );
}
