import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import { useHistory } from "react-router-dom";
import GameSelect from "../Games/GameSelect";
import UserSelect from "../Users/UserSelect";
import addButton from "../../images/add-user-button.png";
import deleteButton from "../../images/delete-user-button.png";
import { getAllSortedGames, getAllSortedUsers } from "../../proxy/api";
import { authHeader } from "../../helpers/auth-header";

function NewResultForm() {
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedGame, setSelectedGame] = useState();
  const [lastUsers, setLastUsers] = useState([]);
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [scores, setScores] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      setGames(await getAllSortedGames());
      setUsers(await getAllSortedUsers());
    })();
  }, []);

  function createScores(numberOfScores, numberOfFields, reversedUsers) {
    const emptyScores = Array.from({ length: numberOfScores }, (x, index) => ({
      user:
        reversedUsers !== undefined
          ? reversedUsers.length > index
            ? reversedUsers[index].id
            : null
          : null,
      points: Array.from({ length: numberOfFields }, () => null),
    }));
    if (reversedUsers === undefined || reversedUsers.length < 2) {
      setScores(scores.concat(emptyScores).slice(0, numberOfScores));
    } else {
      setScores(emptyScores.slice(0, numberOfScores));
    }
  }

  async function getLastResult(gameId) {
    const res = await fetch(`/api/results?gameId=${gameId}&last=true`, {
      headers: authHeader(),
    });
    return res !== null ? await res.json() : null;
  }

  async function selectGame(e) {
    const newSelectedGame = games.find((game) => game._id === e.target.value);
    setSelectedGame(newSelectedGame);
    if (newSelectedGame !== undefined) {
      const lastResult = await getLastResult(newSelectedGame._id);
      if (lastResult !== null) {
        const lastResultUsers = lastResult.scores.map((score) => score.user);
        const reversedUsers = lastResultUsers.slice().reverse();
        setLastUsers(reversedUsers);
        createScores(2, newSelectedGame.pointFields.length, reversedUsers);
      } else {
        createScores(2, newSelectedGame.pointFields.length);
      }
    }
    setNumberOfPlayers(2);
  }

  function onChangePoints(e, index, selectedScore) {
    const newValue = parseInt(e.target.value, 10) || null;
    const newPoints = selectedScore.points.map((s, i) =>
      i === index ? newValue : s
    );
    const newScore = { user: selectedScore.user, points: newPoints };
    const newScores = scores.map((s) => (s === selectedScore ? newScore : s));
    setScores(newScores);
  }

  function onChangeResult(e, selectedScore) {
    const newValue = parseInt(e.target.value, 10) || null;
    const newScore = { user: selectedScore.user, points: [newValue] };
    const newScores = scores.map((s) => (s === selectedScore ? newScore : s));
    setScores(newScores);
  }

  function addPlayer() {
    if (lastUsers.length > numberOfPlayers)
      createScores(numberOfPlayers + 1, selectedGame.pointFields.length, [
        lastUsers[numberOfPlayers],
      ]);
    else createScores(numberOfPlayers + 1, selectedGame.pointFields.length);
    setNumberOfPlayers(numberOfPlayers + 1);
  }
  function deletePlayer() {
    setScores(scores.slice(0, numberOfPlayers - 1));
    setNumberOfPlayers(numberOfPlayers - 1);
  }
  function isValid() {
    const users = scores.map((score) => score.user);
    return (
      users.length > 0 &&
      JSON.stringify(users) === JSON.stringify([...new Set(users)]) &&
      scores.every((score) => score.user) &&
      !scores.every(
        (score) => Object.values(score.points).reduce((x, y) => x + y, 0) === 0
      )
    );
  }
  async function onSubmit(e) {
    e.preventDefault();
    const authToken = authHeader()["Authorization"];
    const newResult = {
      game: selectedGame._id,
      scores: scores,
      author: JSON.parse(localStorage.user).id,
    };
    try {
      const res = await fetch("/api/results", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authToken,
        },
        body: JSON.stringify(newResult),
      });
      const data = await res.json();
      history.push("/");
      return data;
    } catch (err) {
      return err;
    }
  }
  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <Form.Group controlId="formGameSelect">
        <Form.Label>Wybierz grę</Form.Label>
        <GameSelect
          selectedGame={selectedGame}
          selectGame={selectGame}
          games={games}
          firstOption={"Wybierz grę"}
        />
      </Form.Group>
      {selectedGame !== undefined ? (
        <Table responsive>
          <thead>
            <tr>
              <th>
                <Button
                  variant="primary"
                  block
                  onClick={() => addPlayer()}
                  disabled={numberOfPlayers === selectedGame.maxPlayers}
                >
                  <Image src={addButton} width="auto" height="15" alt="" />
                </Button>
              </th>
              {scores.map((score, index) => (
                <th key={index}>
                  <UserSelect
                    index={index}
                    users={users}
                    score={score}
                    scores={scores}
                    setScores={setScores}
                  />
                </th>
              ))}
              <th>
                <Button
                  variant="danger"
                  block
                  onClick={() => deletePlayer()}
                  disabled={numberOfPlayers === selectedGame.minPlayers}
                >
                  <Image src={deleteButton} width="auto" height="15" alt="" />
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedGame.pointFields.map((field, pointFieldIndex) => (
              <tr key={pointFieldIndex}>
                <td>{field}</td>
                {scores.map((score, index) => (
                  <td className="scores-form-group" key={index}>
                    <Form.Group
                      controlId="formScoreInput"
                      className="scores-form-group"
                    >
                      <Form.Control
                        style={{ minWidth: "50px" }}
                        type="number"
                        value={score.points[pointFieldIndex] || ""}
                        onChange={(e) =>
                          onChangePoints(e, pointFieldIndex, score)
                        }
                      />
                    </Form.Group>
                  </td>
                ))}
              </tr>
            ))}
            {selectedGame.pointFields.length === 0 ? (
              <tr>
                <td>Wynik</td>
                {scores.map((score, index) => (
                  <td key={index}>
                    <Form.Group controlId="formScoreInput">
                      <Form.Control
                        style={{ minWidth: "50px" }}
                        type="number"
                        value={score.points[0] || ""}
                        key={index}
                        onChange={(e) => onChangeResult(e, score)}
                      />
                    </Form.Group>
                  </td>
                ))}
              </tr>
            ) : (
                <tr>
                  <td>Wynik</td>
                  {scores.map((score, index) => (
                    <td key={index}>
                      {Object.values(score.points).reduce((x, y) => x + y, 0)}
                    </td>
                  ))}
                </tr>
              )}
          </tbody>
        </Table>
      ) : (
          <></>
        )}
      <Button disabled={!isValid()} variant="primary" type="submit">
        Dodaj wynik
      </Button>
    </Form>
  );
}
export default NewResultForm;
