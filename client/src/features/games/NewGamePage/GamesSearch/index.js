import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../../common/Input";
import Label from "../../../../common/Label";
import { fetchGamesByQuery, selectQuery, setQuery } from "../../gamesSlice";

const GamesSearch = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  useEffect(() => {
    if (query.length > 2) {
      dispatch(fetchGamesByQuery(query))
    }
  }, [dispatch, query])

  return (
    <Label labelText="Nazwa gry">
      <Input
        value={query}
        onChange={({ target }) => dispatch(setQuery(target.value))}
        placeholder="Wpisz nazwę gry"
      />
    </Label>
  )
}

export default GamesSearch;