import React, { useState, useEffect } from "react";
import GameSelect from "./GameSelect";
import { authHeader } from "../helpers/auth-header";
export default function Stats() {
  const [selectedGame, setSelectedGame] = useState();
  const [games, setGames] = useState([]);
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
  function selectGame(e) {
    const newSelectedGame = games.find((game) => game._id === e.target.value);
    setSelectedGame(newSelectedGame);
  }
  useEffect(() => {
    loadGames();
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
    </div>
  );
}
