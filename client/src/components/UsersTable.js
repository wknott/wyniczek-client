import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import { getNumberOfResults, compareObjects } from "../logic/utilities";
function UsersTable({users,results}) {
  const [usersToDisplay, setUsersToDisplay] = useState([]);
  async function addResultsAndWins() {
    try {
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
      setUsersToDisplay(sortedUsers);
    } catch (err) {
      return err;
    }
  }

  useEffect(() => {
    addResultsAndWins();
  }, [users,results]);

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
          {usersToDisplay !== [] ? (
            usersToDisplay.map((user, index) => (
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
