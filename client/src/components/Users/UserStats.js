import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { getResults, getUser } from "../../proxy/api";
import { getCurrentUserId } from "../../helpers/auth-header";
import { getNumberOfResults } from "../../logic/utilities"
import Chart from "react-google-charts";

const UserStats = () => {
  const [results, setResults] = useState([]);
  const [plotData, setPlotData] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [numberOfGame, setNumberOfGame] = useState(0);
  const getResultsOfGame = (gameId, results, userId) => {
    const filteredResults = results.filter(result => result.game._id === gameId).map(({ date, scores }) => ({
      date,
      score: scores.filter(score => score.user.id === userId)[0].points.reduce((a, b) => a + b, 0),
    }));
    return filteredResults;
  }

  const getGameIds = (results) => {
    const gameIds = results.map(({ game }) => game);
    const unique = [...new Set(gameIds)];
    return unique;
  }

  useEffect(() => {
    const loadUsersAndResults = async () => {
      const user = await getUser(getCurrentUserId());
      const results = await getResults();
      setResults(results);
      const numberOfResults = await getNumberOfResults(user, results);
      const games = getGameIds(results);
      setGames(games);
      setPlotData(getResultsOfGame(games[numberOfGame]._id, results, getCurrentUserId()));
      setUser({
        ...user,
        numberOfResults: numberOfResults[0],
        numberOfWins: numberOfResults[1],
      });
    }

    (async () => {
      await loadUsersAndResults();
      setLoading(false);
    })();
  }, [numberOfGame]);

  return (
    <div>
      {loading ? <div>< Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="primary" /> </div>
        :
        <div>
          <p>Twój nick: {user.name}</p>
          <p>Liczba wyników: {user.numberOfResults}</p>
          <p>Liczba zwycięstw: {user.numberOfWins}</p>
          <p>Nazwa gry: {games[numberOfGame].name}</p>
          <select onChange={(e) => {
            setNumberOfGame(e.target.value);
            setPlotData(getResultsOfGame(games[e.target.value]._id, results, getCurrentUserId()));
          }} value={numberOfGame}>
            {games.map((game, index) => <option value={index} key={index}>{game.name}</option>)}
          </select>
          <Chart
            width={'600px'}
            height={'400px'}
            chartType="LineChart"
            loader={<Spinner animation="grow" variant="primary" />}
            data={
              [["index", "punkty"]].concat(plotData.map((result, index) => [index + 1, result.score]))
            }
            options={{
              hAxis: {
                title: 'Indeks wyniku',
              },
              vAxis: {
                title: 'Liczba punktów',
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>
      }
    </div>
  )
}
export default UserStats;