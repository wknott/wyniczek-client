import React from "react";
import { Icon, Label, Input } from "./styled";
import search from "./search.svg";
import { useQueryParameter, useReplaceQueryParameter, } from "../queryParameters";

const Search = () => {
  const replaceQueryParam = useReplaceQueryParameter();
  const query = useQueryParameter("query") || "";

  const onChange = ({ target }) => {
    replaceQueryParam({ key: "query", value: target.value });
  }

  return (
    <Label>
      <Icon src={search} alt="" />
      <Input
        value={query}
        onChange={onChange}
        placeholder="Wpisz nazwę gry..."
      />
    </Label>
  )
}

export default Search;