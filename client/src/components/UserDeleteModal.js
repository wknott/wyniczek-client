import React from 'react'
import Modal from 'react-bootstrap/modal'
import Button from 'react-bootstrap/button'
function UserDeleteModal(props){
  const {show, handleClose, deleteUser, userId} = props
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>Czy chcesz usunąć tego użytkownika?</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => deleteUser(userId)}>
          Tak
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Nie
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserDeleteModal