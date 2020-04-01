import React, {useEffect, useState} from 'react'
function UsersTable(){
  const [users,setUsers] = useState([])
  function loadUsers(){
    fetch('/api/users')
    .then(res=>res.json())
    .then(users=>{setUsers(users)})
  }
  useEffect(()=>{
    loadUsers()
  },[])
  return(
    <div>
    {users !== []?
    users.map((user,index) => (<p key={index}>{user.name}</p>))
    :<></> 
    }
    </div>
    
  )
}

export default UsersTable