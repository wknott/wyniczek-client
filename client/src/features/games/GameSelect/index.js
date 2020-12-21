import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
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
import { theme } from "../../../theme";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: theme.colors.windsor,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.colors.windsor,
      },
    },
  },
})(TextField);

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
      <Loading /> :
      <Autocomplete
        options={sortedGames}
        getOptionLabel={(option) => option.name}
        value={games.find(game => game._id === selectedGameId)}
        onChange={(event, newValue) => {
          onChange(newValue?._id);
        }}
        renderInput={(params) =>
          <CssTextField
            {...params}
            label={firstOption}
            variant="outlined"
          />
        }
      />
  );
};

export default SelectGame;