import React from 'react'
import Form from 'react-bootstrap/Form'

function UserSelect(props){
  const {index, users,score,scores,setScores,lastUsers} = props
  function onChangeScore(e){
    const selectedUser = users.find(user => user.name === e.target.value)
    const newScore = {user:selectedUser.id, points:score.points}
    const newScores = scores.map(s => (s === score)? newScore : s)
    setScores(newScores)
  }
  const defaultUser = lastUsers === undefined || index >= lastUsers.length?'':lastUsers[index]
  return(
    <Form.Control style={{minWidth:'80px'}} value={score.user === null? '': score.user._id} onChange={e => onChangeScore(e)} as="select">
      <option value={defaultUser._id}>{defaultUser.name}</option>
      {users.map((user,index) => (<option key={index} value={user._id}>{user.name}</option>))}
    </Form.Control>
  )
}
export default UserSelect


