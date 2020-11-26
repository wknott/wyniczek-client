import React from "react";
import GameList from "./GameList";
import Search from "../../../common/Search";

const NewGamePage = () => (
  <>
    <Search placeholder="Wpisz nazwę gry…" />
    <GameList />
  </>
);

export default NewGamePage;