import React from 'react'
function UserSelect(props){
  const {users,score,scores,setScores} = props
  function onChangeScore(e){
    const newScore = {user:e.target.value, points:score.points}
    const newScores = scores.map(s => (s === score)? newScore : s)
    setScores(newScores)
  }
  return(
    <select value={score.user === null? '': score.user._id} onChange={e => onChangeScore(e)}>
      <option></option>
      {users.map(user => (<option key={user._id} value={user._id}>{user.name}</option>))}
    </select>
  )
}
export default UserSelect


