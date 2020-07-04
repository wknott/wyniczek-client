import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import DeleteModal from "./DeleteModal";
import ResultModal from "./ResultModal";
import GameSelect from "./GameSelect";
import { authHeader, getCurrentUserId } from "../helpers/auth-header";
import {
  formatDateStringShort,
  calculateWinners,
  compareObjects,
} from "../logic/utilities.js";
import Form from "react-bootstrap/Form";
function ResultsTable() {
  const [results, setResults] = useState([]);
  const [games, setGames] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [selectedResult, setSelectedResult] = useState({});
  const [selectedGame, setSelectedGame] = useState();
  const [sortFlag, setSortFlag] = useState(true);
  const [numberOfResults, setNumberOfResults] = useState(15);
  async function deleteResult(resultId) {
    try {
      const res = await fetch("/api/results/" + resultId, {
        method: "DELETE",
        headers: authHeader(),
      });
      setShowDeleteModal(false);
      await loadResults();
      return res;
    } catch (err) {
      return err;
    }
  }
  async function loadResults() {
    try {
      const currentUserId = getCurrentUserId()
      const url = `/api/results${currentUserId ? '?users=' + currentUserId : ''}`
      const res = await fetch(url, {
        headers: authHeader(),
      });
      const results = await res.json();
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

  async function loadGames() {
    try {
      const res = await fetch("/api/games", {
        headers: authHeader(),
      });
      const games = await res.json();
      const sortedGames = games.sort(compareObjects("name"));
      setGames(sortedGames);
    } catch (err) {
      return err;
    }
  }

  function selectGame(e) {
    const newSelectedGame = games.find((game) => game._id === e.target.value);
    setSelectedGame(newSelectedGame);
  }

  function handleShowDeleteModal(result) {
    setShowDeleteModal(true);
    setSelectedResult(result);
  }
  function handleShowResultModal(result) {
    setSelectedResult(result);
    setShowResultModal(true);
  }
  function sortDate() {
    const sortedResults = results.sort(
      compareObjects("date", sortFlag ? "asc" : "desc")
    );
    setResults(sortedResults);
    setSortFlag(!sortFlag);
  }
  useEffect(() => {
    loadResults();
    loadGames();
  }, []);
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Kategoria</Form.Label>
          <GameSelect
            selectedGame={selectedGame}
            selectGame={selectGame}
            games={games}
            firstOption={"Wszystkie gry"}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Liczba wyświetlanych wyników</Form.Label>
          <Form.Control
            type="number"
            value={numberOfResults}
            onChange={(e) => setNumberOfResults(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <td>Gra</td>
            <td>1. Gracz</td>
            <td onClick={() => sortDate()}>Data</td>
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
      <DeleteModal
        show={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={deleteResult}
        id={selectedResult._id}
        warningText={"Czy chcesz usunąć ten wynik?"}
      />
    </div>
  );
}

export default ResultsTable;
