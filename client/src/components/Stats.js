import React, { useState, useEffect } from "react";
import GameSelect from "./GameSelect";
import { authHeader } from "../helpers/auth-header";
import { getNumberOfGameResults } from "../logic/utilities";
import UsersTable from "./UsersTable";

export default function Stats() {
  const [selectedGame, setSelectedGame] = useState();
  const [games, setGames] = useState([]);
  const [results, setResults] = useState([]);
  const [users, setUsers] = useState([]);
  async function loadGames() {
    try {
      const res = await fetch("/api/games", {
        headers: authHeader(),
      });
      const games = await res.json();
      setGames(games);
    } catch (err) {
      return err;
    }
  }
  async function loadResults() {
    try {
      const res = await fetch("/api/results", {
        headers: authHeader(),
      });
      const results = await res.json();
      setResults(results);
    } catch (err) {
      return err;
    }
  }
  async function loadUsers() {
    try {
      const res = await fetch("/api/users", {
        headers: authHeader(),
      });
      const users = await res.json();
      setUsers(users);
    } catch (err) {
      return err;
    }
  }
  function selectGame(e) {
    if (e.target.value) {
      const newSelectedGame = games.find((game) => game._id === e.target.value);
      const numberOfGameResults = getNumberOfGameResults(
        newSelectedGame,
        results
      );
      setSelectedGame({
        ...newSelectedGame,
        numberOfResults: numberOfGameResults,
      });
    }
  }
  useEffect(() => {
    loadGames();
    loadResults();
    loadUsers();
  }, []);
  return (
    <div>
      <h3>Statystyki</h3>
      <GameSelect
        selectedGame={selectedGame}
        selectGame={selectGame}
        games={games}
        firstOption={"Wybierz grę"}
      />
      {selectedGame !== undefined && selectGame !== "" ? (
        <div>
          <h4>{selectedGame.name}</h4>
          <p>Liczba gier: {selectedGame.numberOfResults}</p>
          <UsersTable
            users={users}
            results={results.filter(
              (result) => result.game.name === selectedGame.name
            )}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
