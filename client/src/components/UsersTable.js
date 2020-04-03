import React, {useEffect, useState} from 'react'
function UsersTable(){
  const [users,setUsers] = useState([])
  async function loadUsers(){
    try {
      const res = await fetch('/api/users')
      const users = await res.json()
      setUsers(users)
    } catch (err) {
      return err
    }
  }
  useEffect(()=>{
    loadUsers()
  },[])
  return(
    <div>
      {users !== [] ? users.map((user,index) => (<p key={index}>{user.name}</p>)):<></> }
    </div>
  )
}

export default UsersTable