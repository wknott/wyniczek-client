import React, {useState, useEffect} from 'react'
import NewUserForm from './NewUserForm'
function Wyniczek(){
  const [users, setUsers] = useState(0)
  useEffect(() => {
    fetch('/api/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  console.log(users)
  return(
    <div>
      <p>{users['name']}</p>
      <NewUserForm/>
    </div>
  )
}
export default Wyniczek