import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { compareObjects } from "../../logic/utilities.js";
import { getAllSortedGames, getLastResults } from "../../proxy/api";
export default function GameLastResultTable() {
  const [games, setGames] = useState([]);

  function calculateDaysDifference(date) {
    const today = new Date();
    const lastDate = new Date(date);
    const differenceInDays = Math.round(
      (today.getTime() - lastDate.getTime()) / (1000 * 3600 * 24)
    );

    return differenceInDays === 0 ? 0.5 : differenceInDays;
  }

  useEffect(() => {
    const loadGames = async () => {
      const games = await getAllSortedGames();
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
      setGames(sortedGames);
    }

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
    <div className="tableContainer">
      <Table className={"table"} responsive>
        <thead>
          <tr>
            <th className={"tableHeader"}>#</th>
            <th className={"tableHeader"}>Nazwa</th>
            <th className={"tableHeader"}>Ostatni wynik</th>
          </tr>
        </thead>
        <tbody>
          {games !== [] ? (
            games.map((game, index) => (
              <tr key={index} className={tableRowClasses(game)}>
                <th className={"tableHeader"}>{index + 1}</th>
                <td>{game.name}</td>
                <td>
                  {game.lastResultDate === 0.5
                    ? "dzisiaj"
                    : game.lastResultDate}{" "}
                  {game.lastResultDate === "brak"
                    ? "wyników"
                    : game.lastResultDate > 1
                      ? "dni temu"
                      : game.lastResultDate === 0.5
                        ? ""
                        : "dzień temu"}
                </td>
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
