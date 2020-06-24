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
      console.log(
        [["Task", "Hours per Day"]].concat(
          sortedUsers.map((user) => [user.name, user.numberOfWins])
        )
      );
      console.log([
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ]);
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
      width={"300px"}
      height={"300px"}
      chartType="PieChart"
      loader={<div>Wczytywanie wykresu</div>}
      data={[["Nazwa", "Liczba wygranych"]].concat(
        usersToDisplay
          .filter((user) => user.numberofWins !== 0)
          .map((user) => [user.name, user.numberOfWins])
      )}
      options={{
        title: "My Daily Activities",
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
}
