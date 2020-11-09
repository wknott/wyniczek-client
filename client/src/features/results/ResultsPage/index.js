import React, { useState } from "react";
import ResultsTableSettingsForm from "./ResultsTableSettingsForm";
import ResultsTable from "./ResultsTable"
import { useSelector } from "react-redux";
import { selectLoading } from "../../games/gamesSlice";
import Header from "../../../common/Header";
const ResultsPage = () => {
  const [selectedGame, setSelectedGame] = useState();
  const [numberOfResults, setNumberOfResults] = useState(15);
  const loading = useSelector(selectLoading);

  return (
    <>
      <Header>
        Historia wyników
      </Header>
      <ResultsTableSettingsForm
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
        numberOfResults={numberOfResults}
        setNumberOfResults={setNumberOfResults}
      />
      {loading || <ResultsTable numberOfResults={numberOfResults} selectedGame={selectedGame} />}
    </>
  )
};

export default ResultsPage;