import React from "react";
import ResultsTableSettingsForm from "./ResultsTableSettingsForm";
import ResultsTable from "./ResultsTable"
import Header from "../../../common/Header";

const ResultsPage = () => (
  <>
    <Header>
      Historia wyników
    </Header>
    <ResultsTableSettingsForm />
    <ResultsTable />
  </>
)

export default ResultsPage;