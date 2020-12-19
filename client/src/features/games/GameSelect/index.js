import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../../../common/Select";
import { fetchGames, selectGames, selectLoading } from "../gamesSlice";
import { compareObjects } from "../../../logic/utilities";
import { GameQueryParamName, PageQueryParamName, useQueryParameter, useReplaceQueryParameter } from "../../../common/queryParameters";
import Loading from "../../../common/Loading";

const SelectGame = ({ firstOption }) => {
  const games = useSelector(selectGames);
  const loading = useSelector(selectLoading);
  const sortedGames = [...games].sort(compareObjects("numberOfResults", "desc"));
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
      <Loading size={38} /> :
      <Select
        value={games.find(game => game._id === selectedGameId)}
        onChange={onChange}
        options={sortedGames}
        firstOption={firstOption}
      />
  );
};

export default SelectGame;