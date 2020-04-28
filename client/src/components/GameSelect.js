import React from 'react'
import Form from 'react-bootstrap/Form'
function GameSelect({selectedGame, setSelectedGame, games}) {
  return(
    <Form.Control value={selectedGame !== undefined ? selectedGame._id : ''} onChange={e => setSelectedGame(games.find(game => game._id === e.target.value ))} as="select">
        <option value=''></option>
        {games.map( game => (
        <option key={game._id} value={game._id}>{game.name}</option>
        ))}
    </Form.Control>
  )
}
export default GameSelect