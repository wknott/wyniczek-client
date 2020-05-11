import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import GameDeleteModal from './GameDeleteModal'
import { authHeader } from '../helpers/auth-header';

function GamesTable(){
  const [games, setGames] = useState([])
  const [show, setShow] = useState(false)
  const [gameId, setGameId] = useState('')

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
  
  async function deleteGame(gameId) {
    try {
      const res = await fetch('/api/games/' + gameId, {
        method: 'DELETE',
        headers: authHeader()
      })
      setShow(false)
      await loadGames()
      return res
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
                {game.minPlayers === game.maxPlayers?
                <td>{game.minPlayers}</td>
                : <td>{game.minPlayers} - {game.maxPlayers}</td>}
                <td>
                  {game.pointFields.length > 0 ?
                    <Accordion>
                    <Accordion.Toggle as={Button} size='sm' variant="primary" eventKey="0">
                      Zobacz kategorie
                    </Accordion.Toggle>
                      {game.pointFields.map(
                        (field,index) => (<Accordion.Collapse key={index} eventKey="0">
                        <p >{field}</p>
                        </Accordion.Collapse>
                          ))}
                  </Accordion> : <></>
                }
                  
                </td>
                <td>
                  <Button disabled size="sm" variant="danger" onClick={() => handleClick(game._id)}>X</Button>
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