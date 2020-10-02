import React from "react";
import Section from "../../../common/Section";
import ResultsTableSettingsForm from "./ResultsTableSettingsForm";

const ResultsPage = () => (
  <>
    <Section sectionHeader="Historia wyników">
      <p>
        W poniższym formularzu wybierz grę, której wyniki chcesz
        zobaczyć oraz liczbę wyników, która ma zostać wyświetlona w tabeli.
      </p>
      <ResultsTableSettingsForm />
    </Section>
  </>
);

export default ResultsPage;