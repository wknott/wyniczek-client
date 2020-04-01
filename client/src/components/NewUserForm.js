import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function NewUserForm() {
  const [user,setUser] = useState({})
  function onSubmit(e){
    e.preventDefault();
    const newUser = { name: user.name}
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: { 'Content-type':'application/json'}
    })
  }
  return(
  <Form onSubmit={onSubmit}>
    <Form.Group controlId="formNewUserName">
      <Form.Control type="text" placeholder="Podaj nazwę" required value={user.name} onChange={setUser}/>
    </Form.Group>
    <Button variant="primary" type="submit" >
      Submit
    </Button>
  </Form>
  )
  }
export default NewUserForm