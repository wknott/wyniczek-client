import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesByQuery, selectQuery, setQuery } from "../../gamesSlice";
import { Icon, Label, Input } from "./styled";
import search from "../../../../images/search.svg";

const GamesSearch = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  useEffect(() => {
    if (query.length > 2) {
      dispatch(fetchGamesByQuery(query))
    }
  }, [dispatch, query])

  return (
    <Label>
      <Icon src={search} alt="" />
      <Input
        value={query}
        onChange={({ target }) => dispatch(setQuery(target.value))}
        placeholder="Wpisz nazwę gry..."
      />
    </Label>
  )
}

export default GamesSearch;