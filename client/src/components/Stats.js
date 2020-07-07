import React, { useState, useEffect } from "react";
import GameSelect from "./GameSelect";
import { getNumberOfGameResults } from "../logic/utilities";
import { authHeader, getCurrentUserId } from "../helpers/auth-header";
import { getAllSortedGames, getAllSortedUsers } from "../proxy/api";
import UsersTable from "./UsersTable";
import GameWinnersPieChart from "./GameWinnersPieChart";

export default function Stats() {
  const [selectedGame, setSelectedGame] = useState();
  const [games, setGames] = useState([]);
  const [results, setResults] = useState([]);
  const [users, setUsers] = useState([]);

  async function loadResults() {
    try {
      const currentUserId = getCurrentUserId()
      const url = `/api/results${currentUserId ? '?users=' + currentUserId : ''}`
      const res = await fetch(url, {
        headers: authHeader(),
      });
      const results = await res.json();
      setResults(results);
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
    (async () => {
      setGames(await getAllSortedGames());
      loadResults();
      setUsers(await getAllSortedUsers());
    })();
  }, []);
  return (
    <div>
      <h3>Statystyki</h3>
      <GameSelect
        selectedGame={selectedGame}
        selectGame={selectGame}
        games={games.filter(game => getNumberOfGameResults(
          game,
          results
        ))}
        firstOption={"Wybierz grę"}
      />
      {selectedGame !== undefined && selectGame !== "" ? (
        <div>
          <h4>{selectedGame.name}</h4>
          <p>Liczba gier: {selectedGame.numberOfResults}</p>
          <GameWinnersPieChart
            users={users}
            results={results.filter(
              (result) => result.game.name === selectedGame.name
            )}
          />
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
