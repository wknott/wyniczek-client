import React, { useState, useEffect } from "react";
import { authHeader } from "../helpers/auth-header";
import Table from "react-bootstrap/Table";
import { compareObjects } from "../logic/utilities.js";
export default function LastResultTable() {
  const [games, setGames] = useState([]);

  async function getLastResults() {
    try {
      const res = await fetch("/api/games/last", {
        headers: authHeader(),
      });
      const lastResults = await res.json();
      return lastResults;
    } catch (err) {
      return err;
    }
  }
  function calculateDaysDifference(date) {
    const today = new Date();
    const lastDate = new Date(date);
    const differenceInDays = Math.round(
      (today.getTime() - lastDate.getTime()) / (1000 * 3600 * 24)
    );
    return differenceInDays;
  }
  async function loadGames() {
    try {
      const res = await fetch("/api/games", {
        headers: authHeader(),
      });
      const games = await res.json();
      const lastResults = await getLastResults();
      const gamesWithLastResults = games.map((game) => ({
        ...game,
        lastResultDate:
          lastResults
            .filter((result) => result._id === game._id)
            .map((result) => calculateDaysDifference(result.lastGameDate))[0] ||
          "brak",
      }));
      const sortedGames = gamesWithLastResults.sort(
        compareObjects("lastResultDate")
      );
      console.log(sortedGames);
      setGames(sortedGames);
    } catch (err) {
      return err;
    }
  }

  useEffect(() => {
    loadGames();
  }, []);
  function tableRowClasses(game) {
    const days = game.lastResultDate;
    switch (true) {
      case days < 8:
        return "tableRowGreen";
      case days < 15:
        return "tableRowLightGreen";
      case days < 30:
        return "tableRowYellow";
      case days < 60:
        return "tableRowOrange";
      default:
        return "tableRowRed";
    }
  }
  return (
    <Table className={"table"} responsive>
      <tr>
        <th className={"tableHeader"}>#</th>
        <th className={"tableHeader"}>Nazwa</th>
        <th className={"tableHeader"}>Ostatni wynik</th>
      </tr>
      {games !== [] ? (
        games.map((game, index) => (
          <tr key={index} className={tableRowClasses(game)}>
            <th className={"tableHeader"}>{index + 1}</th>
            <td>{game.name}</td>
            <td>
              {game.lastResultDate}{" "}
              {game.lastResultDate === "brak"
                ? "wyników"
                : game.lastResultDate > 1
                ? "dni temu"
                : "dzień temu"}
            </td>
          </tr>
        ))
      ) : (
        <></>
      )}
    </Table>
  );
}
