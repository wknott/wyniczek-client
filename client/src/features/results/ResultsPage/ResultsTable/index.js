import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ResultModal from "./ResultModal";
import {
  formatDateStringShort,
  calculateWinners,
  compareObjects,
} from "../../../../logic/utilities.js";
import { getAllSortedGames, getResults } from "../../../../proxy/api"

const ResultsTable = ({ selectedGame, numberOfResults }) => {
  const [results, setResults] = useState([]);
  const [showResultModal, setShowResultModal] = useState(false);
  const [selectedResult, setSelectedResult] = useState({});

  async function loadResults() {
    try {
      const results = await getResults();
      const sortedResults = results.sort(compareObjects("date", "desc"));
      const resultsWithWinners = sortedResults.map((result) => ({
        ...result,
        winners: calculateWinners(result),
      }));
      setResults(resultsWithWinners);
    } catch (err) {
      return err;
    }
  }

  function handleShowResultModal(result) {
    setSelectedResult(result);
    setShowResultModal(true);
  }

  useEffect(() => {
    (async () => {
      setGames(await getAllSortedGames());
      loadResults();
    })();
  }, []);
  return (
    <>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <td>Gra</td>
            <td>1. Gracz</td>
            <td>Data</td>
            <td>Zwycięzca</td>
          </tr>
        </thead>
        <tbody>
          {results
            .filter((result) =>
              selectedGame === undefined
                ? 1
                : result.game._id === selectedGame._id
            )
            .slice(0, numberOfResults)
            .map((result, index) => (
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
                {0 ? (
                  <td>
                    <Button
                      size="sm"
                      disabled
                      variant="danger"
                      onClick={() => handleShowDeleteModal(result)}
                    >
                      X
                    </Button>
                  </td>
                ) : (
                    <></>
                  )}
              </tr>
            ))}
        </tbody>
      </Table>
      <ResultModal
        show={showResultModal}
        handleClose={() => setShowResultModal(false)}
        result={selectedResult}
      />
    </>
  );
}

export default ResultsTable;
