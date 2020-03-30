import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function NewUserForm() {
  return(
  <Form>
    <Form.Group controlId="formNewUserName">
      <Form.Label>Nazwa</Form.Label>
      <Form.Control type="text" placeholder="Podaj nazwę" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  
  )
  }
export default NewUserForm;