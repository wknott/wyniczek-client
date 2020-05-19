import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import DeleteModal from './DeleteModal'
import ResultModal from './ResultModal'
import { authHeader } from '../helpers/auth-header';
import {formatDateStringShort,calculateWinner,compareObjects} from '../logic/utilities.js'
function ResultsTable(){
  const [results, setResults] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showResultModal, setShowResultModal] = useState(false)
  const [selectedResult, setSelectedResult] = useState({})
  const [winners, setWinners] = useState([])
  const [sortFlag, setSortFlag] = useState(true)
  async function deleteResult(resultId) {
    try {
      const res = await fetch('/api/results/' + resultId, {
        method: 'DELETE',
        headers: authHeader()
      })
      setShowDeleteModal(false)
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
      const sortedResults = results.sort(compareObjects('date','desc'))
      setWinners(calculateWinner(sortedResults))
      setResults(sortedResults)
    } catch (err) {
      return err
    }
  }
  function handleShowDeleteModal(result){
    setShowDeleteModal(true)
    setSelectedResult(result)
  }
  function handleShowResultModal(result){
    setSelectedResult(result)
    setShowResultModal(true)
  }
  function sortDate(){
      const sortedResults = results.sort(compareObjects('date',sortFlag?'asc':'desc'))
      setWinners(calculateWinner(sortedResults))
      setResults(sortedResults)
      setSortFlag(!sortFlag)
  }
  useEffect(()=>{
    loadResults()
  },[])
  return(
    <div>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <td>#</td>
            <td>Gra</td>
            <td>1. Gracz</td>
            <td>Zwycięzca</td>
            <td onClick={() => sortDate()}>Data</td>
          </tr>
        </thead>
        <tbody>
          {results.map(
            (result,index) => (
              <tr key={index} onClick={() => handleShowResultModal(result)}>
                <td>{index + 1}</td>
                <td className="hidden-lg">{result.game.name.length > 10? result.game.name.substring(0, 9) + '...': result.game.name}</td>
                <td className="hidden-sm">{result.game.name}</td>
                <td>{result.scores.find((score,index) => index === 0).user.name}</td>
                <td>{winners[index]}</td>
                <td>{formatDateStringShort(result.date)}</td>
                {0?<td>
                  <Button size="sm" disabled variant="danger" onClick={() => handleShowDeleteModal(result)}>X</Button>
                </td>:<></>}
              </tr>
              ))}
        </tbody>
      </Table>
      <ResultModal
      show={showResultModal}
      handleClose={() => setShowResultModal(false)} 
      result={selectedResult}
      />
      <DeleteModal 
      show={showDeleteModal} 
      handleClose={() => setShowDeleteModal(false)} 
      handleDelete={deleteResult} 
      id={selectedResult._id}
      warningText={'Czy chcesz usunąć ten wynik?'}
      />
    </div>
  )
}

export default ResultsTable