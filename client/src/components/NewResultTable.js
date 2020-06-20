import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import UserSelect from "./UserSelect";
function NewResultTable(props) {
  const { selectedGame } = props;
  const [users, setUsers] = useState([]);
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [scores, setScores] = useState([]);
  function addUser() {
    if (numberOfPlayers + 1 <= selectedGame.maxPlayers) {
      const emptyScore = { user: "", points: [] };
      setScores([...scores, emptyScore]);
      setNumberOfPlayers(numberOfPlayers + 1);
    }
  }
  function deleteUser() {
    if (numberOfPlayers - 1 >= selectedGame.minPlayers) {
      const newScores = scores.slice(0, numberOfPlayers - 1);
      setScores(newScores);
      setNumberOfPlayers(numberOfPlayers - 1);
    }
  }
  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("/api/users");
        const users = await res.json();
        setUsers(users);
      } catch (err) {
        return err;
      }
    }
    async function loadScores() {
      try {
        const emptyScores = Array.from({ length: 2 }, () => ({
          user: null,
          points: [],
        }));
        setScores(emptyScores);
      } catch (err) {
        return err;
      }
    }
    loadScores();
    loadUsers();
  }, []);

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <td>
              <Button variant="primary" onClick={addUser}>
                Dodaj gracza
              </Button>
            </td>
            {scores.map((score, index) => (
              <td key={index}>
                <UserSelect
                  users={users}
                  score={score}
                  scores={scores}
                  setScores={setScores}
                />
              </td>
            ))}
            <td>
              <Button variant="danger" onClick={deleteUser}>
                Usuń gracza
              </Button>
            </td>
          </tr>
        </thead>
        <tbody>
          {selectedGame.pointFields.map((kategory, index) => (
            <tr key={index}>
              <td>{kategory}</td>
              {scores.map((score, index) => (
                <td key={index}>
                  <input type="number" value={score.points[index]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default NewResultTable;
