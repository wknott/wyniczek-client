import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import ResultModal from "./ResultModal";
import {
  formatDateStringShort,
  calculateWinners,
} from "../../../../logic/utilities.js";
import { getResults } from "../../../../proxy/api";
import { theme } from "../../../../theme";
import { Table, TableContainer, TableHead, TableRow, TableCell } from "../../../../common/Table";

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
      setLoading(false);
      setResults(results);
    };

    loadResults();
  }, [selectedGame, numberOfResults]);

  return (
    <TableContainer>
      {
        loading ?
          <ReactLoading color={theme.colors.violet} /> :
          <Table>
            <thead>
              <TableRow>
                <TableHead>Gra</TableHead>
                <TableHead>1. Gracz</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Zwycięzca</TableHead>
              </TableRow>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <TableRow key={index} onClick={() => handleShowResultModal(result)}>
                  <TableCell>{result.game.name}</TableCell>
                  <TableCell>
                    {result.scores.find((score, index) => index === 0).user.name}
                  </TableCell>
                  <TableCell>{formatDateStringShort(result.date)}</TableCell>
                  <TableCell>{calculateWinners(result).join(" ")}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>

      }
      <ResultModal
        show={showResultModal}
        handleClose={() => setShowResultModal(false)}
        result={selectedResult}
      />
    </TableContainer >
  );
}

export default ResultsTable;
