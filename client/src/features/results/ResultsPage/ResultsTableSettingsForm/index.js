import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import Select from "../../../../common/Select";
import { fetchGames, selectGames, selectLoading } from "../../../games/gamesSlice";
import { theme } from "../../../../theme";
import { compareObjects } from "../../../../logic/utilities";
import Label from "../../../../common/Label";

const ResultsTableSettingsForm = ({
  selectedGame,
  setSelectedGame,
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
      <ReactLoading color={theme.colors.windsor} /> :
      <form>
        <p>
          <Label labelText="Gra">
            <Select
              value={selectedGame}
              onChange={onChange}
              options={sortedGames}
              firstOption={"Wszystkie gry"}
            />
          </Label>
        </p>
      </form>
  );
};

export default ResultsTableSettingsForm;