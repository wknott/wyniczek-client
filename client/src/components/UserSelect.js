import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

function UserSelect(props){
  const {users,score,scores,setScores} = props
  function onChangeScore(e){
    const newScore = {user:e.target.value, points:score.points}
    const newScores = scores.map(s => (s === score)? newScore : s)
    setScores(newScores)
  }
  return(
    <Col>
      <Form.Control style={{minWidth:'50px'}} value={score.user === null? '': score.user._id} onChange={e => onChangeScore(e)} as="select">
          <option value=''></option>
          {users.map(user => (<option key={user._id} value={user._id}>{user.name}</option>))}
      </Form.Control>
    </Col>
  )
}
export default UserSelect


