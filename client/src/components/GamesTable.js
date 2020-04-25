import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import GameDeleteModal from './GameDeleteModal'
function GamesTable(){
  const [games, setGames] = useState([])
  const [show, setShow] = useState(false)
  const [gameId, setGameId] = useState('')
  async function deleteGame(gameId) {
    try {
      const res = await fetch('/api/games/' + gameId, {
        method: 'DELETE'
      })
      setShow(false)
      await loadGames()
      return res
    } catch (err) {
      return err
    }
  }
  async function loadGames(){
    try {
      const res = await fetch('/api/games')
      const games = await res.json()
      setGames(games)
    } catch (err) {
      return err
    }
  }
  function handleClick(gameId){
    setShow(true)
    setGameId(gameId)
  }
  useEffect(()=>{
    loadGames()
  },[])
  return(
    <div>
      <Table>
        <thead>
          <tr>
            <td>#</td>
            <td>Nazwa</td>
            <td>Liczba graczy</td>
            <td>Kategorie punktów</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {games !== [] ? games.map(
            (game,index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{game.name}</td>
                <td>{game.minPlayers} - {game.maxPlayers}</td>
                <td>{game.pointFields.map(
                  (field,index) => (
                   <p key={index}>{field}</p>
                    ))}
                    </td>
                <td>
                  <Button size="sm" variant="danger" onClick={() => handleClick(game._id)}>X</Button>
                </td>
              </tr>
              )):<></> }
        </tbody>
      </Table>
      <GameDeleteModal show={show} handleClose={() => setShow(false)} deleteGame={deleteGame} gameId={gameId}/>
    </div>
  )
}

export default GamesTable