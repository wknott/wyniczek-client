import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../../../../common/Select";
import { fetchGames, selectGames, selectLoading } from "../../../games/gamesSlice";

const ResultsTableSettingsForm = () => {
  const [selectedGame, setSelectedGame] = useState();
  const games = useSelector(selectGames);
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  const onChange = (selectedGameId) => {
    setSelectedGame(games.find((game) => game._id === selectedGameId));
  };

  return (
    <form>
      <label>Wybierz grę</label>
      {
        loading ?
          "ładowanie" :
          <Select
            value={selectedGame}
            onChange={onChange}
            options={games}
            firstOption={"Wszystkie gry"}
          />
      }
    </form>
  );
};

export default ResultsTableSettingsForm;