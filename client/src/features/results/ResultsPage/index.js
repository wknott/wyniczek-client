import React from "react";
import GameSelect from "../../games/GameSelect";
import ResultsTable from "./ResultsTable"
import Header from "../../../common/Header";

const ResultsPage = () => (
  <>
    <Header>
      Historia wyników
    </Header>
    <GameSelect />
    <ResultsTable />
  </>
)

export default ResultsPage;