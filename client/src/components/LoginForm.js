import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function LoginForm() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(e){
    e.preventDefault()
    const newUser = { username: name, password: password }
    try {
      const res = await fetch('/api/users/authenticate', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser) 
      })
      
      const data = await res.json()
      
      //TODO: nie zapisywać jeżeli nie udało się uwierzytelnić
      localStorage.setItem('user', JSON.stringify(data));

      //setName('')
      return data
    } catch (err) {
      return err
    }

  }
  return(
  <Form onSubmit={onSubmit}>
    <Form.Group controlId="formNewUserName">
      <Form.Label>Nazwa</Form.Label>
      <Form.Control type="text" placeholder="Podaj nazwę" required value={name} onChange={e => setName(e.target.value)}/>
    </Form.Group>
    <Form.Group controlId="formNewUserPassword">
      <Form.Label>Hasło</Form.Label>
      <Form.Control type="password" placeholder="Podaj hasło" value={password} onChange={e => setPassword(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit" >
      Zaloguj
    </Button>
    <Button variant="secondary" onClick={handleWyloguj}>
      Wyloguj
    </Button>
  </Form>
  )
  }

  async function handleWyloguj(e){
    localStorage.removeItem('user');
  }
export default LoginForm