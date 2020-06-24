import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { getNumberOfResults, compareObjects } from "../logic/utilities";

export default function GameWinnersPieChart({ results, users }) {
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
    <Chart
      maxWidth={"500px"}
      height={"300px"}
      chartType="PieChart"
      loader={<div>Wczytywanie wykresu</div>}
      data={[["Nazwa", "Liczba wygranych"]].concat(
        usersToDisplay
          .filter((user) => user.numberofWins !== 0)
          .map((user) => [user.name, user.numberOfWins])
      )}
      options={{
        title: "Procent wygranych gier",
        is3D: true,
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
}
