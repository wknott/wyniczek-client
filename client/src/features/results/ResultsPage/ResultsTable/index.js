import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ReactLoading from "react-loading";
import ResultModal from "./ResultModal";
import {
  formatDateStringShort,
  calculateWinners,
} from "../../../../logic/utilities.js";
import { getResults } from "../../../../proxy/api";
import { theme } from "../../../../theme";

const ResultsTable = ({ selectedGame, numberOfResults }) => {
  const [results, setResults] = useState([]);
  const [showResultModal, setShowResultModal] = useState(false);
  const [selectedResult, setSelectedResult] = useState({});
  const [loading, setLoading] = useState(false);

  const handleShowResultModal = (result) => {
    setSelectedResult(result);
    setShowResultModal(true);
  };

  useEffect(() => {
    const loadResults = async () => {
      setLoading(true);
      const results = await getResults(numberOfResults, selectedGame);
      const resultsWithWinners = results.map((result) => ({
        ...result,
        winners: calculateWinners(result),
      }));
      setLoading(false);
      setResults(resultsWithWinners);
    };

    loadResults();

  }, [selectedGame, numberOfResults]);

  return (
    loading ?
      <ReactLoading color={theme.colors.violet} /> :
      <>
        < Table responsive striped bordered hover >
          <thead>
            <tr>
              <td>Gra</td>
              <td>1. Gracz</td>
              <td>Data</td>
              <td>Zwycięzca</td>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} onClick={() => handleShowResultModal(result)}>
                <td className="hidden-lg">
                  {result.game.name.length > 10
                    ? result.game.name.substring(0, 9) + "..."
                    : result.game.name}
                </td>
                <td className="hidden-sm">{result.game.name}</td>
                <td>
                  {result.scores.find((score, index) => index === 0).user.name}
                </td>
                <td>{formatDateStringShort(result.date)}</td>
                <td>{result.winners.map((winner) => winner + " ")}</td>
              </tr>
            ))}
          </tbody>
        </Table >
        <ResultModal
          show={showResultModal}
          handleClose={() => setShowResultModal(false)}
          result={selectedResult}
        />
      </>
  );
}

export default ResultsTable;
