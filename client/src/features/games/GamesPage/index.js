import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { compareObjects } from "../../../logic/utilities";
import { fetchGames, selectGames, selectLoading } from "../gamesSlice";
import GameTile from "../GameTile";
import {
  GamePageHeader,
  GameTilesContainer,
  SortButton,
  SortButtons,
  StyledLink
} from "./styled";
import Header from "../../../common/Header";
import { toNewGameSearch } from "../../../common/routes";
import { selectAuth } from "../../../common/authSlice";
import Search from "../../../common/Search";
import { useQueryParameter } from "../../../common/queryParameters";
import Loading from "../../../common/Loading";

function GamesPage() {
  const [sortOption, setSortOption] = useState("numberOfResults");
  const [sortDirection, setSortDirection] = useState("desc");
  const { isAuthenticated } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const games = useSelector(selectGames);
  const loading = useSelector(selectLoading);
  const query = useQueryParameter("query")?.toUpperCase();
  const filteredGames = [...games].filter(game => query ? game.name.toUpperCase().includes(query) : 1);
  const sortedGames = [...filteredGames].sort(compareObjects(sortOption, sortDirection));
  const sortOptions = [
    { id: "name", label: "Nazwa", },
    { id: "lastResultDate", label: "Ostatni wynik", },
    { id: "numberOfResults", label: "Liczba wyników", },
  ];

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const handleSort = (id) => {
    setSortOption(id);
    if (sortOption === id) {
      setSortDirection((sortDirection) === "desc" ? "asc" : "desc");
    }
  }

  return loading ?
    (
      <Loading message="Trwa ładowanie danych, proszę czekać…" />
    ) :
    (
      <>
        <GamePageHeader>
          <Header>Lista gier</Header>
          {isAuthenticated &&
            <StyledLink to={toNewGameSearch()}>Dodaj nową grę</StyledLink>
          }
        </GamePageHeader>
        <Search placeholder="Wpisz nazwę gry…" />
        <SortButtons>
          {sortOptions.map(option =>
            <SortButton
              active={option.id.localeCompare(sortOption)}
              key={option.id}
              onClick={() => handleSort(option.id)}
            >
              {option.label}
            </SortButton>
          )}
        </SortButtons>
        <GameTilesContainer numberOfTiles={sortedGames.length}>
          {sortedGames?.map((game, index) =>
            <GameTile key={index} game={game} />
          )}
        </GameTilesContainer>
      </>
    );
}

export default GamesPage;