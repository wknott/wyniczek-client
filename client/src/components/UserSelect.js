import React, {useState} from 'react'
function UserSelect(props){
  const {users,score} = props
  return(
    <select value={score.user === null? '': score.user._id} onChange={e => onChangeScore(e)}>
      <option></option>
      {users.map(user => (<option key={user._id} value={user._id}>{user.name}</option>))}
    </select>
  )
}
export default UserSelect


