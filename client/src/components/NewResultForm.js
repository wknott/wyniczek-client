import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NewResultTable from './NewResultTable'
import GameSelect from './GameSelect'
function NewResultForm() {
  const [games,setGames] = useState([])
  const [users,setUsers] = useState([])
  const [selectedGame, setSelectedGame] = useState()
  const [finalResults, setFinalResults] = useState([])
  const [firstPlayer, setFirstPlayer] = useState()
  const [author, setAuthor] = useState()

  async function loadGames(){
    try {
      const res = await fetch('/api/games')
      const games = await res.json()
      setGames(games)
    } catch (err) {
      return err
    }
  }
  async function loadUsers(){
    try {
      const res = await fetch('/api/users')
      const users = await res.json()
      setUsers(users)
    } catch (err) {
      return err
    }
  }
  useEffect(()=>{
    loadGames()
    loadUsers()
  },[])
  // async function onSubmit(e){
  //   e.preventDefault()
  //   const newResult = {name}
  //   try {
  //     const res = await fetch('/api/results', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(newResult) 
  //     })
  //     const data = await res.json()
  //     setName('')
  //     return data
  //   } catch (err) {
  //     return err
  //   }
  // }
  function onSubmit(){
    console.log(finalResults)
  }
  return(
  <Form onSubmit={onSubmit}>
    <Form.Group controlId="formNewResultName">
      <Form.Label>Wybierz grę</Form.Label>
      <GameSelect selectedGame={selectedGame} setSelectedGame={setSelectedGame} games={games}/>
    </Form.Group>

      {selectedGame !== undefined ? <NewResultTable selectedGame={selectedGame} setFinalResults={setFinalResults}/>: <></>}
    <Form.Group controlId="formNewResultName">
      <Form.Label>Wybierz pierwszego gracza</Form.Label>
      <Form.Control value={firstPlayer !== undefined ? firstPlayer._id : ''} onChange={e => setFirstPlayer(users.find(user => user._id === e.target.value ))} as="select" custom>
        <option value=''></option>
        {users.map( user => (
        <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="formNewResultName">
      <Form.Label>Wybierz autora wyniku</Form.Label>
      <Form.Control value={author !== undefined ? author._id : ''} onChange={e => setAuthor(users.find(user => user._id === e.target.value ))} as="select" custom>
        <option value=''></option>
        {users.map( user => (
        <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </Form.Control>
    </Form.Group>
      <Button variant="primary" type="submit" >
      Dodaj wynik
      </Button>
    </Form>

    
  )}
export default NewResultForm