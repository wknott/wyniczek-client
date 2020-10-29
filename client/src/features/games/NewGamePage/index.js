import React from "react";
import LinkToWebsite from "../../../common/LinkToWebsite";
import Section from "../../../common/Section";
import GameList from "./GameList";
import GamesSearch from "./GamesSearch";

const NewGamePage = () => (
  <Section sectionHeader="Nowa gra">
    <p>
      Wpisz w wyszukiwarkę nazwę gry, którą chcesz dodać do swojej listy.
      Aby zobaczyć szczegóły gry, kliknij w element listy.
      Wyszukiwanie gier z bazy danych{" "}
      <LinkToWebsite
        target="_blank"
        rel="noopener noreferrer"
        href="https://boardgamegeek.com/"
      >
        BGG
      </LinkToWebsite>.
    </p>
    <GamesSearch />
    <GameList />
  </Section >
);

export default NewGamePage;