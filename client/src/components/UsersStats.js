import React, { useState, useEffect } from "react";
import UsersTable from "./UsersTable";
import { authHeader } from "../helpers/auth-header";
import { getAllSortedUsers } from "../proxy/api";
export default function UsersStats() {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState([]);
  async function getResults() {
    const resResults = await fetch("/api/results", {
      headers: authHeader(),
    });
    const results = await resResults.json();
    setResults(results);
  }
  useEffect(() => {
    (async () => {
      setUsers(await getAllSortedUsers());
      getResults();
    })();

  }, []);
  return <UsersTable results={results} users={users} />;
}
