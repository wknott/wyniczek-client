import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import Select from "../../../../common/Select";
import Input from "../../../../common/Input";
import { fetchGames, selectGames, selectLoading } from "../../../games/gamesSlice";
import { theme } from "../../../../theme";
import { compareObjects } from "../../../../logic/utilities";

const ResultsTableSettingsForm = ({
  selectedGame,
  setSelectedGame,
  numberOfResults,
  setNumberOfResults
}) => {
  const games = useSelector(selectGames);
  const loading = useSelector(selectLoading);
  const sortedGames = [...games].sort(compareObjects("name"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const onChange = (selectedGameId) => {
    setSelectedGame(games.find((game) => game._id === selectedGameId));
  };

  return (
    loading ?
      <ReactLoading color={theme.colors.violet} /> :
      <form>
        <p>
          <label>
            Gra:
            <Select
              value={selectedGame}
              onChange={onChange}
              options={sortedGames}
              firstOption={"Wszystkie gry"}
            />
          </label>
        </p>
        <p>
          <label>
            Liczba wyników:
            <Input
              type="number"
              value={numberOfResults}
              onChange={({ target }) => setNumberOfResults(target.value)}
            />
          </label>
        </p>
      </form>
  );
};

export default ResultsTableSettingsForm;