import React, {useState, useEffect} from 'react'
import NewUserForm from './NewUserForm'
function Wyniczek(){
  const [users, setUsers] = useState([])
  function loadUsers(){
    fetch('/api/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }
  useEffect(() => {
    loadUsers()
  }, [])
  
  return(
    <div>
      {users.length !== 0 ? 
      users.map((user,index) => (
        <p key={index}>{user.name}</p>)):<></>}
      <NewUserForm/>
    </div>
  )
}
export default Wyniczek