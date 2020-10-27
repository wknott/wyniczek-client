import React, { useState } from "react";
import Section from "../../../common/Section";
import ResultsTableSettingsForm from "./ResultsTableSettingsForm";
import ResultsTable from "./ResultsTable"
import { useSelector } from "react-redux";
import { selectLoading } from "../../games/gamesSlice";
const ResultsPage = () => {
  const [selectedGame, setSelectedGame] = useState();
  const [numberOfResults, setNumberOfResults] = useState(15);
  const loading = useSelector(selectLoading);

  return (
    <>
      <Section sectionHeader="Historia wyników">
        <p>
          W poniższym formularzu wybierz grę, której wyniki chcesz
          zobaczyć, a następnie podaj liczbę wyników, która ma zostać wyświetlona w tabeli.
          Jeśli chcesz zobaczyć szczegóły danego wyniku, kliknij w odpowiedni wiersz.
        </p>
        <ResultsTableSettingsForm
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
          numberOfResults={numberOfResults}
          setNumberOfResults={setNumberOfResults}
        />
        {loading || <ResultsTable numberOfResults={numberOfResults} selectedGame={selectedGame} />}
      </Section>
    </>
  )
};

export default ResultsPage;