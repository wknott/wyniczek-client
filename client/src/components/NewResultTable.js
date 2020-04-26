import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import UserSelect from './UserSelect'
function NewResultTable(props){
  const {selectedGame} = props
  const [users, setUsers] = useState([])
  const [numberOfPlayers, setNumberOfPlayers] = useState(2)
  const [scores, setScores] = useState([])
  async function loadUsers(){
    try {
      const res = await fetch('/api/users')
      const users = await res.json()
      setUsers(users)
    } catch (err) {
      return err
    }
  }
  function loadScores(length){
    const emptyScores = Array.from( {length}, () => ({
      user: null,
      points: []
    }));
    const newScores = scores.concat(emptyScores).slice(0, length);
    setScores(newScores)
    setScores(emptyScores)
  }
  function addUser(){
    if (numberOfPlayers + 1 <= selectedGame.maxPlayers){
      loadScores(numberOfPlayers+1)
      setNumberOfPlayers(numberOfPlayers+1)
  }}
  function deleteUser(){
    if (numberOfPlayers - 1 >= selectedGame.minPlayers){
      loadScores(numberOfPlayers-1)
      setNumberOfPlayers(numberOfPlayers-1)
  }}
  useEffect(()=>{
    loadUsers()
    loadScores(numberOfPlayers)
  },[])
  
  return(
    <div>
      <Table responsive>
        <thead>
          <tr>
            <td><Button variant="primary" onClick={addUser}>Dodaj gracza</Button></td>
            {scores.map((score,index) => (<td key={index}>
              <UserSelect users={users} score={score}/>
            </td>))}
            <td><Button variant="danger" onClick={deleteUser}>Usuń gracza</Button></td>
          </tr>
        </thead>
        <tbody>
          {selectedGame.pointFields.map((kategory,index) => (
            <tr key={index}>
              <td>{kategory}</td>
              <td></td>
              <td></td>
              </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default NewResultTable