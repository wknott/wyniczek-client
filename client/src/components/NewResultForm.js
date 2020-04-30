import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'

import GameSelect from './GameSelect'
import UserSelect from './UserSelect'
import addButton from '../add-user-button.png';
import deleteButton from '../delete-user-button.png';

function NewResultForm() {
  const [games,setGames] = useState([])
  const [users,setUsers] = useState([])
  const [selectedGame, setSelectedGame] = useState()
  const [numberOfPlayers, setNumberOfPlayers] = useState(2)
  const [scores, setScores] = useState([])
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
  useEffect(()=>{
    console.log(numberOfPlayers)
    const emptyScores = Array.from( {length: numberOfPlayers}, () => ({
      user: null,
      points: []
    }));
    console.log(scores.concat(emptyScores).slice(0,numberOfPlayers))
    setScores(scores.concat(emptyScores).slice(0,numberOfPlayers))
  },[numberOfPlayers])
  useEffect(()=>{
    const emptyScores = Array.from( {length: 2}, () => ({
      user: null,
      points: []
    }));
    setScores(emptyScores)
    setNumberOfPlayers(2)
  },[selectedGame])
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
    <Form.Group controlId="formGameSelect">
      <Form.Label>Wybierz grę</Form.Label>
      <GameSelect selectedGame={selectedGame} setSelectedGame={setSelectedGame} games={games}/>
    </Form.Group>
      {selectedGame !== undefined ?
      <div style={{overflow: 'auto',
        display: 'block',
        tableLayout: 'auto'}}> 
        <Form.Row>
          <Col xs={4}>
            <Button variant="primary" 
              onClick={() => setNumberOfPlayers(numberOfPlayers+1)}
              disabled={numberOfPlayers===selectedGame.maxPlayers}>
              <Image src={addButton} width="auto" height="24" alt="" />
            </Button>
            <Button variant="danger" 
              onClick={() => setNumberOfPlayers(numberOfPlayers-1)}
              disabled={numberOfPlayers===selectedGame.minPlayers}>
              <Image src={deleteButton} width="auto" height="24" alt="" />
            </Button>
          </Col>
          {scores.map((score,index) => (
                <UserSelect  key={index} users={users} score={score} scores={scores} setScores={setScores}/>
          ))}
        </Form.Row>

        {selectedGame.pointFields.map((field,index) => (
          <Form.Row key={index}>
            <Col xs={4}>
              {field}
            </Col>
            {scores.map((score,index) => (
              <Form.Group key={index} as={Col} controlId="formScoreInput">
                <Form.Control style={{minWidth:'50px'}} type="number" value={score.points[index]} key={index}/>
              </Form.Group>
            ))}
          </Form.Row>
        ))}
      </div> 
      : <></>}
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