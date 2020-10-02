import React, { useState } from "react";
import Section from "../../../common/Section";
import ResultsTableSettingsForm from "./ResultsTableSettingsForm";

const ResultsPage = () => {
  const [selectedGame, setSelectedGame] = useState();
  const [numberOfResults, setNumberOfResults] = useState(15);

  return (
    <>
      <Section sectionHeader="Historia wyników">
        <p>
          W poniższym formularzu wybierz grę, której wyniki chcesz
          zobaczyć oraz podaj liczbę wyników, która ma zostać wyświetlona w tabeli.
        </p>
        <ResultsTableSettingsForm
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
          numberOfResults={numberOfResults}
          setNumberOfResults={setNumberOfResults}
        />
      </Section>
    </>
  )
};

export default ResultsPage;