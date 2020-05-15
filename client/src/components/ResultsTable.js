import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import DeleteModal from './DeleteModal'
import { authHeader } from '../helpers/auth-header';
import {formatDateStringShort,calculateWinner} from '../logic/utilities.js'
function ResultsTable(){
  const [results, setResults] = useState([])
  const [show, setShow] = useState(false)
  const [resultId, setResultId] = useState('')
  const [winners, setWinners] = useState([])
  async function deleteResult(resultId) {
    try {
      const res = await fetch('/api/results/' + resultId, {
        method: 'DELETE',
        headers: authHeader()
      })
      setShow(false)
      await loadResults()
      return res
    } catch (err) {
      return err
    }
  }
  async function loadResults(){
    try {
      const res = await fetch('/api/results', {
        headers: authHeader()
      })
      const results = await res.json()
      setWinners(calculateWinner(results))
      setResults(results)
    } catch (err) {
      return err
    }
  }
  function handleClick(gameId){
    setShow(true)
    setResultId(gameId)
  }
  useEffect(()=>{
    loadResults()
  },[])
  return(
    <div>
      <Table>
        <thead>
          <tr>
            <td>#</td>
            <td>Gra</td>
            <td>Pierwszy gracz</td>
            <td>Zwycięzca</td>
            <td>Data</td>
          </tr>
        </thead>
        <tbody>
          {results.map(
            (result,index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{result.game.name}</td>
                <td>{result.scores.find((score,index) => index === 0).user.name}</td>
                <td>{winners[index]}</td>
                <td>{formatDateStringShort(result.date)}</td>
                <td>
                  <Button size="sm" disabled variant="danger" onClick={() => handleClick(result._id)}>X</Button>
                </td>
              </tr>
              ))}
        </tbody>
      </Table>
      <DeleteModal 
      show={show} 
      handleClose={() => setShow(false)} 
      handleDelete={deleteResult} 
      id={resultId}
      warningText={'Czy chcesz usunąć ten wynik?'}
      />
    </div>
  )
}

export default ResultsTable