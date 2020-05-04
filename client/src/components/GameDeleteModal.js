import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function GameDeleteModal(props){
  const {show, handleClose, deleteGame, gameId} = props
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>Czy chcesz usunąć tą grę?</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => deleteGame(gameId)}>
          Tak
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Nie
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GameDeleteModal