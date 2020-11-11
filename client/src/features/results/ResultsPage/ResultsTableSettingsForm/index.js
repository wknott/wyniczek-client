import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import Select from "../../../../common/Select";
import { fetchGames, selectGames, selectLoading } from "../../../games/gamesSlice";
import { theme } from "../../../../theme";
import { compareObjects } from "../../../../logic/utilities";
import { GameQueryParamName, PageQueryParamName, useQueryParameter, useReplaceQueryParameter } from "../../../../queryParameters";

const ResultsTableSettingsForm = () => {
  const games = useSelector(selectGames);
  const loading = useSelector(selectLoading);
  const sortedGames = [...games].sort(compareObjects("name"));
  const selectedGameId = useQueryParameter(GameQueryParamName);
  const replaceQueryParam = useReplaceQueryParameter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const onChange = (selectedGameId) => {
    replaceQueryParam({ key: PageQueryParamName });
    replaceQueryParam(
      {
        key: GameQueryParamName,
        value: selectedGameId,
      }
    );
  };

  return (
    loading ?
      <ReactLoading color={theme.colors.windsor} /> :
      <Select
        value={games.find(game => game._id === selectedGameId)}
        onChange={onChange}
        options={sortedGames}
        firstOption={"Wszystkie gry"}
      />
  );
};

export default ResultsTableSettingsForm;