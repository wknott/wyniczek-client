import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import Select from "../../../../common/Select";
import Input from "../../../../common/Input";
import { fetchGames, selectGames, selectLoading } from "../../../games/gamesSlice";
import { theme } from "../../../../theme";
import { compareObjects } from "../../../../logic/utilities";
import { Label, LabelText } from "./styled";

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
          <Label>
            <LabelText>
              Gra:
            </LabelText>
            <Select
              value={selectedGame}
              onChange={onChange}
              options={sortedGames}
              firstOption={"Wszystkie gry"}
            />
          </Label>
        </p>
        <p>
          <Label>
            <LabelText>
              Liczba wyników:
            </LabelText>
            <Input
              type="number"
              min={1}
              value={numberOfResults}
              onChange={({ target }) => setNumberOfResults(target.value)}
            />
          </Label>
        </p>
      </form>
  );
};

export default ResultsTableSettingsForm;