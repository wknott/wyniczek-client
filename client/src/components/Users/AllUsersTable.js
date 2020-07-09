import React, { useState, useEffect } from "react";
import UsersTable from "./UsersTable";
import { getAllSortedUsers, getResults } from "../../proxy/api";
export default function AllUsersTable() {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
      setUsers(await getAllSortedUsers());
      setResults(await getResults());
    })();

  }, []);
  return <UsersTable results={results} users={users} />;
}
