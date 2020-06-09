import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
// import DeleteModal from './DeleteModal'
import { authHeader } from "../helpers/auth-header";
import { getNumberOfResults, compareObjects } from "../logic/utilities";
function UsersTable() {
  const [users, setUsers] = useState([]);
  async function loadUsers() {
    try {
      const res = await fetch("/api/users", {
        headers: authHeader(),
      });
      const users = await res.json();
      const resResults = await fetch("/api/results", {
        headers: authHeader(),
      });
      const results = await resResults.json();
      const usersWithNumberOfResults = users.map((user) => {
        const numberOfResults = getNumberOfResults(
          user,
          results
        );

        return { ...user, numberOfResults:numberOfResults[0], numberOfWins:numberOfResults[1] };
      });
      console.log(usersWithNumberOfResults)
      const sortedUsers = usersWithNumberOfResults.sort(
        compareObjects("numberOfResults", "desc")
      );
      setUsers(sortedUsers);
    } catch (err) {
      return err;
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h3>Tabela użytkowników</h3>
      <Table>
        <thead>
          <tr>
            <td>#</td>
            <td>Nazwa</td>
            <td>Liczba wyników</td>
            <td>Liczba zwycięstw</td>
          </tr>
        </thead>
        <tbody>
          {users !== [] ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.numberOfResults}</td>
                <td>{user.numberOfWins}</td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersTable;
