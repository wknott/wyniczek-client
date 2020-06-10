import React, {useState, useEffect} from 'react'
import UsersTable from './UsersTable'
import { authHeader } from "../helpers/auth-header";
export default function UsersStats(){
  const [users, setUsers] = useState([])
  const [results,setResults] = useState([])
  async function loadUsersAndResults (){
    const res = await fetch("/api/users", {
      headers: authHeader(),
    });
    const users = await res.json();
    setUsers(users)
    const resResults = await fetch("/api/results", {
      headers: authHeader(),
    });
    const results = await resResults.json();
    setResults(results)
  }
  useEffect(() => {
    loadUsersAndResults()
  },[])
  return(
    <UsersTable results={results} users={users}/>
  )
}