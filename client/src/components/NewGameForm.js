import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function NewGameForm() {
  const [name,setName] = useState('')
  const [minPlayers, setMinPlayers] = useState(2)
  const [maxPlayers, setMaxPlayers] = useState(4)
  const [pointFields, setPointFields] = useState([])
  async function onSubmit(e){
    e.preventDefault()
    if(pointFields === [])
      setPointFields(['Suma'])
    console.log(pointFields)
    const newGame = {name,minPlayers,maxPlayers,pointFields}
    console.log(newGame)
    try {
      const res = await fetch('/api/games', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newGame) 
      })
      const data = await res.json()
      setName('')
      setMinPlayers(2)
      setMaxPlayers(4)
      setPointFields([])
      return data
    } catch (err) {
      return err
    }
  }
  return(
  <Form onSubmit={onSubmit}>
    <Form.Group controlId="name">
      <Form.Control type="text" placeholder="Podaj nazwę" required value={name} onChange={e => setName(e.target.value)}/>
    </Form.Group>
    <Form.Group controlId="minPlayers">
      <Form.Control type="number" required value={minPlayers} onChange={e => setMinPlayers(e.target.value)}/>
    </Form.Group>
    <Form.Group controlId="maxPlayers">
      <Form.Control type="number" required value={maxPlayers} onChange={e => setMaxPlayers(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit" >
      Dodaj
    </Button>
  </Form>
  )
  }
export default NewGameForm