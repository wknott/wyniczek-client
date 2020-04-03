import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function NewUserForm() {
  const [name,setName] = useState('')
  async function onSubmit(e){
    e.preventDefault()
    const newUser = {name}
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser) 
      })
      const data = await res.json()
      setName('')
      return data
    } catch (err) {
      return err
    }
  }
  return(
  <Form onSubmit={onSubmit}>
    <Form.Group controlId="formNewUserName">
      <Form.Control type="text" placeholder="Podaj nazwę" required value={name} onChange={e => setName(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit" >
      Dodaj
    </Button>
  </Form>
  )
  }
export default NewUserForm