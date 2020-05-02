import React from 'react'
import Form from 'react-bootstrap/Form'

function UserSelect(props){
  const {users,score,scores,setScores} = props
  function onChangeScore(e){
    const newScore = {user:e.target.value, points:score.points}
    const newScores = scores.map(s => (s === score)? newScore : s)
    setScores(newScores)
  }
  return(
    <Form.Control style={{minWidth:'80px'}} value={score.user === null? '': score.user._id} onChange={e => onChangeScore(e)} as="select">
        <option value=''></option>
        {users.map((user,index) => (<option key={index} value={user._id}>{user.name}</option>))}
    </Form.Control>
  )
}
export default UserSelect


