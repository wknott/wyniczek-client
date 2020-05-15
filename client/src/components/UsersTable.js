import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import UserDeleteModal from './UserDeleteModal'
function UsersTable(){
  const [users, setUsers] = useState([])
  const [show, setShow] = useState(false)
  const [userId, setUserId] = useState('')
  async function deleteUser(userId) {
    try {
      const res = await fetch('/api/users/' + userId, {
        method: 'DELETE'
      })
      setShow(false)
      await loadUsers()
      return res
    } catch (err) {
      return err
    }
  }
  async function loadUsers(){
    try {
      const res = await fetch('/api/users')
      const users = await res.json()
      setUsers(users)
    } catch (err) {
      return err
    }
  }
  function handleClick(userId){
    setShow(true)
    setUserId(userId)
  }
  useEffect(()=>{
    loadUsers()
  },[])
  return(
    <div>
      <Table>
        <thead>
          <tr>
            <td>#</td>
            <td>Nazwa</td>
          </tr>
        </thead>
        <tbody>
          {users !== [] ? users.map(
            (user,index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>
                  <Button size="sm" variant="danger" onClick={() => handleClick(user._id)}>X</Button>
                </td>
              </tr>
              )):<></> }
        </tbody>
      </Table>
      <DeleteModal 
      show={show} 
      handleClose={() => setShow(false)} 
      handleDelete={deleteUser} 
      id={userId}
      warningText={'Czy chcesz usunąć tego użytkownika?'}
      />
      </div>
  )
}

export default UsersTable