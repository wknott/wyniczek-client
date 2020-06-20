import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import { getNumberOfResults, compareObjects } from "../logic/utilities";
function UsersTable({ users, results }) {
  const [usersToDisplay, setUsersToDisplay] = useState([]);
  async function addResultsAndWins() {
    try {
      const usersWithNumberOfResults = users.map((user) => {
        const numberOfResults = getNumberOfResults(user, results);

        return {
          ...user,
          numberOfResults: numberOfResults[0],
          numberOfWins: numberOfResults[1],
        };
      });
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
  }, [users, results]);

  return (
    <div>
      <h3 className="centeredHeader">Tabela użytkowników</h3>
      <Table className={"table"} responsive striped bordered hover>
        <thead>
          <tr>
            <th className={"tableHeader"}>#</th>
            <th className={"tableHeader"}>Nazwa</th>
            <th className={"tableHeader"}>Liczba wyników</th>
            <th className={"tableHeader"}>Liczba zwycięstw</th>
          </tr>
        </thead>
        <tbody>
          {usersToDisplay !== [] ? (
            usersToDisplay.map((user, index) => (
              <tr key={index}>
                <th className={"tableHeader"}>{index + 1}</th>
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
