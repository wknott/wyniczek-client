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

  function createScores(numberOfScores,numberOfFields){
    const emptyScores = Array.from( {length: numberOfScores}, () => ({
      user: null,
      points: Array.from({length: numberOfFields}, () => (null))
    }));
    setScores(scores.concat(emptyScores).slice(0,numberOfScores))
  }
  
  function selectGame(e){
    const newSelectedGame = games.find(game => game._id === e.target.value)
    setSelectedGame(newSelectedGame)
    newSelectedGame !== undefined ? createScores(2,newSelectedGame.pointFields.length) :
    setNumberOfPlayers(2)
  }
  

  function onChangePoints (e, index, selectedScore){
    const newValue = parseInt(e.target.value, 10) || null;
    const newPoints = selectedScore.points.map((s,i)=>(i===index) ? newValue : s)
    const newScore = {user:selectedScore.user, points:newPoints}
    const newScores = scores.map(s => (s === selectedScore)? newScore : s)
    setScores(newScores)
  };

  function onChangeResult (e,selectedScore){
    const newValue = parseInt(e.target.value, 10) || null;
    const newScore = {user:selectedScore.user, points:[newValue]}
    const newScores = scores.map(s => (s === selectedScore)? newScore : s)
    setScores(newScores)
  };

  function addPlayer(){
    createScores(numberOfPlayers+1,selectedGame.pointFields.length)
    setNumberOfPlayers(numberOfPlayers+1)
  }
  function deletePlayer(){
    createScores(numberOfPlayers-1,selectedGame.pointFields.length)
    setNumberOfPlayers(numberOfPlayers-1)
  }
  
  useEffect(()=>{
    
  },[selectedGame])
  async function onSubmit(e){
    e.preventDefault()
    const authToken = authHeader()['Authorization']
    const newResult = {
      game: selectedGame._id,
      scores: scores,
      author: JSON.parse(localStorage.user).id,
    }
    console.log(newResult)
    try {
      const res = await fetch('/api/results', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': authToken
        },
        body: JSON.stringify(newResult) 
      })
      const data = await res.json()
      window.location.reload(false);
      return data
    } catch (err) {
      return err
    }
  }
  return(
  <Form onSubmit={e => onSubmit(e)}>
    <Form.Group controlId="formGameSelect">
      <GameSelect selectedGame={selectedGame} selectGame={selectGame} games={games}/>
    </Form.Group>
    {selectedGame !== undefined ?
        <Table responsive> 
          <thead>
            <tr>
              <th>
                <Button variant="primary" block
                  onClick={() => addPlayer()}
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
                  onClick={() => deletePlayer()}
                  disabled={numberOfPlayers===selectedGame.minPlayers}>
                  <Image src={deleteButton} width="auto" height="15" alt="" />
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedGame.pointFields.map((field,pointFieldIndex) => (
              <tr key={pointFieldIndex}>
                <td>
                  {field}
                </td>
                {scores.map((score,index) => (
                  <td key={index}>
                    <Form.Group controlId="formScoreInput">
                      <Form.Control style={{minWidth:'50px'}} 
                      type="number" value={score.points[pointFieldIndex] || ''}
                      onChange={e => onChangePoints(e,pointFieldIndex,score)}/>
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
                  <Form.Control style={{minWidth:'50px'}} 
                  type="number" value={score.points[0] || ''} key={index}
                  onChange={e => onChangeResult(e,score)} />
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