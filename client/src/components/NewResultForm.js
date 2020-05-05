import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'

import GameSelect from './GameSelect'
import UserSelect from './UserSelect'
import addButton from '../add-user-button.png';
import deleteButton from '../delete-user-button.png';

import { authHeader } from '../helpers/auth-header';

function NewResultForm() {
  const [games,setGames] = useState([])
  const [users,setUsers] = useState([])
  const [selectedGame, setSelectedGame] = useState()
  const [numberOfPlayers, setNumberOfPlayers] = useState(2)
  const [scores, setScores] = useState([])
  const [finalResults, setFinalResults] = useState([])

  async function loadGames(){
    try {
      const res = await fetch('/api/games', {
        headers: authHeader()
      })
      const games = await res.json()
      setGames(games)
    } catch (err) {
      return err
    }
  }
  async function loadUsers(){
    try {
      const res = await fetch('/api/users', {
        headers: authHeader()
      })
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
  // function onChangePoints (){
  //   // const newValue = parseInt(e.target.value, 10) || null;
  //   // const newScores = scores.map((score, i) =>
  //   //   i === index
  //   //     ? { ...score, points: { ...score.points, [index]: newValue } }
  //   //     : score
  //   // )
  //   // setScores(newScores)
  // };
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
  async function onSubmit(e){
    setFinalResults(scores)

    // e.preventDefault()
    // const newResult = {name}
    // try {
    //   const res = await fetch('/api/results', {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(newResult) 
    //   })
    //   const data = await res.json()
    //   setName('')
    //   return data
    // } catch (err) {
    //   return err
    // }
  }
  return(
  <Form onSubmit={onSubmit}>
    <Form.Group controlId="formGameSelect">
      <GameSelect selectedGame={selectedGame} setSelectedGame={setSelectedGame} games={games}/>
    </Form.Group>
    {selectedGame !== undefined ?
        <Table responsive> 
          <thead>
            <tr>
              <th>
                <Button variant="primary" block
                  onClick={() => setNumberOfPlayers(numberOfPlayers+1)}
                  disabled={numberOfPlayers===selectedGame.maxPlayers}>
                  <Image src={addButton} width="auto" height="15" alt="" />
                </Button>
              </th>
              {scores.map((score,index) => (
                <th key={index}>
                <UserSelect index={index} users={users} score={score} scores={scores} setScores={setScores}/>
                </th>
              ))}
              <th>
                <Button variant="danger" block
                  onClick={() => setNumberOfPlayers(numberOfPlayers-1)}
                  disabled={numberOfPlayers===selectedGame.minPlayers}>
                  <Image src={deleteButton} width="auto" height="15" alt="" />
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedGame.pointFields.map((field,index) => (
              <tr key={index}>
                <td>
                  {field}
                </td>
                {scores.map((score,index) => (
                  <td key={index}>
                    <Form.Group controlId="formScoreInput">
                      <Form.Control style={{minWidth:'50px'}} 
                      type="number" value={score.points[index]} key={index}/>
                    </Form.Group>
                  </td>
                ))} 
              </tr>
            ))}
            {selectedGame.pointFields.length === 0? 
            <tr>
            <td>Wynik</td>
            {scores.map((score,index) => (
              <td key={index}>
                <Form.Group controlId="formScoreInput">
                  <Form.Control style={{minWidth:'50px'}} type="number" value={score.points[index]} key={index}/>
                </Form.Group>
              </td>
            ))} 
          </tr>
          :<tr>
          <td>Wynik</td>
          {scores.map((score,index) => (
            <td key={index}>
            {Object.values(score.points).reduce((x, y) => x + y, 0)}
          </td>
          ))} 
        </tr>}
          </tbody>
        </Table>
      : <></>}
      <Button variant="primary" type="submit" >
      Dodaj wynik
      </Button>
    </Form>
  )}
export default NewResultForm