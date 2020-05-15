import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function DeleteModal(props){
  const {show, handleClose, handleDelete, id, warningText} = props
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>{warningText}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => handleDelete(id)}>
          Tak
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Nie
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal