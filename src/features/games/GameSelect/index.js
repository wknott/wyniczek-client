import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { fetchGames, selectGames, selectLoading } from "../gamesSlice";
import { compareObjects } from "../../../logic/utilities";
import {
  GameQueryParamName,
  PageQueryParamName,
  useQueryParameter,
  useReplaceQueryParameter
} from "../../../common/queryParameters";
import Loading from "../../../common/Loading";
import { StyledTextField } from "./styled";

const SelectGame = ({ firstOption }) => {
  const games = useSelector(selectGames);
  const loading = useSelector(selectLoading);
  const sortedGames = [...games].sort(compareObjects("numberOfResults", "desc"));
  const selectedGameId = useQueryParameter(GameQueryParamName);
  const replaceQueryParam = useReplaceQueryParameter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames({ withoutStats: true }));
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
      <Loading /> :
      <Autocomplete
        options={sortedGames}
        getOptionLabel={(option) => option.name}
        value={games.find(game => game._id === selectedGameId) || null}
        onChange={(event, newValue) => {
          onChange(newValue?._id);
        }}
        renderInput={(params) =>
          <StyledTextField
            {...params}
            label={firstOption}
            variant="filled"
          />
        }
      />
  );
};

export default SelectGame;