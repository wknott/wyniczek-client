import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { authHeader } from '../helpers/auth-header';
function ResultsTable(){
  const [results, setResults] = useState([])
  const [show, setShow] = useState(false)
  const [resultId, setResultId] = useState('')
  async function deleteResult(resultId) {
    try {
      const res = await fetch('/api/results/' + resultId, {
        method: 'DELETE'
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
      setResults(results)
    } catch (err) {
      return err
    }
  }
  function handleClick(){
    console.log(results)
  }
  useEffect(()=>{
    loadResults()
  },[])
  return(
    <div>
      {<Button onClick={() => handleClick()}>aaa</Button>
      /* <Table>
        <thead>
          <tr>
            <td>#</td>
            <td>Nazwa</td>
          </tr>
        </thead>
        <tbody>
          {results !== [] ? results.map(
            (result,index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{result.name}</td>
                <td>
                  <Button size="sm" variant="danger" onClick={() => handleClick(result._id)}>X</Button>
                </td>
              </tr>
              )):<></> }
        </tbody>
      </Table> */}
    </div>
  )
}

export default ResultsTable