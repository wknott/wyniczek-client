import React from 'react'
import UsersTable from './UsersTable'
import NewUserForm from './NewUserForm'
function Users() {
  return (
    <div>
      <NewUserForm/>
      <UsersTable/>
    </div>
  )
}

export default Users