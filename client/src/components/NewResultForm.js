import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NewResultTable from './NewResultTable'
function NewResultForm() {
  const [games,setGames] = useState([])
  const [selectedGame, setSelectedGame] = useState()
  const [finalResults, setFinalResults] = useState([])
  async function loadGames(){
    try {
      const res = await fetch('/api/games')
      const games = await res.json()
      setGames(games)
    } catch (err) {
      return err
    }
  }
  useEffect(()=>{
    loadGames()
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
      <Form.Control value={selectedGame !== undefined ? selectedGame._id : ''} onChange={e =>     setSelectedGame(games.find(game => game._id === e.target.value ))} as="select" custom>
        <option value=''></option>
        {games.map( game => (
        <option key={game._id} value={game._id}>{game.name}</option>
        ))}
      </Form.Control>
    </Form.Group>
    
      {selectedGame !== undefined ? <NewResultTable selectedGame={selectedGame} setFinalResults={setFinalResults}/>: <></>}
      <Button variant="primary" type="submit" >
      Dodaj wynik
      </Button>
    </Form>

    
  )}
export default NewResultForm